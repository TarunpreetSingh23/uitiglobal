'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function CourseApplyModal({ courseId, courseName, isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [mounted, setMounted] = useState(false);

  // OTP State
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [otpError, setOtpError] = useState('');

  useEffect(() => { setMounted(true); }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !mounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Only allow digits and max 10
      const cleaned = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: cleaned });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSendOtp = async () => {
    if (!formData.email) {
      setOtpError('Please enter an email first');
      return;
    }
    setIsSendingOtp(true);
    setOtpError('');
    try {
      const res = await fetch('/api/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email }),
      });
      const data = await res.json();
      if (res.ok) {
        setOtpSent(true);
      } else {
        setOtpError(data.message || 'Failed to send OTP');
      }
    } catch (err) {
      setOtpError('Error sending OTP');
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      setOtpError('Please enter OTP');
      return;
    }
    setIsVerifyingOtp(true);
    setOtpError('');
    try {
      const res = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email, otp }),
      });
      const data = await res.json();
      if (res.ok) {
        setOtpVerified(true);
        setOtpError('');
      } else {
        setOtpError(data.message || 'Invalid OTP');
      }
    } catch (err) {
      setOtpError('Verification failed');
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.phone.length !== 10) {
      setErrorMessage('Phone number must be exactly 10 digits');
      setStatus('error');
      return;
    }

    if (!otpVerified) {
      setErrorMessage('Please verify your email with OTP first');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, courseId, courseName }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to connect to the server.');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setErrorMessage('');
    setFormData({ name: '', email: '', phone: '' });
    setOtp('');
    setOtpSent(false);
    setOtpVerified(false);
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-900/65 backdrop-blur-sm z-0"
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[520px] bg-white rounded-2xl md:rounded-[24px] shadow-2xl overflow-hidden my-auto transform transition-all">
        {/* Header */}
        <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 p-6 md:p-8 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/15 hover:bg-white/25 border-none rounded-full w-8 h-8 flex items-center justify-center text-white cursor-pointer transition-colors"
          >
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 md:w-11 md:h-11 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-xl md:text-2xl">school</span>
            </div>
            <div>
              <p className="text-[10px] md:text-[11px] font-bold tracking-widest uppercase opacity-80 mb-0.5">Book your free demo class</p>
              <h2 className="text-xl md:text-2xl font-extrabold m-0 leading-tight">Book Now</h2>
            </div>
          </div>

          <div className="mt-4 bg-white/10 rounded-xl p-3 md:p-4 text-xs md:text-sm border border-white/5">
            <span className="opacity-75">Course: </span>
            <span className="font-semibold">{courseName}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          {status === 'success' ? (
            <div className="text-center py-4">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6">
                <span className="material-symbols-outlined text-4xl md:text-5xl text-emerald-600">check_circle</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
              <p className="text-slate-500 text-sm md:text-base mb-8">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. We'll review your application and reach out to you shortly.
              </p>
              <button
                onClick={handleReset}
                className="w-full py-3.5 md:py-4 bg-cyan-600 hover:bg-cyan-700 text-white border-none rounded-xl font-bold text-base cursor-pointer shadow-lg shadow-cyan-100 transition-all active:scale-[0.98]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {status === 'error' && (
                <div className="bg-red-50 border border-red-100 rounded-xl p-3.5 flex items-center gap-2.5 text-red-600 text-sm font-medium animate-shake">
                  <span className="material-symbols-outlined text-lg">error</span>
                  {errorMessage}
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-xs md:text-[13px] font-semibold text-slate-700 mb-1.5 ml-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm md:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all placeholder:text-slate-400"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs md:text-[13px] font-semibold text-slate-700 mb-1.5 ml-1">Email Address *</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={otpSent || otpVerified}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`flex-1 px-4 py-3 border rounded-xl text-sm md:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all placeholder:text-slate-400 ${
                      (otpSent || otpVerified) ? 'bg-slate-100 border-slate-200 cursor-not-allowed' : 'bg-slate-50 border-slate-200'
                    }`}
                  />
                  {!otpVerified && (
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      disabled={isSendingOtp || !formData.email}
                      className="px-5 py-3 bg-cyan-600 hover:bg-cyan-700 disabled:bg-slate-400 text-white rounded-xl font-semibold text-xs md:text-sm transition-all shadow-sm whitespace-nowrap active:scale-[0.98]"
                    >
                      {isSendingOtp ? 'Sending...' : otpSent ? 'Resend Code' : 'Send OTP'}
                    </button>
                  )}
                </div>
              </div>

              {/* OTP Field */}
              {otpSent && !otpVerified && (
                <div className="bg-cyan-50/50 border border-cyan-100 rounded-xl p-4 md:p-5 space-y-3.5">
                  <label className="block text-xs md:text-[13px] font-bold text-cyan-800 mb-1.5 text-center sm:text-left">Enter 6-Digit OTP *</label>
                  <div className="flex flex-col sm:flex-row gap-2.5">
                    <input
                      type="text"
                      maxLength="6"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                      placeholder="XXXXXX"
                      className="flex-1 px-4 py-3 bg-white border border-cyan-400 rounded-xl text-lg md:text-xl font-bold tracking-[6px] text-center text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      disabled={isVerifyingOtp || otp.length !== 6}
                      className="px-6 py-3 bg-cyan-700 hover:bg-cyan-800 disabled:bg-slate-400 text-white rounded-xl font-bold text-xs md:text-sm transition-all shadow-md active:scale-[0.98]"
                    >
                      {isVerifyingOtp ? 'Verifying...' : 'Verify'}
                    </button>
                  </div>
                  {otpError && <p className="text-red-500 text-[11px] md:text-xs mt-1 text-center font-medium">{otpError}</p>}
                </div>
              )}

              {/* Verified Badge */}
              {otpVerified && (
                <div className="flex items-center gap-2.5 text-emerald-600 text-xs md:text-sm font-bold bg-emerald-50 border border-emerald-100 px-4 py-2.5 rounded-xl">
                  <span className="material-symbols-outlined text-lg">verified</span>
                  Email Verified Successfully
                </div>
              )}

              {/* Phone */}
              <div>
                <label className="block text-xs md:text-[13px] font-semibold text-slate-700 mb-1.5 ml-1">Phone Number (10 digits) *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength="10"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm md:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all placeholder:text-slate-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'loading' || !otpVerified}
                  className={`w-full py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2.5 shadow-lg transition-all active:scale-[0.98] ${
                    (status === 'loading' || !otpVerified) 
                      ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none' 
                      : 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-cyan-100'
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      {otpVerified ? 'Submit Application' : 'Verify Email to Submit'}
                      <span className="material-symbols-outlined text-xl">send</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] md:text-xs text-slate-400 mt-4">
                Your information is kept confidential and secure.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>

  );

  return createPortal(modalContent, document.body);
}
