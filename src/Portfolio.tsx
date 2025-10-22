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
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { FaUsers, FaUser } from 'react-icons/fa';

import vintagefinds from '../images/vintagefinds.png';
import reptiletracker from '../images/reptiletracker.png';
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

const categories = [
  { key: 'dataAnalytics', label: '📊 Data Analytics' },
  { key: 'machineLearning', label: '🤖 Machine Learning' },
  { key: 'webDev', label: '💻 Web Development' },
  { key: 'gameDev', label: '🎮 Game Development' },
] as const;

type CategoryKey = typeof categories[number]['key'];

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
      title: 'Utah Job Market Analysis',
      description:
        'Analyzed wage and cost-of-living data across Utah counties to determine the most affordable locations for programmers.',
      imageUrl: market,
      projectUrl:
        'https://github.com/Tyler-Johnston/Utah-Programmer-Job-Market-Analysis',
    },
    {
      id: 2,
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
      id: 3,
      title: 'Cartpole Reinforcement Learning',
      description:
        "Developed a reinforcement learning (ANN) model for OpenAI's cart pole using Deep Q-Learning.",
      imageUrl: cartpole1,
      projectUrl:
        'https://github.com/Tyler-Johnston/cs5600-cartpole-reinforcement-learning',
    },
    {
      id: 4,
      title: 'Beehive Weight Prediction',
      description:
        'Built ANN, CNN, and LSTM models for forecasting beehive weight using Keras and PyTorch.',
      imageUrl: bees,
      projectUrl:
        'https://github.com/Tyler-Johnston/cs5600-Beehive-Weight-Prediction',
    },
    {
      id: 5,
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
      id: 9,
      title: 'Rock Paper Scissors Idle Web Game',
      description:
        'An Angular SPA with Supabase backend featuring authentication, achievements, and automated gameplay loops.',
      imageUrl: rps,
      projectUrl: 'https://github.com/Tyler-Johnston/RPS',
    },
    {
      id: 6,
      title: 'Reptile Tracker',
      description:
        'A React.js + Express.js web app for managing pet reptile care, including authentication and persistent cloud storage.',
      imageUrl: reptiletracker,
      projectUrl: 'https://github.com/Tyler-Johnston/Reptile-Tracker',
    },
    {
      id: 7,
      title: 'Vintage Finds',
      description:
        'A Next.js + Firebase web app built for a local antique business. Features an admin dashboard, authentication, and real-time inventory updates.',
      imageUrl: vintagefinds,
      projectUrl: 'https://github.com/Tyler-Johnston/Vintage-Finds',
    },
    {
      id: 8,
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
      id: 10,
      title: 'Multiplayer Snake Game',
      description:
        'A real-time multiplayer version of the classic Snake game. Compete to grow the longest snake while navigating shared arenas.',
      imageUrl: snakegame,
      projectUrl:
        'https://github.com/Tyler-Johnston/Multiplayer-Snake-Game',
    },
    {
      id: 11,
      title: 'Lunar Lander Game',
      description:
        "A physics-based lunar descent simulator requiring careful thrust control to land safely while managing limited fuel.",
      imageUrl: lunarlander,
      projectUrl: 'https://github.com/Tyler-Johnston/Lunar-Lander',
    },
    {
      id: 12,
      title: 'Maze Game',
      description:
        'A procedurally generated maze game ensuring solvable paths for each level, built with dynamic rendering logic.',
      imageUrl: maze,
      projectUrl: 'https://github.com/Tyler-Johnston/Maze-Game',
    },
  ],
};

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
        Explore a curated selection of projects that bridge <b>software engineering</b>, <b>data analytics</b>, and <b>creative design</b>. These works highlight how I approach complex technical problems: by balancing scalability, usability, and visual clarity.
      </Text>

      <Divider my="lg" />

      {categories.map(({ key, label }) => {
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
                  <Card
                    shadow="sm"
                    padding="lg"
                    radius="md"
                    withBorder
                    style={{
                      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.transform = 'translateY(-5px)')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.transform = 'translateY(0)')
                    }
                  >
                    <Card.Section>
                      <Image src={p.imageUrl} alt={p.title} height={160} />
                    </Card.Section>
                    <Title order={4} mt="md" c="blue.6">
                      {p.title}
                    </Title>
                    <Text size="sm" mt="xs" mb="sm" c="dimmed">
                      {p.description}
                    </Text>
                    <Button
                      variant="light"
                      color="blue"
                      fullWidth
                      component="a"
                      href={p.projectUrl}
                      target="_blank"
                    >
                      View Project
                    </Button>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>

            <Collapse in={expanded[key]}>
              <Grid gutter="xl" mt="md">
                {rest.map((p) => (
                  <Grid.Col key={p.id} span={{ base: 12, sm: 6, lg: 4 }}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                      <Card.Section>
                        <Image src={p.imageUrl} alt={p.title} height={160} />
                      </Card.Section>
                      <Title order={4} mt="md" c="blue.6">
                        {p.title}
                      </Title>
                      <Text size="sm" mt="xs" mb="sm" c="dimmed">
                        {p.description}
                      </Text>
                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        component="a"
                        href={p.projectUrl}
                        target="_blank"
                      >
                        View Project
                      </Button>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </Collapse>

            {rest.length > 0 && (
              <>
                <Group justify="center" mt="md">
                  <Button
                    variant="light"
                    color="blue"
                    size="md"
                    onClick={() => toggle(key)}
                    radius="md"
                  >
                    {expanded[key]
                      ? `Hide additional ${label.split(' ')[1]} projects ↑`
                      : `Show all ${label.split(' ')[1]} projects ↓`}
                  </Button>
                </Group>
              </>
            )}
          <Divider my="lg" />
          </div>
        );
      })}

      <Space h="xl" />

      <Group justify="center" mt="xl">
        <Button component={Link} to="/" size="md" leftSection={<FaUser />} variant="light">
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
