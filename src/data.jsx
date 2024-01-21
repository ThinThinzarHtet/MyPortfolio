import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaHtml5,
  FaReact,
  FaCss3,
  FaBootstrap,
  FaGitAlt,
  FaGithubSquare,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";

import { GrMysql } from "react-icons/gr";
import { SiJavascript, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import { MdDevicesOther } from "react-icons/md";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/project",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Steve",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Milner",
  },

  {
    id: 3,
    title: "Age : ",
    description: "27 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Tunisian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Tunis",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+21621184010",
  },

  {
    id: 8,
    title: "Email : ",
    description: "you@mail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "steve.milner",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "French, English",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "1st Mar 2022 - 30th Sept 2023",
    title:
      "Junior Front-end Developer <span> Nexstack Pte Ltd (Singapore) </span>",
    desc: "<ul><li>Involved in developing the UI pages using Next.js.</li><li>Implement new features, functionality, and capabilities on the CRM and sales portal websites using Next.js, Strapi CMS, and @emotion/react for styling.</li><li>Collaborated with UI UX designers, backend developers, and QAs.</li></ul> ",
  },

  {
    id: 2,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Feb 2022 - Sept 2023",
    title: "Level 4 Diploma in Computing <span> NCC Education </span>",
    desc: "<ul><li>Diploma earned after completing the L4DC program, focus on websites, databases, and soft skills for computing.</li></ul>",
  },

  {
    id: 3,
    category: "education",
    icon: <FaGraduationCap />,
    year: "Dec 2015",
    title: "Computer Engineering an Information Technology <span> YTU </span>",
    desc: "<ul><li>A member of the YTU SE Team and my role is to create database design using MySQL.</li></ul>",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    icon: <FaHtml5 />,
  },

  {
    id: 2,
    title: "CSS",
    icon: <FaCss3 />,
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <SiJavascript />,
  },

  {
    id: 4,
    title: "Bootstrap",
    icon: <FaBootstrap />,
  },

  {
    id: 5,
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    id: 6,
    title: "React",
    icon: <FaReact />,
  },

  {
    id: 7,
    title: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    id: 8,
    title: "Next.js",
    icon: <TbBrandNextjs />,
  },
  {
    id: 9,
    title: "Git",
    icon: <FaGitAlt />,
  },
  {
    id: 10,
    title: "Github",
    icon: <FaGithubSquare />,
  },
  {
    id: 11,
    title: "MySQL",
    icon: <GrMysql />,
  },
  {
    id: 12,
    title: "Responsive Design",
    icon: <MdDevicesOther />,
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: "Website Design",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Website",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "React JS",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: "Video Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Premium",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: "Landing Page",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      {
        title: "Language : ",
        desc: "React JS, Node JS",
      },
      {
        title: "Preview : ",
        desc: "www.dribble.com",
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Adobe Photoshop",
      },
      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "www.dibble.com",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
