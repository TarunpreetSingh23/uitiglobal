import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import CourseCard from '../components/CourseCard';
import Link from 'next/link';

export const metadata = {
  title: 'ITI Global | Academic Catalog',
  description: 'Explore our elite selection of specialized programs designed for the next generation of computing leaders.',
};

async function getCourses(searchQuery = '') {
  try {
    await dbConnect();
    const query = searchQuery 
      ? { 
          $or: [
            { title: { $regex: searchQuery, $options: 'i' } },
            { description: { $regex: searchQuery, $options: 'i' } }
          ]
        }
      : {};
    const courses = await Course.find(query).lean();
    return JSON.parse(JSON.stringify(courses));
  } catch {
    return [];
  }
}

const categories = ['All Courses', 'Software Development', 'Data Science', 'Cybersecurity', 'Cloud Computing'];

export default async function CoursesPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams?.search || '';
  const courses = await getCourses(search);

  return (
    <main className="max-w-7xl mx-auto px-8 py-20">
      {/* Hero Section & Filters */}
      <section className="mb-12">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-black mb-3">Academic Catalog</h1>
        <p className="text-lg leading-relaxed text-[#45464d] max-w-2xl mb-12">
          {search ? `Search results for "${search}"` : 'Explore our elite selection of specialized programs designed for the next generation of computing leaders and technical visionaries.'}
        </p>
        <div className="flex flex-col md:flex-row md:items-center gap-6 bg-white p-3 rounded-xl border border-slate-100 shadow-sm">
          <div className="flex-1 flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-colors ${
                  i === 0
                    ? 'bg-black text-white'
                    : 'bg-[#f2f4f6] text-[#45464d] hover:bg-[#e6e8ea]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#45464d]">Sort by:</span>
            <select className="bg-transparent border-none text-xs font-semibold tracking-widest uppercase focus:ring-0 cursor-pointer text-black">
              <option>Recommended</option>
              <option>Newest</option>
              <option>Duration</option>
            </select>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      {courses.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-2">
            <button className="p-2 border border-slate-200 rounded-lg text-[#45464d] hover:bg-slate-50 transition-all active:scale-95">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-10 h-10 bg-black text-white rounded-lg text-xs font-semibold tracking-widest">1</button>
            <button className="w-10 h-10 hover:bg-[#f2f4f6] text-[#45464d] rounded-lg text-xs font-semibold transition-colors">2</button>
            <button className="w-10 h-10 hover:bg-[#f2f4f6] text-[#45464d] rounded-lg text-xs font-semibold transition-colors">3</button>
            <span className="text-[#45464d] mx-2">...</span>
            <button className="w-10 h-10 hover:bg-[#f2f4f6] text-[#45464d] rounded-lg text-xs font-semibold transition-colors">12</button>
            <button className="p-2 border border-slate-200 rounded-lg text-[#45464d] hover:bg-slate-50 transition-all active:scale-95">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-24 text-[#45464d]">
          <span className="material-symbols-outlined text-6xl text-slate-300 block mb-4">school</span>
          <p className="text-lg font-medium">No courses in the database yet.</p>
          <p className="text-sm mt-2">
            <Link href="/api/seed" className="text-cyan-600 underline font-medium">Seed the database</Link> to populate courses, then refresh this page.
          </p>
        </div>
      )}
    </main>
  );
}
