import Image from 'next/image';
import Link from 'next/link';
import PartnersSection from '../components/PartnersSection';

export const metadata = {
  title: 'About Universal Institue | Advancing the Future of Computing',
  description: 'Learn about Universal Institute – our mission, vision, historical milestones, world-class facilities, and leadership team.',
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
              Universal Institite, Amritsar, Punjab
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
     {/* About Universal ITI */}
<section className=" w-full py-10 md:py-14 px-4 md:px-8">
  <div className="w-full mx-auto text-center md:text-left">
    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4">
      About Universal Institite
    </h2>
    <p className="text-sm md:text-base text-[#505f76] leading-relaxed">
      Universal Institute was established in the year <strong>2010</strong> with a vision to provide
      high-quality technical education and skill-based training to students.
      All trades are duly affiliated by <strong>National Council for Vocational Education & Training (NCVET), New Delhi</strong>.
    </p>

    <p className="text-sm md:text-base text-[#505f76] leading-relaxed mt-4">
      We focus on practical learning, industry exposure, and career-oriented programs
      that prepare students for real-world challenges across technical and IT domains.
    </p>
  </div>
</section>

      <PartnersSection />

      {/* History Timeline */}
      {/* History Timeline */}
<section className="py-10 md:py-20 px-4 md:px-8">
  <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 md:mb-12 text-center">
    Historical Milestones
  </h2>

  <div className="space-y-2 max-w-4xl mx-auto">
    {[
      {
        year: '2010',
        title: 'Establishment',
        desc: 'Universal Institute was established with a mission to provide quality vocational education.',
      },
      {
        year: '2015',
        title: 'Expansion of Trades',
        desc: 'Introduced multiple NCVET-approved technical trades with improved infrastructure.',
      },
      {
        year: '2022',
        title: 'Digital Courses Launch',
        desc: 'Started advanced IT courses like MERN Stack, AI/ML, and Data Science.',
      },
    ].map((item) => (
      <div key={item.year} className="flex gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-600 flex-shrink-0" />
          <div className="w-0.5 flex-grow bg-slate-200" />
        </div>

        <div className="pb-8 md:pb-12">
          <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-cyan-600">
            {item.year}
          </span>
          <h3 className="text-base md:text-lg font-bold text-black">
            {item.title}
          </h3>
          <p className="text-sm md:text-base text-[#505f76] mt-1">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>
      {/* Advanced IT Courses */}
<section className="py-10 md:py-20 px-4 md:px-8">
  <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 text-center">
    Advanced IT & Professional Courses
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {[
      "MERN Stack Development",
      "Data Science",
      "Data Analytics",
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Full Stack Web Development",
      "Python Programming",
      
      
    ].map((course, i) => (
      <div key={i} className="p-5 border rounded-lg shadow-sm bg-white">
        <h3 className="font-semibold text-lg text-black">{course}</h3>
        <p className="text-sm text-[#505f76] mt-2">
          Industry-oriented training with hands-on projects and real-world applications.
        </p>
      </div>
    ))}
  </div>
</section>
     {/* Courses Offered */}

<section className="py-10 md:py-20 px-4 md:px-8 bg-[#f9fafb] border-y">
  <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 text-center">
   Other Courses Offered
  </h2>

  <div className="overflow-x-auto">
    <table className="w-full border border-gray-200 text-sm md:text-base">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">Course</th>
          <th className="p-3 text-left">Duration</th>
          <th className="p-3 text-left">Qualification</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Electrician", "2 Years", "10th Pass"],
          ["Automobile (MMC)", "2 Years", "10th Pass"],
          ["Refrigeration & AC Mechanic", "2 Years", "10th Pass"],
          ["Diesel Mechanic", "1 Year", "10th Pass"],
          ["Plumber", "1 Year", "10th Pass"],
          ["Welder", "1 Year", "10th Pass"],
          ["COPA (Computer Operator & Programming Assistant)", "1 Year", "10th Pass"],
        ].map((course, i) => (
          <tr key={i} className="border-t">
            <td className="p-3">{course[0]}</td>
            <td className="p-3">{course[1]}</td>
            <td className="p-3">{course[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>

      {/* FacilInstitutees Gallery */}
    {/* Why Choose Us */}
<section className="py-10 md:py-20 px-4 md:px-8 bg-[#f2f4f6]">
  <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 text-center">
    Why Choose Universal Institute?
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {[
      "NCVET Approved Courses",
      "Experienced Faculty",
      "Practical Training & Workshops",
      "Modern Labs & Infrastructure",
      "Affordable Fee Structure",
      "Placement Assistance",
    ].map((item, i) => (
      <div key={i} className="bg-white p-6 rounded-lg shadow-sm border">
        <h3 className="font-semibold text-lg text-black">{item}</h3>
      </div>
    ))}
  </div>
</section>

      {/* Leadership Team */}
      <section className="py-10 md:py-20 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-black mb-10 md:mb-12 text-center md:text-left">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { role: 'Director of Universal Institute', name: 'Harinder Singh Sandhu', img: '/assets/681b2067a4a17bf9d6f5dd4cebd11c0f.png', bio: 'With over 25 years in computational theory and a PhD from Stanford, Dr. Thorne leads the institute with a focus on ethical AI and global connectivity.' },
            { role: 'Member', name: 'Tarunpreet Singh', img: '/assets/783a1f025ba759a75e3c9c5944f7b3b9.png', bio: 'A pioneer in distributed systems and cloud architecture, Prof. Rodriguez oversees the undergraduate and graduate CS curricula.' },
            { role: 'Member', name: 'Shubhmannat Singh', img: '/assets/242e4703ebae0f66c553dfb3c21b6084.png', bio: 'Former lead security architect for global tech firms, Dr. Vance brings real-world threat intelligence to the academic sphere.' },
          ].map((person) => (
            <div key={person.name} className="flex flex-col">
              {/* <div className="aspect-[3/4] bg-[#eceef0] mb-4 md:mb-6 overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-300 relative">
                <Image src={person.img} alt={person.name} fill className="w-full h-full object-cover" />
              </div> */}
              <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase text-cyan-600 mb-1">{person.role}</span>
              <h3 className="text-xl md:text-2xl font-semibold text-black mb-2 md:mb-3">{person.name}</h3>
              {/* <p className="text-xs md:text-sm text-[#505f76] leading-relaxed">{person.bio}</p> */}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}