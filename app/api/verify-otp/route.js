import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import Otp from '@/models/Otp';

export async function POST(request) {
  try {
    const { email, otp } = await request.json();

    if (!email || !otp) {
      return NextResponse.json({ success: false, message: 'Email and OTP are required' }, { status: 400 });
    }

    await connectMongo();

    const otpRecord = await Otp.findOne({ email });

    if (!otpRecord) {
      return NextResponse.json({ success: false, message: 'OTP expired or not found' }, { status: 400 });
    }

    if (otpRecord.otp === otp) {
      // OTP is valid, delete it so it can't be used again
      await Otp.deleteOne({ _id: otpRecord._id });
      return NextResponse.json({ success: true, message: 'OTP verified successfully' });
    } else {
      return NextResponse.json({ success: false, message: 'Invalid OTP' }, { status: 400 });
    }
  } catch (error) {
    console.error('Verify OTP Error:', error);
    return NextResponse.json({ success: false, message: 'Verification failed' }, { status: 500 });
  }
}
