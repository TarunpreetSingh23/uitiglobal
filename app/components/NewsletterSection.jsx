'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error | duplicate
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(data.message);
        setEmail('');
      } else if (res.status === 409) {
        setStatus('duplicate');
        setMessage(data.message);
      } else {
        setStatus('error');
        setMessage(data.message || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setMessage('Could not connect. Please try again.');
    }
  };

  return (
    <section className="bg-[#131b2e] py-16 md:py-20 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* ── Left: Copy ── */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse" />
                <span className="text-cyan-400 text-xs font-semibold tracking-widest uppercase">Newsletter</span>
              </div>

              <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Ready to shape{' '}
                <span className="text-cyan-400">your future?</span>
              </h2>

              <p className="mt-5 text-slate-400 text-base leading-relaxed w-full mx-auto lg:mx-0">
                Join thousands of learners. Get updates on new courses, intake dates,
                scholarships, and exclusive tech insights — straight to your inbox.
              </p>

              {/* Social proof */}
              <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                <div className="flex -space-x-2">
                  {['#0891b2', '#0e7490', '#164e63', '#083344'].map((c, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#131b2e] flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ backgroundColor: c }}
                    >
                      {['AK', 'RP', 'SM', '+'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-slate-400 text-sm">
                  <span className="text-white font-semibold">500+</span> subscribers already
                </p>
              </div>
            </div>

            {/* ── Right: Form ── */}
            <div className="w-full lg:w-auto lg:min-w-[420px]">
              {status === 'success' ? (
                /* Success State */
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="material-symbols-outlined text-cyan-400 text-3xl">mark_email_read</span>
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">You're in! 🎉</h3>
                  <p className="text-slate-400 text-sm">
                    Check your inbox — a welcome email is on its way.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-5 text-cyan-400 text-xs font-medium hover:text-white transition-colors underline underline-offset-2"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                /* Form State */
                <div>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="relative">
                      <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-[20px]">mail</span>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                        disabled={status === 'loading'}
                        className="w-full bg-white/5 border border-white/10 text-white placeholder:text-slate-500 pl-11 pr-4 py-4 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all duration-200 disabled:opacity-50"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-cyan-800 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-900/30 flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Sign Up Free
                          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Inline status messages */}
                  {(status === 'error' || status === 'duplicate') && message && (
                    <div className={`mt-3 flex items-center gap-2 px-4 py-3 rounded-xl text-sm ${
                      status === 'duplicate'
                        ? 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
                        : 'bg-red-500/10 border border-red-500/20 text-red-400'
                    }`}>
                      <span className="material-symbols-outlined text-[18px]">
                        {status === 'duplicate' ? 'info' : 'error'}
                      </span>
                      {message}
                    </div>
                  )}

                  <p className="text-slate-500 text-xs mt-4 text-center">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
