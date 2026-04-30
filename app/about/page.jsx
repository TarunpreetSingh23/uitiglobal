import Image from 'next/image';
import Link from 'next/link';
import PartnersSection from '../components/PartnersSection';

export const metadata = {
  title: 'About ITI Global | Advancing the Future of Computing',
  description: 'Learn about ITI Global – our mission, vision, historical milestones, world-class facilities, and leadership team.',
};

export default function AboutPage() {
  return (
    <main className="max-w-[1280px] mx-auto overflow-x-hidden">
      {/* Hero Section */}
      <section className="py-10 md:py-14 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0090a9] mb-2 block">Our Legacy</span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-black mb-6">
              Pioneering Progress in Information Technology
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-[#505f76] w-full mx-auto md:mx-0">
              Since its inception, the Information Technology Institute (ITI) has been a beacon of excellence, fostering technical mastery and academic rigor in the heart of the digital revolution.
            </p>
          </div>
          {/* Google Maps Embed */}
          <div className="relative h-[320px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
            {/* Overlay bar with location badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow text-sm font-medium text-slate-700 border border-slate-100">
              <span className="material-symbols-outlined text-cyan-600" style={{ fontSize: '16px' }}>location_on</span>
              Universal ITI, Amritsar, Punjab
            </div>
            <iframe
              src="https://maps.google.com/maps?q=31.6301752,74.8407467&output=embed&z=17"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Universal ITI Amritsar Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 md:py-20 px-4 md:px-8 bg-[#f2f4f6] border-y border-[#c6c6cd]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          <div className="bg-white p-6 md:p-12 border border-slate-100 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#d0e1fb] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#54647a]">track_changes</span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">Our Mission</h2>
            <p className="text-sm md:text-base text-[#505f76]">
              To empower the next generation of technologists through rigorous academic programs, world-class faculty, and industry-aligned research that addresses the global challenges of computing and data science.
            </p>
          </div>
          <div className="bg-white p-6 md:p-12 border border-slate-100 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-[#d0e1fb] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#54647a]">visibility</span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-black mb-3">Our Vision</h2>
            <p className="text-sm md:text-base text-[#505f76]">
              To be the premier global destination for advanced technological education, recognized for creating the leaders and innovators who will define the future of the human-digital interface.
            </p>
          </div>
        </div>
      </section>

      <PartnersSection />

      {/* History Timeline */}
      <section className="py-10 md:py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 md:mb-12 text-center">Historical Milestones</h2>
        <div className="space-y-2 max-w-4xl mx-auto">
          {[
            { year: '1998', title: 'Founding', desc: 'ITI Global was established with a focus on core software engineering and database management systems.' },
            { year: '2005', title: 'Global Expansion', desc: 'Launched the International Exchange Program, partnering with 15 leading universities across Europe and Asia.' },
            { year: '2018', title: 'AI Research Wing', desc: 'Inaugurated the Advanced Intelligence Center, a $50M facility dedicated to machine learning and robotics.' },
          ].map((item) => (
            <div key={item.year} className="flex gap-4 md:gap-6">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-600 flex-shrink-0" />
                <div className="w-0.5 flex-grow bg-slate-200" />
              </div>
              <div className="pb-8 md:pb-12">
                <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-cyan-600">{item.year}</span>
                <h3 className="text-base md:text-lg font-bold text-black">{item.title}</h3>
                <p className="text-sm md:text-base text-[#505f76] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-10 md:py-20 px-4 md:px-8 bg-white">
        <div className="mb-10 md:mb-12 flex flex-col items-start w-full">
  <h2 className="text-3xl md:text-4xl font-semibold text-black w-full">
    World-Class Facilities
  </h2>
  <p className="text-sm md:text-base text-[#505f76] mt-3 w-full">
    Our campus is designed to inspire. From high-compute labs to collaborative 
    green spaces, every corner of ITI supports innovation.
  </p>
</div>
        
        {/* Responsive Grid/Bento Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl h-[250px] md:h-full">
            <Image src="/assets/65c3a2d5d8fdf080e3b11ed40e0b8fad.png" alt="Quantum Computing Lab" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h4 className="font-bold text-lg">Quantum Computing Lab</h4>
            </div>
          </div>
          <div className="md:col-span-1 relative group overflow-hidden rounded-xl h-[180px] md:h-full">
            <Image src="/assets/d1325f38b1a8c15eb1bb0e0ccc29c297.png" alt="Innovation Lounge" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h4 className="text-sm font-semibold">Innovation Lounge</h4>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-xl h-[180px] md:h-full">
            <Image src="/assets/d018f1c1549fc3ffbd3671aa7509d914.png" alt="The Great Library" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h4 className="text-sm font-semibold">The Great Library</h4>
            </div>
          </div>
          <div className="md:col-span-1 relative group overflow-hidden rounded-xl h-[180px] md:h-full">
            <Image src="/assets/b9445e475dd06dd0b321f6c1059b631b.png" alt="Active Learning Rooms" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h4 className="text-sm font-semibold">Active Learning Rooms</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-10 md:py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 md:mb-12 text-center md:text-left">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { role: 'Director of ITI Global', name: 'Harinder Singh Sandhu', img: '/assets/681b2067a4a17bf9d6f5dd4cebd11c0f.png', bio: 'With over 25 years in computational theory and a PhD from Stanford, Dr. Thorne leads the institute with a focus on ethical AI and global connectivity.' },
            { role: 'supervisor', name: 'Sandeep Singh', img: '/assets/783a1f025ba759a75e3c9c5944f7b3b9.png', bio: 'A pioneer in distributed systems and cloud architecture, Prof. Rodriguez oversees the undergraduate and graduate CS curricula.' },
            { role: 'Head of Cybersecurity', name: 'Dr. Julian Vance', img: '/assets/242e4703ebae0f66c553dfb3c21b6084.png', bio: 'Former lead security architect for global tech firms, Dr. Vance brings real-world threat intelligence to the academic sphere.' },
          ].map((person) => (
            <div key={person.name} className="flex flex-col">
              {/* <div className="aspect-[3/4] bg-[#eceef0] mb-4 md:mb-6 overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-300 relative">
                <Image src={person.img} alt={person.name} fill className="w-full h-full object-cover" />
              </div> */}
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-1">{person.role}</span>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 md:mb-3">{person.name}</h3>
              <p className="text-xs md:text-sm text-[#505f76] leading-relaxed">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}