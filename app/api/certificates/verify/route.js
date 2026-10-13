import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Certificate from '@/models/Certificate';

// Simple in-memory rate limiting map for verification requests
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 30;

function checkRateLimit(ip) {
  const now = Date.now();
  const clientData = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > clientData.resetTime) {
    clientData.count = 1;
    clientData.resetTime = now + RATE_LIMIT_WINDOW_MS;
    rateLimitMap.set(ip, clientData);
    return true;
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  clientData.count += 1;
  rateLimitMap.set(ip, clientData);
  return true;
}

export async function POST(request) {
  try {
    // Check rate limit
    const ip = request.headers.get('x-forwarded-for') || 'default-client';
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a minute before trying again.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const rawId = body?.certificateId;

    if (!rawId || typeof rawId !== 'string') {
      return NextResponse.json(
        { error: 'Please enter a valid certificate ID.' },
        { status: 400 }
      );
    }

    // Sanitize and normalize certificate ID
    const sanitizedId = rawId.trim().toUpperCase().replace(/[^A-Z0-9\-_]/g, '');

    if (sanitizedId.length < 3 || sanitizedId.length > 30) {
      return NextResponse.json(
        { error: 'Invalid Certificate ID format. Please check and try again.' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Query certificate
    const cert = await Certificate.findOne({ certificateId: sanitizedId }).lean();

    if (!cert) {
      return NextResponse.json(
        {
          verified: false,
          message: `No certificate found matching ID "${sanitizedId}". Please check the ID or contact the institute.`,
        },
        { status: 404 }
      );
    }

    if (cert.status !== 'Valid') {
      return NextResponse.json({
        verified: false,
        status: cert.status,
        message: `This certificate record has status: ${cert.status}. Please contact the institute office for verification details.`,
        certificate: {
          certificateId: cert.certificateId,
          status: cert.status,
        },
      });
    }

    // Return ONLY approved public non-sensitive fields
    return NextResponse.json({
      verified: true,
      message: 'Certificate successfully verified and found in official records.',
      certificate: {
        certificateId: cert.certificateId,
        recipientName: cert.recipientName,
        courseName: cert.courseName,
        issueDate: cert.issueDate,
        duration: cert.duration || 'Full Course Duration',
        credentialType: cert.credentialType || 'Industrial Training Certification',
        grade: cert.grade || null,
        status: cert.status,
        institution: 'Universal Institute, Amritsar',
        management: 'Managed by Aagaz Society',
        accreditation: 'ISO 9001:2015 Certified',
      },
    });
  } catch (error) {
    console.error('Certificate verification error:', error);
    return NextResponse.json(
      { error: 'Unable to verify certificate at this time. Please try again shortly.' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Certificate ID parameter required' }, { status: 400 });
  }

  // Forward to POST logic
  return POST(new Request(request.url, {
    method: 'POST',
    headers: request.headers,
    body: JSON.stringify({ certificateId: id }),
  }));
}
