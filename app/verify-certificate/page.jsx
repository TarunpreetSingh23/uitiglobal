'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function VerifyCertificatePage() {
  const [certId, setCertId] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'verified' | 'not-found' | 'error'
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Auto-verify if id param is provided in URL
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlId = params.get('id');
      if (urlId) {
        setCertId(urlId);
        executeVerification(urlId);
      }
    }
  }, []);

  const executeVerification = async (idToVerify) => {
    const cleanId = (idToVerify || certId).trim().toUpperCase();
    if (!cleanId) {
      setErrorMessage('Please enter a valid certificate ID number.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    setResult(null);

    try {
      const res = await fetch('/api/certificates/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateId: cleanId }),
      });

      const data = await res.json();

      if (res.ok && data.verified) {
        setResult(data.certificate);
        setStatus('verified');
      } else if (res.status === 404 || (data && !data.verified)) {
        setStatus('not-found');
        setErrorMessage(
          data?.message ||
            `No verified certificate record found matching "${cleanId}". Please verify the certificate number or contact the administration office.`
        );
      } else {
        setStatus('error');
        setErrorMessage(data?.error || data?.message || 'Verification could not be completed. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network connection error. Please check your internet connection and try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeVerification(certId);
  };

  const handleSampleFill = (sampleId) => {
    setCertId(sampleId);
    executeVerification(sampleId);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 md:py-16 font-['Space_Grotesk']">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">

        {/* Header Breadcrumb & Titles */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-[15px]">verified_user</span>
            Official Registry Verification
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Certificate Verification System
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Verify the authenticity of industrial training, technical course, and trade certificates issued by Universal Institute, Amritsar (Managed by Aagaz Society).
          </p>
        </div>

        {/* Verification Input Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="certificateId" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Enter Certificate ID Number <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
                    badge
                  </span>
                  <input
                    id="certificateId"
                    type="text"
                    required
                    value={certId}
                    onChange={(e) => setCertId(e.target.value.toUpperCase())}
                    placeholder="e.g. UI-2025-1001"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-sm md:text-base font-mono uppercase tracking-wider transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="sm:w-auto px-7 py-3 bg-cyan-700 hover:bg-cyan-800 active:scale-98 text-white font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 disabled:bg-cyan-400 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[18px]">search_check</span>
                      Verify Certificate
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Helper Samples */}
            {/* <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-500">
              <span>Sample test IDs:</span>
              <button
                type="button"
                onClick={() => handleSampleFill('UI-2025-1001')}
                className="text-cyan-700 hover:underline font-mono bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200"
              >
                UI-2025-1001
              </button>
              <button
                type="button"
                onClick={() => handleSampleFill('UI-2025-1002')}
                className="text-cyan-700 hover:underline font-mono bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200"
              >
                UI-2025-1002
              </button>
              <button
                type="button"
                onClick={() => handleSampleFill('UI-2025-1003')}
                className="text-cyan-700 hover:underline font-mono bg-cyan-50 px-2 py-0.5 rounded border border-cyan-200"
              >
                UI-2025-1003
              </button>
            </div> */}
          </form>
        </div>

        {/* Status: Verified Certificate Card */}
        {status === 'verified' && result && (
          <div className="bg-white rounded-2xl border-2 border-emerald-500/40 shadow-md overflow-hidden mb-8 animate-fade-in-up">
            {/* Verification Banner */}
            <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">verified</span>
                </div>
                <div>
                  <h2 className="text-base font-bold text-emerald-950">Official Certificate Verified</h2>
                  <p className="text-xs text-emerald-700">Authenticated record in Universal Institute Central Registry</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider self-start sm:self-auto">
                Status: {result.status}
              </span>
            </div>

            {/* Certificate Details Grid */}
            <div className="p-6 sm:p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Student / Candidate Name</span>
                  <span className="text-xl font-bold text-slate-900">{result.recipientName}</span>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Certificate ID Number</span>
                  <span className="text-xl font-bold font-mono text-cyan-700">{result.certificateId}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-slate-100">
                <div className="sm:col-span-2">
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Course / Training Program</span>
                  <span className="text-base font-semibold text-slate-800">{result.courseName}</span>
                  <p className="text-xs text-slate-500 mt-0.5">{result.credentialType}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Duration</span>
                  <span className="text-base font-medium text-slate-800">{result.duration}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Issue Date</span>
                  <span className="text-sm font-medium text-slate-800">
                    {result.issueDate ? new Date(result.issueDate).toLocaleDateString('en-IN', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    }) : 'Recorded'}
                  </span>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Issued By</span>
                  <span className="text-sm font-medium text-slate-800">{result.institution}</span>
                  <p className="text-xs text-slate-500">{result.management}</p>
                </div>
                <div>
                  <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Accreditation Standard</span>
                  <span className="text-sm font-semibold text-slate-800">{result.accreditation}</span>
                  <p className="text-xs text-slate-500">Quality Management System</p>
                </div>
              </div>
            </div>

            {/* Verification Footer Notice */}
            <div className="bg-slate-50 px-6 py-4 border-t border-slate-100 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
              <span>This record confirms the authentic completion of required practical training.</span>
              <button
                onClick={() => window.print()}
                className="text-cyan-700 hover:text-cyan-900 font-medium inline-flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[16px]">print</span>
                Print Verification
              </button>
            </div>
          </div>
        )}

        {/* Status: Not Found / Invalid */}
        {status === 'not-found' && (
          <div className="bg-white rounded-2xl border border-amber-200 p-6 sm:p-8 mb-8 text-center animate-fade-in-up">
            <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[28px]">search_off</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Certificate Not Found</h3>
            <p className="text-sm text-slate-600 max-w-lg mx-auto mb-6">
              {errorMessage}
            </p>
            <div className="text-xs text-slate-500 bg-amber-50/70 border border-amber-100 rounded-xl p-4 max-w-lg mx-auto">
              <p className="font-semibold text-slate-700 mb-1">Need verification assistance?</p>
              <p>Please contact our registry office with the student details:</p>
              <p className="mt-2 text-cyan-800 font-medium">
                Phone: +91 9815039888 • Email: info@uniinstitute.in
              </p>
            </div>
          </div>
        )}

        {/* Status: General Error */}
        {status === 'error' && (
          <div className="bg-white rounded-2xl border border-red-200 p-6 sm:p-8 mb-8 text-center animate-fade-in-up">
            <div className="w-12 h-12 rounded-full bg-red-100 text-red-700 flex items-center justify-center mx-auto mb-4">
              <span className="material-symbols-outlined text-[28px]">error</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Verification Notice</h3>
            <p className="text-sm text-red-600 max-w-lg mx-auto mb-4">{errorMessage}</p>
          </div>
        )}

        {/* Information & Security Notice */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 text-xs text-slate-600 space-y-3">
          <h4 className="font-bold uppercase tracking-wider text-slate-800 text-xs flex items-center gap-1.5">
            <span className="material-symbols-outlined text-cyan-600 text-[16px]">security</span>
            Security & Registry Policy
          </h4>
          <p className="leading-relaxed">
            Universal Institute maintains an electronic ledger for student certificates to protect students, employers, and recruiting organizations against fraudulent credentials.
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-500">
            <li>Only certificates that have been officially issued and marked <strong>Valid</strong> in the database will display a verified badge.</li>
            <li>No private student identities, personal government ID documents, or sensitive data are exposed through this public lookup.</li>
            <li>Institutes and corporate HR teams can also request official email verification via <a href="mailto:info@uniinstitute.in" className="text-cyan-700 underline">info@uniinstitute.in</a>.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
