'use client';

import { useState } from 'react';
import CourseApplyModal from './CourseApplyModal';

export default function DemoBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle accent border at top */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-600 via-cyan-700 to-slate-800" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-semibold text-cyan-800 uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse" />
                Free Counseling & Demo Session
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                Attend a Free Demo Class in Amritsar
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Meet our mentors, experience our computer laboratories, and understand the practical curriculum before enrolling. We provide transparent course guidance tailored to your career goals.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs sm:text-sm text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-700 text-[18px]">check_circle</span>
                  <span>1-on-1 Guidance with Technical Mentors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-700 text-[18px]">check_circle</span>
                  <span>Review Syllabus & Practical Lab Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-700 text-[18px]">check_circle</span>
                  <span>No Obligation or Hidden Charges</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-700 text-[18px]">check_circle</span>
                  <span>Near Khalsa College for Women Campus</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-cyan-700 hover:bg-cyan-800 active:scale-98 text-white rounded-xl font-bold text-sm transition-all shadow-sm"
                >
                  <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  Book a Free Demo Session
                </button>
                <a
                  href="tel:+919815039888"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px] text-cyan-700">call</span>
                  Call +91 9815039888
                </a>
              </div>
            </div>

            {/* Quick Campus Snapshot Card */}
            <div className="w-full lg:w-80 bg-slate-50 border border-slate-200 rounded-xl p-6 text-center lg:text-left shrink-0">
              <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center mb-3 mx-auto lg:mx-0">
                <span className="material-symbols-outlined text-[22px]">location_on</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1">Universal Institute Campus</h3>
              <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                Guru Arjan Dev Nagar, Near Khalsa College for Women, Amritsar, Punjab – 143002
              </p>
              <div className="text-xs text-slate-500 pt-3 border-t border-slate-200 space-y-1.5">
                <div className="flex justify-between">
                  <span>Class Timings:</span>
                  <span className="font-medium text-slate-700">9:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Mode:</span>
                  <span className="font-medium text-slate-700">Classroom & Labs</span>
                </div>
                <div className="flex justify-between">
                  <span>Admissions:</span>
                  <span className="font-medium text-emerald-600">Open for New Batches</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="Free Demo Session"
        courseId="free-demo-session"
      />
    </section>
  );
}
