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
    repoUrl: 'https://github.com/ThaoThaoHeart/django-ecommerce',
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
    when: '2022 — Now',
    title: 'Software Developer',
    where: 'HUB International',
    note: 'Build and maintain projects with Django/DRF and Celery platform that syncs client, policy and cancellation data with the Applied Epic API. Develop and maintain client-facing self-service web portals in React/JavaScript, building new features and fixing issues in production.',
  },
  {
    when: '2021 — 2022',
    title: 'Tutor',
    where: 'St. Clair College',
    note: 'Tutored students one-on-one and in groups across Java, Swift, React, Flutter, Unity, C#, Linux, PostgreSQL and MySQL.',
  },
  {
    when: '2020 — 2022',
    title: 'Head Sensei (Supervisor)',
    where: 'Code Ninjas',
    note: 'Taught JavaScript, C# and Lua to students aged 6 to 16, and trained staff on daily operations and teaching standards.',
  },
  {
    when: '2019 — 2022',
    title: 'Diploma, Mobile Application Development',
    where: 'St. Clair College',
    note: 'Graduated with a 4.0 GPA and the Student Leadership Award; first- and second-year class representative.',
  },
];
