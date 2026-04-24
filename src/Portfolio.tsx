import { useState } from 'react';
import {
  Container,
  Card,
  Text,
  Title,
  Button,
  Image,
  Grid,
  Group,
  Space,
  Collapse,
  Divider,
  Box,
  Badge,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { FaUsers, FaUser, FaArrowRight } from 'react-icons/fa';

import vintagefinds from '../images/vintagefinds.png';
import vinyltracker from '../images/other_projects/vinyltracker.webp';
import cartpole1 from '../images/cartpole1.png';
import snakegame from '../images/snakegame.png';
import lunarlander from '../images/lunarlander.png';
import aws from '../images/aws.png';
import facialexpression from '../images/facialexpression.png';
import maze from '../images/maze.png';
import market from '../images/job_market.jpg';
import customer_behavior from '../images/customer-behavior.jpg';
import bees from '../images/bees.jpg';
import rps from '../images/rps.png';
import absentee from '../images/absentee.png';
import heroImg from '../images/heroImg.png';

const categories = [
  { key: 'dataAnalytics', label: 'Data Analytics', shortLabel: 'analytics' },
  { key: 'machineLearning', label: 'Machine Learning', shortLabel: 'ML' },
  { key: 'webDev', label: 'Web Development', shortLabel: 'web' },
  { key: 'gameDev', label: 'Game Development', shortLabel: 'game' },
] as const;

type CategoryKey = (typeof categories)[number]['key'];

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
};

const projects: Record<CategoryKey, Project[]> = {
  dataAnalytics: [
    {
      id: 1,
      title: 'Absentee Analysis',
      description:
        'Analyzed employee absenteeism data using clustering techniques to identify patterns and actionable insights.',
      imageUrl: absentee,
      projectUrl: 'https://github.com/Tyler-Johnston/Absentee-Analysis',
    },
    {
      id: 2,
      title: 'Utah Job Market Analysis',
      description:
        'Analyzed wage and cost-of-living data across Utah counties to determine the most affordable locations for programmers.',
      imageUrl: market,
      projectUrl:
        'https://github.com/Tyler-Johnston/Utah-Programmer-Job-Market-Analysis',
    },
    {
      id: 3,
      title: 'Customer Behavior Analysis',
      description:
        'Developed classification models to predict purchase intent and customer churn, comparing logistic regression and SVMs.',
      imageUrl: customer_behavior,
      projectUrl:
        'https://github.com/Tyler-Johnston/Customer-Behavior-Analysis',
    },
  ],
  machineLearning: [
    {
      id: 4,
      title: 'Cartpole Reinforcement Learning',
      description:
        "Developed a reinforcement learning (ANN) model for OpenAI's cart pole using Deep Q-Learning.",
      imageUrl: cartpole1,
      projectUrl:
        'https://github.com/Tyler-Johnston/cs5600-cartpole-reinforcement-learning',
    },
    {
      id: 5,
      title: 'Beehive Weight Prediction',
      description:
        'Built ANN, CNN, and LSTM models for forecasting beehive weight using Keras and PyTorch.',
      imageUrl: bees,
      projectUrl:
        'https://github.com/Tyler-Johnston/cs5600-Beehive-Weight-Prediction',
    },
    {
      id: 6,
      title: 'Facial Expression Recognition',
      description:
        'Trained a Support Vector Machine (SVM) to classify facial expressions using Local Binary Patterns and ORB feature extraction.',
      imageUrl: facialexpression,
      projectUrl:
        'https://github.com/Tyler-Johnston/cs5680-facial-expression-recognition',
    },
  ],
  webDev: [
    {
      id: 7,
      title: 'Rock Paper Scissors Idle Web Game',
      description:
        'An Angular SPA with Supabase backend featuring authentication, achievements, and automated gameplay loops.',
      imageUrl: rps,
      projectUrl: 'https://github.com/Tyler-Johnston/RPS',
    },
    {
      id: 8,
      title: 'Vinyl Tracker',
      description:
        'A full-stack vinyl record collection manager with Discogs API integration, Goldmine grading, play logging, and an analytics dashboard.',
      imageUrl: vinyltracker,
      projectUrl: 'https://github.com/Tyler-Johnston/Vinyl-Tracker',
    },
    {
      id: 9,
      title: 'Vintage Finds',
      description:
        'A Next.js + Firebase web app built for a local antique business. Features an admin dashboard, authentication, and real-time inventory updates.',
      imageUrl: vintagefinds,
      projectUrl: 'https://github.com/Tyler-Johnston/Vintage-Finds',
    },
    {
      id: 10,
      title: 'AWS Widget Requests',
      description:
        'Developed AWS Producer and Consumer apps handling widget generation, SQS messaging, and data persistence to S3 and DynamoDB.',
      imageUrl: aws,
      projectUrl:
        'https://github.com/Tyler-Johnston/cs5260-AWS-Widget-Requests',
    },
  ],
  gameDev: [
    {
      id: 11,
      title: 'Multiplayer Snake Game',
      description:
        'A real-time multiplayer version of the classic Snake game. Compete to grow the longest snake while navigating shared arenas.',
      imageUrl: snakegame,
      projectUrl: 'https://github.com/Tyler-Johnston/Multiplayer-Snake-Game',
    },
    {
      id: 12,
      title: 'Lunar Lander Game',
      description:
        'A physics-based lunar descent simulator requiring careful thrust control to land safely while managing limited fuel.',
      imageUrl: lunarlander,
      projectUrl: 'https://github.com/Tyler-Johnston/Lunar-Lander',
    },
    {
      id: 13,
      title: 'Maze Game',
      description:
        'A procedurally generated maze game ensuring solvable paths for each level, built with dynamic rendering logic.',
      imageUrl: maze,
      projectUrl: 'https://github.com/Tyler-Johnston/Maze-Game',
    },
  ],
};

/* ── Shared hover handlers ── */
const hoverEnter = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = 'translateY(-5px)';
  e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
};
const hoverLeave = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = '';
};

/* ── Reusable project card ── */
function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      h="100%"
      style={{
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={hoverEnter}
      onMouseLeave={hoverLeave}
    >
      <Card.Section>
        <Image src={project.imageUrl} alt={project.title} height={160} />
      </Card.Section>

      <Title order={4} mt="md" c="blue.6">
        {project.title}
      </Title>

      <Text size="sm" mt="xs" mb="sm" c="dimmed" style={{ flex: 1 }}>
        {project.description}
      </Text>

      <Button
        variant="light"
        color="blue"
        fullWidth
        component="a"
        href={project.projectUrl}
        target="_blank"
        mt="auto"
      >
        View Project
      </Button>
    </Card>
  );
}

const Portfolio = () => {
  const [expanded, setExpanded] = useState<Record<CategoryKey, boolean>>({
    dataAnalytics: false,
    machineLearning: false,
    webDev: false,
    gameDev: false,
  });

  const toggle = (key: CategoryKey) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <Container size="lg" my={40}>
      <Title order={1} mb="sm" c="blue.6">
        Portfolio
      </Title>

      <Text size="lg" mb="xl">
        Explore a curated selection of projects that bridge{' '}
        <b>software engineering</b>, <b>data analytics</b>, and{' '}
        <b>creative design</b>. These works highlight how I approach complex
        technical problems: by balancing scalability, usability, and visual
        clarity.
      </Text>

      <Divider my="lg" />

      {/* ── FEATURED PROJECT: Parallax Poker ── */}
      <Box mb="xl">
        <Badge size="lg" variant="filled" color="blue" mb="md">
          Featured Project
        </Badge>

        <Card
          shadow="md"
          padding={0}
          radius="md"
          withBorder
          style={{
            overflow: 'hidden',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow =
              '0 12px 40px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={hoverLeave}
        >
          <Grid gutter={0}>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Box
                h="100%"
                miw={280}
                style={{
                  backgroundImage: `url(${heroImg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundColor: 'var(--mantine-color-dark-7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 260,
                }}
              />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <Box p="xl">
                <Title order={2} c="blue.6" mb={4}>
                  Parallax Poker
                </Title>
                <Text size="sm" c="dimmed" mb="md">
                  Character-driven poker roguelite &middot; C# &middot; Godot
                  Engine
                </Text>

                <Text size="sm" mb="md">
                  A heads-up poker game where every opponent has a distinct
                  personality — from the unreadable calling station to the
                  hyper-aggressive maniac. Each archetype is powered by a
                  data-driven AI engine with personality stats that control
                  aggression, bluff frequency, tilt response, and
                  fold-to-pressure behavior.
                </Text>

                <Text size="sm" mb="lg">
                  Includes a full Monte Carlo simulation pipeline for balancing
                  matchups, CSV decision logging, and automated analysis reports
                  that compare target archetypes against observed behavior across
                  thousands of hands.
                </Text>

                <Group gap="xs" mb="lg" style={{ flexWrap: 'wrap' }}>
                  {[
                    'C#',
                    'Godot 4',
                    'AI Decision Engine',
                    'Monte Carlo Sim',
                    'Data Pipeline',
                    'Character Art',
                  ].map((tag) => (
                    <Badge
                      key={tag}
                      variant="light"
                      color="blue"
                      size="sm"
                      radius="sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </Group>

                <Button
                  component={Link}
                  to="/parallax-poker"
                  variant="filled"
                  color="blue"
                  rightSection={<FaArrowRight size={12} />}
                >
                  View Project Details
                </Button>
              </Box>
            </Grid.Col>
          </Grid>
        </Card>
      </Box>

      <Divider my="lg" />

      {/* ── CATEGORY GRIDS ── */}
      {categories.map(({ key, label, shortLabel }) => {
        const allProjects = projects[key];
        const preview = allProjects.slice(0, 3);
        const rest = allProjects.slice(3);

        return (
          <div key={key}>
            <Title order={2} mt="xl" mb="lg" c="blue.6">
              {label}
            </Title>

            <Grid gutter="xl">
              {preview.map((p) => (
                <Grid.Col key={p.id} span={{ base: 12, sm: 6, lg: 4 }}>
                  <ProjectCard project={p} />
                </Grid.Col>
              ))}
            </Grid>

            <Collapse in={expanded[key]}>
              <Grid gutter="xl" mt="md">
                {rest.map((p) => (
                  <Grid.Col key={p.id} span={{ base: 12, sm: 6, lg: 4 }}>
                    <ProjectCard project={p} />
                  </Grid.Col>
                ))}
              </Grid>
            </Collapse>

            {rest.length > 0 && (
              <Group justify="center" mt="md">
                <Button
                  variant="light"
                  color="blue"
                  size="md"
                  onClick={() => toggle(key)}
                  radius="md"
                >
                  {expanded[key]
                    ? `Hide ${shortLabel} projects`
                    : `Show all ${allProjects.length} ${shortLabel} projects`}
                </Button>
              </Group>
            )}

            <Divider my="lg" />
          </div>
        );
      })}

      <Space h="xl" />

      <Group justify="center" mt="xl">
        <Button
          component={Link}
          to="/"
          size="md"
          leftSection={<FaUser />}
          variant="light"
        >
          View About Me
        </Button>
        <Button
          component={Link}
          to="/experience"
          size="md"
          leftSection={<FaUsers />}
          variant="filled"
        >
          View Experience
        </Button>
      </Group>
    </Container>
  );
};

export default Portfolio;
