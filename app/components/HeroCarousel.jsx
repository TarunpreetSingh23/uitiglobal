'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CourseApplyModal from './CourseApplyModal';

const slides = [
  {
    badge: 'ESTABLISHED 1993',
    tag: 'Premier IT Institute',
    title: 'Advancing the',
    titleAccent: 'Future of IT',
    subtitle: 'Empowering the next generation of technology leaders through world-class training, industrial partnerships, and innovative computing research.',
    cta: { label: 'Explore Programs', href: '/courses' },
    ctaSecondary: { label: 'Book a Free Demo', href: '#' },
    image: '/assets/f75c2308de23c422c26dc222cf22584e.png',
    stats: [
      { value: '500+', label: 'Students' },
      { value: '7+', label: 'Courses' },
      { value: '15+', label: 'Years Exp.' },
    ],
    accentColor: '#0891b2',
    gradientFrom: 'rgba(8,145,178,0.12)',
    gradientTo: 'rgba(14,116,144,0.04)',
  },
  {
    badge: 'AI & DATA SCIENCE',
    tag: 'Industry-Aligned Curriculum',
    title: 'Machine Learning',
    titleAccent: 'for the Real World',
    subtitle: 'Dive deep into predictive modeling, neural networks, and the critical ethical frameworks of automated decision systems that power tomorrow.',
    cta: { label: 'View ML Programs', href: '/courses' },
    ctaSecondary: { label: 'Book a Free Demo', href: '#' },
    image: '/assets/940e06dfe14e8611b57bf89a101b66d6.png',
    stats: [
      { value: '200+', label: 'Enrolled' },
      { value: '15+', label: 'Modules' },
       { value: '15+', label: 'Years Exp.' },
    ],
    accentColor: '#7c3aed',
    gradientFrom: 'rgba(124,58,237,0.10)',
    gradientTo: 'rgba(109,40,217,0.03)',
  },
];

const DURATION = 6000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const [transitioning, setTransitioning] = useState(false);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);
  const startTimeRef = useRef(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goTo = useCallback((idx, dir = 1) => {
    if (transitioning || idx === current) return;
    setDirection(dir);
    setTransitioning(true);
    setProgress(0);
    startTimeRef.current = null;
    setTimeout(() => {
      setCurrent(idx);
      setTransitioning(false);
    }, 600);
  }, [transitioning, current]);

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length;
    goTo(idx, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    const idx = (current - 1 + slides.length) % slides.length;
    goTo(idx, -1);
  }, [current, goTo]);

  // Auto-advance with smooth progress bar
  useEffect(() => {
    if (paused || isModalOpen) return;
    let frame;
    const tick = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const p = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(p);
      if (elapsed >= DURATION) {
        next();
      } else {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [current, paused, next, isModalOpen]);

  const slide = slides[current];

  return (
    <section
      className="relative bg-[#0a0f1e] overflow-hidden"
      style={{ minHeight: 'clamp(520px, 88vh, 760px)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Animated gradient background ── */}
      <div
        className="absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 80% 70% at 70% 50%, ${slide.gradientFrom}, transparent),
                       radial-gradient(ellipse 50% 60% at 10% 80%, ${slide.gradientTo}, transparent)`,
        }}
      />

      {/* ── Grid lines decoration ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Floating orbs ── */}
      <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none opacity-20 transition-colors duration-1000"
        style={{ backgroundColor: slide.accentColor }} />
      <div className="absolute bottom-[-100px] left-[-80px] w-[350px] h-[350px] rounded-full blur-[120px] pointer-events-none opacity-10 transition-colors duration-1000"
        style={{ backgroundColor: slide.accentColor }} />

      {/* ── Main layout ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-10 h-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16 py-6 lg:py-20">

        {/* ── LEFT: Text ── */}
        <div className="flex-1 w-full text-center lg:text-left">

          {/* Tag pill */}
          {/* <div
            key={`tag-${current}`}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase"
            style={{
              borderColor: `${slide.accentColor}40`,
              background: `${slide.accentColor}15`,
              color: slide.accentColor,
              animation: 'heroFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) both',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: slide.accentColor }} />
            {slide.badge}
          </div> */}

          {/* Headline */}
          <div key={`title-${current}`} style={{ animation: 'heroFadeUp 0.65s 0.05s cubic-bezier(0.22,1,0.36,1) both' }}>
            <h1 className="text-4xl md:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.1] tracking-tight text-white mb-4">
              {slide.title}
              <br />
              <span
                className="relative"
                style={{
                  background: `linear-gradient(90deg, ${slide.accentColor}, #fff)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {slide.titleAccent}
              </span>
            </h1>
            <p
              className="text-base lg:text-lg text-slate-400 leading-relaxed w-full mx-auto lg:mx-0"
              style={{ animation: 'heroFadeUp 0.7s 0.1s cubic-bezier(0.22,1,0.36,1) both' }}
            >
              {slide.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div
            key={`ctas-${current}`}
            className="flex flex-col sm:flex-row gap-3 mt-8 justify-center lg:justify-start"
            style={{ animation: 'heroFadeUp 0.75s 0.18s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            <Link
              href={slide.cta.href}
              className="group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-white text-sm transition-all duration-300 shadow-lg active:scale-[0.97]"
              style={{
                background: `linear-gradient(135deg, ${slide.accentColor}, ${slide.accentColor}cc)`,
                boxShadow: `0 8px 32px ${slide.accentColor}40`,
              }}
            >
              {slide.cta.label}
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-slate-300 border border-white/15 hover:border-white/30 hover:text-white hover:bg-white/5 transition-all duration-300 active:scale-[0.97]"
            >
              <span className="material-symbols-outlined text-[18px] text-cyan-400">calendar_today</span>
              {slide.ctaSecondary.label}
            </button>
          </div>

          {/* Stats row */}
          <div
            key={`stats-${current}`}
            className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10 justify-center lg:justify-start"
            style={{ animation: 'heroFadeUp 0.8s 0.25s cubic-bezier(0.22,1,0.36,1) both' }}
          >
            {slide.stats.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                {i > 0 && <div className="w-px h-8 bg-white/10" />}
                <div>
                  <p className="text-2xl font-extrabold text-white leading-none">{s.value}</p>
                  <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image ── */}
        <div
          className="flex-shrink-0 w-full lg:w-[45%]"
          style={{ animation: 'heroScaleIn 0.8s 0.1s cubic-bezier(0.22,1,0.36,1) both' }}
        >
          <div className="relative">
            {/* Glowing border frame */}
            <div
              className="absolute -inset-0.5 rounded-2xl lg:rounded-3xl blur-sm opacity-60 transition-colors duration-1000"
              style={{ background: `linear-gradient(135deg, ${slide.accentColor}80, transparent 60%)` }}
            />

            {/* Image card */}
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl aspect-[16/10]">
              {/* Slide images with crossfade */}
              {slides.map((s, i) => (
                <Image
                  key={i}
                  src={s.image}
                  alt={s.title}
                  fill
                  priority={i === 0}
                  className="object-cover transition-opacity duration-700"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}

              {/* Inner vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Floating badge on image */}
              <div
                className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl backdrop-blur-md border border-white/20 flex items-center gap-3"
                style={{ background: 'rgba(10,15,30,0.6)' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: `${slide.accentColor}30`, border: `1px solid ${slide.accentColor}50` }}
                >
                  <span className="material-symbols-outlined text-white text-[18px]">school</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">{slide.tag}</p>
                  <p className="text-slate-400 text-[10px] mt-0.5">Universal ITI Global • Amritsar, Punjab</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-[10px] font-semibold">Enrolling</span>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div
              className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 bg-white rounded-xl shadow-xl p-3 lg:p-4 flex items-center gap-3 border border-slate-100"
              style={{ animation: 'heroFloat 4s ease-in-out infinite' }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${slide.accentColor}15` }}
              >
                <span className="material-symbols-outlined text-[20px]" style={{ color: slide.accentColor }}>verified</span>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 whitespace-nowrap">Govt. Certified</p>
                <p className="text-[10px] text-slate-400">NSDC · PMKVY · NULM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: nav + progress ── */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-10 py-4 flex items-center gap-6">
          {/* Slide dots */}
          <div className="flex gap-2 flex-1">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                style={{ width: i === current ? '40px' : '16px', background: 'rgba(255,255,255,0.15)' }}
              >
                {i === current && (
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: slide.accentColor,
                      transition: 'width 0.1s linear',
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Slide counter */}
          <p className="text-slate-500 text-xs font-mono tabular-nums">
            <span className="text-white font-bold">{String(current + 1).padStart(2, '0')}</span>
            {' / '}
            {String(slides.length).padStart(2, '0')}
          </p>

          {/* Prev / Next */}
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/50 transition-all active:scale-90"
            >
              <span className="material-symbols-outlined text-[18px]">west</span>
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center text-white transition-all active:scale-90"
              style={{ backgroundColor: slide.accentColor }}
            >
              <span className="material-symbols-outlined text-[18px]">east</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <CourseApplyModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        courseName="General Demo Class"
        courseId="demo-class"
      />

      {/* Keyframe definitions */}
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroScaleIn {
          from { opacity: 0; transform: scale(0.94); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}