import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 full-width py-12 font-['Space_Grotesk'] text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="text-lg font-bold text-slate-900 dark:text-white">ITI Global</div>
          <p className="text-slate-500 dark:text-slate-400">© 2026 Information Technology Institute. Advancing the future of computing.</p>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 underline transition-all" href="#">Privacy Policy</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 underline transition-all" href="#">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Institutions</h4>
          <ul className="space-y-2">
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 underline transition-all" href="#">Accreditation</Link></li>
            <li><Link className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 underline transition-all" href="#">Partner Network</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-4">Stay Connected</h4>
          <Link className="text-cyan-600 font-semibold hover:text-cyan-500 underline transition-all" href="#">Newsletter Signup</Link>
          <div className="mt-4 flex gap-4">
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-cyan-600 transition-colors">public</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-cyan-600 transition-colors">terminal</span>
            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-cyan-600 transition-colors">hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
