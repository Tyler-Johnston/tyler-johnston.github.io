import { fdLanding, absentee, aws, rps, vinyltracker, vintagefinds, snakegame, lunarlander, maze, jobMarket, customerBehavior, cartpole, bees, facialExpression, ppKing } from './imageAssets';

export type ProjectCategory = 'webDev' | 'gameDev' | 'dataAnalytics' | 'machineLearning';

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  techStack: string[];
  category: ProjectCategory;
  featured?: boolean;
}

export interface FlagshipProject {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  achievements: string[];
  cta: { label: string; href: string; variant: 'filled' | 'outline' | 'light' }[];
  accentColor: string;
}

export const flagshipProjects: FlagshipProject[] = [
  {
    id: 'flashcard-dungeon',
    title: 'Flashcard Dungeon',
    subtitle: 'Angular 17+ / TypeScript / Supabase',
    description:
      'A full-stack language-learning app for European Portuguese, combining spaced repetition, RPG combat, offline storage, and optional cloud sync.',
    imageUrl: fdLanding,
    techStack: ['Angular', 'TypeScript', 'IndexedDB', 'Supabase'],
    achievements: [
      'CEFR-mapped A1-B2 progression for European Portuguese',
      'IndexedDB-first offline mode with optional Supabase/PostgreSQL sync',
      'Native-speaker pronunciation guidance and RPG progression layered onto study workflows',
    ],
    cta: [
      { label: 'View Project', href: '/projects/flashcard-dungeon', variant: 'filled' },
      { label: 'Live Site', href: 'https://flashcarddungeon.com/', variant: 'outline' },
    ],
    accentColor: 'teal',
  },
  {
    id: 'parallax-poker',
    title: 'Parallax Poker',
    subtitle: 'C# / Godot 4',
    description:
      'A character-driven poker roguelite with a rules-correct Texas Hold\'em engine, personality-driven AI, and Monte Carlo balance testing.',
    imageUrl: ppKing,
    techStack: ['C#', 'Godot 4', 'Python', 'Pandas'],
    achievements: [
      'Rules-correct Hold\'em engine covering all-ins, raise reopening, and uncalled chip refunds',
      '15+ AI behavior parameters with equity, draw, board texture, and tilt logic',
      '288,000-hand Monte Carlo balancing pipeline used to tune opponent difficulty',
    ],
    cta: [{ label: 'View Project', href: '/projects/parallax-poker', variant: 'filled' }],
    accentColor: 'orange',
  },
];

export const projects: Project[] = [
  {
    id: 'parallax-poker',
    title: 'Parallax Poker',
    description:
      'A C# / Godot 4 poker roguelite with a rules-correct Hold\'em engine, AI decision logic, and Monte Carlo balance testing.',
    imageUrl: ppKing,
    projectUrl: '/projects/parallax-poker',
    techStack: ['C#', 'Godot 4', 'Python', 'Pandas'],
    category: 'gameDev',
    featured: true,
  },
  {
    id: 'flashcard-dungeon',
    title: 'Flashcard Dungeon',
    description:
      'A full-stack language-learning app for European Portuguese with spaced repetition, RPG combat, offline storage, and optional cloud sync.',
    imageUrl: fdLanding,
    projectUrl: '/projects/flashcard-dungeon',
    techStack: ['Angular', 'TypeScript', 'IndexedDB', 'Supabase'],
    category: 'webDev',
    featured: true,
  },
  {
    id: 'absentee-analysis',
    title: 'Absentee Analysis',
    description:
      'An HR dashboard that segments absenteeism risk groups with clustering methods and predicts risk membership with a Random Forest model.',
    imageUrl: absentee,
    projectUrl: 'https://github.com/Tyler-Johnston/Absentee-Analysis',
    techStack: ['Python', 'Pandas', 'Plotly', 'Random Forest'],
    category: 'dataAnalytics',
  },
  {
    id: 'vinyl-tracker',
    title: 'Vinyl Tracker',
    description:
      'A full-stack vinyl record collection manager with Discogs API integration, grading, play logging, and analytics.',
    imageUrl: vinyltracker,
    projectUrl: 'https://github.com/Tyler-Johnston/Vinyl-Tracker',
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'SQLite'],
    category: 'webDev',
  },
  {
    id: 'vintage-finds',
    title: 'Vintage Finds',
    description:
      'An antique storefront built for a local business with an admin dashboard, image management, and real-time inventory updates.',
    imageUrl: vintagefinds,
    projectUrl: 'https://github.com/Tyler-Johnston/Vintage-Finds',
    techStack: ['Next.js', 'TypeScript', 'Firebase', 'Mantine UI', 'Vercel'],
    category: 'webDev',
  },
  {
    id: 'aws-widget-requests',
    title: 'AWS Widget Requests',
    description:
      'Producer and consumer apps handling widget generation, SQS messaging, and persistence to S3 and DynamoDB.',
    imageUrl: aws,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5260-AWS-Widget-Requests',
    techStack: ['AWS', 'SQS', 'S3', 'DynamoDB', 'Python'],
    category: 'webDev',
  },
  {
    id: 'rock-paper-scissors',
    title: 'Rock Paper Scissors',
    description:
      'A browser-based Rock Paper Scissors game with animated results and local score tracking.',
    imageUrl: rps,
    projectUrl: 'https://github.com/Tyler-Johnston/RPS',
    techStack: ['React', 'CSS'],
    category: 'webDev',
  },
  {
    id: 'multiplayer-snake',
    title: 'Multiplayer Snake',
    description:
      'A competitive multiplayer Snake game built on a multithreaded message-queue server and ECS architecture.',
    imageUrl: snakegame,
    projectUrl: 'https://github.com/Tyler-Johnston/Multiplayer-Snake-Game',
    techStack: ['C#', '.NET', 'MonoGame', 'ECS'],
    category: 'gameDev',
  },
  {
    id: 'lunar-lander',
    title: 'Lunar Lander',
    description:
      'A physics-based lunar descent simulator with procedurally generated terrain, fuel management, and high scores.',
    imageUrl: lunarlander,
    projectUrl: 'https://github.com/Tyler-Johnston/Lunar-Lander',
    techStack: ['C#', '.NET', 'MonoGame'],
    category: 'gameDev',
  },
  {
    id: 'maze-game',
    title: 'Maze Game',
    description:
      'Procedurally generated mazes with guaranteed solvable paths across multiple grid sizes.',
    imageUrl: maze,
    projectUrl: 'https://github.com/Tyler-Johnston/Maze-Game',
    techStack: ['C#', '.NET', 'MonoGame'],
    category: 'gameDev',
  },
  {
    id: 'utah-job-market',
    title: 'Utah Job Market Analysis',
    description:
      'A scraped and visualized analysis of Utah tech listings to identify skill demand trends.',
    imageUrl: jobMarket,
    projectUrl: 'https://github.com/Tyler-Johnston/Utah-Programmer-Job-Market-Analysis',
    techStack: ['Python', 'Plotly', 'BeautifulSoup'],
    category: 'dataAnalytics',
  },
  {
    id: 'customer-behavior',
    title: 'Customer Behavior Analysis',
    description:
      'A segmentation study using clustering algorithms on retail transaction data.',
    imageUrl: customerBehavior,
    projectUrl: 'https://github.com/Tyler-Johnston/Customer-Behavior-Analysis',
    techStack: ['Python', 'Scikit-learn', 'Seaborn'],
    category: 'dataAnalytics',
  },
  {
    id: 'cartpole-rl',
    title: 'CartPole RL',
    description:
      'A reinforcement learning agent trained with DQN to balance a pole on a cart.',
    imageUrl: cartpole,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5600-cartpole-reinforcement-learning',
    techStack: ['Python', 'PyTorch', 'OpenAI Gym'],
    category: 'machineLearning',
  },
  {
    id: 'beehive-weight',
    title: 'Beehive Weight Prediction',
    description:
      'A time-series regression model predicting beehive weight from environmental sensor data.',
    imageUrl: bees,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5600-Beehive-Weight-Prediction',
    techStack: ['Python', 'TensorFlow', 'Pandas'],
    category: 'machineLearning',
  },
  {
    id: 'facial-expression',
    title: 'Facial Expression Recognition',
    description:
      'A CNN classifier for FER-2013 built with data augmentation and image preprocessing.',
    imageUrl: facialExpression,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5680-facial-expression-recognition',
    techStack: ['Python', 'PyTorch', 'OpenCV'],
    category: 'machineLearning',
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  webDev: 'Web Development',
  gameDev: 'Game Development',
  dataAnalytics: 'Data Analytics',
  machineLearning: 'Machine Learning',
};
