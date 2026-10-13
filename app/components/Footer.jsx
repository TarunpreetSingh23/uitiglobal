import Link from 'next/link';

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'All Courses' },
  { href: '/iti-courses', label: 'ITI Trades' },
  { href: '/#industrial-training', label: 'Industrial Training' },
  { href: '/gallery', label: 'Photo Gallery' },
  { href: '/about', label: 'About Universal Institute' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/verify-certificate', label: 'Verify Certificate' },
];

const technicalTracks = [
  { href: '/courses', label: 'Full Stack Development with AI' },
  { href: '/courses', label: 'AI Engineering' },
  { href: '/courses', label: 'Data Analytics & Power BI' },
  { href: '/courses', label: 'Web Development' },
  { href: '/iti-courses', label: 'COPA (Computer Operator)' },
  { href: '/iti-courses', label: 'Electrician & Technical Trades' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-['Space_Grotesk'] mt-auto border-t border-slate-800">
      {/* Institutional Credibility Strip */}
      <div className="bg-slate-950/80 border-b border-slate-800/80 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              Managed by Aagaz Society
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="material-symbols-outlined text-[16px] text-cyan-400">workspace_premium</span>
              ISO 9001:2015 Certified
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span>Vocational & Industrial Technical Education</span>
          </div>
          <Link
            href="/verify-certificate"
            className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-white transition-colors bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full text-xs"
          >
            <span className="material-symbols-outlined text-[14px]">search</span>
            Verify Issued Certificate Online
          </Link>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Institute Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-[#007595] rounded-lg flex items-center justify-center text-white font-bold text-sm">
                UI
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Universal <span className="text-cyan-400">Institute</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Industrial Training and Vocational Institute in Amritsar, managed by <strong>Aagaz Society</strong>. Providing hands-on practical skills, live client projects, and career-oriented technical mentorship.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p className="font-semibold text-slate-300">Certification & Standards:</p>
              <p>ISO 9001:2015 Quality Management System for technical education and vocational training.</p>
            </div>
          </div>

          {/* Col 2: Training Programs */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">
              Training Programs
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {technicalTracks.map((track, idx) => (
                <li key={idx}>
                  <Link
                    href={track.href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                    {track.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-slate-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500 shrink-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Campus & Contact */}
          <div className="space-y-3">
            <h3 className="text-white font-semibold uppercase tracking-wider text-xs mb-4">
              Campus & Contact
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-cyan-400 text-[18px] shrink-0 mt-0.5">location_on</span>
                <span>
                  Universal Institute<br />
                  Guru Arjan Dev Nagar,<br />
                  Opposite Khalsa College for Women,<br />
                  Amritsar – 143002, Punjab, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-cyan-400 text-[18px] shrink-0">call</span>
                <a href="tel:+919815039888" className="hover:text-cyan-300 transition-colors text-slate-200 font-medium">
                  +91 9815039888
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-cyan-400 text-[18px] shrink-0">mail</span>
                <a href="mailto:info@uniinstitute.in" className="hover:text-cyan-300 transition-colors">
                  info@uniinstitute.in
                </a>
              </div>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-cyan-700 hover:bg-cyan-600 px-3.5 py-2 rounded-lg transition-colors shadow-sm"
                >
                  <span className="material-symbols-outlined text-[15px]">send</span>
                  Send Admission Enquiry
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal / Copyright */}
      <div className="border-t border-slate-800 bg-slate-950 py-4 px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <span>
            © {new Date().getFullYear()} Universal Institute, Amritsar. Managed by Aagaz Society. All rights reserved.
          </span>
          <span className="text-slate-400">
            ISO 9001:2015 Certified Institution
          </span>
        </div>
      </div>
    </footer>
  );
}
