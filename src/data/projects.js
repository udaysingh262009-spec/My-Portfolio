import krishimitraLogin from '../assets/projects/krishimitra_login.png'
import krishimitraHome from '../assets/projects/krishimitra_home.png'
import krishimitraAi from '../assets/projects/krishimitra_ai.png'
import krishimitraDisease from '../assets/projects/krishimitra_disease.png'
import krishimitraWeather from '../assets/projects/krishimitra_weather.png'

import quickhireSplash from '../assets/projects/quickhire_splash.png'
import quickhireRole from '../assets/projects/quickhire_role.png'
import quickhireRegister from '../assets/projects/quickhire_register.png'
import quickhireDashboard from '../assets/projects/quickhire_dashboard.png'

export const projects = [
  {
    id: 1,
    title: 'KrishiMitra-Ai – Farmer Assistant AI',
    subtitle: 'AI-Powered Agriculture Platform',
    category: 'AI & ML',
    description: 'An intelligent agricultural assistance platform providing real-time plant disease diagnostics, localized weather insights, market price analysis, and voice-assisted farming guidance.',
    longDescription: 'KrishiMitra-Ai leverages Deep Learning & Machine Learning models to analyze crop leaf images, diagnose plant diseases accurately, and suggest targeted organic treatments. It features FastAPI backend endpoints, real-time weather API integration, and bilingual voice query support for farmers across rural India.',
    tech: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'JavaScript', 'FastAPI', 'NumPy', 'Pandas'],
    image: krishimitraLogin,
    gallery: [
      krishimitraLogin,
      krishimitraHome,
      krishimitraAi,
      krishimitraDisease,
      krishimitraWeather,
    ],
    github: 'https://github.com/udaysingh262009-spec/KrishiMitra-AI',
    demo: 'https://krishimitra-demo.vercel.app',
    featured: true,
    highlights: [
      'Crop Disease Image Detection with 96% Accuracy',
      'Voice Assistant & Multilingual Farming Advice',
      'Real-time Mandi Market Price Ticker',
    ],
  },
  {
    id: 2,
    title: 'Quick Hire – Local Worker Hiring Platform',
    subtitle: 'Full Stack On-Demand Service App',
    category: 'Full Stack',
    description: 'A modern location-based web application connecting daily wage workers, electricians, plumbers, and carpenters with local customers in real time.',
    longDescription: 'Quick Hire features interactive live map tracking, dynamic worker availability status, instant booking request dispatching, and a secure rating/review system. Built with React frontend and FastAPI backend RESTful APIs.',
    tech: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'JavaScript', 'FastAPI', 'MySQL'],
    image: quickhireSplash,
    gallery: [
      quickhireSplash,
      quickhireRole,
      quickhireRegister,
      quickhireDashboard,
    ],
    github: 'https://github.com/udaysingh262009-spec?tab=repositories',
    demo: 'https://quickhire-demo.vercel.app',
    featured: true,
    highlights: [
      'Real-time Map Location & Nearby Worker Discovery',
      'Instant In-App Booking & Notification System',
      'Worker Rating, Verification & Earnings Dashboard',
    ],
  },
  {
    id: 3,
    title: 'Uday Singh – Developer Portfolio Website',
    subtitle: 'Modern Futuristic Interactive Web App',
    category: 'Web App',
    description: 'A state-of-the-art interactive developer portfolio featuring glassmorphic UI design, Framer Motion animations, custom neon cursor, and real project showcases.',
    longDescription: 'Engineered with React.js 19, Vite, Tailwind CSS v4, and Framer Motion. Highlights Uday Singh’s tech stack, real application screenshots, interactive learning journey roadmap, and direct contact channels.',
    tech: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'JavaScript', 'Framer Motion'],
    image: null, // High-tech glass code card preview
    github: 'https://github.com/udaysingh262009-spec/My-Portfolio',
    demo: '#',
    featured: true,
    highlights: [
      'Futuristic Glassmorphic Neon UI & Micro-animations',
      'Interactive Project Modal Screenshot Gallery Viewers',
      'Custom Neon Cursor & Responsive Mobile Drawer',
    ],
  },
]
