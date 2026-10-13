
import Link from 'next/link';
import Image from 'next/image';

const trainingPrograms = [
  {
    duration: '45 Days',
    label: 'Short-Term Training',
    title: 'Focused Industrial Training',
    desc: 'A compact, practical program for students who want to strengthen technical fundamentals and complete a guided mini-project.',
    points: [
      'Core concepts and hands-on practice',
      'Guided mini-project',
      'Basic Git and documentation',
      'Final project demonstration',
    ],
    ideal: 'Students needing short-term training',
    slug: '45-days',
  },
  {
    duration: '1 Month',
    label: 'Foundation Program',
    title: 'Practical Skills Development',
    desc: 'Learn essential tools, solve practical assignments, and develop a small working application under mentor guidance.',
    points: [
      'Tool setup and practical exercises',
      'Project planning and implementation',
      'Debugging and problem-solving',
      'Project review and feedback',
    ],
    ideal: 'Beginners and college students',
    slug: '1-month',
  },
  {
    duration: '3 Months',
    label: 'Project-Based Training',
    title: 'Build Industry-Ready Skills',
    desc: 'Develop stronger technical skills through structured learning, progressive assignments, and a substantial project.',
    points: [
      'Structured technical learning',
      'Realistic business project workflows',
      'GitHub and project documentation',
      'Testing, evaluation and presentation',
    ],
    ideal: 'Students seeking deeper practical experience',
    slug: '3-months',
    featured: true,
  },
  {
    duration: '6 Months',
    label: 'Advanced Training',
    title: 'Extended Project Experience',
    desc: 'Follow a longer learning path covering technical foundations, advanced implementation, testing, and project delivery.',
    points: [
      'Advanced, course-specific concepts',
      'Team collaboration and code reviews',
      'Major project development',
      'Final demonstration and viva preparation',
    ],
    ideal: 'Students wanting extended training',
    slug: '6-months',
  },
];

const trainingPillars = [
  {
    icon: 'assignment_turned_in',
    title: 'Hands-On Practical Learning',
    desc: 'Apply concepts through coding exercises, technical assignments, lab sessions, and guided implementation instead of relying only on theory.',
  },
  {
    icon: 'work',
    title: 'Real Client Project Exposure',
    desc: 'Where genuine client projects are available, students can work on approved tasks under supervision, following practical requirements and delivery workflows.',
  },
  {
    icon: 'rate_review',
    title: 'Mentor Guidance & Code Reviews',
    desc: 'Learn to identify errors, improve code structure, debug applications, and incorporate feedback into your work.',
  },
  {
    icon: 'folder_managed',
    title: 'Portfolio & GitHub',
    desc: 'Organize eligible projects, maintain source code, document features, and build a portfolio that demonstrates your skills.',
  },
];

const trainingImages = [
 {
    src: '/assets/f75c2308de23c422c26dc222cf22584e.png',
    title: 'Universal institute',
    tag: 'Universal institute',
    desc: 'Universal Institute was established in the year 2010 with a vision to provide high-quality technical education and skill-based training to students.All trades are duly affiliated by National Council for Vocational Education & Training (NCVET), New Delhi.',
  },
  {
    src: '/assets/Placement.webp',
    title: 'Placement Assistance',
    tag: 'Placement Assistance',
    desc: 'We assist students by conducting mock interviews and enhancing their professional communication and interview-taking skills to secure meaningful employment opportunities.',
  },
  {
    src: '/assets/classroom.jpg',
    title: 'Classroom',
    tag: 'Classroom',
    desc: 'At Universal Institute , we ensure every doubt is addressed through dedicated doubt-solving sessions. Our instructors work closely with students to clarify concepts, explain difficult problems, and reinforce learning.',
  },
  {
    src: '/assets/girls.jpg',
    title: 'Special batch for Girls',
    tag: 'Girls Batch',
    desc: 'Creating a secure and empowering learning environment for female students, enabling them to pursue technical education with confidence and achieve their career goals.',
  },
  {
    src: '/assets/one-one.png',
    title: 'Special doubt solving sessions',
    tag: 'Doubt Solving',
    desc: 'At Universal Institute , we ensure every doubt is addressed through dedicated doubt-solving sessions. Our instructors work closely with students to clarify concepts, explain difficult problems, and reinforce learning.',
  },
  {
    src: '/assets/Practingtraining.png',
    title: 'Practical Training',
    tag: 'Practical Training',
    desc: 'At Universal Institute , we focus on hands-on, practical training that prepares students for real-world industry challenges. Our programs emphasize real-time project work, skill application, and problem-solving to build job-ready professionals.',
  },
];

const technologies = [
  {
    name: 'Full Stack Development',
    tools: 'HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB',
  },
  {
    name: 'AI Engineering',
    tools: 'Python, NumPy, Pandas, Scikit-learn, model evaluation, AI APIs',
  },
  {
    name: 'Data Analytics',
    tools: 'Excel, SQL, Power BI, DAX, data cleaning, dashboard development',
  },
  {
    name: 'Development Workflow',
    tools: 'Git, GitHub, VS Code, Postman, debugging, documentation',
  },
  {
    name: 'Vocational & ITI Training',
    tools: 'Trade-specific practical exercises, workshop methods, safety procedures',
  },
];

const projectStages = [
  {
    number: '01',
    title: 'Understand Requirements',
    desc: 'Study the problem statement, identify users, and understand project objectives.',
  },
  {
    number: '02',
    title: 'Plan & Build',
    desc: 'Design the solution, choose suitable tools, and implement features step by step.',
  },
  {
    number: '03',
    title: 'Test & Improve',
    desc: 'Debug errors, validate functionality, review feedback, and refine the solution.',
  },
  {
    number: '04',
    title: 'Present Your Work',
    desc: 'Prepare documentation, demonstrate features, and explain technical decisions.',
  },
];

export default function IndustrialTrainingSection() {
  return (
    <section
      id="industrial-training"
      className="overflow-hidden border-t border-slate-200 bg-white py-16 font-['Space_Grotesk'] text-slate-900 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#007595]">
                <span className="h-2 w-2 rounded-full bg-[#007595]" />
                Practical Training • Amritsar
              </span>

              <h2 className="mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Industrial Training in Amritsar
                <span className="mt-2 block text-[#007595]">
                  Learn by Building Real Projects
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                Turn classroom knowledge into practical skills at Universal
                Institute. Learn industry-relevant tools, work on guided
                projects, receive mentor feedback, and develop the confidence
                to explain what you build.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#training-programs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#007595] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#005e77]"
                >
                  Explore Training Programs
                  <span aria-hidden="true">→</span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-800 transition hover:border-[#007595] hover:text-[#007595]"
                >
                  Enquire About Training
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-slate-600">
                <span>✓ Multiple training durations</span>
                <span>✓ Practical assignments</span>
                <span>✓ Guided project work</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {trainingPrograms.map((program) => (
                <a
                  key={program.slug}
                  href="#training-programs"
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#007595] sm:p-5"
                >
                  <span className="text-xs font-semibold text-slate-500">
                    {program.label}
                  </span>
                  <span className="mt-2 block text-2xl font-extrabold text-[#007595] sm:text-3xl">
                    {program.duration}
                  </span>
                  <span className="mt-2 block text-xs leading-5 text-slate-600">
                    {program.ideal}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Training duration cards */}
        <div id="training-programs" className="mb-20 scroll-mt-24">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#007595]">
              Choose Your Learning Path
            </span>
            <h3 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Industrial Training Programs
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Choose a duration that fits your academic schedule and learning
              goals. The exact syllabus, project scope, and schedule are
              confirmed during enrolment.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {trainingPrograms.map((program) => (
              <article
                key={program.slug}
                className={`relative flex flex-col rounded-2xl border p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  program.featured
                    ? 'border-[#007595] bg-cyan-50/40 shadow-md'
                    : 'border-slate-200 bg-white hover:border-[#007595]'
                }`}
              >
                {program.featured && (
                  <span className="mb-4 self-start rounded-full bg-[#007595] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Extended Project Track
                  </span>
                )}

                <span className="text-xs font-bold uppercase tracking-wider text-[#007595]">
                  {program.label}
                </span>

                <h4 className="mt-3 text-3xl font-extrabold tracking-tight">
                  {program.duration}
                </h4>

                <h5 className="mt-2 text-base font-bold text-slate-900">
                  {program.title}
                </h5>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {program.desc}
                </p>

                <div className="my-5 border-t border-slate-200" />

                <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Learning Highlights
                </p>

                <ul className="mt-4 flex-1 space-y-3">
                  {program.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-5 text-slate-600"
                    >
                      <span className="mt-0.5 font-bold text-[#007595]">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 rounded-xl bg-slate-50 p-3">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    Suitable For
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-700">
                    {program.ideal}
                  </p>
                </div>

                <Link
                  href={`/contact?training=${program.slug}`}
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl border border-[#007595] px-4 py-3 text-sm font-bold text-[#007595] transition hover:bg-[#007595] hover:text-white"
                >
                  Enquire Now <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <p className="mt-5 text-center text-xs leading-6 text-slate-500">
            Training availability, syllabus, fees, and schedules are subject to
            confirmation by the institute. Certificate issuance is subject to
            completion requirements. Students should confirm acceptance of
            institute-issued certificates with their college.
          </p>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="mb-8 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-[#007595]">
              More Than Classroom Theory
            </span>
            <h3 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl">
              Develop Skills You Can Demonstrate
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Learn how technical work is planned, developed, reviewed, and
              presented in practical development environments.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trainingPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#007595] hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-[#007595]">
                  <span className="material-symbols-outlined text-2xl">
                    {pillar.icon}
                  </span>
                </div>

                <h4 className="mt-5 text-base font-bold leading-snug">
                  {pillar.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {pillar.desc}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Real project workflow */}
        <div className="mb-20 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#007595]">
                Learn Through Projects
              </span>
              <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                From an Idea to a Working Project
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Students learn to approach projects systematically rather
                than simply copying code. Depending on the course and
                availability, projects may use practice briefs, simulated
                business requirements, or approved real client requirements.
              </p>

              <div className="mt-6 rounded-2xl border border-cyan-200 bg-white p-5">
                <h4 className="font-bold text-slate-900">
                  What can you work on?
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li>• Business websites and web applications</li>
                  <li>• Database-backed applications and APIs</li>
                  <li>• AI and machine learning prototypes</li>
                  <li>• Data analytics reports and dashboards</li>
                  <li>• Course-specific practical assignments</li>
                </ul>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {projectStages.map((stage) => (
                <article
                  key={stage.number}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <span className="text-3xl font-extrabold text-[#007595]/40">
                    {stage.number}
                  </span>
                  <h4 className="mt-3 font-bold text-slate-900">
                    {stage.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {stage.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Student outcomes */}
        <div className="mb-20">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#007595]">
              Your Training Journey
            </span>
            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              What You Can Work Towards
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Build practical evidence of your learning throughout your
              training program.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: 'code',
                title: 'Practical Project',
                desc: 'Implement a project appropriate to your course and training duration.',
              },
              {
                icon: 'description',
                title: 'Project Documentation',
                desc: 'Explain objectives, tools, architecture, features, and implementation.',
              },
              {
                icon: 'terminal',
                title: 'GitHub Portfolio',
                desc: 'Maintain organized code repositories for projects suitable for publication.',
              },
              {
                icon: 'bug_report',
                title: 'Debugging & Testing',
                desc: 'Practice identifying issues, validating functionality, and improving reliability.',
              },
              {
                icon: 'co_present',
                title: 'Project Presentation',
                desc: 'Learn to demonstrate your application and explain technical decisions.',
              },
              {
                icon: 'school',
                title: 'Viva Preparation',
                desc: 'Revise core concepts and prepare to discuss your work confidently.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-[#007595]">
                  <span className="material-symbols-outlined text-xl">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Existing image showcase */}
        <div className="mb-20">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#007595]">
                Training Environment
              </span>
              <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                Explore Our Practical Learning Areas
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
                Explore the technical areas and subjects covered in our
                training programs.
              </p>
            </div>

            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-[#007595] hover:text-[#007595] sm:self-auto"
            >
              <span className="material-symbols-outlined text-lg">
                photo_library
              </span>
              View Photo Gallery
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trainingImages.map((img) => (
              <article
                key={img.src}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#007595] hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  <span className="absolute left-3 top-3 rounded-lg border border-slate-200 bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#007595]">
                    {img.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h4 className="font-bold text-slate-900 transition group-hover:text-[#007595]">
                    {img.title}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {img.desc}
                  </p>
                  <div className="mt-4 border-t border-slate-100 pt-3 text-xs font-medium text-slate-500">
                    Universal Institute · Amritsar
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Technology stack */}
        <div className="mb-16 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#007595]">
              Course-Specific Technologies
            </span>
            <h3 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Learn Tools Used in Real Projects
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              The tools you use depend on your selected course and syllabus.
              Training focuses on applying the right tools to practical tasks.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech) => (
              <article
                key={tech.name}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-[#007595]"
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-xl text-[#007595]">
                    developer_board
                  </span>
                  <h4 className="text-sm font-bold">{tech.name}</h4>
                </div>
                <p className="mt-3 text-xs leading-6 text-slate-600">
                  {tech.tools}
                </p>
              </article>
            ))}

            <article className="flex flex-col justify-between rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
              <div>
                <span className="material-symbols-outlined text-2xl text-[#007595]">
                  support_agent
                </span>
                <h4 className="mt-3 font-bold text-slate-900">
                  Guided Learning
                </h4>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Get help with concepts, debugging, project planning, and
                  technical questions during training.
                </p>
              </div>
              <Link
                href="/courses"
                className="mt-4 text-sm font-bold text-[#007595] hover:underline"
              >
                Explore Courses →
              </Link>
            </article>
          </div>
        </div>

        {/* Final CTA */}
        <div className="overflow-hidden rounded-3xl bg-[#073b50] p-7 text-white sm:p-10 lg:p-12">
          <div className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
                Start Your Training Journey
              </span>

              <h3 className="mt-3 text-2xl font-extrabold leading-tight sm:text-3xl">
                Choose Your Training Duration. Build Your Skills.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-200 sm:text-base">
                Looking for 45-day, one-month, three-month, or six-month
                industrial training in Amritsar? Contact Universal Institute
                to discuss your course, schedule, project requirements, and
                certificate details before enrolling.
              </p>

              <p className="mt-3 text-xs leading-6 text-slate-300">
                Near Khalsa College for Women, Amritsar, Punjab — confirm the
                institute address and training availability before visiting.
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#073b50] transition hover:bg-cyan-50"
              >
                Enquire for Training
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/courses"
                className="inline-flex items-center justify-center rounded-xl border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Browse All Courses
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
