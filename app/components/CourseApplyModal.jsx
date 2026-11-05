
'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function CourseApplyModal({ courseName, isOpen, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const contacts = [
    {
      icon: 'call',
      label: 'Phone / WhatsApp',
      value: '+91 98150 39888',
      href: 'tel:+919815039888',
    },
    {
      icon: 'mail',
      label: 'Email',
      value: 'info@uniinstitute.in',
      href: 'mailto:info@uniinstitute.in',
    },
    {
      icon: 'location_on',
      label: 'Address',
      value: 'Universal Institute, Amritsar, Punjab, India',
      href: 'https://maps.google.com/?q=Universal+Institute+Amritsar',
    },
    {
      icon: 'schedule',
      label: 'Enquiry Hours',
      value: 'Mon – Sat, 9:00 AM – 6:00 PM',
      href: null,
    },
  ];

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5"
      style={{ width: '100vw', height: '100dvh' }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="course-modal-title"
        className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        style={{
          width: '100%',
          maxWidth: '460px',
          maxHeight: 'calc(100dvh - 24px)',
          flexShrink: 0,
        }}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-br from-cyan-600 to-cyan-800 px-5 py-5 sm:px-6 sm:py-6 text-white shrink-0">

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors"
          >
            <span className="material-symbols-outlined text-xl">
              close
            </span>
          </button>

          <div className="flex items-center gap-3 mb-3 pr-10">
            <div className="w-11 h-11 shrink-0 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">
                school
              </span>
            </div>

            <div className="min-w-0">
              <p className="text-[10px] sm:text-[11px] font-bold tracking-widest uppercase opacity-80">
                Enrol / Book a Demo
              </p>

              <h2
                id="course-modal-title"
                className="text-xl sm:text-2xl font-extrabold leading-tight"
              >
                Contact Us
              </h2>
            </div>
          </div>

          {courseName && (
            <div className="bg-white/10 rounded-xl px-4 py-3 text-sm border border-white/10">
              <span className="opacity-75">Course: </span>
              <span className="font-semibold break-words">
                {courseName}
              </span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto min-h-0">

          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
            Reach out through any of the following to enquire, book a free
            demo class, or get admission details.
          </p>

          {/* Contact Details */}
          <div className="space-y-3">

            {contacts.map(({ icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-3 sm:gap-4 bg-slate-50 border border-slate-200 rounded-xl px-3 sm:px-4 py-3"
              >
                <span className="material-symbols-outlined text-cyan-600 text-[22px] mt-1 shrink-0">
                  {icon}
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                    {label}
                  </p>

                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('https') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-slate-900 hover:text-cyan-700 transition-colors break-words"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 break-words">
                      {value}
                    </p>
                  )}
                </div>
              </div>
            ))}

          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919815039888"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all active:scale-[0.98] shadow-sm"
          >
            <svg
              className="w-5 h-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>

            Chat on WhatsApp
          </a>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="mt-3 w-full py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 font-semibold text-sm rounded-xl transition-all"
          >
            Close
          </button>

        </div>
      </div>
    </div>,
    document.body
  );
}
