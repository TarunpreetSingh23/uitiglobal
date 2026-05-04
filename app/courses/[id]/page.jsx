import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CourseSyllabus from '../../components/CourseSyllabus';
import ApplyButton from '../../components/ApplyButton';

async function getCourse(id) {
  try {
    await dbConnect();
    const course = await Course.findById(id).lean();
    if (!course) return null;
    return JSON.parse(JSON.stringify(course));
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) return { title: 'Course Not Found' };
  return { title: `${course.title} | ITI Global`, description: course.description };
}

export default async function CourseDetailPage({ params }) {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) notFound();

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      {/* Hero Section */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-[#d0e1fb] text-[#54647a] px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full">{course.category}</span>
              <span className="bg-[#e6e8ea] text-[#45464d] px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full">{course.duration}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-6">{course.title}</h1>
            <p className="text-lg leading-relaxed text-[#505f76] max-w-2xl mb-8">{course.description}</p>
            <div className="flex flex-wrap gap-4">
              <ApplyButton 
                courseId={course._id.toString()} 
                courseName={course.title}
                className="bg-cyan-600 text-white px-8 py-4 font-bold text-base rounded-lg flex items-center shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                Book a Demo Class
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </ApplyButton>
              {/* <button className="border border-black text-black px-8 py-4 font-bold text-base rounded-lg hover:bg-[#f2f4f6] transition-all active:scale-95">
                Request Info
              </button> */}
            </div>
          </div>
          <div className="lg:col-span-4 relative">
            <div className="aspect-square rounded-xl overflow-hidden shadow-sm border border-slate-100 relative">
              <Image
                src={course.imageUrl}
                alt={course.altText || course.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">

          {/* Syllabus */}
          <section>
            <div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
              <h2 className="text-2xl md:text-3xl font-semibold">Syllabus</h2>
              <span className="text-cyan-600 text-xs font-semibold tracking-widest uppercase">{course.modules?.length || 0} MODULES</span>
            </div>
            <CourseSyllabus modules={course.modules} />
          </section>

          {/* Instructor */}
          {course.instructor && (
            <section className="bg-[#f2f4f6] rounded-xl p-6 md:p-12 border border-slate-100">
              <h2 className="text-3xl font-semibold mb-8">Lead Instructor</h2>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-sm flex-shrink-0 relative">
                  <Image src={course.instructor.imageUrl} alt={course.instructor.name} fill className="object-cover" />
                </div> */}
                <div>
                  <h3 className="text-2xl font-semibold mb-1">{course.instructor.name}</h3>
                  <p className="text-cyan-600 font-medium mb-4">{course.instructor.role}</p>
                  <p className="text-[#505f76] text-base mb-6 leading-relaxed">{course.instructor.bio}</p>
                  <div className="flex space-x-4">
                    <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors"><span className="material-symbols-outlined">public</span></a>
                    <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors"><span className="material-symbols-outlined">groups</span></a>
                    <a href="#" className="text-slate-400 hover:text-cyan-600 transition-colors"><span className="material-symbols-outlined">description</span></a>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Prerequisites */}
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Prerequisites</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start p-4 bg-white border border-slate-100 rounded-lg">
                <span className="material-symbols-outlined text-cyan-600 mr-4">code</span>
                <div>
                  <h4 className="font-bold text-base mb-1">Basic Logic</h4>
                  <p className="text-[#505f76] text-sm">Understanding of basic programming logic and loops.</p>
                </div>
              </div>
              <div className="flex items-start p-4 bg-white border border-slate-100 rounded-lg">
                <span className="material-symbols-outlined text-cyan-600 mr-4">terminal</span>
                <div>
                  <h4 className="font-bold text-base mb-1">Terminal Usage</h4>
                  <p className="text-[#505f76] text-sm">Comfortable with command-line basics (git, cd, mkdir).</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6 order-first lg:order-last">
          {/* Quick Info Card */}
          <div className="bg-white border border-slate-100 rounded-xl overflow-hidden sticky top-24">
            <div className="bg-[#131b2e] p-6">
              <h4 className="text-white text-xs font-semibold tracking-widest uppercase opacity-70 mb-1">PROGRAM TUITION</h4>
              <div className="flex items-baseline space-x-2">
                <span className="text-white text-4xl font-semibold">{course.tuition || '$12,500'}</span>
                {course.originalTuition && (
                  <span className="text-slate-400 text-sm line-through">{course.originalTuition}</span>
                )}
              </div>
            </div>
            <div className="p-6 space-y-6">
              {[
                { icon: 'schedule', label: 'DURATION', value: course.duration },
                { icon: 'event', label: 'NEXT START DATE', value: course.nextStartDate || 'September 15, 2026' },
                { icon: 'language', label: 'MODE OF LEARNING', value: course.location || 'Online / Hybrid' },
                { icon: 'school', label: 'CREDENTIAL', value: course.credential || 'Professional Certification' },
              ].map((item, i) => (
                <div key={item.label} className={i > 0 ? 'border-t border-slate-50 pt-6' : ''}>
                  <div className="flex items-center text-[#505f76] mb-2">
                    <span className="material-symbols-outlined mr-2 text-sm">{item.icon}</span>
                    <span className="text-xs font-semibold tracking-widest uppercase">{item.label}</span>
                  </div>
                  <p className="font-bold text-[#191c1e]">{item.value}</p>
                </div>
              ))}
              <ApplyButton 
                courseId={course._id.toString()} 
                courseName={course.title}
              />
              <p className="text-center text-slate-400 text-xs">Applications close soon</p>
            </div>
          </div>

          {/* Tech Stack */}
          {/* {course.tags?.length > 0 && (
            <div className="bg-white border border-slate-100 rounded-xl p-6">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-[#505f76] mb-4">TECHNOLOGIES TAUGHT</h4>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag) => (
                  <span key={tag} className="bg-[#eceef0] text-[#45464d] px-3 py-1 text-xs font-medium rounded">{tag}</span>
                ))}
              </div>
            </div>
          )} */}

          {/* Code Teaser */}
          {/* <div className="rounded-xl overflow-hidden bg-slate-900 shadow-xl border border-slate-800">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-4 py-2 flex items-center space-x-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-slate-400 text-xs font-mono ml-4">server.js</span>
            </div>
            <div className="p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-slate-300"><code><span className="text-cyan-400">const</span> express = require(<span className="text-amber-300">&apos;express&apos;</span>);{'\n'}<span className="text-cyan-400">const</span> app = express();{'\n\n'}app.get(<span className="text-amber-300">&apos;/&apos;</span>, (req, res) =&gt; {'{'}{'\n'}  res.json({'{'} status: <span className="text-amber-300">&apos;online&apos;</span> {'}'});{'\n'}{'}'});{'\n\n'}<span className="text-slate-500">// Join 1000+ developers</span>{'\n'}app.listen(3000);</code></pre>
            </div>
          </div> */}
        </aside>
      </div>

      {/* Back to Courses */}
      <div className="mt-16">
        <Link href="/courses" className="inline-flex items-center gap-2 text-[#0090a9] font-semibold hover:gap-3 transition-all">
          <span className="material-symbols-outlined">arrow_back</span>
          Back to All Courses
        </Link>
      </div>
    </main>
  );
}
