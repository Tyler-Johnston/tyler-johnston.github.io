import {
  fdLanding,
  reptiletracker,
  vintagefinds,
  blockbuilder,
  aws,
  rps,
  snakegame,
  lunarlander,
  maze,
  absentee,
  jobMarket,
  customerBehavior,
  cartpole,
  bees,
  facialExpression,
  ppKing,
} from './imageAssets';

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
    id: 'parallax-poker',
    title: 'Parallax Poker',
    subtitle: 'C# / Godot 4 Roguelite Card Game',
    description:
      'A character-driven poker roguelite inspired by Balatro, Poker Night at the Inventory, and Punch Out.',
    imageUrl: ppKing,
    techStack: ['C#', 'Godot 4', 'Python', 'Pandas', 'Monte Carlo'],
    achievements: [
      'AI opponents run real poker math:pheval equity, draw detection (flush/OESD/gutshot), board wetness scoring, and SPR-based river commitment',
      'Balance validated by a 288,000-hand Monte Carlo simulation pipeline across all 9×8 character pairings before each release',
      '9 opponents each driven by 25+ tunable stats that live-mutate via a 4-state tilt system:aggression, composure, and bluff frequency all shift under pressure',
      '32,768+ unique character sprites composed at runtime from layered expression, accessory, and time-of-day background sheets',
    ],
    cta: [
      { label: 'View Details', href: '/projects/parallax-poker', variant: 'filled' }
    ],
    accentColor: 'indigo',
  },
  {
    id: 'flashcard-dungeon',
    title: 'Flashcard Dungeon',
    subtitle: 'Angular Full-Stack Language Learning App',
    description:
      'A dungeon-crawling flashcard app where spaced repetition meets RPG progression. Battle monsters, navigate a CEFR-mapped world, complete your Monster Manual, and unlock loot as you master a new language.',
    imageUrl: fdLanding,
    techStack: ['Angular', 'TypeScript', 'Supabase', 'PostgreSQL', 'IndexedDB'],
    achievements: [
      'RPG combat loop built on spaced repetition:correct answers deal damage, wrong answers take hits, with shop upgrades and dungeon unlocks persisting between runs',
      'CEFR language progression across 7 languages: a directed node graph from A1 to B2 with lazy-loaded prebuilt deck content per level',
      'Offline-first via IndexedDB: full functionality with no account required, plus optional Supabase (PostgreSQL) cloud sync across devices',
      'Reactive state via Angular Signals, driving combat, deck selection, and cross-session progress tracking',
    ],
    cta: [
      { label: 'View Details', href: '/projects/flashcard-dungeon', variant: 'filled' },
      { label: 'Try Web App', href: 'https://flashcarddungeon.com', variant: 'outline' },
    ],
    accentColor: 'cyan',
  },
];

export const projects: Project[] = [
  // Web Dev
  {
    id: 'reptile-tracker',
    title: 'Reptile Tracker',
    description: 'Full-stack CRUD app for tracking reptile care schedules, feeding logs, and health records.',
    imageUrl: reptiletracker,
    projectUrl: 'https://github.com/Tyler-Johnston/Reptile-Tracker',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    category: 'webDev',
  },
  {
    id: 'vintage-finds',
    title: 'Vintage Finds',
    description: 'E-commerce marketplace for vintage goods with user auth, listings, and checkout flow.',
    imageUrl: vintagefinds,
    projectUrl: 'https://github.com/Tyler-Johnston/Vintage-Finds',
    techStack: ['React', 'Express', 'MongoDB'],
    category: 'webDev',
  },
  {
    id: 'block-builder',
    title: 'BlockBuilder',
    description: 'React Flow-based visual workflow builder with C#/.NET backend, built at Space Dynamics Lab.',
    imageUrl: blockbuilder,
    techStack: ['React Flow', 'C#', '.NET', 'Docker'],
    category: 'webDev',
  },
  {
    id: 'aws-widget-requests',
    title: 'AWS Widget Requests',
    description: 'Producer and Consumer apps handling widget generation, SQS messaging, and data persistence to S3 and DynamoDB.',
    imageUrl: aws,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5260-AWS-Widget-Requests',
    techStack: ['AWS', 'SQS', 'S3', 'DynamoDB', 'Python'],
    category: 'webDev',
  },
  {
    id: 'rps',
    title: 'Rock Paper Scissors',
    description: 'Browser-based game with animated results and local score tracking.',
    imageUrl: rps,
    projectUrl: 'https://github.com/Tyler-Johnston/RPS',
    techStack: ['React', 'CSS'],
    category: 'webDev',
  },
  // Game Dev
  {
    id: 'multiplayer-snake',
    title: 'Multiplayer Snake',
    description: 'Competitive multiplayer Snake where players race to grow the longest snake in a shared arena. Built on a multithreaded message-queue server using the Entity-Component-System design pattern.',
    imageUrl: snakegame,
    projectUrl: 'https://github.com/Tyler-Johnston/Multiplayer-Snake-Game',
    techStack: ['C#', '.NET', 'MonoGame', 'ECS'],
    category: 'gameDev',
  },
  {
    id: 'lunar-lander',
    title: 'Lunar Lander',
    description: 'Physics-based lunar descent simulator with procedurally generated terrain. Manage thrust and fuel to land safely:safe zones shrink each level, and high scores are saved.',
    imageUrl: lunarlander,
    projectUrl: 'https://github.com/Tyler-Johnston/Lunar-Lander',
    techStack: ['C#', '.NET', 'MonoGame'],
    category: 'gameDev',
  },
  {
    id: 'maze-game',
    title: 'Maze Game',
    description: 'Procedurally generated mazes with guaranteed solvable paths across four sizes (5×5 to 20×20). Toggle breadcrumb trails or reveal the correct path on demand.',
    imageUrl: maze,
    projectUrl: 'https://github.com/Tyler-Johnston/Maze-Game',
    techStack: ['C#', '.NET', 'MonoGame'],
    category: 'gameDev',
  },
  // Data Analytics
  {
    id: 'absentee-analysis',
    title: 'Absentee Analysis',
    description: 'Power BI dashboard analyzing employee absenteeism patterns with predictive indicators.',
    imageUrl: absentee,
    projectUrl: 'https://github.com/Tyler-Johnston/Absentee-Analysis',
    techStack: ['Power BI', 'Python', 'Pandas'],
    category: 'dataAnalytics',
  },
  {
    id: 'utah-jobs',
    title: 'Utah Job Market Analysis',
    description: 'Scraped and visualized Utah tech job listings to identify skill demand trends.',
    imageUrl: jobMarket,
    projectUrl: 'https://github.com/Tyler-Johnston/Utah-Programmer-Job-Market-Analysis',
    techStack: ['Python', 'Plotly', 'BeautifulSoup'],
    category: 'dataAnalytics',
  },
  {
    id: 'customer-behavior',
    title: 'Customer Behavior Analysis',
    description: 'Segmentation analysis using clustering algorithms on retail transaction data.',
    imageUrl: customerBehavior,
    projectUrl: 'https://github.com/Tyler-Johnston/Customer-Behavior-Analysis',
    techStack: ['Python', 'Scikit-learn', 'Seaborn'],
    category: 'dataAnalytics',
  },
  // Machine Learning
  {
    id: 'cartpole-rl',
    title: 'CartPole RL',
    description: 'Reinforcement learning agent trained with DQN to balance a pole on a cart.',
    imageUrl: cartpole,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5600-cartpole-reinforcement-learning',
    techStack: ['Python', 'PyTorch', 'OpenAI Gym'],
    category: 'machineLearning',
  },
  {
    id: 'beehive-weight',
    title: 'Beehive Weight Prediction',
    description: 'Time-series regression model predicting beehive weight from environmental sensor data.',
    imageUrl: bees,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5600-Beehive-Weight-Prediction',
    techStack: ['Python', 'TensorFlow', 'Pandas'],
    category: 'machineLearning',
  },
  {
    id: 'facial-expression',
    title: 'Facial Expression Recognition',
    description: 'CNN classifier achieving high accuracy on FER-2013 with data augmentation techniques.',
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
