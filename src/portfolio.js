const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/mohammedadelabu',
  title: 'devEmperor.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mohammed Hassan',
  role: 'Software Engineer',
  description:
    'I am a dynamic and result-oriented Software Engineer, dedicated to creating software applications and achieving the goals of my clients with an innovative and creative mindset. I am a driven hands-on team player and quick in grasping new technologies.',
  resume: 'https://docs.google.com/document/d/1nfu9hMvkUI0sL5JXl2w-Faeg2166Bu_3/edit#',
  social: {
    linkedin: 'https://www.linkedin.com/in/mohammedadelabu',
    github: 'https://github.com/mohammedadelabu',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'KULA',
    description:
      'An Angular Application where users can learn, earn and connect. Kula connects businesses with independent professionals and agencies around the globe.',
    stack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'BootStrap', 'Angular Material', 'Java'],
    sourceCode: 'https://github.com/mohammedadelabu/kulakula',
    livePreview: 'https://kula.work/',
  },
  {
    name: 'EMPEROR HASSY ANGULAR PROJECT',
    description:
      'An Angular Application using Public API to create an interesting game database website.',
    stack: ['Angular', 'TypeScript', 'HTML', 'CSS', 'BootStrap', 'Angular Material'],
    sourceCode: 'https://github.com/mohammedadelabu/EmperorHassy-Angular-Project',
    livePreview: 'https://emperorhassy-angular-game.netlify.app/',
  },
  {
    name: 'EMPEROR CLOTHING',
    description:
      'An e-commerce application for fashion where users can browse through different fashion wears, add to cart, checkout, and make purchases.',
    stack: ['NodeJs', 'ExpressJs', 'TypeScript', 'ReactJs', 'MongoDB', 'Firebase', 'Redux'],
    sourceCode: 'https://github.com/mohammedadelabu/emperor-clothing',
    livePreview: 'https://five-clothing.herokuapp.com/',
  },
  {
    name: 'JOB-FINDER API',
    description:
      'A job portal website where users can kick off their online job finding platform with ease and expertise in mind.',
    stack: ['NodeJs', 'ExpressJs', 'TypeScript', 'ReactJs', 'MongoDB', 'Firebase', 'Redux'],
    sourceCode: 'https://www.github.com/mohammedadelabu/job-finder-app',
    livePreview: 'https://jobfinders-api.herokuapp.com/',
  },
  {
    name: 'RESTAURANT RECIPE API',
    description:
      'A food recipe management API where users can sign-up, sign-in, fetch, post, update and delete their various restaurant recipes.',
    stack: ['NodeJs', 'ExpressJs', 'TypeScript', 'MongoDB'],
    sourceCode: 'https://github.com/mohammedadelabu/restaurant-recipe',
    livePreview: 'https://serene-mountain-63116.herokuapp.com/',
  },
  {
    name: 'TRANSFER SERVICE API',
    description:
      'An API contact that allows users to create accounts with unique identities and manage their account numbers generated at point of registration across their daily transactions.',
    stack: ['NodeJs', 'ExpressJs', 'TypeScript', 'MongoDB'],
    sourceCode: 'https://github.com/mohammedadelabu/transfer-api',
    livePreview: 'https://money-transfr-api.herokuapp.com/',
  },
  {
    name: 'COMFY E-COMMERCE SITE',
    description:
      'An e-commerce application for fashion where users can browse through different fashion wears, add to cart, checkout, and make purchases.',
    stack: ['NodeJs', 'ExpressJs', 'TypeScript', 'ReactJs', 'MongoDB', 'Firebase', 'Redux'],
    sourceCode: 'https://github.com/mohammedadelabu/comfy-app-backend',
    livePreview: 'https://comfy-store-api.herokuapp.com/',
  },
  {
    name: 'CUSTOMER RELATIONSHIP MANAGEMENT (CRM)',
    description:
      'A CRM application for clients where they can register, view, update and delete customer information.',
    stack: ['NodeJs', 'ExpressJs', 'TypeScript'],
    sourceCode: 'https://github.com/mohammedadelabu/',
    livePreview: 'https://emperor-crm.netlify.app/',
  },
  {
    name: 'STAR WARS CHARACTERS API',
    description:
      'A CRM application for clients where they can register, view, update and delete customer information.',
    stack: ['HTML', 'CSS', 'JavaScript', 'NodeJs', 'ExpressJs'],
    sourceCode: 'https://github.com/mohammedadelabu/',
    livePreview: 'https://mystarwarsapp.netlify.app/',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Angular',
  'NodeJS',
  'ExpressJS',
  'MongoDB',
  'GraphQL',
  'Jira',
  'Azure',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Firebase',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'm2hasmond@mail.com',
}

export { header, about, projects, skills, contact }
