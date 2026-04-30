'use client';

import { useState } from 'react';
import CourseApplyModal from './CourseApplyModal';

export default function DemoBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-12 md:py-20 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#0a0f1e] rounded-[32px] overflow-hidden group">
          {/* Background effects */}
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }} />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/30 transition-colors duration-700" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 p-8 md:p-16">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] md:text-xs font-bold text-cyan-400 uppercase tracking-widest">Limited Slots Available</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-[1.1] mb-6">
                Experience the Future of IT<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Book a Free Demo Class Today!</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8">
                Not sure where to start? Join our interactive demo session to explore our labs, meet our experts, and discover which career path fits you best. No commitment required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#0a0f1e] rounded-2xl font-extrabold text-base hover:bg-cyan-50 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-black/20"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  Reserve Your Spot
                </button>
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0f1e] bg-slate-800 overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="user" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  {/* <div className="w-10 h-10 rounded-full border-2 border-[#0a0f1e] bg-cyan-600 flex items-center justify-center text-[10px] font-bold text-white">
                    +12k
                  </div> */}
                </div>
                {/* <p className="text-xs text-slate-500 font-medium ml-2">Join 12,000+ certified alumni</p> */}
              </div>
            </div>

            {/* Illustration / Decorative Card */}
            <div className="relative w-full max-w-[400px] lg:max-w-none lg:flex-1 h-[280px] lg:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl backdrop-blur-3xl border border-white/10 flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6 animate-bounce">
                  <span className="material-symbols-outlined text-4xl text-white">event_available</span>
                </div>
                <div className="space-y-4">
                  <div className="h-2 w-48 bg-white/10 rounded-full mx-auto" />
                  <div className="h-2 w-32 bg-white/10 rounded-full mx-auto" />
                  <div className="h-2 w-40 bg-white/10 rounded-full mx-auto" />
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 bg-cyan-500 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-8 left-8 w-16 h-16 bg-purple-500 rounded-full blur-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <CourseApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="General Demo Class"
        courseId="demo-class-banner"
      />
    </section>
  );
}
