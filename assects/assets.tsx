import profile from '@/assects/profile.png'
import profileppic from '@/assects/profilepic.jpg'
import logo from '@/assects/logo.png'
import navlogo from '@/assects/navlogo.png'
import { FaLanguage } from "react-icons/fa"; // For Language
import { BsCodeSlash } from "react-icons/bs";
import { MdSchool } from "react-icons/md"; // For Education
import { AiOutlineProject } from "react-icons/ai"; // For Project
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
        title: "Language",
        icon: <BsCodeSlash color="#4CAF50" />, // Light mode icon
        iconDark: <BsCodeSlash color="#8BC34A" />, // Dark mode icon
        description: "JavaScript, TypeScript, Ract Js, Next Js, Node Js, Express Js, C#, SQL",
    },
    {
        title: "Education",
        icon: <MdSchool color="#2196F3" />, // Light mode icon
        iconDark: <MdSchool color="#64B5F6" />, // Dark mode icon
        description: "B.Sc. in Computer Science and Engineering",
    },
    {
        title: "Project",
        icon: <AiOutlineProject color="#FF9800" />, // Light mode icon
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

export const tools = [vs, figma, firebase, github, ms, mongodb, postgresql]