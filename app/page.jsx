import Link from 'next/link';
import Image from 'next/image';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import CourseCard from './components/CourseCard';
import HeroCarousel from './components/HeroCarousel';

export const metadata = {
  title: 'ITI Global — Advancing the Future of IT',
  description: 'Empowering the next generation of technology leaders through world-class training, industrial partnerships, and innovative computing research.',
};

async function getCourses() {
  try {
    await dbConnect();
    const courses = await Course.find({}).limit(3).lean();
    return JSON.parse(JSON.stringify(courses));
  } catch {
    return [];
  }
}

const advantages = [
  { icon: 'psychology', title: 'Expert Instructors', desc: 'Learn from industry veterans and PhD holders with decades of practical field experience.' },
  { icon: 'work', title: 'Job Placement', desc: 'Dedicated career services with direct access to top multinational tech companies.' },
  { icon: 'biotech', title: 'Cutting-edge Labs', desc: 'Access high-performance computing clusters and specialized software environments.' },
  { icon: 'public', title: 'Global Recognition', desc: 'Our certifications are globally recognized and valued by HR departments worldwide.' },
];

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <main>
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── About Bento ── */}
      <section className="bg-[#f2f4f6] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Main copy */}
            <div className="md:col-span-8 bg-white border border-slate-200 p-8 md:p-12 flex flex-col justify-center rounded-xl hover:shadow-md transition-shadow duration-300">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-3">About ITI</span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black mb-5">
                A Tradition of Innovation<br />and Academic Excellence
              </h2>
              <p className="text-base text-[#505f76] leading-relaxed">
                For over three decades, the Information Technology Institute (ITI) has served as a beacon for technical education. We bridge the gap between academic theory and industrial practice, ensuring our graduates are not just ready for the market, but are pioneering its growth.
              </p>
              <Link href="/about" className="mt-6 inline-flex items-center gap-1.5 text-cyan-600 font-semibold text-sm hover:gap-3 transition-all duration-200 group w-fit">
                Read Our Story
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
            {/* Stat cards */}
            <div className="md:col-span-4 grid grid-rows-2 gap-6">
              <div className="bg-cyan-600 p-6 flex flex-col justify-center text-white rounded-xl hover:bg-cyan-500 transition-colors duration-300 cursor-default group">
                <span className="material-symbols-outlined mb-3 text-white/80 group-hover:scale-110 transition-transform duration-200">hub</span>
                <h3 className="text-2xl font-bold mb-1">Industrial Network</h3>
                <p className="text-sm opacity-90">Connected with 500+ global tech partners.</p>
              </div>
              <div className="bg-[#131b2e] p-6 flex flex-col justify-center text-white rounded-xl hover:bg-[#1a2540] transition-colors duration-300 cursor-default group">
                <span className="material-symbols-outlined mb-3 text-white/80 group-hover:scale-110 transition-transform duration-200">school</span>
                <h3 className="text-2xl font-bold mb-1">Alumni Excellence</h3>
                <p className="text-sm opacity-90">Join a network of 45,000 tech professionals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Courses ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-2 block">Curriculum</span>
              <h2 className="text-3xl md:text-4xl font-bold text-black">Featured Programs</h2>
              <p className="text-base text-[#505f76] mt-2">Specialized career tracks designed for the modern economy.</p>
            </div>
            <Link
              href="/courses"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-cyan-600 border-b border-cyan-600 pb-1 hover:text-cyan-700 hover:border-cyan-700 transition-colors group"
            >
              View All Courses
              <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-[#45464d] bg-slate-50 rounded-2xl border border-slate-100">
              <span className="material-symbols-outlined text-6xl text-slate-300 block mb-4">school</span>
              <p className="text-lg font-semibold">No courses found.</p>
              <p className="text-sm mt-2 text-slate-500">
                <Link href="/api/seed" className="text-cyan-600 underline font-medium">Seed the database</Link> to populate courses, then refresh.
              </p>
            </div>
          )}
          <div className="sm:hidden mt-8 text-center">
            <Link href="/courses" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 border border-cyan-200 px-5 py-2.5 rounded-lg hover:bg-cyan-50 transition-colors">
              View All Courses
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ITI Advantage ── */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-2 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-black">The ITI Advantage</h2>
            <p className="text-base text-[#505f76] mt-3">We provide more than just education — a complete ecosystem for technical professional growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <div
                key={item.title}
                className="bg-white border border-slate-200 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="w-12 h-12 bg-cyan-50 flex items-center justify-center text-cyan-600 mb-5 rounded-lg group-hover:bg-cyan-100 transition-colors duration-200">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h4 className="text-lg font-bold text-black mb-2">{item.title}</h4>
                <p className="text-sm text-[#505f76] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial / Quote Banner ── */}
      <section className="bg-cyan-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-white/40 text-6xl block mb-4">format_quote</span>
          <blockquote className="text-white text-xl md:text-2xl font-medium leading-relaxed italic">
            "ITI Global transformed my career. Within 6 months of graduating, I landed a senior engineering role at a Fortune 500 company."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">A</div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Aditya Sharma</p>
              <p className="text-white/70 text-xs">Full-Stack Engineer, Google — Class of 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="bg-[#131b2e] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white md:max-w-xl text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">Ready to shape<br className="hidden sm:block" /> your future?</h2>
            <p className="text-base opacity-70 leading-relaxed">
              Join our newsletter to receive information about upcoming intake dates, scholarship opportunities, and tech insights.
            </p>
          </div>
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-white/10 border border-white/20 text-white placeholder:text-white/40 px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyan-500 outline-none w-full sm:w-80 transition-all duration-200"
            />
            <button className="bg-cyan-600 text-white px-7 py-3 font-semibold rounded-lg hover:bg-cyan-500 active:scale-95 transition-all duration-200 whitespace-nowrap shadow-lg hover:shadow-cyan-900/40">
              Sign Up Free
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
