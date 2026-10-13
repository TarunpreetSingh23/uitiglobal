'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CourseApplyModal from './CourseApplyModal';

const keyHighlights = [
  { icon: 'terminal', title: 'Practical, Project-Based Learning', desc: 'Code every day in hands-on computer labs with guided tasks.' },
  { icon: 'code_blocks', title: 'Real Client Project Experience', desc: 'Work through realistic development workflows on selected live projects.' },
  { icon: 'trending_up', title: 'Career-Oriented Training', desc: 'Curriculum structured directly around modern employer technical expectations.' },
  { icon: 'support_agent', title: 'Student Support & Mentorship', desc: 'Dedicated faculty guidance, doubt-solving sessions, and portfolio reviews.' },
];

const featuredTracks = [
  'Full Stack Development with AI',
  'AI Engineering',
  'Data Analytics & Power BI',
  'Web Development',
  'ITI Technical Trades',
];

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white border-b border-slate-200 overflow-hidden font-['Space_Grotesk']">
      {/* Background subtle architectural grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(15,23,42,1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* Left Column: Headline and Content */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Institutional Location & Management Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-50 border border-cyan-200 rounded-full text-xs font-semibold text-[#007595]">
                <span className="material-symbols-outlined text-[15px] text-[#007595]">location_on</span>
                Opposite Khalsa College for Women, Amritsar, Punjab
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-700">
                <span className="material-symbols-outlined text-[15px] text-slate-500">verified</span>
                Managed by Aagaz Society
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold leading-[1.15] text-slate-900 tracking-tight mb-5">
              Industrial Training in Amritsar{' '}
              <span className="text-[#007595]">Opposite Khalsa College</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              Build industry-ready skills through practical learning, guided mentorship, and real-world client projects at Universal Institute, Amritsar. Explore Full Stack Development with AI, Web Development, Data Analytics, AI Engineering, and other career-oriented courses.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <Link
                href="/courses"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#007595] hover:bg-[#005e77] text-white font-bold text-sm rounded-xl transition-all shadow-sm hover:shadow active:scale-[0.98]"
              >
                <span>Explore Our Courses</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm rounded-xl transition-all active:scale-[0.98]"
              >
                <span className="material-symbols-outlined text-[18px] text-[#007595]">calendar_today</span>
                <span>Book a Free Demo</span>
              </button>
            </div>

            {/* Popular Tracks Quick Filter */}
            <div className="pt-6 border-t border-slate-100">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2 text-center lg:text-left">
                Popular Training Tracks:
              </span>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {featuredTracks.map((track, i) => (
                  <Link
                    key={i}
                    href={track.includes('ITI') ? '/iti-courses' : '/courses'}
                    className="text-xs font-medium text-slate-600 bg-slate-50 hover:bg-cyan-50 hover:text-cyan-800 border border-slate-200 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    {track}
                  </Link>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Authentic Educational Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-3 shadow-md">
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/assets/f75c2308de23c422c26dc222cf22584e.png"
                  alt="Universal Institute Amritsar Computer Lab and Practical Training"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Overlay Badge at Bottom */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm border border-slate-200 p-3 rounded-lg flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">Universal Institute Campus</span>
                    <span className="text-slate-500">Guru Arjan Dev Nagar, Amritsar</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Admissions Open
                  </span>
                </div>
              </div>

              {/* Factual Institutional Cert Banner */}
              <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-cyan-700 text-[18px]">workspace_premium</span>
                  <div>
                    <p className="font-bold text-slate-800">ISO 9001:2015 Certified</p>
                    <p className="text-[11px] text-slate-500">Quality Management Standard</p>
                  </div>
                </div>
                {/* <Link
                  href="/verify-certificate"
                  className="text-cyan-700 hover:underline font-semibold text-[11px]"
                >
                  Verify Certificates →
                </Link> */}
              </div>
            </div>
          </div>

        </div>

        {/* 4 Compact Highlights Cards */}
        <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {keyHighlights.map((item, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200/80 rounded-xl p-5 hover:border-cyan-300 hover:bg-white transition-all shadow-xs"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-100/70 text-cyan-800 flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
              </div>
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <CourseApplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="General Demo Session"
        courseId="hero-demo-request"
      />
    </section>
  );
}