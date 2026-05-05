'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/iti-courses', label: 'ITI Courses' },
  { href: '/contact', label: 'Contact' },
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
    }, 400);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, router, pathname]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 font-['Space_Grotesk'] ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16 w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-cyan-600 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors duration-200">
            <span className="text-white font-bold text-sm">I</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Universal <span className="text-cyan-600">Institute</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href) && href !== '/';
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${
                  isActive
                    ? 'text-cyan-600'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-cyan-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="relative hidden lg:block">
            <span
              className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              style={{ fontSize: '18px' }}
            >
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent w-52 transition-all duration-200 placeholder:text-slate-400"
            />
          </div>

          {/* CTA Button */}
          <Link
            href="/courses"
            className="hidden sm:flex bg-cyan-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-cyan-500 active:scale-95 transition-all duration-200 shadow-sm hover:shadow-cyan-200 hover:shadow-md"
          >
            Apply Now
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-slate-700">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-4 pt-2 space-y-1 bg-white border-t border-slate-100">
          {navLinks.map(({ href, label }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href) && href !== '/';
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-cyan-600 bg-cyan-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/courses"
            onClick={() => setMenuOpen(false)}
            className="block sm:hidden mt-2 px-4 py-3 text-center rounded-lg text-sm font-bold bg-cyan-600 text-white hover:bg-cyan-500 shadow-sm"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </header>
  );
}