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

export const roles: Role[] = [
  {
    id: 'footprints',
    title: 'Full Stack Developer',
    organization: 'Footprints, Inc.',
    period: 'Mar 2024 - Aug 2025',
    location: 'Logan, UT',
    description: [
      'Built and maintained production workflow applications for aerospace and steel-manufacturing engineering teams.',
      'Worked across front end, back end, API, and database layers in an Agile delivery environment.',
    ],
    highlights: [
      '240+ full-stack development tasks completed across Agile sprints',
      'QA owner for full-stack releases before deployment',
      'Optimized SQL queries, service logic, and data retrieval workflows',
    ],
    techStack: ['C#', '.NET', 'REST APIs', 'JavaScript', 'Ext JS', 'jQuery', 'Oracle SQL', '4D'],
  },
  {
    id: 'cv-research',
    title: 'Computer Vision Research Assistant',
    organization: 'Utah State University',
    period: 'Jan 2024 - May 2024',
    location: 'Logan, UT',
    description: [
      'Built computer vision pipelines for ADA compliance analysis using Google Street View imagery.',
      'Automated image retrieval, GPS metadata extraction, and preprocessing for geospatial datasets.',
    ],
    highlights: [
      'YOLOv8 and Roboflow pipelines for curb ramps, signage, and traffic lights',
      'City-scale accessibility evaluation with geospatial heatmaps',
    ],
    techStack: ['Python', 'YOLOv8', 'Roboflow', 'PyTorch', 'OpenCV'],
  },
  {
    id: 'cpp-ta',
    title: 'Modern C++ Teaching Assistant',
    organization: 'Utah State University',
    period: 'Aug 2023 - Dec 2023',
    location: 'Logan, UT',
    description: [
      'Designed a custom std::vector prototype to demonstrate templates, iterators, and manual memory management.',
      'Evaluated C++ Modules in GCC and supported curriculum integration decisions.',
    ],
    highlights: [
      'Bucket-based vector prototype for large-dataset allocation',
      'Advanced memory management and container design',
    ],
    techStack: ['C++20', 'C++ Modules', 'GCC'],
  },
  {
    id: 'sdl',
    title: 'Web Developer',
    organization: 'Space Dynamics Laboratory',
    period: 'Mar 2023 - Jun 2023',
    location: 'Remote',
    description: [
      'Built a full-stack workflow design tool using React, React Flow, C#/.NET, and Docker microservices.',
      'Replaced manual XML editing with a drag-and-drop interface and configuration import/export support.',
    ],
    highlights: [
      'React Flow process designer for workflow creation',
      'JSON and XML import/export via Docker-integrated services',
    ],
    techStack: ['React', 'React Flow', 'C#', '.NET', 'Docker'],
  },
];
