import { footprints, boundingbox, bucketvector, blockbuilder } from './imageAssets';

export interface Role {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  imageUrl: string;
  description: string[];
  highlights: string[];
  techStack: string[];
}

export const roles: Role[] = [
  {
    id: 'footprints',
    title: 'Full-Stack Developer',
    organization: 'Footprints, Inc.',
    period: 'Mar 2024 – Aug 2025',
    location: 'Logan, UT',
    imageUrl: footprints,
    description: [
      'Designed and implemented enterprise applications for engineering teams in aerospace and steel manufacturing using C#/.NET, JavaScript (Ext JS / jQuery), Oracle SQL, and the 4D language.',
      'Completed 240+ full-stack tasks (~2,000 hours), collaborating with cross-functional teams in an Agile environment to deliver mission-critical workflow tools.',
    ],
    highlights: [
      '240+ full-stack tasks (~2,000 hours) delivering mission-critical workflow tools in an Agile environment',
      'Enterprise apps for aerospace and steel manufacturing using C#/.NET, Ext JS / jQuery, Oracle SQL, and 4D',
      'Triaged and resolved production incidents across enterprise applications, ensuring system reliability',
      'Optimized SQL queries and streamlined data retrieval pipelines to improve production performance',
    ],
    techStack: ['C#', '.NET', 'JavaScript', 'Ext JS', 'jQuery', 'Oracle SQL', '4D'],
  },
  {
    id: 'cv-research',
    title: 'Computer Vision Research Assistant',
    organization: 'Utah State University',
    period: 'Jan 2024 – May 2024',
    location: 'Logan, UT',
    imageUrl: boundingbox,
    description: [
      'Developed YOLOv8 and Roboflow pipelines to detect curb ramps, pedestrian signs, and traffic lights from Google Street View imagery for ADA compliance evaluation at city scale.',
      'Automated image retrieval and GPS metadata extraction, building geospatial datasets and heatmaps for urban accessibility analysis.',
    ],
    highlights: [
      'YOLOv8 + Roboflow pipelines detecting curb ramps, pedestrian signs, and traffic lights from Google Street View',
      'ADA compliance evaluation at city scale using automated object detection',
      'Automated GPS metadata extraction to build geospatial datasets and accessibility heatmaps',
    ],
    techStack: ['Python', 'YOLOv8', 'Roboflow', 'PyTorch', 'OpenCV'],
  },
  {
    id: 'cpp-ta',
    title: 'Modern C++ Teaching Assistant',
    organization: 'Utah State University',
    period: 'Aug 2023 – Dec 2023',
    location: 'Logan, UT',
    imageUrl: bucketvector,
    description: [
      'Designed a bucket-based std::vector prototype optimizing memory allocation for large datasets, demonstrating templates, iterators, and advanced memory management.',
      'Evaluated C++ Modules in GCC and provided adoption feasibility recommendations for curriculum integration.',
    ],
    highlights: [
      'Designed a bucket-based std::vector prototype optimizing memory allocation, templates, iterators, and advanced memory management',
      'Evaluated C++ Modules in GCC and provided adoption feasibility recommendations for curriculum integration',
    ],
    techStack: ['C++20', 'C++ Modules', 'GCC'],
  },
  {
    id: 'sdl',
    title: 'Web Developer',
    organization: 'Space Dynamics Laboratory',
    period: 'Mar 2023 – Jun 2023',
    location: 'Remote',
    imageUrl: blockbuilder,
    description: [
      'Built BlockBuilder, a React.js / React Flow visual process designer backed by C#/.NET, replacing manual XML editing with drag-and-drop workflow creation.',
      'Enabled import/export of JSON and XML configurations via Docker-integrated microservices, reducing XML-related errors and improving developer productivity.',
    ],
    highlights: [
      'Built BlockBuilder: React Flow visual process designer replacing manual XML editing with drag-and-drop workflow creation',
      'JSON and XML import/export via Docker-integrated microservices, reducing XML errors and improving productivity',
    ],
    techStack: ['React', 'React Flow', 'C#', '.NET', 'Docker'],
  },
];
