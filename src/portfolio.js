const header = {
  homepage: 'https://www.linkedin.com/in/yoann-renard/',
  title: 'YR.',
}

const about = {
  name: 'Yoann Renard',
  role: 'Software/Cloud Engineer',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/yoann-renard/',
    github: 'https://github.com/shellkah',
  },
}

const projects = [
  {
    name: 'Foxytics',
    description:
      'Lightweight monitoring application for SMEs, offering real-time insights into user activities, errors, and geolocation.',
    stack: ['Golang', 'GCP', 'React', 'Typescript', 'CI/CD'],
    livePreview: 'https://dev.foxytics.io/',
    image: '/res/f.png',
  },
  {
    name: 'Chez Lili Restaurant',
    description:
      'Fully responsive website wrote in AngularJS. Hosted on GCP with continuous integration.',
    stack: ['SASS', 'TypeScript', 'Angular', 'CI/CD'],
    sourceCode: 'https://github.com/Yoann-Renard/Chez-Lili-website',
    livePreview: 'https://chezlili.fr',
    image: '/res/c.png',
  },
]

const skills = [
  'Python',
  'Golang',
  'Google Cloud Platform (GCP)',
  'Terraform',
  'Git',
  'Gitlab',
  'CI/CD',
  'Kubernetes',
  'Docker',
  'FastAPI',
]

const contact = {
  email: 'yoann.rnrd@gmail.com',
}

const workExperiences = [
  {
    name: 'Software Engineer, Singapore',
    company: 'Thales Group',
    period: '2024 - now (~2 years)',
    description: 'Architect and deploy complex cloud-based solutions. Design and implement scalable, secure, and cost-effective cloud infrastructures.',
    stack: ['Python', 'Terraform', 'SQL', 'Gitlab'],
  },
  {
    name: 'Software Engineer, France',
    company: 'Thales Group',
    period: 'Oct 2022 - Jan 2024 (1+ years)',
    description: 'I worked on the Google Search team.',
    stack: ['JavaScript', 'TypeScript', 'React'],
  },
]

const education = [
  {
    name: "Matser's Degree in Computer Science",
    institution: 'ISEN Toulon Méditerranée | France',
    period: '2018-2023',
    stack: ['Software development', 'Big data', 'Cloud computing'],
  },
]

const certifications = [
  {
    name: 'Google Professional Cloud Architect',
    institution: 'Google',
    description: 'Issued Jun 2025 · Expires Jun 2027',
  },
  {
    name: 'Certificate in Advanced English',
    institution: 'University of Cambridge',
    description: 'Issued Feb 2021',
  },
  {
    name: 'TOEIC Listening and Reading Test',
    institution: 'ETS EMEA',
    period: '965/990', 
    description: 'Issued Dec 2021 · Expired Dec 2023',
  },
]

export {
  header,
  about,
  projects,
  skills,
  contact,
  workExperiences,
  education,
  certifications,
}
