import Link from 'next/link';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import CourseCard from './components/CourseCard';
import HeroSection from './components/HeroCarousel';
import PartnersSection from './components/PartnersSection';
import IndustrialTrainingSection from './components/IndustrialTrainingSection';
import StudentTestimonialsSection from './components/StudentTestimonialsSection';
import DemoBanner from './components/DemoBanner';
import NewsletterSection from './components/NewsletterSection';

export const metadata = {
  title: 'Universal Institute | Industrial Training in Amritsar Near Khalsa College',
  description:
    'Build industry-ready technical skills through practical learning, guided mentorship, and real-world projects at Universal Institute, Amritsar. Managed by Aagaz Society, ISO 9001:2015 Certified.',
};

// Fallback courses representing real institute offerings
const fallbackCourses = [
  {
    _id: 'c-fsd-ai',
    title: 'Full Stack Development with AI',
    description: 'Master modern frontend, Next.js, Node.js, Express, MongoDB, and integrate LLM AI APIs into full-stack web applications.',
    duration: '6 Months',
    category: 'Development',
    location: 'Universal Institute, Amritsar Labs',
    imageUrl: '/assets/2026c1c758e55619434709adf691f57f.png',
    altText: 'Full Stack Development with AI student practical coding in Amritsar',
  },
  {
    _id: 'c-ai-eng',
    title: 'AI Engineering',
    description: 'Applied machine learning pipelines, deep learning, PyTorch architectures, and production-ready intelligent workflows.',
    duration: '6 Months',
    category: 'AI/ML',
    location: 'Universal Institute, Amritsar Labs',
    imageUrl: '/assets/940e06dfe14e8611b57bf89a101b66d6.png',
    altText: 'AI Engineering and machine learning practical lab in Amritsar',
  },
  {
    _id: 'c-da-pbi',
    title: 'Data Analytics and Power BI',
    description: 'Business intelligence modeling, DAX queries, SQL data manipulation, and executive KPI dashboard creation.',
    duration: '3 to 6 Months',
    category: 'Data Science',
    location: 'Universal Institute, Amritsar Labs',
    imageUrl: '/assets/11650e2af719f42aded6ae5c21073389.png',
    altText: 'Data Analytics and Power BI interactive dashboard modeling',
  },
  {
    _id: 'c-web-dev',
    title: 'Web Development',
    description: 'Foundations of web design, HTML5, CSS3, JavaScript, modern frameworks, and responsive client site development.',
    duration: '3 to 6 Months',
    category: 'Web Development',
    location: 'Universal Institute, Amritsar Labs',
    imageUrl: '/assets/546b2efeacb5acf15394f63a5b815495.png',
    altText: 'Web Development code and practical programming on laptop',
  },
  {
    _id: 'c-prog-ds',
    title: 'Programming and Data Science',
    description: 'Core algorithmic problem solving, Python programming structures, data manipulation, and statistical computing.',
    duration: '6 Months',
    category: 'Data Science',
    location: 'Universal Institute, Amritsar Labs',
    imageUrl: '/assets/68bd5fcdb30df959c7fbd697a0326b61.png',
    altText: 'Python Programming and Data Science algorithms code',
  },
  {
    _id: 'c-iti-copa',
    title: 'COPA (Computer Operator & Programming Assistant)',
    description: 'Vocational trade covering computer fundamentals, office suites, database administration, and basic programming.',
    duration: '1 Year',
    category: 'ITI courses',
    location: 'Universal Institute Campus, Amritsar',
    imageUrl: '/assets/f75c2308de23c422c26dc222cf22584e.png',
    altText: 'COPA trade computer training lab in Amritsar',
  },
];

async function getCourses() {
  try {
    await dbConnect();
    const courses = await Course.find({}).limit(6).lean();
    if (courses && courses.length > 0) {
      return JSON.parse(JSON.stringify(courses));
    }
  } catch (error) {
    console.warn('MongoDB connection fallback for homepage courses:', error.message);
  }
  return fallbackCourses;
}

export default async function HomePage() {
  const courses = await getCourses();

  return (
    <div className="bg-white text-slate-900 font-['Space_Grotesk']">
      {/* ── 1. Hero Section: Amritsar Industrial Training ── */}
      <HeroSection />

      {/* ── 2. Accreditation & Institutional Credibility ── */}
      <PartnersSection />

      {/* ── 3. About Universal Institute Amritsar ── */}
      <section className="bg-white py-16 md:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Descriptive Content */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full inline-block">
                About Universal Institute
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Practical Technical Education & Industrial Skills in Amritsar
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Universal Institute, managed by <strong>Aagaz Society</strong>, is dedicated to practical, career-focused learning for students seeking professional advancement in software engineering, modern computing, and technical trades.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Located opposite Khalsa College for Women in Amritsar, Punjab, our campus features fully-equipped computer labs where learners write code, design databases, execute testing, and build working portfolios under guided faculty supervision.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <span className="material-symbols-outlined text-cyan-700 text-[18px]">verified</span>
                    ISO 9001:2015 Certified
                  </div>
                  <p className="text-xs text-slate-500">Quality-assured vocational curriculum and structured laboratory standards.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
                    <span className="material-symbols-outlined text-cyan-700 text-[18px]">account_balance</span>
                    Aagaz Society Governance
                  </div>
                  <p className="text-xs text-slate-500">Committed to accessible, skill-oriented industrial education across Punjab.</p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-800 text-sm font-bold group"
                >
                  Read Our Complete Institutional Profile
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Institutional Snapshot */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Campus Information
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-700 text-[18px] shrink-0 mt-0.5">location_on</span>
                  <div>
                    <span className="font-semibold block text-slate-900">Campus Location</span>
                    <span className="text-slate-600">Guru Arjan Dev Nagar, Near Khalsa College for Women, Amritsar – 143002</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-700 text-[18px] shrink-0 mt-0.5">school</span>
                  <div>
                    <span className="font-semibold block text-slate-900">Training Programs</span>
                    <span className="text-slate-600">Industrial Training (6 Weeks / 6 Months), ITI Technical Trades, AI & Web Courses</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-cyan-700 text-[18px] shrink-0 mt-0.5">verified_user</span>
                  <div>
                    <span className="font-semibold block text-slate-900">Certificate Verification</span>
                    <span className="text-slate-600">Online registry lookup available for all issued student credentials</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/verify-certificate"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 hover:border-cyan-400 hover:text-cyan-700 text-slate-700 rounded-xl text-xs font-bold transition-all shadow-2xs"
                >
                  <span className="material-symbols-outlined text-[16px] text-cyan-600">search</span>
                  Verify Student Certificate
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Dedicated Industrial Training Section ── */}
      <IndustrialTrainingSection />

      {/* ── 5. Featured Courses Section ── */}
      <section className="bg-slate-50 py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-cyan-700 bg-cyan-100/60 border border-cyan-200 px-3 py-1 rounded-full mb-3 inline-block">
                Course Catalog
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Career-Oriented Training Courses
              </h2>
              <p className="text-slate-600 mt-2 text-sm sm:text-base">
                Explore practical modules designed to develop employable technical expertise.
              </p>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-cyan-700 hover:text-cyan-800 border border-slate-300 hover:border-cyan-400 bg-white px-5 py-2.5 rounded-xl transition-all shadow-xs self-start sm:self-auto"
            >
              View All Courses
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course._id}>
                <CourseCard course={course} isIti={course.category?.toLowerCase().includes('iti')} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-xs font-bold text-cyan-700 border border-cyan-200 bg-white px-6 py-3 rounded-xl hover:bg-cyan-50 transition-colors"
            >
              View All Courses
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. Free Demo Session CTA ── */}
      <DemoBanner />

      {/* ── 7. Genuine Student Testimonials ── */}
      <StudentTestimonialsSection />

      {/* ── 8. Newsletter Section ── */}
      <NewsletterSection />
    </div>
  );
}
