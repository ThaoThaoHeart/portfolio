export const profile = {
  name: 'Jenny Hoang',
  initials: 'JH',
  location: 'Windsor, Ontario',

  roles: ['Software Engineer', 'Cloud Architect', 'Problem Solver', 'Builder'],
  tagline:
    'I build things for the web and I am learning to run them in the cloud. This site is my route map — every stop is something I have made or am making.',
  availability: 'Open to opportunities',

  about: [
    'I\'m a Software Developer at HUB, building and maintaining self-service web applications and business process automation. My work spans application development and infrastructure, with a focus on maintainable code, system reliability, and improving operational efficiency.',
    'I\'m expanding my expertise in AWS and cloud engineering, applying my development experience to cloud infrastructure, deployment automation, and scalable system design.',
  ],

  facts: [
    { label: 'Based in', value: 'Windsor' },
    { label: 'Currently', value: 'Learning AWS' },
    { label: 'Focus', value: 'Full-stack Web' },
    { label: 'Fuel', value: 'Coffee ☕' },
  ],

  links: {
    github: 'https://github.com/ThaoThaoHeart',
    linkedin: 'https://www.linkedin.com/in/jenny-hoang-dev/',
    email: '',
    resume: '',
  },
};

export const projects = [
  {
    title: 'E-Commerce',
    summary:
      'One or two sentences on what this project does and the problem it solves. Mention your role and the result.',
    status: 'shipped',
    tech: ['React', 'Django', 'PostgreSQL'],
    liveUrl: '',
    repoUrl: '',
    image: '',
  },
  {
    title: 'Project Two',
    summary:
      'Describe the project here. What did you learn? What was the hardest part? Keep it short and specific.',
    status: 'building',
    tech: ['Python'],
    liveUrl: '',
    repoUrl: '',
    image: '',
  },
  {
    title: 'This Portfolio on AWS',
    summary:
      'Deploying this exact site to AWS by hand while learning cloud fundamentals — hosting, CDN, DNS, and HTTPS.',
    status: 'building',
    tech: ['React', 'Vite', 'AWS'],
    liveUrl: '',
    repoUrl: '',
    image: '',
  },
];

export const reservedPlatforms = 1;

export const skillLines = [
  {
    name: 'Frontend Line',
    code: 'F',
    color: 'var(--line-red)',
    stops: [
      { name: 'HTML/CSS' },
      { name: 'JavaScript' },
      { name: 'React' },
      { name: 'TypeScript', learning: true },
    ],
  },
  {
    name: 'Backend Line',
    code: 'B',
    color: 'var(--line-teal)',
    stops: [{ name: 'Node.js' }, { name: 'Python' }, { name: 'SQL' }, { name: 'REST APIs' }],
  },
  {
    name: 'Cloud Line',
    code: 'C',
    color: 'var(--line-amber)',
    stops: [
      { name: 'Linux' },
      { name: 'Git' },
      { name: 'AWS S3' },
      { name: 'CloudFront' },
      { name: 'Route 53' },
      { name: 'Other AWS Services', learning: true }
    ],
  },
];

export const journey = [
  {
    when: '2026 — Now',
    title: 'Your current role or focus',
    where: 'Company / School / Self-directed',
    note: 'A line about what you do or are working toward.',
  },
  {
    when: '2024 — 2026',
    title: 'Previous role or degree',
    where: 'Organization',
    note: 'Key achievement or what you learned.',
  },
  {
    when: 'Upcoming',
    title: 'AWS Certified Cloud Practitioner',
    where: 'Amazon Web Services',
    note: 'Swap this for any certification you are pursuing.',
  },
];
