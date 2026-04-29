import Image from 'next/image';
import Link from 'next/link';
import PartnersSection from '../components/PartnersSection';

export const metadata = {
  title: 'About ITI Global | Advancing the Future of Computing',
  description: 'Learn about ITI Global – our mission, vision, historical milestones, world-class facilities, and leadership team.',
};

export default function AboutPage() {
  return (
    <main className="max-w-[1280px] mx-auto">
      {/* Hero Section */}
      <section className="py-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0090a9] mb-2 block">Our Legacy</span>
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-black mb-6">
              Pioneering Progress in Information Technology
            </h1>
            <p className="text-lg leading-relaxed text-[#505f76] max-w-xl">
              Since its inception, the Information Technology Institute (ITI) has been a beacon of excellence, fostering technical mastery and academic rigor in the heart of the digital revolution.
            </p>
          </div>
          <div className="relative h-[400px] bg-[#eceef0] overflow-hidden rounded-xl">
            <Image
              src="/assets/1a96fcb6b44465692a8bc2aeaebb1aee.png"
              alt="Modern glass university building"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-8 bg-[#f2f4f6] border-y border-[#c6c6cd]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 border border-slate-100 rounded-lg">
            <div className="w-12 h-12 bg-[#d0e1fb] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#54647a]">track_changes</span>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-3">Our Mission</h2>
            <p className="text-base text-[#505f76]">
              To empower the next generation of technologists through rigorous academic programs, world-class faculty, and industry-aligned research that addresses the global challenges of computing and data science.
            </p>
          </div>
          <div className="bg-white p-12 border border-slate-100 rounded-lg">
            <div className="w-12 h-12 bg-[#d0e1fb] rounded-full flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-[#54647a]">visibility</span>
            </div>
            <h2 className="text-2xl font-semibold text-black mb-3">Our Vision</h2>
            <p className="text-base text-[#505f76]">
              To be the premier global destination for advanced technological education, recognized for creating the leaders and innovators who will define the future of the human-digital interface.
            </p>
          </div>
        </div>
      </section>

      <PartnersSection />

      {/* History Timeline */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-semibold text-black mb-12 text-center">Historical Milestones</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {[
            { year: '1998', title: 'Founding', desc: 'ITI Global was established with a focus on core software engineering and database management systems.' },
            { year: '2005', title: 'Global Expansion', desc: 'Launched the International Exchange Program, partnering with 15 leading universities across Europe and Asia.' },
            { year: '2018', title: 'AI Research Wing', desc: 'Inaugurated the Advanced Intelligence Center, a $50M facility dedicated to machine learning and robotics.' },
          ].map((item) => (
            <div key={item.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-cyan-600 flex-shrink-0" />
                <div className="w-0.5 flex-grow bg-slate-200" />
              </div>
              <div className="pb-12">
                <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600">{item.year}</span>
                <h3 className="text-base font-bold text-black">{item.title}</h3>
                <p className="text-base text-[#505f76] mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Gallery */}
      <section className="py-20 px-8 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-semibold text-black">World-Class Facilities</h2>
            <p className="text-base text-[#505f76] mt-3">Our campus is designed to inspire. From high-compute labs to collaborative green spaces, every corner of ITI supports innovation.</p>
          </div>
        </div>
        {/* Bento Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
            <Image src="/assets/65c3a2d5d8fdf080e3b11ed40e0b8fad.png" alt="Quantum Computing Lab" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h4 className="font-bold">Quantum Computing Lab</h4>
            </div>
          </div>
          <div className="md:col-span-1 relative group overflow-hidden rounded-xl">
            <Image src="/assets/d1325f38b1a8c15eb1bb0e0ccc29c297.png" alt="Innovation Lounge" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h4 className="text-sm font-semibold">Innovation Lounge</h4>
            </div>
          </div>
          <div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-xl">
            <Image src="/assets/d018f1c1549fc3ffbd3671aa7509d914.png" alt="The Great Library" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h4 className="text-sm font-semibold">The Great Library</h4>
            </div>
          </div>
          <div className="md:col-span-1 relative group overflow-hidden rounded-xl">
            <Image src="/assets/b9445e475dd06dd0b321f6c1059b631b.png" alt="Active Learning Rooms" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h4 className="text-sm font-semibold">Active Learning Rooms</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-semibold text-black mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { role: 'Dean of ITI Global', name: 'Dr. Marcus Thorne', img: '/assets/681b2067a4a17bf9d6f5dd4cebd11c0f.png', bio: 'With over 25 years in computational theory and a PhD from Stanford, Dr. Thorne leads the institute with a focus on ethical AI and global connectivity.' },
            { role: 'Head of Computer Science', name: 'Prof. Elena Rodriguez', img: '/assets/783a1f025ba759a75e3c9c5944f7b3b9.png', bio: 'A pioneer in distributed systems and cloud architecture, Prof. Rodriguez oversees the undergraduate and graduate CS curricula.' },
            { role: 'Head of Cybersecurity', name: 'Dr. Julian Vance', img: '/assets/242e4703ebae0f66c553dfb3c21b6084.png', bio: 'Former lead security architect for global tech firms, Dr. Vance brings real-world threat intelligence to the academic sphere.' },
          ].map((person) => (
            <div key={person.name} className="flex flex-col">
              <div className="aspect-[3/4] bg-[#eceef0] mb-6 overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-300 relative">
                <Image src={person.img} alt={person.name} fill className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-1">{person.role}</span>
              <h3 className="text-2xl font-semibold text-black mb-3">{person.name}</h3>
              <p className="text-sm text-[#505f76]">{person.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
