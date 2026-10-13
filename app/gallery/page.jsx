'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryItems = [
  // ── Computer & IT Labs ──
  {
    src: '/assets/f75c2308de23c422c26dc222cf22584e.png',
    title: 'Universal institute',
    category: 'Universal institute',
    desc: 'Students engaged in daily programming exercises and practical hands-on software development.',
  },
  {
    src: '/assets/Placement.webp',
    title: 'Placement Assistance',
    category: 'Placement Assistance',
    desc: 'We assist students by conducting mock interviews and enhancing their professional communication and interview-taking skills to secure meaningful employment opportunities.',
  },
  {
    src: '/assets/classroom.jpg',
    title: 'Classroom',
    category: 'Classroom',
    desc: 'At Universal Institute , we ensure every doubt is addressed through dedicated doubt-solving sessions. Our instructors work closely with students to clarify concepts, explain difficult problems, and reinforce learning.',
  },
  {
    src: '/assets/68bd5fcdb30df959c7fbd697a0326b61.png',
    title: 'Backend Systems & API Architecture',
    category: 'Computer & IT Labs',
    desc: 'REST API design, database querying, server deployment, and Git version control.',
  },

  // ── AI & Data Science ──
  {
    src: '/assets/940e06dfe14e8611b57bf89a101b66d6.png',
    title: 'Artificial Intelligence & Neural Networks',
    category: 'AI & Data Science',
    desc: 'Training machine learning models, applied computer vision, and NLP frameworks.',
  },
  {
    src: '/assets/11650e2af719f42aded6ae5c21073389.png',
    title: 'Data Analytics & Power BI Lab',
    category: 'AI & Data Science',
    desc: 'Building executive KPI dashboards, DAX queries, and SQL relational models.',
  },
  {
    src: '/assets/AI.jpg',
    title: 'Applied AI Engineering',
    category: 'AI & Data Science',
    desc: 'Hands-on exploration of modern machine intelligence, algorithms, and prompt engineering.',
  },
  {
    src: '/assets/data_analysis.jpg',
    title: 'Exploratory Data Analysis Workshop',
    category: 'AI & Data Science',
    desc: 'Statistical computing, data wrangling with Python, and interactive business charts.',
  },

  // ── ITI Technical Trades ──
  {
    src: '/assets/elec.webp',
    title: 'ITI Electrician Practical Lab',
    category: 'ITI Technical Trades',
    desc: 'Electrical wiring, motor connections, circuit breakers, and industrial safety panels.',
  },
  {
    src: '/assets/auto.jpeg',
    title: 'Automobile (MMC) Trade Workshop',
    category: 'ITI Technical Trades',
    desc: 'Hands-on automotive mechanics, engine disassembly, transmission, and diagnostic training.',
  },
  {
    src: '/assets/diesal.webp',
    title: 'Diesel Mechanic Workshop',
    category: 'ITI Technical Trades',
    desc: 'Diesel engine maintenance, fuel injection systems, and heavy mechanical systems.',
  },
  {
    src: '/assets/refri.jpg',
    title: 'Refrigeration & AC (RAC) Lab',
    category: 'ITI Technical Trades',
    desc: 'Refrigerant cycles, compressor servicing, HVAC electrical wiring, and cooling coils.',
  },
  {
    src: '/assets/plum.jpg',
    title: 'Plumbing Trade Workshop',
    category: 'ITI Technical Trades',
    desc: 'Piping layouts, water systems, joint soldering, valves, and domestic installation.',
  },
  {
    src: '/assets/weld.jpg',
    title: 'Welding Trade Practical Workshop',
    category: 'ITI Technical Trades',
    desc: 'Arc welding, gas welding, metal fabrication techniques, and workshop protection.',
  },
  {
    src: '/assets/6d145504b16d2284f5092f5b84e31a4a.png',
    title: 'Hardware & Circuit Diagnostics',
    category: 'ITI Technical Trades',
    desc: 'Practical testing instruments, multimeter diagnostics, and system maintenance.',
  },

  // ── Classroom & Mentorship ──
  {
    src: '/assets/1a96fcb6b44465692a8bc2aeaebb1aee.png',
    title: 'Guided Project Mentorship',
    category: 'Classroom & Mentorship',
    desc: 'One-on-one code reviews, architectural guidance, and student problem solving.',
  },
  {
    src: '/assets/3e9f5fe243010ccb744ddd86397c78af.png',
    title: 'Collaborative Debugging Sessions',
    category: 'Classroom & Mentorship',
    desc: 'Mentors helping trainees troubleshoot runtime exceptions and database connections.',
  },
  {
    src: '/assets/6056cd48bb04b46bbdac829476e798ab.png',
    title: 'Interactive Technical Lectures',
    category: 'Classroom & Mentorship',
    desc: 'Structured classroom conceptual learning preceding lab implementation.',
  },
  {
    src: '/assets/65c3a2d5d8fdf080e3b11ed40e0b8fad.png',
    title: 'Software Development Methodologies',
    category: 'Classroom & Mentorship',
    desc: 'Agile sprints, task delegation, documentation, and version control best practices.',
  },
  {
    src: '/assets/d1325f38b1a8c15eb1bb0e0ccc29c297.png',
    title: 'Hands-on Programming Assignment',
    category: 'Classroom & Mentorship',
    desc: 'Focused student coding time ensuring algorithmic mastery and syntax retention.',
  },
  {
    src: '/assets/b9445e475dd06dd0b321f6c1059b631b.png',
    title: 'Campus Computer Lab Infrastructure',
    category: 'Classroom & Mentorship',
    desc: 'Modern workstations equipped with high-speed internet, IDEs, and local servers.',
  },
];

const categories = [
  'All Photos',
  'Computer & IT Labs',
  'AI & Data Science',
  'ITI Technical Trades',
  'Classroom & Mentorship',
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All Photos');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems =
    activeCategory === 'All Photos'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const showNext = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Breadcrumb & Titles */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-100/70 text-[#007595] rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[15px]">photo_library</span>
            Campus & Practical Training Gallery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3">
            Institute & Training Photo Gallery
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore authentic photos of our computer training laboratories, ITI vocational trade workshops, student projects, and classroom mentorship at Universal Institute, Amritsar (Opposite Khalsa College for Women).
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? 'bg-[#007595] text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-300 hover:border-[#007595] hover:text-[#007595]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Image Count Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 pb-2 border-b border-slate-200">
          <span>
            Showing <strong>{filteredItems.length}</strong> photos in {activeCategory}
          </span>
          <span className="text-[#007595] font-medium">Click any photo to enlarge</span>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#007595] transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/90 text-[#007595] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[22px]">zoom_in</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-[#007595] border border-slate-200 shadow-2xs">
                  {item.category}
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#007595] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Universal Institute Campus</span>
                  <span className="text-[#007595] font-semibold">Amritsar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              Want to visit our campus and practical labs in person?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Located Opposite Khalsa College for Women, Amritsar. Walk in between 9:00 AM and 6:00 PM for live counseling.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#007595] hover:bg-[#005e77] text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
            >
              Get Campus Directions
            </Link>
            <Link
              href="/courses"
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>

      </div>

      {/* ── Interactive Lightbox Modal ── */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Lightbox Header */}
            <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-sm sm:text-base font-bold leading-tight">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close image modal"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Lightbox Image */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] bg-slate-950 w-full">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].title}
                fill
                className="object-contain"
              />
              {/* Prev / Next Buttons */}
              <button
                onClick={showPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                aria-label="Previous photo"
              >
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition-colors"
                aria-label="Next photo"
              >
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>

            {/* Lightbox Caption */}
            <div className="p-4 sm:p-5 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <p className="text-slate-600 sm:max-w-xl">
                {filteredItems[lightboxIndex].desc}
              </p>
              <div className="flex items-center gap-2 text-slate-400 font-mono">
                <span>{lightboxIndex + 1} / {filteredItems.length}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
