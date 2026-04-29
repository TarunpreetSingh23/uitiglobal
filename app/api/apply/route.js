import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Application from '@/models/Application';
import nodemailer from 'nodemailer';


export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, phone, courseId, courseName } = data;

    // Validate inputs
    if (!name || !email || !phone || !courseId || !courseName) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectMongo();

    // Save to database
    const newApplication = await Application.create({
      name,
      email,
      phone,
      courseId,
      courseName,
    });

    // Configure Nodemailer
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'tarunpreets29@gmail.com',
        subject: `New Application: ${courseName} - ${name}`,
        html: `
          <h3>New Course Application Received</h3>
          <p><strong>Course:</strong> ${courseName}</p>
          <hr/>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Application Date:</strong> ${new Date().toLocaleString()}</p>
        `,
      };

      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Email Error:', emailError);
      // We do not fail the whole request if only the email fails, but it's noted.
    }



    return NextResponse.json(
      { success: true, message: 'Application submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Application Form Error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred while submitting the application' },
      { status: 500 }
    );
  }
}
