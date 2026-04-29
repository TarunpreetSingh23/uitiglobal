'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    badge: 'ESTABLISHED 1993',
    title: 'Advancing the\nFuture of IT',
    subtitle: 'Empowering the next generation of technology leaders through world-class training, industrial partnerships, and innovative computing research.',
    cta: { label: 'Explore Programs', href: '/courses' },
    cta2: { label: 'Virtual Tour', href: '/about' },
    image: '/assets/f75c2308de23c422c26dc222cf22584e.png',
    stat: { value: '98%', label: 'Graduate Employment Rate' },
    accent: 'from-cyan-600/20 to-blue-600/10',
  },
  {
    badge: 'AI & DATA SCIENCE',
    title: 'Machine Learning\nfor the Real World',
    subtitle: 'Dive deep into predictive modeling, neural networks, and the critical ethical frameworks of automated decision systems.',
    cta: { label: 'View ML Programs', href: '/courses' },
    cta2: { label: 'Learn More', href: '/about' },
    image: '/assets/940e06dfe14e8611b57bf89a101b66d6.png',
    stat: { value: '45K+', label: 'Alumni Worldwide' },
    accent: 'from-violet-600/20 to-purple-600/10',
  },
  {
    badge: 'CYBERSECURITY TRACK',
    title: 'Defend the\nDigital World',
    subtitle: 'Protect global infrastructure through advanced penetration testing, threat intelligence, and modern encryption protocols.',
    cta: { label: 'Explore Security', href: '/courses' },
    cta2: { label: 'Meet Instructors', href: '/about' },
    image: '/assets/6d145504b16d2284f5092f5b84e31a4a.png',
    stat: { value: '500+', label: 'Industry Partners' },
    accent: 'from-emerald-600/20 to-teal-600/10',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((index) => {
    if (animating || index === current) return;
    setAnimating(true);
    setPrev(current);
    setCurrent(index);
    setTimeout(() => {
      setPrev(null);
      setAnimating(false);
    }, 700);
  }, [animating, current]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prevSlide = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = slides[current];

  return (
    <section
      className="relative overflow-hidden bg-white py-16 lg:py-24"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Soft Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-50/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Text Column - 60% Width */}
          <div className="lg:w-[60%] space-y-8 animate-fade-in">
            {/* Badge */}
            <div
              key={`badge-${current}`}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-50 text-cyan-700 rounded-full text-xs font-bold tracking-widest uppercase border border-cyan-100 animate-fade-in-up"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block animate-pulse" />
              {slide.badge}
            </div>

            {/* Headline & Subtitle */}
            <div key={`content-${current}`} className="space-y-6">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-slate-900 tracking-tight animate-fade-in-up"
                style={{ animationDelay: '100ms' }}
              >
                {slide.title.split('\n').map((line, i) => (
                  <span key={i} className="block">
                    {i === 1 ? <span className="text-cyan-600">{line}</span> : line}
                  </span>
                ))}
              </h1>
              <p
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl animate-fade-in-up"
                style={{ animationDelay: '200ms' }}
              >
                {slide.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div
              key={`ctas-${current}`}
              className="flex flex-wrap gap-4 pt-2 animate-fade-in-up"
              style={{ animationDelay: '300ms' }}
            >
              <Link
                href={slide.cta.href}
                className="group px-8 py-4 bg-cyan-600 text-white font-bold rounded-xl hover:bg-cyan-500 transition-all duration-300 shadow-xl shadow-cyan-200 flex items-center gap-2"
              >
                {slide.cta.label}
                <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link
                href={slide.cta2.href}
                className="px-8 py-4 border-2 border-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-50 hover:border-slate-200 transition-all duration-300"
              >
                {slide.cta2.label}
              </Link>
            </div>

            {/* Quick Stats */}
            <div
              key={`stats-${current}`}
              className="flex items-center gap-8 lg:gap-12 pt-8 border-t border-slate-100 animate-fade-in-up"
              style={{ animationDelay: '400ms' }}
            >
              <div>
                <p className="text-2xl font-bold text-slate-900">{slide.stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{slide.stat.label}</p>
              </div>
              <div className="w-px h-8 bg-slate-100" />
              <div>
                <p className="text-2xl font-bold text-slate-900">30+</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Years Experience</p>
              </div>
              <div className="w-px h-8 bg-slate-100" />
              <div>
                <p className="text-2xl font-bold text-slate-900">Global</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Alumni</p>
              </div>
            </div>
          </div>

          {/* Right Image Column - 40% Width & Aspect-Video */}
          <div className="lg:w-[40%] relative">
            <div className="relative group">
              {/* Background card for depth */}
              <div className="absolute -inset-4 bg-slate-50 rounded-[2rem] rotate-3 -z-10 group-hover:rotate-1 transition-transform duration-500" />
              
              {/* Main Image Container - Horizontal Rectangle */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                {prev !== null && (
                  <Image
                    key={`prev-${prev}`}
                    src={slides[prev].image}
                    alt="Previous slide"
                    fill
                    className="object-cover animate-fade-out"
                  />
                )}
                <Image
                  key={`curr-${current}`}
                  src={slides[current].image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover animate-fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -right-4 bg-white p-4 lg:p-6 rounded-2xl shadow-2xl border border-slate-50 animate-float">
                <p className="text-2xl lg:text-3xl font-black text-cyan-600">{slide.stat.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{slide.stat.label}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Section */}
        <div className="mt-16 lg:mt-20 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === current ? 'w-12 bg-cyan-600' : 'w-4 bg-slate-200 hover:bg-slate-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-slate-200 text-slate-400 hover:text-cyan-600 hover:border-cyan-600 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">west</span>
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-slate-900 text-white hover:bg-cyan-600 transition-all active:scale-95"
            >
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
        </div>
      </div>

      {/* Auto-play progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-50">
        {!paused && (
          <div key={current} className="h-full bg-cyan-600/30 animate-progress-bar" />
        )}
      </div>
    </section>
  );
}