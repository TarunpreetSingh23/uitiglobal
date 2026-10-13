import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';

// Authentic supplied fallback testimonials
export const fallbackTestimonials = [
  {
    _id: 't-1',
    name: 'Ramandeep Kaur',
    reviewText:
      'I would like to sincerely appreciate the learning experience and support provided by Uni Institute. The guidance, teaching approach, and overall environment have helped me improve not only my technical knowledge but also my confidence and practical skills.\n\nWhat I particularly value is the institute’s focus on making learning practical, understandable, and career-oriented. The continuous support and willingness to help students make the experience even more meaningful.\n\nI believe Uni Institute has a strong commitment to student growth, and with continued innovation and student feedback, it can achieve even greater excellence.\n\nThank you for creating an environment where learning feels purposeful and progress feels achievable. Keep inspiring and empowering students!',
    course: 'Technical & Practical Training Program',
    status: 'approved',
  },
  {
    _id: 't-2',
    name: 'Manpreet Kaur',
    reviewText:
      'I am currently doing my Full Stack Development with AI course at Universal Institute. The learning experience has been really good. The trainer is knowledgeable, supportive and focuses on practical learning. The course is helping me build my programming concepts and work on real-world projects. Overall, I am satisfied with my experience and would recommend the institute to students interested in web development.',
    course: 'Full Stack Development with AI',
    status: 'approved',
  },
];

export async function GET() {
  try {
    await dbConnect();
    const dbTestimonials = await Testimonial.find({ status: 'approved' }).sort({ createdAt: -1 }).lean();

    if (dbTestimonials && dbTestimonials.length > 0) {
      return NextResponse.json(JSON.parse(JSON.stringify(dbTestimonials)));
    }
  } catch (error) {
    console.warn('Could not read testimonials from MongoDB, using fallback:', error.message);
  }

  return NextResponse.json(fallbackTestimonials);
}
