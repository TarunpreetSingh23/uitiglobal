import Link from 'next/link';
import Image from 'next/image';
import ApplyButton from './ApplyButton';

export default function CourseCard({ course, isIti = false }) {
  const mode = course.location || 'Classroom & Practical Labs (Amritsar)';
  const duration = course.duration || 'Flexible Duration';

  return (
    <div className="group bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-cyan-300 transition-all duration-200 flex flex-col h-full font-['Space_Grotesk']">
      {/* Course Image & Badge */}
      <div className="h-44 sm:h-48 overflow-hidden relative bg-slate-100 shrink-0">
        <Image
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
          src={course.imageUrl || '/assets/2026c1c758e55619434709adf691f57f.png'}
          alt={course.altText || course.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wider uppercase text-cyan-900 border border-slate-200 shadow-xs">
          {course.category}
        </div>
        <div className="absolute top-3 right-3 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
          Enrolling
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-cyan-800 transition-colors">
            {course.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-4 line-clamp-2 leading-relaxed">
            {course.description}
          </p>
        </div>

        <div>
          {/* Metadata: Duration & Mode */}
          <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-500 mb-4">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-cyan-700">schedule</span>
              <span className="font-medium text-slate-700">Duration: {duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-cyan-700">domain</span>
              <span className="truncate">{mode}</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center justify-between pt-2">
            {isIti ? (
              <ApplyButton
                courseId={course._id?.toString() || course.title}
                courseName={course.title}
                className="text-cyan-700 hover:text-cyan-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors bg-transparent p-0 m-0 border-none cursor-pointer"
              >
                Enroll in Trade
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </ApplyButton>
            ) : (
              <Link
                href={`/courses/${course._id}`}
                className="text-cyan-700 hover:text-cyan-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
              >
                View Syllabus
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            )}

            <ApplyButton
              courseId={course._id?.toString() || course.title}
              courseName={course.title}
              className="text-xs font-semibold px-3 py-1.5 bg-slate-100 hover:bg-cyan-50 hover:text-cyan-800 text-slate-700 rounded-md border border-slate-200 transition-colors"
            >
              Enquire
            </ApplyButton>
          </div>
        </div>
      </div>
    </div>
  );
}
