import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Course from '@/models/Course';
import Certificate from '@/models/Certificate';
import Testimonial from '@/models/Testimonial';

const courseSeedData = [
  {
    title: 'Full Stack Development with AI',
    description: 'Comprehensive industrial training covering Next.js, React, Node.js, Express, MongoDB, and AI integration for real-world full-stack web applications.',
    duration: '6 Months',
    category: 'Development',
    imageUrl: '/assets/2026c1c758e55619434709adf691f57f.png',
    altText: 'Full Stack Development with AI practical classroom coding in Amritsar',
    tags: ['React', 'Next.js', 'Node.js', 'MongoDB', 'AI API Integration', 'Tailwind CSS', 'Git & GitHub'],
    tuition: 'Contact for Fee Structure',
    originalTuition: '',
    nextStartDate: 'Batches Enrolling Every Month',
    location: 'Universal Institute, Amritsar (Classroom & Practical Labs)',
    credential: 'Certification of Industrial Training',
    modules: [
      { number: '01', title: 'Modern Frontend & UI Engineering', description: 'Semantic HTML5, CSS3, Tailwind CSS, Responsive Design, and React Foundations.' },
      { number: '02', title: 'Advanced JavaScript & React / Next.js', description: 'ES6+, Asynchronous JS, Next.js App Router, Component Architecture, State Management.' },
      { number: '03', title: 'Backend & Database Architecture', description: 'Node.js, Express REST APIs, MongoDB, Mongoose schemas, and Authentication.' },
      { number: '04', title: 'AI Integration & Real Client Projects', description: 'Integrating LLMs, building intelligent web tools, Git workflow, deployment, and live portfolio.' },
    ],
    instructor: {
      name: 'Senior Full Stack & AI Trainer',
      role: 'Industry Practitioner & Lead Mentor',
      imageUrl: '/assets/06a4b78655b1455e35a2c6c763c68ca7.png',
      bio: 'Experienced software practitioner with in-depth knowledge of modern web stacks, cloud deployments, and AI integrations.',
    },
  },
  {
    title: 'AI Engineering',
    description: 'Master practical artificial intelligence engineering, applied machine learning, neural networks, computer vision, and prompt engineering with hands-on projects.',
    duration: '6 Months',
    category: 'AI/ML',
    imageUrl: '/assets/940e06dfe14e8611b57bf89a101b66d6.png',
    altText: 'AI Engineering and machine learning practical lab at Universal Institute',
    tags: ['Python', 'Machine Learning', 'Deep Learning', 'PyTorch', 'Prompt Engineering', 'RAG', 'Vector DBs'],
    tuition: 'Contact for Fee Structure',
    originalTuition: '',
    nextStartDate: 'Upcoming Batch Starting Soon',
    location: 'Universal Institute, Amritsar (Classroom & Practical Labs)',
    credential: 'Certification of Industrial Training',
    modules: [
      { number: '01', title: 'Applied Python & Mathematical Foundations', description: 'NumPy, Pandas, Vectorized computing, Data preprocessing, and Visualization.' },
      { number: '02', title: 'Machine Learning Pipelines', description: 'Supervised and Unsupervised Learning, Scikit-learn, Feature Engineering, and Model Evaluation.' },
      { number: '03', title: 'Deep Learning & Neural Networks', description: 'Computer Vision, Natural Language Processing, PyTorch architectures, and Transformers.' },
      { number: '04', title: 'Applied AI & LLM Systems', description: 'Building Retrieval-Augmented Generation (RAG) applications, agent workflows, and practical deployment.' },
    ],
    instructor: {
      name: 'AI & Data Science Specialist',
      role: 'Lead AI Mentor',
      imageUrl: '/assets/783a1f025ba759a75e3c9c5944f7b3b9.png',
      bio: 'Specialist in applied AI engineering and deep learning architectures with a focus on real-world industrial implementations.',
    },
  },
  {
    title: 'Data Analytics and Power BI',
    description: 'Transform raw business data into actionable visual insights using Advanced Excel, SQL, Power BI, DAX formulas, and Python for data analysis.',
    duration: '3 to 6 Months',
    category: 'Data Science',
    imageUrl: '/assets/11650e2af719f42aded6ae5c21073389.png',
    altText: 'Data Analytics and Power BI interactive dashboard modeling',
    tags: ['Power BI', 'SQL', 'Advanced Excel', 'Python', 'DAX', 'Data Visualization', 'Business Intelligence'],
    tuition: 'Contact for Fee Structure',
    originalTuition: '',
    nextStartDate: 'New Batch Starting This Month',
    location: 'Universal Institute, Amritsar (Classroom & Practical Labs)',
    credential: 'Certification of Industrial Training',
    modules: [
      { number: '01', title: 'Advanced Excel for Business Analytics', description: 'Pivot tables, Power Query, advanced functions, and automated reports.' },
      { number: '02', title: 'Relational Databases & SQL', description: 'Query design, joins, aggregations, window functions, and database schema understanding.' },
      { number: '03', title: 'Power BI Dashboard Design & DAX', description: 'Data modeling, star schema, DAX calculations, interactive KPI dashboards.' },
      { number: '04', title: 'Python for Exploratory Data Analysis', description: 'Data wrangling with Pandas, trend identification, and real industry dataset capstone.' },
    ],
    instructor: {
      name: 'Business Intelligence Mentor',
      role: 'Data Analytics Specialist',
      imageUrl: '/assets/242e4703ebae0f66c553dfb3c21b6084.png',
      bio: 'Expert in corporate analytics, database querying, and executive KPI reporting using Power BI and SQL.',
    },
  },
  {
    title: 'Web Development',
    description: 'Learn modern front-end and back-end web development with HTML5, CSS3, JavaScript, Bootstrap, React, and server-side fundamentals.',
    duration: '3 to 6 Months',
    category: 'Web Development',
    imageUrl: '/assets/546b2efeacb5acf15394f63a5b815495.png',
    altText: 'Web Development code and practical programming on laptop',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'React', 'Git', 'Responsive Design'],
    tuition: 'Contact for Fee Structure',
    originalTuition: '',
    nextStartDate: 'Batches Enrolling Every Month',
    location: 'Universal Institute, Amritsar (Classroom & Practical Labs)',
    credential: 'Certification of Industrial Training',
    modules: [
      { number: '01', title: 'Web Structure & Styling', description: 'HTML5 standards, modern CSS layout with Flexbox & Grid, mobile responsiveness.' },
      { number: '02', title: 'JavaScript & DOM Manipulation', description: 'Core programming logic, interactive user interfaces, API fetching, and modern ES6.' },
      { number: '03', title: 'Frontend Frameworks (React)', description: 'Components, props, hooks, routing, and creating multi-page interactive web applications.' },
      { number: '04', title: 'Project Deployment & Hosting', description: 'Version control with Git/GitHub, free hosting on Vercel/Netlify, portfolio preparation.' },
    ],
    instructor: {
      name: 'Web Technologies Trainer',
      role: 'Frontend & UI Specialist',
      imageUrl: '/assets/681b2067a4a17bf9d6f5dd4cebd11c0f.png',
      bio: 'Passionate developer dedicated to practical web engineering and student skill building.',
    },
  },
  {
    title: 'Programming and Data Science',
    description: 'Develop strong programming foundations in Python, core algorithms, data structures, and scientific libraries for data science problem-solving.',
    duration: '6 Months',
    category: 'Data Science',
    imageUrl: '/assets/68bd5fcdb30df959c7fbd697a0326b61.png',
    altText: 'Python Programming and Data Science algorithms code',
    tags: ['Python', 'Data Structures', 'Algorithms', 'Pandas', 'NumPy', 'Matplotlib', 'Statistics'],
    tuition: 'Contact for Fee Structure',
    originalTuition: '',
    nextStartDate: 'Batches Enrolling Every Month',
    location: 'Universal Institute, Amritsar (Classroom & Practical Labs)',
    credential: 'Certification of Industrial Training',
    modules: [
      { number: '01', title: 'Core Programming & Data Structures', description: 'Variables, loops, functions, OOP concepts, lists, tuples, dictionaries, and recursion.' },
      { number: '02', title: 'Applied Statistics & Probability', description: 'Statistical testing, distributions, hypothesis formulation, and data interpretation.' },
      { number: '03', title: 'Scientific Data Computing', description: 'NumPy multidimensional arrays, Pandas dataframes, Matplotlib and Seaborn plotting.' },
      { number: '04', title: 'Practical Data Science Projects', description: 'End-to-end dataset analysis, cleaning, visualization, and portfolio presentation.' },
    ],
    instructor: {
      name: 'Python & Algorithms Mentor',
      role: 'Senior Programming Faculty',
      imageUrl: '/assets/681b2067a4a17bf9d6f5dd4cebd11c0f.png',
      bio: 'Experienced educator focusing on algorithmic problem-solving and clean code discipline.',
    },
  },
  {
    title: 'COPA (Computer Operator & Programming Assistant)',
    description: 'Comprehensive ITI trade covering computer fundamentals, operating systems, office automation, database management, and basic programming concepts.',
    duration: '1 Year',
    category: 'ITI courses',
    imageUrl: '/assets/f75c2308de23c422c26dc222cf22584e.png',
    altText: 'COPA trade computer training lab in Amritsar',
    tags: ['Computer Fundamentals', 'Office Suite', 'Database Management', 'Programming', 'Networking'],
    tuition: 'Government / NCVET Approved Fee',
    originalTuition: '',
    nextStartDate: 'Annual ITI Admission Cycle',
    location: 'Universal Institute, Amritsar Campus',
    credential: 'ITI Trade Certificate',
    modules: [
      { number: '01', title: 'Computer Hardware & OS', description: 'Hardware components, operating system installation, settings, and file management.' },
      { number: '02', title: 'Office Automation & Document Processing', description: 'Advanced word processing, spreadsheets, presentation software, and business correspondence.' },
      { number: '03', title: 'Database & Programming Basics', description: 'Relational database basics, SQL commands, and beginner scripting concepts.' },
      { number: '04', title: 'Internet, Networking & Cyber Safety', description: 'LAN configuration, secure browsing, cloud applications, and workplace safety.' },
    ],
    instructor: {
      name: 'ITI Trade Instructor',
      role: 'Certified Vocational Instructor',
      imageUrl: '/assets/242e4703ebae0f66c553dfb3c21b6084.png',
      bio: 'Dedicated vocational educator with expertise in ITI trade curricula and practical hands-on training.',
    },
  },
  {
    title: 'Electrician Trade (ITI)',
    description: 'Foundational and advanced electrical theory, wiring, domestic and industrial power systems, motors, and transformer maintenance.',
    duration: '2 Years',
    category: 'ITI courses',
    imageUrl: '/assets/6d145504b16d2284f5092f5b84e31a4a.png',
    altText: 'ITI Electrician trade workshop and practical training',
    tags: ['Electrical Wiring', 'Motors & Starters', 'Safety Standards', 'Power Systems'],
    tuition: 'NCVET Approved Fee',
    originalTuition: '',
    nextStartDate: 'Annual ITI Admission Cycle',
    location: 'Universal Institute, Amritsar Campus',
    credential: 'ITI Trade Certificate',
    modules: [
      { number: '01', title: 'Electrical Foundations & Safety', description: 'Ohm’s law, circuit basics, workshop tools, and industrial electrical safety standards.' },
      { number: '02', title: 'Domestic & Commercial Wiring', description: 'Conduit wiring, earthing, distribution boards, testing, and fault diagnosis.' },
      { number: '03', title: 'AC/DC Machines & Transformers', description: 'Motors, generators, alternators, transformers, and industrial control circuits.' },
    ],
    instructor: {
      name: 'Electrical Workshop Supervisor',
      role: 'Certified Trade Faculty',
      imageUrl: '/assets/783a1f025ba759a75e3c9c5944f7b3b9.png',
      bio: 'Experienced trade instructor with extensive workshop and laboratory experience.',
    },
  },
];

const certificateSeedData = [
  {
    certificateId: 'UI-2025-1001',
    recipientName: 'Ramandeep Kaur',
    courseName: 'Full Stack Development with AI',
    issueDate: new Date('2025-06-15'),
    duration: '6 Months',
    status: 'Valid',
    grade: 'A+',
    credentialType: 'Industrial Training Certification',
    remarks: 'Successfully completed real-world project assignments and practical training.',
  },
  {
    certificateId: 'UI-2025-1002',
    recipientName: 'Manpreet Kaur',
    courseName: 'Web Development & UI Engineering',
    issueDate: new Date('2025-08-20'),
    duration: '6 Months',
    status: 'Valid',
    grade: 'A',
    credentialType: 'Industrial Training Certification',
    remarks: 'Completed practical coding modules and project work.',
  },
  {
    certificateId: 'UI-2025-1003',
    recipientName: 'Gurpreet Singh',
    courseName: 'Data Analytics and Power BI',
    issueDate: new Date('2025-09-10'),
    duration: '4 Months',
    status: 'Valid',
    grade: 'A',
    credentialType: 'Industrial Training Certification',
    remarks: 'Completed corporate analytics and KPI dashboard assignments.',
  },
];

const testimonialSeedData = [
  {
    name: 'Ramandeep Kaur',
    reviewText:
      'I would like to sincerely appreciate the learning experience and support provided by Uni Institute. The guidance, teaching approach, and overall environment have helped me improve not only my technical knowledge but also my confidence and practical skills.\n\nWhat I particularly value is the institute’s focus on making learning practical, understandable, and career-oriented. The continuous support and willingness to help students make the experience even more meaningful.\n\nI believe Uni Institute has a strong commitment to student growth, and with continued innovation and student feedback, it can achieve even greater excellence.\n\nThank you for creating an environment where learning feels purposeful and progress feels achievable. Keep inspiring and empowering students!',
    course: 'Technical & Practical Training Program',
    status: 'approved',
    isFeatured: true,
  },
  {
    name: 'Manpreet Kaur',
    reviewText:
      'I am currently doing my Full Stack Development with AI course at Universal Institute. The learning experience has been really good. The trainer is knowledgeable, supportive and focuses on practical learning. The course is helping me build my programming concepts and work on real-world projects. Overall, I am satisfied with my experience and would recommend the institute to students interested in web development.',
    course: 'Full Stack Development with AI',
    status: 'approved',
    isFeatured: true,
  },
];

export async function GET() {
  try {
    await dbConnect();

    // 1. Seed courses
    await Course.deleteMany({});
    await Course.insertMany(courseSeedData);

    // 2. Seed certificates (upsert by certificateId)
    for (const cert of certificateSeedData) {
      await Certificate.findOneAndUpdate(
        { certificateId: cert.certificateId },
        cert,
        { upsert: true, new: true }
      );
    }

    // 3. Seed testimonials
    await Testimonial.deleteMany({});
    await Testimonial.insertMany(testimonialSeedData);

    return NextResponse.json({
      success: true,
      message: `Seeded ${courseSeedData.length} courses, ${certificateSeedData.length} test certificates, and ${testimonialSeedData.length} genuine testimonials successfully.`,
    });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
