import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Subscriber from '@/models/Subscriber';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: 'Please enter a valid email address.' }, { status: 400 });
    }

    await dbConnect();

    // Check for duplicate
    const existing = await Subscriber.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json({ message: 'You are already subscribed!' }, { status: 409 });
    }

    // Save to MongoDB
    await Subscriber.create({ email: email.toLowerCase() });

    // Send welcome email to subscriber
    await transporter.sendMail({
      from: `"ITI Global" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🎓 Welcome to ITI Global Newsletter!',
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f7f9fb; padding: 32px; border-radius: 16px;">
          <div style="background: #131b2e; padding: 32px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
            <div style="width: 48px; height: 48px; background: #0891b2; border-radius: 10px; display: inline-flex; align-items: center; justify-content: center; margin-bottom: 16px;">
              <span style="color: white; font-weight: 900; font-size: 20px;">I</span>
            </div>
            <h1 style="color: white; font-size: 26px; margin: 0 0 8px; font-weight: 700;">Welcome to ITI Global!</h1>
            <p style="color: rgba(255,255,255,0.6); margin: 0; font-size: 15px;">You're officially on the list 🎉</p>
          </div>

          <div style="background: white; padding: 28px; border-radius: 12px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
            <h2 style="color: #131b2e; font-size: 18px; margin: 0 0 12px; font-weight: 600;">What to expect:</h2>
            <ul style="color: #505f76; font-size: 14px; line-height: 1.9; margin: 0; padding-left: 18px;">
              <li>📅 Upcoming course intake dates & deadlines</li>
              <li>🏆 Scholarship & financial aid opportunities</li>
              <li>💡 Latest tech insights and industry trends</li>
              <li>🎁 Exclusive early-bird offers for subscribers</li>
            </ul>
          </div>

          <div style="text-align: center; margin-bottom: 24px;">
            <a href="https://iti-global.com/courses" style="background: #0891b2; color: white; padding: 14px 32px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 15px; display: inline-block;">
              Browse Our Courses →
            </a>
          </div>

          <p style="color: #94a3b8; font-size: 12px; text-align: center; margin: 0;">
            You subscribed with ${email}. If this was a mistake, simply ignore this email.
          </p>
        </div>
      `,
    });

    // Notify admin
    await transporter.sendMail({
      from: `"ITI Global" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📧 New Newsletter Subscriber: ${email}`,
      text: `New subscriber: ${email}\nTime: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`,
    });

    return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Newsletter error:', error);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
