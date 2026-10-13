
import dbConnect from '@/lib/mongodb';
import Testimonial from '@/models/Testimonial';

const defaultReviews = [
  {
    name: 'Ramandeep Kaur',
    reviewText:
      'I appreciate the learning experience and support provided by Universal Institute. The practical teaching approach has helped me improve my technical knowledge, confidence, and skills. The supportive environment makes learning meaningful and career-oriented.',
    course: 'Technical & Practical Training',
  },
  {
    name: 'Manpreet Kaur',
    reviewText:
      'I am currently learning Full Stack Development with AI at Universal Institute. The trainer explains concepts clearly and focuses on practical learning. Working on real-world projects is helping me strengthen my programming skills.',
    course: 'Full Stack Development with AI',
  },
  {
    name: 'Gurkirat Singh',
    reviewText:
      'My experience at Universal Institute has been great. The Data Analytics course is helping me develop practical data analysis skills and understand real-world applications. The trainer explains concepts clearly and provides helpful guidance.',
    course: 'Data Analytics',
  },
];

async function getApprovedTestimonials() {
  try {
    await dbConnect();

    const list = await Testimonial.find({
      status: 'approved',
    }).lean();

    if (list && list.length > 0) {
      return JSON.parse(JSON.stringify(list));
    }
  } catch (error) {
    console.error('Unable to fetch testimonials:', error.message);
  }

  return defaultReviews;
}

export default async function StudentTestimonialsSection() {
  const testimonials = await getApprovedTestimonials();

  // Always show these three students in the desired order.
  const reviews = defaultReviews.map((fallback) => {
    const existing = testimonials.find(
      (item) =>
        item.name?.trim().toLowerCase() ===
        fallback.name.toLowerCase()
    );

    return existing
      ? {
          ...fallback,
          ...existing,
          name: fallback.name,
          course: existing.course || fallback.course,
          reviewText: existing.reviewText || fallback.reviewText,
        }
      : fallback;
  });

  const initials = (name) =>
    name
      .split(' ')
      .map((part) => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-cyan-100 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-cyan-800">
            Student Feedback
          </span>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What Our Students Say
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
            Discover the learning experiences of our students
            at Universal Institute.
          </p>
        </div>

        {/* Exactly three review cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md sm:p-7"
            >
              {/* Quote icon */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-3xl font-bold leading-none text-cyan-700">
                “
              </div>

              {/* Review text */}
              <p className="flex-1 text-sm leading-7 text-slate-600">
                {review.reviewText}
              </p>

              {/* Course label */}
              <div className="mt-6">
                <span className="inline-block rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700">
                  {review.course}
                </span>
              </div>

              {/* Student details */}
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-sm font-semibold text-white">
                  {initials(review.name)}
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {review.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    Universal Institute
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
