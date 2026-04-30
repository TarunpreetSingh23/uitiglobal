import Link from 'next/link';
import Image from 'next/image';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import CourseCard from './components/CourseCard';
import HeroCarousel from './components/HeroCarousel';
import PartnersSection from './components/PartnersSection';
import NewsletterSection from './components/NewsletterSection';
import DemoBanner from './components/DemoBanner';

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
  { icon: 'psychology', title: 'Expert Instructors', desc: 'Learn from industry veterans with decades of practical field experience.', color: '#0891b2' },
  { icon: 'work', title: 'Job Placement', desc: 'Dedicated career services with direct access to top tech companies.', color: '#7c3aed' },
  { icon: 'biotech', title: 'Cutting-edge Labs', desc: 'Access high-performance computing clusters and specialized environments.', color: '#059669' },
  { icon: 'public', title: 'Global Recognition', desc: 'Our certifications are globally recognized by HR departments worldwide.', color: '#d97706' },
];

const testimonials = [
  {
    quote: 'ITI Global transformed my career. Within 6 months of graduating, I landed a senior engineering role at a Fortune 500 company.',
    name: 'Aditya Sharma',
    role: 'Full-Stack Engineer — Class of 2024',
    initials: 'AS',
    color: '#0891b2',
  },
  {
    quote: 'The curriculum is perfectly aligned with industry needs. I got placed before even finishing my course — truly world-class.',
    name: 'Priya Mehta',
    role: 'Data Analyst, TCS — Class of 2023',
    initials: 'PM',
    color: '#7c3aed',
  },
  {
    quote: 'Hands-on labs and real project experience made all the difference. My confidence in interviews skyrocketed.',
    name: 'Rajveer Singh',
    role: 'Cloud Engineer, Infosys — Class of 2024',
    initials: 'RS',
    color: '#059669',
  },
];

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <main>
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Partners / Stats ── */}
      <PartnersSection />

      {/* ── About Bento ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Main copy card */}
            <div className="lg:col-span-8 relative bg-gradient-to-br from-[#0a0f1e] to-[#131b2e] p-8 md:p-12 rounded-2xl overflow-hidden group">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }} />
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-4 px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20">About ITI Global</span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white mb-5">
                  A Tradition of Innovation<br />
                  <span className="text-cyan-400">and Academic Excellence</span>
                </h2>
                <p className="text-slate-400 leading-relaxed text-base max-w-2xl">
                  For over two decades, Universal ITI has served as a beacon for technical education in Amritsar. We bridge the gap between academic theory and industrial practice, ensuring our graduates are not just market-ready — but are pioneering its growth.
                </p>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-900/30 group/btn active:scale-[0.97]"
                >
                  Read Our Story
                  <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Stat card */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-gradient-to-br from-cyan-600 to-cyan-700 p-8 rounded-2xl text-white relative overflow-hidden group hover:from-cyan-500 hover:to-cyan-600 transition-all duration-500 cursor-default">
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/5 rounded-full" />
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-white/5 rounded-full" />
                <span className="material-symbols-outlined text-4xl text-white/80 mb-4 block group-hover:scale-110 transition-transform duration-300">hub</span>
                <h3 className="text-2xl font-extrabold mb-2">Industrial Network</h3>
                <p className="text-cyan-100 text-sm leading-relaxed">Connected with 10+ leading tech and non-tech industry partners across Punjab.</p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="text-3xl font-extrabold">10+</span>
                  <span className="text-cyan-200 text-sm">Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Courses ── */}
      <section className="bg-[#f7f9fb] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-3 block">Curriculum</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Featured Programs</h2>
              <p className="text-slate-500 mt-2 text-base">Specialized career tracks designed for the modern economy.</p>
            </div>
            <Link
              href="/courses"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-cyan-600 hover:text-cyan-700 border border-cyan-200 hover:border-cyan-400 px-5 py-2.5 rounded-xl transition-all duration-200 group"
            >
              View All Courses
              <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          {courses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.map((course, i) => (
                <div key={course._id} style={{ animation: `heroFadeUp 0.5s ${i * 0.1}s cubic-bezier(0.22,1,0.36,1) both` }}>
                  <CourseCard course={course} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
              <span className="material-symbols-outlined text-6xl text-slate-300 block mb-4">school</span>
              <p className="text-lg font-semibold text-slate-600">No courses found.</p>
              <p className="text-sm mt-2 text-slate-400">
                <Link href="/api/seed" className="text-cyan-600 underline font-medium">Seed the database</Link> to populate courses.
              </p>
            </div>
          )}

          <div className="sm:hidden mt-8 text-center">
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-cyan-600 border border-cyan-200 px-6 py-3 rounded-xl hover:bg-cyan-50 transition-colors">
              View All Courses
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
        <style>{`
          @keyframes heroFadeUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </section>

      {/* ── ITI Advantage ── */}
      <section className="bg-[#0a0f1e] py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3 block">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">The ITI Advantage</h2>
            <p className="text-slate-400 mt-3 text-base">More than education — a complete ecosystem for professional growth.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {advantages.map((item, i) => (
              <div
                key={item.title}
                className="group bg-white/[0.04] border border-white/10 p-6 rounded-2xl hover:bg-white/[0.08] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div
                  className="w-12 h-12 flex items-center justify-center rounded-xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
                >
                  <span className="material-symbols-outlined text-[22px]" style={{ color: item.color }}>{item.icon}</span>
                </div>
                <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                <div className="mt-4 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: item.color }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Demo Class Banner ── */}
      <DemoBanner />

      {/* ── Testimonials ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center w-full mx-auto mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-600 mb-3 block">Student Stories</span>
            <h2 className="text-3xl md:text-4xl w-full font-extrabold text-slate-900">What Our Alumni Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group bg-[#f7f9fb] border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-amber-400 text-sm">★</span>
                  ))}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed italic flex-1">"{t.quote}"</p>

                {/* Divider */}
                <div className="my-5 h-px bg-slate-100" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-extrabold flex-shrink-0"
                    style={{ backgroundColor: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="mt-5 h-0.5 rounded-full w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: t.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <NewsletterSection />
    </main>
  );
}
