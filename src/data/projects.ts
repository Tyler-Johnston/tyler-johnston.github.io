import {
  fdLanding,
  reptiletracker,
  vintagefinds,
  blockbuilder,
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
      'AI decision engine using Pheval hand evaluator with 15+ per-character personality stats',
      'Character-Specific archetypes are balanced via automated Monte Carlo generated balance reports',
      '32,768 unique character sprite combinations via layered expression, accessory, and background systems',
      'Parallel worlds system: timezone-based environment and personality shifts across sessions',
      'Tell system: two independent channels (face composure + bluff frequency) for deductive gameplay',
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
      'CEFR-level node graph roadmap (A1–B2) with lazy-loaded prebuilt decks, specifically curated for each chosen (supported) language.',
      'Prebuilt deck system: static TypeScript arrays per language/level (7 languages supported)',
      'Standalone Angular components with signals for reactive state — no NgRx boilerplate',
      'IndexedDB client-side persistence with cloud sync modal for cross-session deck data',
      'Journal component for creating, renaming, and editing cards with DeckImportService',
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
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    category: 'webDev',
  },
  {
    id: 'vintage-finds',
    title: 'Vintage Finds',
    description: 'E-commerce marketplace for vintage goods with user auth, listings, and checkout flow.',
    imageUrl: vintagefinds,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['React', 'Express', 'MongoDB'],
    category: 'webDev',
  },
  {
    id: 'block-builder',
    title: 'BlockBuilder',
    description: 'React Flow-based visual workflow builder with C#/.NET backend, built at Space Dynamics Lab.',
    imageUrl: blockbuilder,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['React Flow', 'C#', '.NET', 'Docker'],
    category: 'webDev',
  },
  {
    id: 'rps',
    title: 'Rock Paper Scissors',
    description: 'Browser-based game with animated results and local score tracking.',
    imageUrl: rps,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['React', 'CSS'],
    category: 'webDev',
  },
  // Game Dev
  {
    id: 'multiplayer-snake',
    title: 'Multiplayer Snake',
    description: 'Real-time multiplayer Snake with WebSocket rooms and competitive scoring.',
    imageUrl: snakegame,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['JavaScript', 'WebSockets', 'Node.js'],
    category: 'gameDev',
  },
  {
    id: 'lunar-lander',
    title: 'Lunar Lander',
    description: 'Physics-based browser game with procedurally generated terrain and fuel management.',
    imageUrl: lunarlander,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['JavaScript', 'Canvas API'],
    category: 'gameDev',
  },
  {
    id: 'maze-game',
    title: 'Maze Game',
    description: 'Procedurally generated maze game with DFS generation and pathfinding visualization.',
    imageUrl: maze,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['JavaScript', 'Canvas API'],
    category: 'gameDev',
  },
  // Data Analytics
  {
    id: 'absentee-analysis',
    title: 'Absentee Analysis',
    description: 'Power BI dashboard analyzing employee absenteeism patterns with predictive indicators.',
    imageUrl: absentee,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['Power BI', 'Python', 'Pandas'],
    category: 'dataAnalytics',
  },
  {
    id: 'utah-jobs',
    title: 'Utah Job Market Analysis',
    description: 'Scraped and visualized Utah tech job listings to identify skill demand trends.',
    imageUrl: jobMarket,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['Python', 'Plotly', 'BeautifulSoup'],
    category: 'dataAnalytics',
  },
  {
    id: 'customer-behavior',
    title: 'Customer Behavior Analysis',
    description: 'Segmentation analysis using clustering algorithms on retail transaction data.',
    imageUrl: customerBehavior,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['Python', 'Scikit-learn', 'Seaborn'],
    category: 'dataAnalytics',
  },
  // Machine Learning
  {
    id: 'cartpole-rl',
    title: 'CartPole RL',
    description: 'Reinforcement learning agent trained with DQN to balance a pole on a cart.',
    imageUrl: cartpole,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['Python', 'PyTorch', 'OpenAI Gym'],
    category: 'machineLearning',
  },
  {
    id: 'beehive-weight',
    title: 'Beehive Weight Prediction',
    description: 'Time-series regression model predicting beehive weight from environmental sensor data.',
    imageUrl: bees,
    projectUrl: 'https://github.com/tyler-johnston',
    techStack: ['Python', 'TensorFlow', 'Pandas'],
    category: 'machineLearning',
  },
  {
    id: 'facial-expression',
    title: 'Facial Expression Recognition',
    description: 'CNN classifier achieving high accuracy on FER-2013 with data augmentation techniques.',
    imageUrl: facialExpression,
    projectUrl: 'https://github.com/tyler-johnston',
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
