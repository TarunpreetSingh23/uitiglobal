import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import CourseCard from '../components/CourseCard';
import Link from 'next/link';

export const metadata = {
  title: 'Universal Institute | ITI Courses',
  description: 'Explore our specialized ITI programs designed to build your technical foundation.',
};

async function getItiCourses({ searchQuery = '' }) {
  try {
    await dbConnect();

    // Build conditions array
    const conditions = [];

    // Always filter by ITI courses
    conditions.push({ category: { $regex: 'ITI courses', $options: 'i' } });

    // Text search filter
    if (searchQuery) {
      conditions.push({
        $or: [
          { title: { $regex: searchQuery, $options: 'i' } },
          { description: { $regex: searchQuery, $options: 'i' } },
        ],
      });
    }

    const query = { $and: conditions };
    const courses = await Course.find(query).lean();
    return JSON.parse(JSON.stringify(courses));
  } catch {
    return [];
  }
}

export default async function ItiCoursesPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams?.search || '';

  const courses = await getItiCourses({ searchQuery: search });

  const isFiltered = !!search;

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-20">
      {/* Hero Section & Filters */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-3">ITI Programs</h1>
        <p className="text-base md:text-lg leading-relaxed text-[#45464d] max-w-2xl mb-8">
          {search
            ? `Search results for "${search}" in ITI Programs`
            : 'Explore our specialized ITI programs designed to build your technical foundation.'}
        </p>

        {/* Filters Area */}
        <div className="flex flex-wrap gap-2 mb-4">
          {/* Clear filters button */}
          {isFiltered && (
            <Link
              href="/iti-courses"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 border border-red-200 bg-red-50 text-red-500 hover:bg-red-100 flex items-center gap-1"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>close</span>
              Clear
            </Link>
          )}
        </div>

        {/* Results count */}
        <p className="text-sm text-slate-400 font-medium">
          {courses.length} {courses.length === 1 ? 'course' : 'courses'} found
        </p>
      </section>

      {/* Course Grid */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course._id} course={course} isIti={true} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-[#45464d] bg-slate-50 rounded-2xl border border-slate-100">
          <span className="material-symbols-outlined text-6xl text-slate-300 block mb-4">search_off</span>
          <p className="text-lg font-semibold">No ITI courses found.</p>
          {isFiltered && (
            <p className="text-sm mt-2 text-slate-500">
              Try a different search or{' '}
              <Link href="/iti-courses" className="text-cyan-600 underline font-medium">
                view all ITI courses
              </Link>
              .
            </p>
          )}
        </div>
      )}
    </main>
  );
}
