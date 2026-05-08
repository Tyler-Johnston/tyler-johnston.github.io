export interface Role {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string[];
  highlights: string[];
  techStack: string[];
}

export interface EducationEntry {
  id: string;
  institution: string;
  location: string;
  period: string;
  degree: string;
  details: string;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export const professionalSummary =
  'Software developer based in Lisbon with 2 years of professional experience building production workflow applications using C#/.NET, JavaScript/TypeScript, REST APIs, and Oracle SQL. MSc Information Management candidate at Nova IMS specializing in Business Intelligence, with experience across front-end, back-end, database systems, QA, production support, data-driven applications, and technical project delivery.';

export const profileFacts = [
  { label: 'Location', value: 'Lisbon, Portugal' },
  { label: 'Authorization', value: 'Portuguese student residency' },
  { label: 'Languages', value: 'English (Native), Portuguese (B1)' },
  { label: 'Focus', value: 'Production software + BI' },
];

export const education: EducationEntry[] = [
  {
    id: 'nova-ims',
    institution: 'Nova IMS',
    location: 'Lisbon, Portugal',
    period: 'Sep 2025 - Feb 2027',
    degree: "Master's in Information Management",
    details: 'Business Intelligence Specialization - Currently Enrolled',
  },
  {
    id: 'usu',
    institution: 'Utah State University',
    location: 'Logan, Utah (USA)',
    period: 'Aug 2020 - May 2024',
    degree: 'B.S. in Computer Science, Minor in Mathematics',
    details: 'Magna Cum Laude | GPA: 3.92 / 4.00 | Presidential Scholarship',
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    items: ['C#', 'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Oracle SQL', 'PostgreSQL'],
  },
  {
    title: 'Frameworks & Tools',
    items: ['.NET', 'REST APIs', 'React.js', 'Angular', 'Docker', 'Firebase', 'AWS', 'Supabase'],
  },
  {
    title: 'DevOps & QA',
    items: ['Git', 'Agile/Scrum', 'CI/CD', 'Debugging', 'Application Testing', 'QA', 'Production Support'],
  },
  {
    title: 'Data & BI',
    items: ['Power BI', 'Microsoft Fabric', 'Data Pipelines', 'Geospatial Analysis', 'Pandas', 'Plotly'],
  },
];

export const roles: Role[] = [
  {
    id: 'footprints',
    title: 'Full Stack Developer',
    organization: 'Footprints, Inc.',
    period: 'Mar 2024 - Aug 2025',
    location: 'Logan, UT',
    description: [
      'Built and maintained production workflow applications for aerospace and steel-manufacturing engineering teams using C#/.NET, REST APIs, JavaScript, Ext JS, jQuery, Oracle SQL, 4D, and Visual Basic.',
    ],
    highlights: [
      'Completed 240+ full-stack development tasks across Agile sprints',
      'Served as a dedicated QA owner for full-stack releases before deployment',
      'Optimized SQL queries, service-layer logic, and data retrieval workflows',
      'Translated stakeholder requirements into front-end, backend, database, API, and workflow automation features',
    ],
    techStack: ['C#', '.NET', 'REST APIs', 'JavaScript', 'Ext JS', 'jQuery', 'Oracle SQL', '4D', 'Visual Basic'],
  },
  {
    id: 'cv-research',
    title: 'Computer Vision Research Assistant',
    organization: 'Utah State University',
    period: 'Jan 2024 - May 2024',
    location: 'Logan, UT',
    description: [
      'Built computer vision pipelines using YOLOv8 and Roboflow to detect curb ramps, pedestrian signage, and traffic lights in Google Street View imagery for ADA compliance analysis.',
      'Automated image retrieval, GPS metadata extraction, and data preprocessing workflows to create geospatial datasets and heatmaps for city-scale accessibility evaluation.',
    ],
    highlights: [
      'YOLOv8 and Roboflow pipelines for curb ramps, pedestrian signage, and traffic lights',
      'Automated image retrieval, GPS metadata extraction, and preprocessing workflows',
      'Geospatial datasets and heatmaps for city-scale accessibility evaluation',
    ],
    techStack: ['Python', 'YOLOv8', 'Roboflow', 'OpenCV', 'Google Street View'],
  },
  {
    id: 'cpp-ta',
    title: 'Modern C++ Teaching Assistant',
    organization: 'Utah State University',
    period: 'Aug 2023 - Dec 2023',
    location: 'Logan, UT',
    description: [
      'Designed a custom C++ std::vector prototype using templates, iterators, and manual memory management to optimize large-dataset allocation and demonstrate advanced data structure design.',
      'Held weekly office hours and graded assignments for an upper-division C++ course, providing debugging support on memory management, templates, iterators, and STL containers.',
    ],
    highlights: [
      'Custom std::vector prototype for large-dataset allocation',
      'Templates, iterators, and manual memory management for advanced data structure design',
      'Weekly office hours and assignment grading for an upper-division C++ course',
    ],
    techStack: ['C++20', 'Templates', 'Iterators', 'STL', 'Manual Memory Management'],
  },
  {
    id: 'sdl',
    title: 'Web Developer',
    organization: 'Space Dynamics Laboratory',
    period: 'Mar 2023 - Jun 2023',
    location: 'Remote',
    description: [
      'Developed a full-stack workflow design tool using React, React Flow, C#/.NET, and Docker microservices, enabling users to create process workflows through a responsive drag-and-drop interface instead of manual XML editing.',
      'Enabled JSON and XML workflow configuration import/export through Docker-integrated services, reducing manual configuration errors and improving developer productivity.',
    ],
    highlights: [
      'React Flow process designer for workflow creation',
      'C#/.NET API integrated with Docker microservices',
      'JSON and XML workflow import/export support',
      'Reduced manual configuration errors with a drag-and-drop workflow editor',
    ],
    techStack: ['React', 'React Flow', 'C#', '.NET', 'Docker', 'JSON', 'XML'],
  },
];
