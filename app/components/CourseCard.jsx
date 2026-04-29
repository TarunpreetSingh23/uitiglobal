import Link from 'next/link';
import Image from 'next/image';

export default function CourseCard({ course }) {
  return (
    <div className="group bg-white border border-slate-100 rounded-xl overflow-hidden hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
      <div className="h-48 overflow-hidden relative">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={course.imageUrl}
          alt={course.altText || course.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold tracking-widest uppercase text-black border border-slate-100">
          {course.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-black mb-2 leading-tight">{course.title}</h3>
        <p className="text-sm text-[#45464d] mb-6 line-clamp-2 leading-relaxed">{course.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#45464d]">
            <span className="material-symbols-outlined text-[18px]">schedule</span>
            <span className="text-sm font-medium">{course.duration}</span>
          </div>
          <Link
            href={`/courses/${course._id}`}
            className="text-[#0090a9] text-xs font-semibold tracking-widest uppercase flex items-center gap-1 group/btn transition-all"
          >
            View Details
            <span className="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
