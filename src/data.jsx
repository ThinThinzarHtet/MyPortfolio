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

import vista1 from "./assets/projects/vistaVroom/vista1.png";
import vista2 from "./assets/projects/vistaVroom/vista2.png";
import vista3 from "./assets/projects/vistaVroom/vista3.png";
import vista4 from "./assets/projects/vistaVroom/vista4.png";

import note1 from "./assets/projects/notesApp/note1.png";
import note2 from "./assets/projects/notesApp/note2.png";
import note3 from "./assets/projects/notesApp/note3.png";
import note4 from "./assets/projects/notesApp/note4.png";
import note5 from "./assets/projects/notesApp/note5.png";
import note6 from "./assets/projects/notesApp/note6.png";
import note7 from "./assets/projects/notesApp/note7.png";

import fitness1 from "./assets/projects/fitnessApp/fitness1.png";
import fitness2 from "./assets/projects/fitnessApp/fitness2.png";
import fitness3 from "./assets/projects/fitnessApp/fitness3.png";
import fitness4 from "./assets/projects/fitnessApp/fitness4.png";

import food1 from "./assets/projects/omniFood/food1.png";
import food2 from "./assets/projects/omniFood/food2.png";
import food3 from "./assets/projects/omniFood/food3.png";
import food4 from "./assets/projects/omniFood/food4.png";
import food5 from "./assets/projects/omniFood/food5.png";
import food6 from "./assets/projects/omniFood/food6.png";

import numguess1 from "./assets/projects/guessNumber/numguess1.png";
import numguess2 from "./assets/projects/guessNumber/numguess2.png";
import numguess3 from "./assets/projects/guessNumber/numguess3.png";

import dice1 from "./assets/projects/diceGame/dice1.png";
import dice2 from "./assets/projects/diceGame/dice2.png";
import dice3 from "./assets/projects/diceGame/dice3.png";
import dice4 from "./assets/projects/diceGame/dice4.png";

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
  // {
  //   id: 12,
  //   title: "Responsive Design",
  //   icon: <MdDevicesOther />,
  // },
];

export const projects = [
  {
    id: 1,
    coverImg: vista1,
    img: [vista1, vista2, vista3, vista4],
    title: "VistaVroom",
    description: "Simple static car rental website ui.",
    languages: ["HTML", "CSS", "React", "Tailwind Css"],
    sourceLink: "https://github.com/ThinThinzarHtet/VistaVroom",
    previewLink: "https://thinthinzarhtet.github.io/VistaVroom/",
  },

  {
    id: 2,
    coverImg: note2,
    img: [note1, note2, note3, note4, note5, note6, note7],
    title: "Notes-App",
    description: "Simple notes taking app with crud.",
    languages: ["HTML", "React", "TypeScript", "Bootstrap"],
    sourceLink: "https://github.com/ThinThinzarHtet/notes-app",
    previewLink: "https://thinthinzarhtet.github.io/notes-app",
  },

  {
    id: 3,
    coverImg: fitness1,
    img: [fitness1, fitness2, fitness3, fitness4],
    title: "EVO Gym",
    description:
      "Case study Fitness static website to get more understanding of react, TypeScript, and framer-motion",
    languages: ["React", "TypeScript", "Framer-motion", "Tailwind CSS"],
    sourceLink: "https://github.com/ThinThinzarHtet/Fitness-app",
    previewLink: "https://thinthinzarhtet.github.io/Fitness-app/",
  },

  {
    id: 4,
    coverImg: food1,
    img: [food1, food2, food3, food4, food5, food6],
    title: "Omni Food",
    description:
      "Simple and responsive food delivery static website landing page UI",
    languages: ["HTML", "CSS", "JavaScript", "JQuery"],
    sourceLink: "https://github.com/ThinThinzarHtet/Omni-Food-Project",
    previewLink: "https://thinthinzarhtet.github.io/Omni-Food-Project/",
  },

  {
    id: 5,
    coverImg: numguess1,
    img: [numguess1, numguess2, numguess3],
    title: "Guess Number",
    description: "Number guessing game with only Html, CSS and JavaScript",
    languages: ["HTML", "CSS", "JavaScript"],
    sourceLink: "https://github.com/ThinThinzarHtet/guessnumber",
    previewLink: "https://thinthinzarhtet.github.io/guessnumber/",
  },

  {
    id: 6,
    coverImg: dice1,
    img: [dice1, dice2, dice3, dice4],
    title: "Roll The Dice",
    description:
      "Dice rolling game and the first player who got 20 points will win the game.",
    languages: ["HTML", "CSS", "JavaScript"],
    sourceLink: "https://github.com/ThinThinzarHtet/pig-dice-game",
    previewLink: "https://thinthinzarhtet.github.io/pig-dice-game/",
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
    shadow: "hsla(252, 35%, 51%,0.877)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
    shadow: "hsla(4, 93%, 54%, 0.877)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
    shadow: "hsla(271, 76%, 53%, 0.877)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(234, 40%, 37%)",
    shadow: "hsla(234,40%,37%,0.87)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
    shadow: "hsla(43, 74%, 49%,0.877)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
    shadow: "hsla(339, 81%, 66%,0.877)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
    shadow: "hsla(80, 61%, 50%,0.877)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
    shadow: "hsl(19, 96%, 52%,0.877)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
    shadow: "hsl(88, 65%, 43%,0.877)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
    shadow: "hsl(42, 100%, 50%,0.877)",
  },
];
