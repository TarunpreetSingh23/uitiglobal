
'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedEmail = email.trim();
    if (!trimmedEmail || status === 'loading') return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage(
          data.message ||
            'Thank you for subscribing to course updates!'
        );
        setEmail('');
      } else if (res.status === 409) {
        setStatus('duplicate');
        setMessage(
          data.message ||
            'You are already registered for updates.'
        );
      } else {
        setStatus('error');
        setMessage(
          data.message || 'Something went wrong. Please try again.'
        );
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setMessage('Could not connect. Please try again.');
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setMessage('');
    setEmail('');
  };

  return (
    <section className="w-full border-t border-slate-200 bg-slate-100/70 py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.9fr)] lg:gap-12">

            {/* Left: Newsletter Content */}
            <div className="w-full min-w-0">
              <span className="mb-4 inline-block rounded-full border border-cyan-200 bg-cyan-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-700">
                Stay Informed
              </span>

              <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                Subscribe to Course &amp; Admission Alerts
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Receive updates about new training batches, ITI
                admissions, practical workshops, and technical
                seminars at Universal Institute, Amritsar.
              </p>
            </div>

            {/* Right: Subscription Form */}
            <div className="w-full min-w-0">
              {status === 'success' ? (
                <div
                  role="status"
                  className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-center"
                >
                  <span className="material-symbols-outlined mb-2 block text-3xl text-emerald-600">
                    check_circle
                  </span>

                  <h3 className="font-semibold text-emerald-950">
                    Subscribed Successfully!
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-emerald-700">
                    {message}
                  </p>

                  <button
                    type="button"
                    onClick={resetForm}
                    className="mt-4 text-sm font-semibold text-cyan-700 hover:underline"
                  >
                    Subscribe another email
                  </button>
                </div>
              ) : (
                <>
                  <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col gap-3 sm:flex-row"
                  >
                    <div className="relative min-w-0 flex-1">
                      <span className="material-symbols-outlined pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                        mail
                      </span>

                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        autoComplete="email"
                        required
                        disabled={status === 'loading'}
                        className="block w-full min-w-0 rounded-lg border border-slate-300 bg-slate-50 py-3.5 pl-11 pr-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-cyan-600 focus:bg-white focus:ring-2 focus:ring-cyan-600/20 disabled:opacity-60"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-cyan-700 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {status === 'loading'
                        ? 'Subscribing...'
                        : 'Get Alerts'}

                      {status !== 'loading' && (
                        <span className="material-symbols-outlined text-lg">
                          arrow_forward
                        </span>
                      )}
                    </button>
                  </form>

                  {(status === 'error' ||
                    status === 'duplicate') &&
                    message && (
                      <div
                        role="alert"
                        className={`mt-3 rounded-lg border p-3 text-sm leading-6 ${
                          status === 'duplicate'
                            ? 'border-amber-200 bg-amber-50 text-amber-800'
                            : 'border-red-200 bg-red-50 text-red-800'
                        }`}
                      >
                        {message}
                      </div>
                    )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
