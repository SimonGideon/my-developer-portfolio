import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  aws,
  css,
  linux,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  postgresql,
  rubyrails,
  globalsummit,
  reservation,
  bookstore,
  microverse,
  auditAssuarance,
  vabrise,
  instagram,
  linkedin,
  twitter,
  github_socials,
  lyriks,
  acl,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Prototyping",
    icon: prototyping,
  },
];

const socialsM = [
  {
    name: "Instagram",
    icon: instagram,
    link: "https://www.instagram.com/syntaxsage001/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/Simo_Giddy",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/simon-gideon/",
  },

  {
    name: "GitHub",
    icon: github_socials,
    link: "https://github.com/SimonGideon",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Rails",
    icon: rubyrails,
  },

  {
    name: "postgresql",
    icon: postgresql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Mentor (Volunteer)",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#9D00FF",
    date: "Aug 2022 - Aug 2023",
    website: "https://www.microverse.org/",
  },

  {
    title: "Frontend Developer",
    company_name: "Audit and Assurance Consult Ltd",
    icon: auditAssuarance,
    iconBg: "#ffffff",
    date: "Jan 2024 - Mar 2024",
    website: "https://audits-assurance-consult-ltd.vercel.app",
  },

  {
    title: "UI/UX Designer",
    company_name: "Verbrise Technologies",
    icon: vabrise,
    iconBg: "#ffffff",
    date: "June 2024 - Aug 2024",
    website: "https://vabrisetech.com/",
  },
];

const projects = [
  {
    id: "project-1",
    name: "GLOBAL REFUGEE SUMMIT",
    description:
      "UN Global Summit Advertisement Page that gives information to attendees about the Summit.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: globalsummit,
    repo: " https://github.com/SimonGideon/UN-Refugee-global-Summit",
    demo: "https://simongideon.github.io/capstone-project---Conference-page/",
    stack: [html, css, javascript],
  },
  {
    id: "project-2",
    name: "Alpha Reservation",
    description:
      "A reservation app that allows users to reserve a house and pay per night.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: reservation,
    repo: "https://github.com/SimonGideon/Alpha-Reservation",
    demo: "https://alpha-reservation.vercel.app/",
    stack: [reactjs, redux, postgresql, tailwind, rubyrails],
  },
  {
    id: "project-3",
    name: "Bookstore",
    description:
      "React App that enables the user to add and see list of books from external API.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    repo: "https://github.com/SimonGideon/BookstoreApp",
    demo: "https://book-stores.onrender.com/",
    stack: [reactjs, redux, css],
  },
  {
    id: "project-4",
    name: "Audit & Assurance Page",
    description: `A landing page for a company that offers audit and assurance services outlined for the customers to see.`,
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: acl,
    repo: "https://github.com/SimonGideon/",
    demo: "https://audits-assurance-consult-ltd.vercel.app",
    stack: [reactjs, redux, css, tailwind],
  },
  {
    id: "project-5",
    name: "My Lyriks App",
    description:
      "Online Music App that play and display music county wide and world wide",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind css",
        color: "green-text-gradient",
      },
      {
        name: "API",
        color: "pink-text-gradient",
      },
    ],
    image: lyriks,
    repo: "https://github.com/SimonGideon/lyrics",
    demo: "https://sg-lyriks.netlify.app/",
    stack: [reactjs, redux, css, tailwind],
  },
];

export { services, socialsM, technologies, experiences, projects };
