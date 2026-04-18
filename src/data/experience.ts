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
    location: 'Remote',
    imageUrl: footprints,
    description: [
      'Delivered 240+ resolved tasks on an enterprise C#/.NET web application serving field service management clients across North America.',
      'Built and maintained full-stack features spanning AJAX-driven UI, Oracle SQL stored procedures, and RESTful API endpoints.',
    ],
    highlights: [
      '240+ tasks resolved across full-stack C#/.NET enterprise application',
      'AJAX-driven UI updates with Oracle SQL stored procedures',
      'RESTful API design and integration with third-party field service systems',
      'Reduced average page load time by optimizing N+1 query patterns in high-traffic modules',
    ],
    techStack: ['C#', '.NET', 'AJAX', 'Oracle SQL', 'JavaScript', 'HTML/CSS'],
  },
  {
    id: 'cv-research',
    title: 'Computer Vision Research Assistant',
    organization: 'Utah State University',
    period: 'Jan 2024 – May 2024',
    location: 'Logan, UT',
    imageUrl: boundingbox,
    description: [
      'Contributed to an ADA compliance detection research project using computer vision to identify accessibility violations in built environments.',
      'Fine-tuned and evaluated YOLOv8 object detection models on custom-labeled datasets annotated via Roboflow.',
    ],
    highlights: [
      'Fine-tuned YOLOv8 on custom ADA compliance dataset with Roboflow annotation pipeline',
      'Evaluated model precision/recall tradeoffs across multiple detection confidence thresholds',
      'Contributed to research presentation on automated accessibility auditing',
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
      'Supported curriculum design and lab instruction for an upper-division Modern C++ course covering C++20 Modules, templates, and data structure implementation.',
      'Evaluated experimental C++ Modules adoption and implemented a custom bucket-vector data structure used in course assignments.',
    ],
    highlights: [
      'Evaluated C++20 Modules integration for course adoption — benchmarked compile-time and tooling tradeoffs',
      'Implemented bucket-vector data structure used in student assignments',
      'Held weekly office hours supporting 40+ students on template metaprogramming and STL internals',
    ],
    techStack: ['C++20', 'C++ Modules', 'CMake', 'GCC/Clang'],
  },
  {
    id: 'sdl',
    title: 'Web Developer',
    organization: 'Space Dynamics Laboratory',
    period: 'Mar 2023 – Jun 2023',
    location: 'Logan, UT',
    imageUrl: blockbuilder,
    description: [
      'Built BlockBuilder — a visual workflow editor using React Flow — for internal engineering teams to design and document satellite data processing pipelines.',
      'Implemented the C#/.NET backend API and containerized the application with Docker for reproducible deployment.',
    ],
    highlights: [
      'Delivered BlockBuilder visual workflow editor using React Flow for satellite pipeline design',
      'C#/.NET REST API backend with Docker containerization',
      'Collaborated with aerospace engineers to translate domain requirements into UI interactions',
    ],
    techStack: ['React', 'React Flow', 'C#', '.NET', 'Docker'],
  },
];
