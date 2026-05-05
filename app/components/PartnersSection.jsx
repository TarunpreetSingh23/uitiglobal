import Image from 'next/image';

const stats = [
  { icon: 'history_edu', value: '20+', label: 'Years of Experience' },
  { icon: 'menu_book', value: '7+', label: 'Courses' },
  { icon: 'groups', value: '12+', label: 'Our Instructors' },
  { icon: 'school', value: '500+', label: 'Total Students Enrolled' },
];

const partners = [
  { name: 'PMKVY', img: '/assets/Pmkvy.png', alt: 'Pradhan Mantri Kaushal Vikas Yojana' },
  { name: 'NSDC', img: '/assets/nsdc.png', alt: 'National Skill Development Corporation' },
  { name: 'NULM', img: '/assets/partner_nulm.png', alt: 'National Urban Livelihoods Mission' },
  { name: 'RSLDC', img: '/assets/partner_rsldc.png', alt: 'Rajasthan Skill and Livelihoods Development Corporation' },
];

export default function PartnersSection() {
  return (
    <>
      {/* ── Stats Banner ── */}
      <section className="bg-[#131b2e] py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 px-4 py-8 md:px-8 bg-[#131b2e] hover:bg-cyan-900/30 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/40 transition-colors duration-300">
                  <span className="material-symbols-outlined text-white/70 group-hover:text-cyan-400 transition-colors duration-300 text-[20px] md:text-[24px]">
                    {stat.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xl md:text-3xl font-bold text-white leading-none">{stat.value}</p>
                  <p className="text-[10px] md:text-xs text-white/50 mt-1.5 md:mt-1 font-medium uppercase tracking-wider md:normal-case md:tracking-normal">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners / Trusted By ── */}
      <section className="bg-slate-50 py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Title with line decoration */}
          <div className="flex items-center gap-2 md:gap-4 mb-8 md:mb-12">
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent to-cyan-200" />
            <p className="text-xs md:text-base font-semibold text-slate-600 text-center w-full sm:w-auto px-2">
              The trusted market leader in talent transformation through{' '}
              <span className="text-cyan-600">Education</span>
            </p>
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent to-cyan-200" />
          </div>

          {/* Logos */}
         <div className="border border-slate-200 rounded-2xl bg-white p-4 md:p-10 shadow-sm">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 items-center">
    {partners.map((partner) => (
      <div
        key={partner.name}
        className="flex items-center justify-center p-3 md:p-4 rounded-xl transition-all duration-300"
      >
        {/* Removed grayscale and opacity classes to show original image by default */}
        <div className="relative w-full h-12 md:h-20 transition-transform duration-300 hover:scale-105">
          <Image
            src={partner.img}
            alt={partner.alt}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 40vw, 20vw"
          />
        </div>
      </div>
    ))}
  </div>
</div>
        </div>
      </section>
    </>
  );
}