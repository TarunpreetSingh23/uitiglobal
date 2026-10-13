import Link from 'next/link';

export default function PartnersSection() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-12 md:py-16 font-['Space_Grotesk']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-cyan-700 bg-cyan-50 border border-cyan-200 px-3 py-1 rounded-full mb-3 inline-block">
            Institutional Accreditation & Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Commitment to Quality & Technical Standards
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Operating under recognized vocational guidelines to provide transparent, skill-oriented education in Amritsar.
          </p>
        </div>

        {/* Credibility Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Card 1: Society Management */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[26px]">corporate_fare</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Governance
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Managed by Aagaz Society
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Universal Institute is organized and managed by <strong>Aagaz Society</strong>, focused on community development, technical capability, and educational empowerment in Punjab.
            </p>
          </div>

          {/* Card 2: ISO Certification */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[26px]">verified</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Quality Standard
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              ISO 9001:2015 Certified
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Maintains an established Quality Management System (QMS) standard for technical education, IT training, and vocational trade course delivery.
            </p>
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Standard: ISO 9001:2015</span>
              <span className="text-cyan-700 font-medium">Quality Assured</span>
            </div>
          </div>

          {/* Card 3: Certificate Registry */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-700 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[26px]">fact_check</span>
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Verification
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Centralized Certificate Registry
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              All students completing vocational trades and industrial training modules receive traceable certificates verifiable in our official institutional database.
            </p>
            <div className="mt-4">
              <Link
                href="/verify-certificate"
                className="text-xs font-bold text-cyan-700 hover:text-cyan-800 flex items-center gap-1 group"
              >
                Verify a certificate record
                <span className="material-symbols-outlined text-[15px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Factual Disclaimer Banner */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-4 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-slate-400 text-[18px]">info</span>
            <span>
              All certifications reflect internal institutional and ISO 9001:2015 quality processes. No unverified government affiliations or third-party endorsements are claimed.
            </span>
          </div>
          <Link href="/about" className="text-cyan-700 hover:underline font-semibold shrink-0">
            Learn more about the institute
          </Link>
        </div>

      </div>
    </section>
  );
}