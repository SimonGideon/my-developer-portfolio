import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
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
  metric,
  spaceTravellers,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },

  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },

  {
    name: 'postgresql',
    icon: postgresql,
  },

  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
];

const experiences = [
  {
    title: 'Mentor (Volunteer)',
    company_name: 'Microverse',
    icon: microverse,
    iconBg: '#333333',
    date: 'Aug 2022 - May 2022',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'GLOBAL UN REFUGEE SUMMIT',
    description: 'UN Global Summit Advertisement Page that gives information to attendees about the Summit.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: globalsummit,
    repo: 'https://github.com/SimonGideon/capstone-project---Conference-page/tree/Capstone-milestone',
    demo: 'https://simongideon.github.io/capstone-project---Conference-page/',
    stack: [
      html,
      css,
      javascript
    ]
  },
  {
    id: 'project-2',
    name: 'Alpha Reservation',
    description:
      'A reservation app that allows users to reserve a house and pay per night.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: reservation,
    repo: 'https://github.com/SimonGideon/Alpha-Reservation',
    demo: 'https://book-an-appointment-frontend-jt6ulk7xq-jmonto55.vercel.app/',
    stack: [
      reactjs,
      redux,
      postgresql,
      tailwind,
      rubyrails,
    ]
  },
  {
    id: 'project-3',
    name: 'Bookstore',
    description: 'React App that enables the user to add and see list of books from external API.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bookstore,
    repo: 'https://github.com/SimonGideon/BookstoreApp',
    demo: 'https://book-stores.onrender.com/',
    stack: [
      reactjs,
      redux,
      css
    ]
  },
  {
    id: 'project-4',
    name: 'Metric App',
    description: `A single-page application that shows the statistics if the Population in african countries.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: metric,
    repo: 'https://github.com/SimonGideon/-React-capstone-project',
    demo: 'https://metric-app.onrender.com/',
    stack: [
      reactjs,
      redux,
      css,
      tailwind
    ]
  },
  {
    id: 'project-5',
    name: 'Space Travellers App',
    description:
      'Web application for commercial and scientific space travel services allows booking and joining rocket space missions.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: spaceTravellers,
    repo: 'https://github.com/SimonGideon/space-travelers',
    demo: 'https://space-travelers-iyfi.onrender.com/',
    stack: [
      reactjs,
      redux,
      css,
      tailwind,
    ]
  },
];

export { services, technologies, experiences, projects };
