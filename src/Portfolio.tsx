import {
  Container,
  Card,
  Text,
  Title,
  Button,
  Image,
  Accordion,
  Grid,
  Group,
  Space,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import vintagefinds from "../images/vintagefinds.png";
import reptiletracker from "../images/reptiletracker.png";
import cartpole1 from "../images/cartpole1.png";
import snakegame from "../images/snakegame.png";
import lunarlander from "../images/lunarlander.png";
import aws from "../images/aws.png";
import facialexpression from "../images/facialexpression.png";
import maze from "../images/maze.png";
import market from "../images/job_market.jpg";
import customer_behavior from "../images/customer-behavior.jpg";
import bees from "../images/bees.jpg";
import rps from "../images/rps.png";
import { FaUsers, FaUser } from 'react-icons/fa';

const projects = {
  dataAnalytics: [
    {
      id: 9,
      title: 'Utah Programmer Job Market Analysis',
      description:
        'Analyzed wage and cost-of-living data across Utah counties to determine the most affordable locations for programmers. Created an affordability index, visualized trends, and used regression and T-tests to compare compensation by job category.',
      imageUrl: market,
      projectUrl: 'https://github.com/Tyler-Johnston/Utah-Programmer-Job-Market-Analysis',
    },
    {
      id: 10,
      title: 'Customer Behavior Analysis',
      description:
        'Built classification models to predict online shopper purchase intent and bank customer churn. Compared logistic regression and SVMs, addressed class imbalance, and visualized decision boundaries.',
      imageUrl: customer_behavior,
      projectUrl: 'https://github.com/Tyler-Johnston/Customer-Behavior-Analysis',
    },
  ],
  machineLearning: [
    {
      id: 6,
      title: 'Cartpole Reinforcement Learning',
      description:
        "Developed a reinforcement learning (ANN) model for OpenAI's cart pole using Deep Q-Learning.",
      imageUrl: cartpole1,
      projectUrl: 'https://github.com/Tyler-Johnston/cs5600-cartpole-reinforcement-learning',
    },
    {
      id: 7,
      title: 'Beehive Weight Prediction',
      description:
        'Built ANN, CNN, and LSTM models for forecasting beehive weight using Keras and PyTorch. Included ResNet50 and YOLO for bee/non-bee image classification.',
      imageUrl: bees,
      projectUrl: 'https://github.com/Tyler-Johnston/cs5600-Beehive-Weight-Prediction',
    },
    {
      id: 8,
      title: 'Facial Expression Recognition',
      description:
        'Trained a Support Vector Machine (SVM) to classify facial expressions using Local Binary Patterns and ORB feature extraction.',
      imageUrl: facialexpression,
      projectUrl: 'https://github.com/Tyler-Johnston/cs5680-facial-expression-recognition',
    },
  ],
  webDev: [
    {
      id: 4,
      title: 'Reptile Tracker',
      description:
        'A full-stack application for managing pet reptile care schedules. Built with React.js and Express.js, including authentication and persistent cloud storage.',
      imageUrl: reptiletracker,
      projectUrl: 'https://github.com/Tyler-Johnston/Reptile-Tracker',
    },
    {
      id: 3,
      title: 'Vintage Finds',
      description:
        'A Next.js + Firebase web app built for a local antique business. Features an admin dashboard, authentication, and real-time inventory updates.',
      imageUrl: vintagefinds,
      projectUrl: 'https://github.com/Tyler-Johnston/Vintage-Finds',
    },
    {
      id: 5,
      title: 'AWS Widget Requests',
      description:
        'Developed AWS Producer and Consumer apps handling widget generation, SQS messaging, and data persistence to S3 and DynamoDB.',
      imageUrl: aws,
      projectUrl: 'https://github.com/Tyler-Johnston/cs5260-AWS-Widget-Requests',
    },
    {
      id: 9,
      title: 'Rock Paper Scissors Idle Game',
      description:
        'An Angular SPA with Supabase backend featuring authentication, achievements, and automated gameplay loops.',
      imageUrl: rps,
      projectUrl: 'https://github.com/Tyler-Johnston/RPS',
    },
  ],
  gameDev: [
    {
      id: 0,
      title: 'Multiplayer Snake Game',
      description:
        'A real-time multiplayer version of the classic Snake game. Compete to grow the longest snake while navigating shared arenas.',
      imageUrl: snakegame,
      projectUrl: 'https://github.com/Tyler-Johnston/Multiplayer-Snake-Game',
    },
    {
      id: 1,
      title: 'Lunar Lander Game',
      description:
        "A physics-based lunar descent simulator requiring careful thrust control to land safely while managing limited fuel.",
      imageUrl: lunarlander,
      projectUrl: 'https://github.com/Tyler-Johnston/Lunar-Lander',
    },
    {
      id: 2,
      title: 'Maze Game',
      description:
        'A procedurally generated maze game ensuring solvable paths for each level, built with dynamic rendering logic.',
      imageUrl: maze,
      projectUrl: 'https://github.com/Tyler-Johnston/Maze-Game',
    },
  ],
};

const Portfolio = () => {
  return (
    <Container size="lg" my={40}>
      <Title order={1} mb="sm" c="blue.6">
        Portfolio
      </Title>

      <Text size="lg" mb="xl">
        Welcome to my portfolio! Here, you’ll find a curated selection of my projects; these span from <b>Data Analytics</b>, <b>Machine Learning</b>, <b>Web Development</b>, and <b>Game Development</b>. Each project reflects a step in my journey as a developer passionate about <b>data, design, and functionality</b>.
      </Text>

      <Text size="md" c="dimmed" mb="lg">
        Click a category below to explore projects, view source code, and dive into their technical details.
      </Text>

      <Accordion multiple defaultValue={[]}>
        {Object.entries(projects).map(([category, categoryProjects]) => (
          <Accordion.Item value={category} key={category}>
            <Accordion.Control fw={600}>
              {category === 'dataAnalytics' && '📊 Data Analytics'}
              {category === 'machineLearning' && '🤖 Machine Learning'}
              {category === 'webDev' && '💻 Web Development'}
              {category === 'gameDev' && '🎮 Game Development'}
            </Accordion.Control>

            <Accordion.Panel>
              <Grid gutter="xl">
                {categoryProjects.map((project) => (
                  <Grid.Col key={project.id} span={{ base: 12, sm: 6, lg: 4 }}>
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
                        <Image src={project.imageUrl} alt={project.title} height={160} />
                      </Card.Section>

                      <Title order={4} mt="md" c="blue.6">
                        {project.title}
                      </Title>
                      <Text size="sm" mt="xs" mb="sm" c="dimmed">
                        {project.description}
                      </Text>

                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="sm"
                        component="a"
                        href={project.projectUrl}
                        target="_blank"
                      >
                        View Project
                      </Button>
                    </Card>
                  </Grid.Col>
                ))}
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

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
