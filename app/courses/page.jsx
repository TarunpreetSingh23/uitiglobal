import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import CourseCard from '../components/CourseCard';
import Link from 'next/link';

export const metadata = {
  title: 'ITI Global | Academic Catalog',
  description: 'Explore our elite selection of specialized programs designed for the next generation of computing leaders.',
};

async function getCourses({ searchQuery = '', category = '' }) {
  try {
    await dbConnect();

    // Build conditions array
    const conditions = [];

    // Text search filter
    if (searchQuery) {
      conditions.push({
        $or: [
          { title: { $regex: searchQuery, $options: 'i' } },
          { description: { $regex: searchQuery, $options: 'i' } },
        ],
      });
    }

    // Category filter (skip if "All Courses" or empty)
    if (category && category !== 'All Courses') {
      conditions.push({ category: { $regex: category, $options: 'i' } });
    }

    const query = conditions.length > 0 ? { $and: conditions } : {};
    const courses = await Course.find(query).lean();
    return JSON.parse(JSON.stringify(courses));
  } catch {
    return [];
  }
}

const categories = ['All Courses', 'Web Development', 'Data Science', 'AI/ML', 'E-commerce'];

export default async function CoursesPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams?.search || '';
  const activeCategory = resolvedSearchParams?.category || 'All Courses';

  const courses = await getCourses({ searchQuery: search, category: activeCategory });

  // Build a helper to create href with both params preserved
  const buildHref = (cat) => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (cat && cat !== 'All Courses') params.set('category', cat);
    const qs = params.toString();
    return `/courses${qs ? `?${qs}` : ''}`;
  };

  const isFiltered = search || activeCategory !== 'All Courses';

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-20">
      {/* Hero Section & Filters */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-3">Academic Catalog</h1>
        <p className="text-base md:text-lg leading-relaxed text-[#45464d] max-w-2xl mb-8">
          {search
            ? `Search results for "${search}"${activeCategory !== 'All Courses' ? ` in ${activeCategory}` : ''}`
            : activeCategory !== 'All Courses'
            ? `Showing courses in "${activeCategory}"`
            : 'Explore our elite selection of specialized programs designed for the next generation of computing leaders.'}
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <Link
                key={cat}
                href={buildHref(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest uppercase transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-600 text-white border-cyan-600 shadow-md shadow-cyan-200'
                    : 'bg-white text-[#45464d] border-slate-200 hover:border-cyan-400 hover:text-cyan-600'
                }`}
              >
                {cat}
              </Link>
            );
          })}

          {/* Clear filters button */}
          {isFiltered && (
            <Link
              href="/courses"
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
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 text-[#45464d] bg-slate-50 rounded-2xl border border-slate-100">
          <span className="material-symbols-outlined text-6xl text-slate-300 block mb-4">search_off</span>
          <p className="text-lg font-semibold">No courses found.</p>
          <p className="text-sm mt-2 text-slate-500">
            Try a different category or{' '}
            <Link href="/courses" className="text-cyan-600 underline font-medium">
              view all courses
            </Link>
            .
          </p>
        </div>
      )}
    </main>
  );
}
