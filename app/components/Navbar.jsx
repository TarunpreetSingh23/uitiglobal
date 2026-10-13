'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/courses', label: 'Courses' },
 
  { href: '/#industrial-training', label: 'Industrial Training' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/verify-certificate', label: 'Verify Certificate', highlight: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchQuery.trim().length >= 3) {
        router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
      } else if (searchQuery.trim().length === 0 && pathname === '/courses') {
        router.push('/courses');
      }
    }, 450);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
      setMenuOpen(false);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 font-['Space_Grotesk'] ${scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white border-b border-slate-200'
        }`}
    >
      {/* Top micro-bar for institutional trust & location */}
      <div className="bg-slate-50 border-b border-slate-100 text-xs text-slate-600 hidden sm:block py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium text-slate-700">
              <span className="material-symbols-outlined text-[15px] text-cyan-600">location_on</span>
              Opposite Khalsa College for Women, Amritsar, Punjab
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-normal">Managed by Aagaz Society • ISO 9001:2015 Certified</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 font-medium">
            <a href="tel:+919815039888" className="hover:text-cyan-700 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-cyan-600">call</span>
              +91 9815039888
            </a>
            <span className="text-slate-300">|</span>
            {/* <Link href="/verify-certificate" className="text-cyan-700 hover:underline flex items-center gap-1"> */}

          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">

          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-tight">
              Universal <span className="text-cyan-700">Institute</span>
            </span>

          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map(({ href, label, highlight }) => {
            const isActive =
              href === '/'
                ? pathname === '/'
                : href.startsWith('/#')
                  ? false
                  : pathname.startsWith(href);

            if (highlight) {
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all flex items-center gap-1 border ${pathname === '/verify-certificate'
                      ? 'bg-cyan-50 border-cyan-300 text-cyan-800'
                      : 'border-slate-200 text-slate-700 hover:border-cyan-400 hover:text-cyan-700 bg-white'
                    }`}
                >
                  <span className="material-symbols-outlined text-[15px] text-cyan-600">verified</span>
                  {label}
                </Link>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                    ? 'text-cyan-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-cyan-700 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side Tools */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              style={{ fontSize: '17px' }}
            >
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              aria-label="Search courses"
              className="pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent w-44 lg:w-48 transition-all placeholder:text-slate-400 text-slate-800"
            />
          </form>

          {/* Primary Apply Button */}
          <Link
            href="/courses"
            className="hidden sm:inline-flex items-center gap-1 bg-cyan-700 hover:bg-cyan-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95"
          >
            Apply Now
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Responsive Navigation Drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 bg-white ${menuOpen ? 'max-h-[500px] opacity-100 shadow-lg' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-5 py-4 space-y-2">
          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 text-slate-800"
            />
          </form>

          {navLinks.map(({ href, label, highlight }) => {
            const isActive =
              href === '/'
                ? pathname === '/'
                : href.startsWith('/#')
                  ? false
                  : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive
                    ? 'text-cyan-700 bg-cyan-50 font-semibold'
                    : highlight
                      ? 'text-cyan-800 bg-slate-50 border border-slate-200 font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
              >
                <span>{label}</span>
                {highlight && (
                  <span className="material-symbols-outlined text-[16px] text-cyan-600">verified</span>
                )}
              </Link>
            );
          })}

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/courses"
              onClick={() => setMenuOpen(false)}
              className="block w-full py-2.5 text-center rounded-lg text-sm font-bold bg-cyan-700 text-white hover:bg-cyan-800 shadow-sm"
            >
              Apply Now
            </Link>
            <div className="text-center text-xs text-slate-500 pt-1">
              Near Khalsa College for Women, Amritsar • +91 9815039888
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}