import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  healthfirst,
  braze,
  healthfirstAppstore,
  productboard,
  fluz,
  deepGram,
  coverhunt,
  dcc,
  kelhel,
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
    title: 'Full-stack Developer',
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
    name: 'TypeScript',
    icon: typescript,
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
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
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
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Healthfirst',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Apr 2020 - May 2024',
  },
  {
    title: 'Staff Software Engineer',
    company_name: 'Fluz',
    icon: microverse,
    iconBg: '#333333',
    date: 'Apr 2018 - Mar 2020',
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Apple',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2016 - Mar 2018',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Weil & Jones',
    icon: dcc,
    iconBg: '#333333',
    date: 'Sep 2012 - Dec 2015',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Healthfirst',
    description: 'Healthfirst acts as a not-for-profit health insurer. It provides several types of healthcare insurance services and telehealth consultation',
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
    image: healthfirst,
  },
  {
    id: 'project-2',
    name: 'braze',
    description:
      "Braze's platform allows marketers to collect data from any source, engage with customers across channels, and take action on that data in real time.",
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
    image: braze,
  },
  {
    id: 'project-3',
    name: 'healthfirst-appstore',
    description: 'This is a healthfirst mobile platform which was built on React Native',
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
    image: healthfirstAppstore,
  },
  {
    id: 'project-4',
    name: 'fluz-appstore',
    description: "Fluz is a rewards app that allows users to earn cash back on purchases from thousands of retailers, including well-known brands like Walmart, CVS, and Uber. Fluz offers up to 25% cash back on some stores, and users can also earn cash back by completing challenges, referring friends, and buying gift cards.",
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
    image: fluz,
  },
  {
    id: 'project-5',
    name: 'Deepgram marketing site',
    description:
      "Deepgram's voice AI platform provides APIs for speech-to-text, text-to-speech, and language understanding.",
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
    image: deepGram,
  },
];

export { services, technologies, experiences, projects };
