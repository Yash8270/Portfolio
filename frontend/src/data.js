import React from 'react';
import profile from './assets/profile_copy.jpg';
import {
  Home,
  User,
  Briefcase,
  FileText,
  Mail,
  Instagram,
  Linkedin,
  Github,
  MessageCircle
} from 'lucide-react';

export const portfolioData = {
  name: 'Yash Limbachiya',
  titles: ['Full Stack Developer', 'Software Developer', 'AI Enthusiast'],
  hero: {
    intro: "Hello, I'm",
    description:
      'Goal-oriented Software Developer passionate about building AI-driven and full-stack web applications. Skilled in ReactJS, FastAPI, and MongoDB, I enjoy designing scalable systems and optimizing performance through intelligent automation.',
    imageUrl: profile,
  },

  about: {
    title: 'About Me',
    greeting: 'Hey there!',
    headline:
      "I'm Yash Limbachiya — a developer passionate about crafting scalable, intelligent, and user-focused applications.",
    bio: [
      'I’m a B.Tech Information Technology student at K. J. Somaiya Institute of Technology, Mumbai, with a strong foundation in web development, machine learning, and embedded systems.',
      'I’ve built real-world projects ranging from social platforms and task managers to AI-powered chatbots and robotics systems. My goal is to merge innovation with reliability — building solutions that actually make a difference.',
    ],
    skills: [
      { icon: 'React', title: 'Frontend Development', description: 'Building dynamic and responsive UIs using ReactJS, Tailwind CSS, and JavaScript.' },
      { icon: 'Server', title: 'Backend Development', description: 'Developing scalable APIs with FastAPI, ExpressJS, and NodeJS.' },
      { icon: 'Database', title: 'Database Management', description: 'Experience with MongoDB and MySQL for optimized data modeling.' },
      { icon: 'Brain', title: 'AI & Automation', description: 'Integrating AI models into real-world apps for intelligent automation.' },
    ],
    timeline: [
      { year: '2025', title: 'Software Development Intern', description: 'Working at Marico Limited on an AI-powered HR Assist chatbot using FastAPI & RAG.' },
      { year: '2024', title: 'Robotics Intern', description: 'At The Innovation Story, mentored students and built bots for VEX IQ competition.' },
      { year: '2023', title: 'Embedded Programmer', description: 'Built an autonomous robot with sensor integration for DD Robocon.' },
      { year: '2022', title: 'Started B.Tech IT', description: 'Began academic journey at K. J. Somaiya Institute of Technology (CGPA: 9.69).' },
    ],
    quote: '"Combining logic and creativity to build technology that inspires."',
  },

  resume: {
    title: 'Resume',
    summary:
      'My academic and professional journey reflects a balance between software engineering, AI innovation, and hands-on robotics.',
    education: [
      {
        degree: 'B.Tech in Information Technology',
        years: '2022 – 2026',
        institution: 'K. J. Somaiya Institute of Technology, Mumbai',
        description: 'Average CGPA: 9.69',
      },
      {
        degree: '12th HSC',
        years: '2022',
        institution: 'Bhavans College, Mumbai',
        description: 'Percentage: 80.5%',
      },
      {
        degree: '10th SSC',
        years: '2020',
        institution: 'SMT J. B. Khot High School',
        description: 'Percentage: 87.4%',
      },
    ],
    experience: [
      {
        role: 'Software Development Intern',
        years: 'June 2025 – Present',
        company: 'Marico Limited',
        duties: [
          'Developing an AI-powered HR Assist chatbot using FastAPI and a RAG model for policy-related employee queries.',
          'Implemented authentication, REST APIs, and internal data integration to streamline HR workflows.',
        ],
      },
      {
        role: 'Embedded Programmer',
        years: 'Jan 2023 – July 2024',
        company: 'Team KJSIT Robocon',
        duties: [
          'Programmed autonomous robots using Arduino, IR sensors, and encoders for navigation and control.',
          'Integrated Huskylens vision system for object detection and developed PID-based motion control.',
        ],
      },
      {
        role: 'Robotics Intern',
        years: 'Sept 2024 – Oct 2024',
        company: 'The Innovation Story (TIS)',
        duties: [
          'Programmed and mentored robotics projects for the VEX IQ competition.',
          'Designed modular control systems and taught technical fundamentals to students.',
        ],
      },
    ],
    skills: [
      { name: 'ReactJS / JavaScript', level: 95 },
      { name: 'Python / FastAPI', level: 90 },
      { name: 'NodeJS / Express', level: 85 },
      { name: 'MongoDB / MySQL', level: 85 },
      { name: 'Machine Learning / AI', level: 80 },
    ],
  },

  work: {
    title: 'My Work',
    summary: 'A showcase of projects across full-stack web development, AI systems, and embedded robotics.',
    projects: [
      {
        icon: 'React',
        title: 'Connectify – Social Media Web App',
        description:
          'Developed a full-stack social platform with real-time chat, JWT authentication, and RESTful APIs using MERN Stack.',
        link: 'https://github.com/Yash8270/Connectify',
      },
      {
        icon: 'Calendar',
        title: 'Goal-Oriented Task Manager',
        description:
          'Created a drag-and-drop calendar-based task management tool with dynamic goal filters and persistent data storage.',
        link: 'https://github.com/Yash8270/Calendar',
      },
      {
        icon: 'AI',
        title: 'HR Assist Chatbot (Marico Internship)',
        description:
          'Developed an internal chatbot powered by FastAPI and RAG architecture to handle employee HR queries within Microsoft Teams.',
        link: '#',
      },
      {
        icon: 'Chip',
        title: 'Autonomous Robot (Robocon)',
        description:
          'Built a PID-controlled robot using Arduino Mega, sensors, and encoders for autonomous movement and obstacle avoidance.',
        link: 'https://github.com/Yash8270/Automation-code',
      },
    ],
  },

  contact: {
    title: 'Contact',
    summary: 'Let’s connect — open to internships, freelance, and collaboration opportunities.',
    info: {
      location: 'Mumbai, India',
      phone: '+91 9326754955',
      email: 'yashlimbachiya900@gmail.com',
    },
    form: {
      heading: 'Send a Message',
      description: 'Whether it’s a collaboration or a chat, feel free to drop a message.',
    },
  },

  footer: {
    copyright: '© 2025 Yash Limbachiya',
  },

  socials: [
    { name: 'Instagram', icon: <Instagram className="w-4 h-4" />, url: 'https://instagram.com/yashlimbachiya_8' },
    { name: 'WhatsApp', icon: <MessageCircle className="w-4 h-4" />, url: 'https://wa.me/919326754955' },
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, url: 'https://linkedin.com/in/yash-limbachiya-4b0001254' },
    { name: 'GitHub', icon: <Github className="w-4 h-4" />, url: 'https://github.com/Yash8270' },
  ],
};

export const navItems = [
  { name: 'home', title: 'Home', icon: <Home className="w-5 h-5" /> },
  { name: 'about', title: 'About', icon: <User className="w-5 h-5" /> },
  { name: 'resume', title: 'Resume', icon: <FileText className="w-5 h-5" /> },
  { name: 'work', title: 'Work', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'contact', title: 'Contact', icon: <Mail className="w-5 h-5" /> },
];
