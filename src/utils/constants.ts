import { PersonalInfo, Skill, Project, Certificate, EducationItem } from '../types/portfolio';

// Import image assets
import avatarImg from "../assets/images/5067e7dc-e0b2-4cef-b0a2-def73a40169a.jpeg";
import aiJobImg from '../assets/images/ai_job_finder_1784998812507.jpg';
import intrusionImg from '../assets/images/intrusion_alarm_1784998822478.jpg';
import studentMgmtImg from '../assets/images/student_management_1784998833070.jpg';
import oracleCertificate from "../assets/images/oracle-certificate.jpeg";

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Vikas Kumar',
  title: 'Computer Science Engineering Student',
  subtitles: [
    'Computer Science Engineering Student',
    'AI & Machine Learning Enthusiast',
    'Full Stack Web Developer',
    'Problem Solver & Code Crafter'
  ],
  bio: `I am a passionate Computer Science Engineering student dedicated to building high-performance web applications, intelligent AI tools, and robust software systems. With a solid foundation in Data Structures, Algorithms, and Modern Web Tech, I enjoy solving complex engineering challenges and turning innovative ideas into real-world applications.`,
  careerObjective: `To leverage my technical skills in Python, Web Development, TypeScript, and AI to build scalable engineering solutions, collaborate with forward-thinking technical teams, and continuously innovate in software engineering.`,
  email: 'vikaskumar868903@gmail.com',
  phone: '+91 8689035503',
  location: 'India',
  github: 'https://github.com/Vikaskumar-86',
  linkedin: 'https://www.linkedin.com/in/vikas-kumar-840b363a8?utm_source=share_via&utm_content=profile&utm_medium=member_android',
  resumeUrl: '#resume',
  avatar: avatarImg
};

export const SKILLS_DATA: Skill[] = [
  {
    name: 'C',
    category: 'Languages',
    level: 85,
    iconName: 'Code',
    color: '#00599C',
    experienceYears: '2+ Years',
    description: 'System programming, pointers, manual memory allocation, low-level data structures, and algorithmic logic.'
  },
  {
    name: 'C++',
    category: 'Languages',
    level: 20,
    iconName: 'Code2',
    color: '#00599C',
    experienceYears: '2+ Years',
    description: 'Object-Oriented Programming, Standard Template Library (STL), DSA problem solving, and fast runtime efficiency.'
  },
  {
    name: 'Python',
    category: 'Languages',
    level: 50,
    iconName: 'Terminal',
    color: '#3776AB',
    experienceYears: '3+ Years',
    description: 'Data science, Machine Learning, OpenCV computer vision, automation scripting, REST APIs, and backend algorithms.'
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 40,
    iconName: 'FileCode',
    color: '#3178C6',
    experienceYears: '2+ Years',
    description: 'Strongly typed web engineering, interfaces, generics, async/await patterns, and compile-time error prevention.'
  },
  {
    name: 'JavaScript',
    category: 'Languages',
    level: 20,
    iconName: 'Braces',
    color: '#F7DF1E',
    experienceYears: '3+ Years',
    description: 'ES6+ features, functional programming, promises, DOM manipulation, asynchronous event loops, and web APIs.'
  },
  {
    name: 'HTML',
    category: 'Frontend',
    level: 95,
    iconName: 'Layout',
    color: '#E34F26',
    experienceYears: '3+ Years',
    description: 'Semantic HTML5 structure, web accessibility standards (WCAG), clean DOM architecture, and SEO optimizations.'
  },
  {
    name: 'CSS',
    category: 'Frontend',
    level: 95,
    iconName: 'Palette',
    color: '#1572B6',
    experienceYears: '3+ Years',
    description: 'Flexbox, CSS Grid layouts, glassmorphic styling, keyframe animations, custom CSS variables, and responsive design.'
  },
  {
    name: 'SQL',
    category: 'Backend & Database',
    level: 40,
    iconName: 'Database',
    color: '#4479A1',
    experienceYears: '2+ Years',
    description: 'Relational database design, multi-table joins, indexing, query optimization, PostgreSQL, and MySQL operations.'
  },
  {
    name: 'Git & GitHub',
    category: 'Tools & Version Control',
    level: 70,
    iconName: 'GitBranch',
    color: '#F05032',
    experienceYears: '3+ Years',
    description: 'Branching strategy, pull request workflows, merge conflict resolution, open source collaboration, and GitHub Actions.'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'intrusion-alarm',
    title: 'Home Intrusion & Safety Alarm System',
    subtitle: 'Smart Computer Vision & IoT Safety Monitoring Application',
    description: 'A real-time security application using computer vision motion detection to flag unexpected intrusions and trigger audio alerts and status logging.',
    longDescription: 'Built with Arduino Uno,PIR Motion Sensor, and Buzzer, this Smart Home Intrusion Alarm System monitors optical motion feeds in real time. Upon detecting unexpected movement in secured perimeter zones, it logs timestamped events, plays audible warning alarms, and sends immediate security dashboard visual alerts.',
    image: intrusionImg,
    technologies: ['Arduino Uno', 'PIR Motion Sensor', 'LED', 'WI-FI Module', 'Breadboard', 'Buzzer'],
    githubUrl: 'https://github.com/vikaskumar868903/home-intrusion-alarm',
    liveDemoUrl: '#demo-intrusion-alarm',
    featured: true,
    category: 'IoT & Security',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Real-time video feed simulation with bounding box motion tracking',
      'Instant intrusion alert sound synthesizer and status notification panel',
      'Secured zone perimeter configuration & sensitivity threshold adjustment',
      'Historical event log export with date-time filtering'
    ]
  },
  {
    id: 'RC Car',
    title: 'RC Car',
    subtitle: 'RC Car',
    description: 'An RC (Remote-Controlled) Car is a wireless vehicle that can be controlled remotely using a radio transmitter, Bluetooth, or Wi-Fi. The project uses a microcontroller such as an Arduino or ESP32 to receive control signals and drive the motors through a motor driver. It demonstrates the fundamentals of embedded systems, wireless communication, and robotics while providing a practical platform for learning automation and control systems.',
    longDescription: 'An RC (Remote-Controlled) Car is a wireless vehicle that can be controlled remotely using a radio transmitter, Bluetooth, or Wi-Fi. The project uses a microcontroller such as an Arduino or ESP32 to receive control signals and drive the motors through a motor driver. It demonstrates the fundamentals of embedded systems, wireless communication, and robotics while providing a practical platform for learning automation and control systems.',
    image: "src/assets/images/VIKAS.jpg",
    technologies: ['Arduino Uno', 'Bluetooth(Hc-05)', 'L298N Motor Driver', 'DC Motor', 'Jumper Wire', 'Tyres'],
    githubUrl: 'https://github.com/vikaskumar868903/student-management-system',
    liveDemoUrl: '#RC Car',
    featured: true,
    category: 'Robotics',
    hasInteractiveDemo: true,
    keyFeatures: [
      'Dynamic CRUD management for student records & course registries',
      'Interactive attendance performance charts and grade analytics',
      'Filterable data tables with sorting, search, and CSV export',
      'Clean multi-tab interface with glassmorphic cards and dark mode support'
    ]
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM / Coursera',
    date: '2025',
    credentialId: 'IBM-PY-894201',
    skills: ['Python', 'Data Structures', 'REST APIs', 'Pandas'],
    verificationUrl: 'https://coursera.org/verify/IBM-PY-894201',
    image: 'https://picsum.photos/seed/cert-python/800/600'
  },
  {
    id: 'cert-2',
    title: 'Full Stack Web Development with React',
    issuer: 'Meta / Coursera',
    date: '2025',
    credentialId: 'META-REACT-773194',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'State Management'],
    verificationUrl: 'https://coursera.org/verify/META-REACT-773194',
    image: 'https://picsum.photos/seed/cert-react/800/600'
  },
  {
    id: 'cert-3',
    title: 'Problem Solving (Intermediate) Certificate',
    issuer: 'HackerRank',
    date: '2024',
    credentialId: 'HR-PS-550192',
    skills: ['C++', 'Data Structures', 'Algorithms', 'Optimization'],
    verificationUrl: 'https://hackerrank.com/certificates/HR-PS-550192',
    image: 'https://picsum.photos/seed/cert-ps/800/600'
  },
  {
    id: 'cert-4',
    title: 'Database Foundations & SQL Certification',
    issuer: 'Oracle / Coursera',
    date: '2024',
    credentialId: 'ORACLE-SQL-301928',
    skills: ['SQL', 'Relational DB', 'Query Optimization', 'PostgreSQL'],
    verificationUrl:oracleCertificate,
    image: oracleCertificate
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'edu-btech',
    degree: 'Amity University Rajasthan',
    institution: 'Engineering University / Institute',
    location: 'India',
    period: '2022 – 2026 (Expected)',
    grade: 'CGPA: 8.02 / 10.0',
    description: 'Pursuing undergraduate degree in Computer Science & Engineering with a strong focus on Software Engineering, Artificial Intelligence, Database Management, and Web Technologies.',
    coursework: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (C++/Python)',
      'Database Management Systems (SQL)',
      'Operating Systems & Computer Networks',
      'Artificial Intelligence & Machine Learning',
      'Web Technologies & Software Engineering'
    ],
    achievements: [
      'Maintained top 5% academic performance throughout coursework',
      'Lead Developer for student tech club web projects & hackathons',
      'Published project on AI Job Recommendations at departmental showcase'
    ],
    current: true
  },
  {
    id: 'edu-12th',
    degree: 'Rahul Public school (Class XII - Science)',
    institution: 'Senior Secondary School',
    location: 'India',
    period: '2024 – 2025',
    grade: 'Score: 72.0%',
    description: 'Specialized in Physics, Chemistry, Mathematics, and Computer Science with distinction in mathematics and programming principles.',
    coursework: [
      'Advanced Mathematics & Calculus',
      'Physics & Applied Mechanics',
      'Computer Science (C++ Fundamentals & OOP)',
      'Chemistry'
    ],
    achievements: [
      'School topper in Computer Science examination',
      'Winner in Inter-school Science & Mathematics Quiz'
    ]
  },
  {
    id: 'edu-10th',
    degree: 'Raj Internatinal School (Class X)',
    institution: 'High School',
    location: 'India',
    period: '2022 – 2023',
    grade: 'Score: 70.0%',
    description: 'Completed secondary education with high distinction across Science, Mathematics, English, and Social Studies.',
    coursework: [
      'Mathematics',
      'General Science',
      'Information Technology',
      'Languages & Social Sciences'
    ],
    achievements: [
      'School merit certificate for academic excellence'
    ]
  }
];

export const STATS = [
  { label: 'Programming Languages', value: '5+', subtext: 'C, C++, Python, JS, TS' },
  { label: 'Web Projects Built', value: '10+', subtext: 'React & Full Stack' },
  { label: 'GitHub Commits', value: '5+', subtext: 'Consistent coding' },
  { label: 'Current CGPA', value: '8.02', subtext: 'Academic distinction' }
];
