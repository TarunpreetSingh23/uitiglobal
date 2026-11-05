'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { findCertificate } from '@/data/certificates';

export default function VerifyCertificatePage() {
  const [certId, setCertId] = useState('');
  const [status, setStatus] = useState('idle');
  const [result, setResult] = useState(null);
  const resultRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const id = new URLSearchParams(window.location.search).get('id');
    if (id) { setCertId(id); verify(id); }
  }, []);

  useEffect(() => {
    if (status !== 'idle') resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [status]);

  function verify(id) {
    const cert = findCertificate(id ?? certId);
    setResult(cert || null);
    setStatus(cert ? 'verified' : 'not-found');
  }

  function handleSubmit(e) { e.preventDefault(); verify(certId); }
  function handleReset() { setCertId(''); setStatus('idle'); setResult(null); }
  function handleDownload() {
    if (!result?.image) return;
    const a = document.createElement('a');
    a.href = result.image;
    a.download = `Certificate-${result.certificateNumber}-${result.studentName}.png`;
    a.click();
  }
  function handlePrint() { window.print(); }

  return (
    <>
      {/* Print styles — only show #cert-result, hide everything else */}
      <style>{`
        @media print {
          body > * { display: none !important; }
          #printable-cert { display: block !important; position: static !important; }
          @page { margin: 1cm; }
        }
      `}</style>

      {/* Hidden print-only container that mirrors result details */}
      <div id="printable-cert" style={{ display: 'none' }}>
        {result && (
          <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
            <h2 style={{ color: '#059669', marginBottom: 4 }}>✔ Certificate Verified — Authentic Record</h2>
            <p style={{ color: '#555', marginTop: 0 }}>Universal Institute Central Registry</p>
            <hr style={{ margin: '12px 0' }} />
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <tbody>
                {[
                  ['Student Name', result.studentName],
                  ['Certificate Number', result.certificateNumber],
                  ['Course', result.course],
                  ['Duration', result.duration],
                  ['Issue Date', result.issueDate],
                  ['Institute', result.institute],
                  ['Managed By', result.managedBy],
                  ['Accreditation', 'ISO 9001:2015 Certified'],
                  ['Status', result.status],
                ].map(([label, val]) => (
                  <tr key={label} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '8px 12px 8px 0', fontWeight: 600, color: '#444', width: '40%' }}>{label}</td>
                    <td style={{ padding: '8px 0', color: '#111' }}>{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="bg-slate-50 min-h-screen py-10 md:py-16 font-['Space_Grotesk']">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-100 text-cyan-800 rounded-full text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[15px]">verified_user</span>
              Official Registry Verification
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
              Certificate Verification System
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Verify the authenticity of certificates issued by Universal Institute, Amritsar (Managed by Aagaz Society).
            </p>
          </div>

          {/* Input Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label htmlFor="certId" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Enter Certificate Number <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">badge</span>
                  <input
                    id="certId"
                    type="text"
                    required
                    value={certId}
                    onChange={(e) => setCertId(e.target.value)}
                    placeholder="e.g. 2601XXXXXXX"
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent text-sm md:text-base font-mono tracking-wider transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:w-auto px-7 py-3 bg-cyan-700 hover:bg-cyan-800 active:scale-95 text-white font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined text-[18px]">search_check</span>
                  Verify Certificate
                </button>
              </div>
            </form>
          </div>

          {/* Results */}
          <div ref={resultRef}>

            {/* ✅ Verified */}
            {status === 'verified' && result && (
              <div className="bg-white rounded-2xl border-2 border-emerald-400/50 shadow-md overflow-hidden mb-8 animate-fade-in-up">
                <div className="bg-emerald-50 border-b border-emerald-200 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[22px]">verified</span>
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-emerald-950">Certificate Verified — Authentic Record</h2>
                      <p className="text-xs text-emerald-700">Found in Universal Institute Central Registry</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider self-start sm:self-auto">
                    <span className="material-symbols-outlined text-[14px]">task_alt</span>
                    {result.status}
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Student / Candidate Name</span>
                      <span className="text-xl font-bold text-slate-900">{result.studentName}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Certificate Number</span>
                      <span className="text-xl font-bold font-mono text-cyan-700">{result.certificateNumber}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-slate-100">
                    <div className="sm:col-span-2">
                      <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Course / Training Program</span>
                      <span className="text-base font-semibold text-slate-800">{result.course}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Duration</span>
                      <span className="text-base font-medium text-slate-800">{result.duration}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-6 border-b border-slate-100">
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Issue Date</span>
                      <span className="text-sm font-medium text-slate-800">{result.issueDate}</span>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Issued By</span>
                      <span className="text-sm font-medium text-slate-800">{result.institute}</span>
                      <p className="text-xs text-slate-500 mt-0.5">{result.managedBy}</p>
                    </div>
                    <div>
                      <span className="text-xs uppercase font-semibold text-slate-400 block mb-1">Accreditation</span>
                      <span className="text-sm font-semibold text-slate-800">ISO 9001:2015 Certified</span>
                      <p className="text-xs text-slate-500 mt-0.5">Quality Management System</p>
                    </div>
                  </div>

                  {/* Certificate Image */}
                  <div>
                    <span className="text-xs uppercase font-semibold text-slate-400 block mb-3">Certificate Preview</span>
                    <div className="relative w-full rounded-xl border border-slate-200 overflow-hidden bg-slate-50 shadow-sm" style={{ aspectRatio: '1.414 / 1' }}>
                      <Image
                        src={result.image}
                        alt={`Certificate of ${result.studentName}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority
                      />
                    </div>

                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                      <button onClick={handleDownload} className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-sm rounded-xl transition-all shadow-sm active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">download</span>
                        Download Certificate
                      </button>
                      <button onClick={handlePrint} className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl transition-all shadow-sm active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">print</span>
                        Print Details
                      </button>
                      <button onClick={handleReset} className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-500 font-semibold text-sm rounded-xl transition-all shadow-sm active:scale-95">
                        <span className="material-symbols-outlined text-[18px]">refresh</span>
                        Verify Another
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 px-6 py-3 border-t border-slate-100 text-xs text-slate-500">
                  This record confirms the authentic completion of the required training program as per official institute records.
                </div>
              </div>
            )}

            {/* ❌ Not Found */}
       
{status === 'not-found' && (
  <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-red-200 p-4 sm:p-6 md:p-10 mb-8 shadow-sm animate-fade-in-up">
    <div className="flex flex-col items-center text-center w-full">

      {/* Error Icon */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-full bg-red-100 flex items-center justify-center mb-4 sm:mb-5">
        <span className="material-symbols-outlined text-red-600 text-[28px] sm:text-[32px]">
          gpp_bad
        </span>
      </div>

      {/* Heading */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-2">
        Invalid Certificate Number
      </h3>

      {/* Error Message */}
      <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-3 break-words max-w-full">
        The certificate number{' '}
        <span className="inline-block font-mono font-semibold text-red-600 bg-red-50 px-2 py-1 rounded-md mx-1">
          {certId}
        </span>{' '}
        does not exist in our records.
      </p>

    

      {/* Support Section */}
      {/* <div className="w-full max-w-md bg-amber-50 border border-amber-100 rounded-xl p-3 sm:p-4 text-left mb-6">

        <p className="font-semibold text-slate-700 text-sm mb-2 flex items-center gap-2">
          <span className="material-symbols-outlined text-amber-500 text-lg">
            support_agent
          </span>
          Need help?
        </p>

        <p className="text-slate-500 text-xs sm:text-sm mb-3">
          Contact the registry office with your certificate details:
        </p>

        <div className="flex flex-col gap-2">
          <a
            href="tel:+919815039888"
            className="flex items-center gap-2 text-cyan-800 font-medium text-xs sm:text-sm hover:text-cyan-600 break-all"
          >
            <span className="material-symbols-outlined text-base shrink-0">call</span>
            +91 9815039888
          </a>

          <a
            href="mailto:info@uniinstitute.in"
            className="flex items-center gap-2 text-cyan-800 font-medium text-xs sm:text-sm hover:text-cyan-600 break-all"
          >
            <span className="material-symbols-outlined text-base shrink-0">mail</span>
            info@uniinstitute.in
          </a>
        </div>
      </div> */}

      {/* Try Again Button */}
      <button
        onClick={handleReset}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 bg-slate-900 hover:bg-slate-700 active:scale-[0.98] text-white font-semibold text-sm rounded-xl transition-all duration-200"
      >
        <span className="material-symbols-outlined text-[18px]">
          refresh
        </span>
        Try Again
      </button>

    </div>
  </div>
)}


          </div>

          {/* Security Notice */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 text-xs text-slate-600 space-y-3">
            <h4 className="font-bold uppercase tracking-wider text-slate-800 text-xs flex items-center gap-1.5">
              <span className="material-symbols-outlined text-cyan-600 text-[16px]">security</span>
              Security &amp; Registry Policy
            </h4>
            <p className="leading-relaxed">Universal Institute maintains an electronic ledger for student certificates to protect against fraudulent credentials.</p>
            <ul className="list-disc list-inside space-y-1 text-slate-500">
              <li>Only officially issued certificates marked <strong>Verified / Authentic</strong> will display a verified badge.</li>
              <li>No sensitive personal data is exposed through this public lookup.</li>
              <li>HR teams may request email verification via <a href="mailto:info@uniinstitute.in" className="text-cyan-700 underline">info@uniinstitute.in</a>.</li>
            </ul>
          </div>

        </div>
      </div>
    </>
  );
}
