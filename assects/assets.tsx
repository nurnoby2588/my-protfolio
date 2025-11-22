import profile from '@/assects/profile.png'
import profileppic from '@/assects/profilepic.jpg'
import logo from '@/assects/logo.png'
import navlogo from '@/assects/navlogo.png'
import { FaBriefcase, FaLanguage, FaRegHandshake } from "react-icons/fa"; // For Language
import { BsCodeSlash } from "react-icons/bs";
import { MdSchool } from "react-icons/md"; // For Education
import { AiOutlineDotNet, AiOutlineProject } from "react-icons/ai"; // For Project
import vs from '@/assects/vs.svg.webp'
import figmalogo from '@/assects/Figma-logo.svg.png'
import figma from '@/assects/figma.png'
import firebase from '@/assects/firebase.png'
import github from '@/assects/github.png'
import ms from '@/assects/ms sql.jpg'
import mongodb from '@/assects/mongodb.jpg'
import postgresql from '@/assects/postgresql.svg.png'
import { FaServer, FaCode, FaProjectDiagram, FaLock } from 'react-icons/fa';
import background from '@/assects/background.png'
import herobg from '@/assects/herobg.png'
import fullStack from '@/assects/full_stack-1.png'
import backend from '@/assects/backend-1.png'
import api from '@/assects/api-1.jpg'
import frontend from '@/assects/frontend-1.png'
import logoR from '@/assects/navlogo-r.png'
import authen from '@/assects/aurh-1.jpg'
import nurlogo from '@/assects/nurnoby-remove.png'
import nlogo from '@/assects/n-removeb.png'
import mail from '@/assects/mail.png'
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import gitdark from "@/assects/github_dark.png";
import { PiGithubLogoThin } from "react-icons/pi";
import node from '@/assects/node.png'
import ts from '@/assects/ts.png'
import js from '@/assects/js.webp'
import express from '@/assects/express.webp'
import prisma from '@/assects/prisma.png'
import jwt from '@/assects/jwt.webp'
import react from '@/assects/react.png'
import next from '@/assects/next.png'
import html from '@/assects/html.png'
import bootstrap from '@/assects/bootstrap.png'
import tailwind from '@/assects/tailwind.png'
import css from '@/assects/css.webp'
import net from '@/assects/net.webp'
import git from '@/assects/git.webp'
import vercel from '@/assects/vercel.png'
import netlify from '@/assects/netlify.webp'

import mui from '@/assects/mui.png'
import { DiMsqlServer } from "react-icons/di";

// icons import
import {
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiFastify,
  SiPrisma,
  SiMongoose,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify
} from "react-icons/si";
import { IoLogoFirebase } from 'react-icons/io5';

export const skills = [
  {
    title: "Node.js",
    icon: FaNodeJs,
    image: node
  },
  {
    title: "Express.js",
    icon: SiExpress,
    image: express
  },
  {
    title: "React.js",
    icon: FaReact,
    image: react
  },
  {
    title: "Next.js",
    icon: SiNextdotjs,
    image: next
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
    image: js
  },
  {
    title: "TypeScript",
    icon: SiTypescript,
    image: ts
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
    image: mongodb
  },
  {
    title: "PostgreSQL",
    icon: SiPostgresql,
    image: postgresql
  },
  {
    title: "MS SQL",
    icon: DiMsqlServer,
    image: ms
  },
  {
    title: "Prisma",
    icon: SiPrisma,
    image: prisma
  },
  //   {
  //     title: "Mongoose",
  //     icon: SiMongoose,
  //     image: "/images/skills/mongoose.png"
  //   },
  {
    title: "HTML5",
    icon: FaHtml5,
    image: html
  },
  {
    title: "CSS3",
    icon: FaCss3Alt,
    image: css
  },
  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    image: tailwind
  },
  {
    title: "Bootstrap",
    icon: SiBootstrap,
    image: bootstrap
  },
  {
    title: "Material UI",
    icon: SiMui,
    image: mui
  },
  {
    title: "Git",
    icon: FaGitAlt,
    image: git
  },
  {
    title: ".net",
    icon: AiOutlineDotNet,
    image: net
  },
  {
    title: "jwt",
    icon: SiJsonwebtokens,
    image: jwt
  },
  {
    title: "GitHub",
    icon: FaGithub,
    image: github
  },
  {
    title: "vercel",
    icon: SiVercel,
    image: vercel
  },
  {
    title: "netlify",
    icon: SiNetlify,
    image: netlify
  },
  {
    title: "firebase",
    icon: IoLogoFirebase,
    image: firebase
  },
];




const asstects = {
  profile,
  logo,
  navlogo,
  profileppic,
  background,
  herobg,
  logoR,
  nurlogo,
  nlogo,
  mail
}
export const emailAccount = 'nurnoby323@gmail.com'

export const socialAccount = [{ name: 'Github', link: 'https://github.com/nurnoby2588', icon: <IoLogoGithub /> }, {
  name: 'Linkedin',
  link: "https://www.linkedin.com/in/nurnoby-rahman/", icon: <FaLinkedin />
}, { name: 'Facebook', link: "https://www.facebook.com/NurNoby2588", icon: <FaFacebook /> },]
export default asstects

export const infoList = [
  {
    id: 1,
    title: "Experience",
    icon: <FaRegHandshake />, // Light mode icon
    iconDark: <FaBriefcase color="#8BC34A" />, // Dark mode icon
    description: "Backend Developer at Bulipe Tech & Software Developer at BDEMR.",
  },
  {
    id: 2,
    title: "Education",
    icon: <MdSchool />, // Light mode icon
    iconDark: <MdSchool color="#64B5F6" />, // Dark mode icon
    description: "B.Sc. in Computer Science and Engineering",
  },
  {
    id: 3,
    title: "Project",
    icon: <AiOutlineProject />, // Light mode icon
    iconDark: <AiOutlineProject color="#FFB74D" />, // Dark mode icon
    description: "Built more than 5 projects including full-stack applications",
  },
];
export const services = [
  {
    id: 1,
    icon: <FaServer />,
    title: 'Backend Development',
    description: 'Build scalable, secure, and high-performance backend systems using Node.js, Express.js, Fastify, and Prisma/Mongoose. Design and manage databases with MongoDB, PostgreSQL, MS SQL, while optimizing system performance and workflows.',
    link: ""
  },
  {
    id: 2,
    icon: <FaCode />,
    title: 'Full-Stack Development',
    description: 'Develop modern, responsive web applications with React.js and Next.js. Seamlessly integrate frontend with backend APIs and craft interactive UI components using Tailwind, Bootstrap, and Material UI.',
    link: ""
  },
  {
    id: 3,
    icon: <FaProjectDiagram />,
    title: 'System Architecture & Optimization',
    description: 'Design maintainable and scalable system architectures, enhance code quality, performance, and security, and implement best practices for long-term project stability.',
    link: ""
  },
  {
    id: 4,
    icon: <FaLock />,
    title: 'Authentication & Security',
    description: 'Implement JWT-based authentication and authorization, ensuring secure access and protection for web applications and APIs.',
    link: ""
  },
];
export const workData = [
  {
    id: 1,
    image: frontend,
    bgImage: '/frontend-1.png',
    title: 'Frontend Development',
    description: 'Web Design',
    link: "/"
  },
  {
    id: 2,
    image: api,
    bgImage: "/api-b.jpg",
    title: 'Backend Development',
    description: 'Api Design',
    link: ""
  },
  {
    id: 3,
    image: fullStack,
    bgImage: "/full-stack-2.jpg",
    title: 'Full-Stack Development',
    description: 'Web Design',
    link: ""
  },
  {
    id: 4,
    image: authen,
    bgImage: "/aurh-1.jpg",
    title: 'Authentication & Security',
    description: 'Web Design',
    link: ""
  },
];
export const educationInfo = [
  {
    title: "Bachelor of Science (BSc) in Computer Science & Engineering",
    details: [
      {
        Institution: "Daffodil International University, Savar",
        Graduation: "August 2023",
        CGPA: "3.20"
      }
    ]
  },
  {
    title: "Higher Secondary Certificate (HSC) – Science",
    details: [
      {
        Institution: "Government Maulana Mohammad Ali College, Tangail",
        Graduation: "December 2018",
        CGPA: "3.33"
      }
    ]
  },
  {
    title: "Secondary School Certificate (SSC) – Science",
    details: [
      {
        Institution: "Shaheen School & College, Tangail",
        Graduation: "December 2016",
        CGPA: "4.94"
      }
    ]
  },
]
export const experienceInfo = [
  {
    title: "Software Engineer (Backend) — Bulipe Tech, Dhaka",
    timeFrame: "June 2025 – Present",
    keyResponsibilities: [
      "Enhanced backend of Neelas using Node.js, Express.js, Mongoose, MongoDB.",
      "Built secure authentication and optimized REST APIs.",
      "Integrated internal/external APIs into Next.js applications.",
      "Managed CMS data structures and added new features.",
      "Improved performance using Redis."
    ],
    achievements: [
      "Reduced API response time by 25%, improving scalability.",
      "Increased application efficiency by 20%, decreasing processing time.",
      "Strengthened backend reliability and user interaction speeds."
    ]
  },
  {
    title: "Full Stack Developer — Bangladesh Electronic Medical Record (BDEMR), Dhaka",
    timeFrame: "December 2021 – January 2023",
    keyResponsibilities: [
      "Developed and expanded reporting, invoicing, and patient management modules using Next.js, Material UI, Node.js, Express.js, Mongoose, and MongoDB.",
      "Implemented secure user authentication, dashboards, and API integrations.",
      "Improved system performance and scalability to support multi-user operations.",
      "Collaborated cross-functionally with designers and stakeholders to deliver features on schedule."
    ],
    achievements: [
      "Achieved 30% reduction in processing time, improving scalability.",
      "Enhanced user experience with optimized UI flows and backend improvements.",
      "Successfully deployed and supported modules used actively in healthcare operations."
    ]
  }
];

export const projectDetails = [
  {
    "title": "NextCommerce",
    "projectType": "frontend",
    "tagline": "Fast eCommerce UI with smart filters and cart management.",
    "thumbnailImage": "/images/nextcommerce-thumb.jpg",
    "tags": ["Next.js", "MUI"],
    "detail": {
      "heroImage": "/images/nextcommerce-hero.jpg",
      "context": "Shoppers needed a quick way to discover products and manage carts without a heavy backend. Built a responsive storefront focused on filtering and cart UX.",
      "roleAndTools": {
        "role": "Frontend Developer",
        "tools": ["Next.js", "MUI", "TypeScript"]
      },
      "featuresAndDecisions": [
        "Faceted filtering (category, price, rating) with URL state for shareable results",
        "Add/update/delete cart items with optimistic UI",
        "Accessible components using MUI; keyboard- and screen-reader-friendly",
        "SSR/SSG for fast initial load and SEO-friendly product pages"
      ],
      "outcomesAndMetrics": [
        "Sub‑second filter interactions",
        "~95 Lighthouse Performance on product listing pages"
      ],
      "linksAndCredits": {
        "demo": "https://example.com/nextcommerce",
        "repo_client": "https://github.com/you/nextcommerce",
        "credits": "Solo project"
      }
    }
  },
  {
    "title": "Dhaka Bus Fare",
    "projectType": "fullstack",
    "tagline": "City bus discovery, ticketing, real‑time chat, and admin tools.",
    "thumbnailImage": "/images/dhaka-bus-thumb.jpg",
    "tags": ["React", "Node.js", "MongoDB", "Stripe", "2025"],
    "detail": {
      "heroImage": "/images/dhaka-bus-hero.jpg",
      "context": "Commuters needed accurate routes in Dhaka and the ability to buy intercity tickets. The platform shows available buses, enables ticket purchases, and supports real‑time communication.",
      "roleAndTools": {
        "role": "Full‑stack Developer",
        "tools": ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Firebase", "MUI", "Stripe"]
      },
      "featuresAndDecisions": [
        "Route search from origin to destination with city‑specific availability",
        "Ticket purchasing with Stripe payment gateway",
        "Real‑time chat (WebSockets/Firebase) for support and coordination",
        "Admin dashboard to add buses, manage schedules, and oversee orders",
        "JWT auth with role‑based access (admin/user)"
      ],
      "outcomesAndMetrics": [
        "Reduced booking friction for intercity travel",
        "Admin flow streamlines bus data updates"
      ],
      "linksAndCredits": {
        "demo": "https://preeminent-trifle-8d5909.netlify.app/register",
        "repo_client": "https://github.com/nurnoby2588/appropriate-bus",
        "repo_server": "https://github.com/nurnoby2588/appropiate-bus-server",
        "credits": "Solo project; city data sourced from public listings"
      }
    }
  },
  {
    "title": "ElectroTools",
    "projectType": "fullstack",
    "tagline": "Tooling manufacturer store with secure payments and admin control.",
    "thumbnailImage": "/images/electrotools-thumb.jpg",
    "tags": ["React", "Node.js", "MongoDB", "Stripe", "2024"],
    "detail": {
      "heroImage": "/images/electrotools-hero.jpg",
      "context": "A manufacturer needed an online store for electric tools with order management and secure checkout.",
      "roleAndTools": {
        "role": "Full‑stack Developer",
        "tools": ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Firebase", "MUI", "Stripe"]
      },
      "featuresAndDecisions": [
        "Product catalog with stock status and detailed specs",
        "Cart, checkout, and Stripe payments with webhooks",
        "Admin portal to manage tools, pricing, and inventory",
        "JWT authentication and protected routes",
        "MUI for consistent, accessible UI components"
      ],
      "outcomesAndMetrics": [
        "Reliable order flow with payment confirmation",
        "Improved admin efficiency for catalog updates"
      ],
      "linksAndCredits": {
        "demo": "https://example.com/electrotools",
        "repo": "https://github.com/you/electrotools",
        "credits": "Solo project"
      }
    }
  },
  {
    "title": "Panda Shop",
    "projectType": "frontend",
    "tagline": "Simple, fast React storefront UI.",
    "thumbnailImage": "/images/pandashop-thumb.jpg",
    "tags": ["React", "UI", "2024"],
    "detail": {
      "heroImage": "/images/pandashop-hero.jpg",
      "context": "A lightweight frontend shop to showcase products and smooth browsing.",
      "roleAndTools": {
        "role": "Frontend Developer",
        "tools": ["React", "Vite/Create React App", "CSS/Styled Components"]
      },
      "featuresAndDecisions": [
        "Product listing and detail views",
        "Client‑side state for cart preview",
        "Responsive layout and accessible navigation",
        "Focus on quick TTI with code‑splitting"
      ],
      "outcomesAndMetrics": [
        "Fast interactive experience on mobile",
        "Clean, approachable UI"
      ],
      "linksAndCredits": {
        "demo": "https://festive-aryabhata-eb3d6a.netlify.app/",
        "repo": "https://github.com/nurnoby2588/panda",
        "credits": "Solo project"
      }
    }
  },
  {
    "title": "Neelas Backend",
    "projectType": "backend",
    "tagline": "Social media backend with auth, privacy, reactions, and email OTP.",
    "thumbnailImage": "/images/neelas-backend-thumb.jpg",
    "tags": ["Node.js", "MongoDB", "JWT", "2024"],
    "detail": {
      "heroImage": "/images/neelas-backend-hero.jpg",
      "context": "Server for a short‑video social app (TikTok‑like), focusing on secure auth, privacy controls, and content moderation.",
      "roleAndTools": {
        "role": "Backend Developer",
        "tools": ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Nodemailer"]
      },
      "featuresAndDecisions": [
        "Email OTP verification and JWT login flow",
        "Privacy controls: visibility settings for videos, user blocking",
        "Reaction endpoints (like/emoji) with rate limiting",
        "Content policies and basic moderation hooks",
        "Scalable data models for users, videos, reactions"
      ],
      "outcomesAndMetrics": [
        "Secure authentication with verified email",
        "Clear privacy management for users"
      ],
      "linksAndCredits": {
        "repo": "https://github.com/you/neelas-backend",
        "docs": "https://example.com/neelas-api-docs",
        "credits": "Server‑side only; integrates with separate frontend"
      }
    }
  },
  {
    "title": "Doctor Portal",
    "projectType": "fullstack",
    "tagline": "Healthcare services portal with bookings, auth, and payments.",
    "thumbnailImage": "/images/doctor-portal-thumb.jpg",
    "tags": ["React", "Node.js", "MongoDB", "Stripe", "2025"],
    "detail": {
      "heroImage": "/images/doctor-portal-hero.jpg",
      "context": "Patients needed a simple way to discover services and book appointments securely.",
      "roleAndTools": {
        "role": "Full‑stack Developer",
        "tools": ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Firebase", "MUI", "Stripe"]
      },
      "featuresAndDecisions": [
        "Service discovery and appointment booking",
        "Authentication (JWT) with protected patient/admin routes",
        "Stripe payments for bookings",
        "Admin dashboard for schedules, services, and user management",
        "MUI components for accessible forms and layouts"
      ],
      "outcomesAndMetrics": [
        "Streamlined booking flow",
        "Secure payment and role‑based access"
      ],
      "linksAndCredits": {
        "demo": "https://example.com/doctor-portal",
        "repo": "https://github.com/you/doctor-portal",
        "credits": "Solo project"
      }
    }
  }
]



export const tools = [vs, figma, firebase, github, ms, mongodb, postgresql]