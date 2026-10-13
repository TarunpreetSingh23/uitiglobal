import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import CourseCard from '../components/CourseCard';
import Link from 'next/link';

export const metadata = {
  title: 'Courses & Industrial Training | Universal Institute, Amritsar',
  description:
    'Explore career-oriented training courses in Full Stack Development with AI, AI Engineering, Data Analytics, Power BI, and Web Development at Universal Institute, Amritsar.',
};

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
];

async function getCourses({ searchQuery = '', category = '' }) {
  try {
    await dbConnect();

    const conditions = [];

    // Search filter
    if (searchQuery) {
      conditions.push({
        $or: [
          { title: { $regex: searchQuery, $options: 'i' } },
          { description: { $regex: searchQuery, $options: 'i' } },
        ],
      });
    }

    // Category filter
    if (category && category !== 'All Courses') {
      conditions.push({ category: { $regex: category, $options: 'i' } });
    } else {
      conditions.push({ category: { $not: /ITI courses/i } });
    }

    const query = conditions.length > 0 ? { $and: conditions } : {};
    const courses = await Course.find(query).lean();
    if (courses && courses.length > 0) {
      return JSON.parse(JSON.stringify(courses));
    }
  } catch (err) {
    console.warn('Database fetch fallback in CoursesPage:', err.message);
  }

  // Fallback filtering in memory if DB is empty
  let filtered = [...fallbackCourses];
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (c) => c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }
  if (category && category !== 'All Courses') {
    filtered = filtered.filter((c) => c.category.toLowerCase().includes(category.toLowerCase()));
  }
  return filtered;
}

const categories = ['All Courses', 'Development', 'AI/ML', 'Data Science', 'Web Development'];

export default async function CoursesPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const search = resolvedSearchParams?.search || '';
  const activeCategory = resolvedSearchParams?.category || 'All Courses';

  const courses = await getCourses({ searchQuery: search, category: activeCategory });

  const buildHref = (cat) => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (cat && cat !== 'All Courses') params.set('category', cat);
    const qs = params.toString();
    return `/courses${qs ? `?${qs}` : ''}`;
  };

  const isFiltered = Boolean(search || (activeCategory && activeCategory !== 'All Courses'));

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <section className="mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-100/70 text-cyan-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[15px]">school</span>
            Industrial & Technical Training
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Career-Oriented Training Courses
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl mb-8">
            {search
              ? `Search results for "${search}"${activeCategory !== 'All Courses' ? ` in ${activeCategory}` : ''}`
              : activeCategory !== 'All Courses'
              ? `Showing courses in "${activeCategory}"`
              : 'Practical courses designed with industry-standard technologies, hands-on lab sessions, and mentor-guided projects in Amritsar.'}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => {
              const isActive = cat === activeCategory;
              return (
                <Link
                  key={cat}
                  href={buildHref(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-150 border ${
                    isActive
                      ? 'bg-cyan-700 text-white border-cyan-700 shadow-xs'
                      : 'bg-white text-slate-700 border-slate-300 hover:border-cyan-400 hover:text-cyan-700'
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
                className="px-3 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all duration-150 border border-red-200 bg-red-50 text-red-600 hover:bg-red-100 flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[14px]">close</span>
                Clear Filter
              </Link>
            )}
          </div>

          {/* Results count */}
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Showing {courses.length} {courses.length === 1 ? 'training course' : 'training courses'}
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
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-200 p-8">
            <span className="material-symbols-outlined text-5xl text-slate-300 block mb-3">search_off</span>
            <h3 className="text-base font-bold text-slate-700">No courses matching your criteria.</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto mb-4">
              Try searching for different keywords such as "AI", "Web", "Python", or "Data".
            </p>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1 text-xs font-bold text-white bg-cyan-700 px-4 py-2 rounded-lg hover:bg-cyan-800"
            >
              Reset Filters
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
