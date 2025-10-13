import { Container, Card, Text, Title, Button, Image, Accordion, Grid, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import vintagefinds from "../images/vintagefinds.png";
import reptiletracker from "../images/reptiletracker.png";
import cartpole1 from "../images/cartpole1.png";
import snakegame from "../images/snakegame.png";
import lunarlander from "../images/lunarlander.png";
import aws from "../images/aws.png";
import facialexpression from "../images/facialexpression.png";
import maze from "../images/maze.png";
import market from "../images/job_market.jpg"
import customer_behavior from "../images/customer-behavior.jpg"
import bees from "../images/bees.jpg"
import rps from "../images/rps.png"

const projects = {
  dataAnalytics: [
    {
      id: 9,
      title: 'Utah Programmer Job Market Analysis',
      description: 'Analyzed wage and cost-of-living data across Utah counties to determine the most affordable locations for programmers. Created an affordability index, visualized trends, and used regression and T-tests to compare compensation by job category.',
      imageUrl: market,
      projectUrl: 'https://github.com/Tyler-Johnston/Utah-Programmer-Job-Market-Analysis'
    },
    {
      id: 10,
      title: 'Customer Behavior Analysis',
      description: 'Built classification models to predict online shopper purchase intent and bank customer churn. Compared logistic regression and SVMs with different kernels, addressed class imbalance, and visualized decision boundaries.',
      imageUrl: customer_behavior,
      projectUrl: 'https://github.com/Tyler-Johnston/Customer-Behavior-Analysis'
    }
  ],
  machineLearning: [
    {
      id: 6,
      title: 'Cartpole Reinforcement Learning',
      description: 'Developed a reinforcement learning (ANN) model for OpenAI\'s cart pole using DeepQLearning.',
      imageUrl: cartpole1,
      projectUrl: 'https://github.com/Tyler-Johnston/cs5600-cartpole-reinforcement-learning'
    },
    {
      id: 7,
      title: 'Beehive Weight Prediction',
      description: 'Developed Artificial Neural Network (ANN), Convolutional Neural Network (ConvNet), and Long Short‐Term Memory (LSTM) models for the purpose of forecasting beehive weight based on its internal temperature using Keras. Developed ResNet50 and YOLO ConvNet models for bee/non‐bee image classification using PyTorch.',
      imageUrl: bees,
      projectUrl: 'https://github.com/Tyler-Johnston/cs5600-Beehive-Weight-Prediction'
    },
    {
      id: 8,
      title: 'Facial Expression Recognition',
      description: 'Developed a SVM model to recognize facial expressions based on Local Binary Patterns and Oriented FAST and rotated BRIEF features.',
      imageUrl: facialexpression,
      projectUrl: 'https://github.com/Tyler-Johnston/cs5680-facial-expression-recognition'
    }
  ],
  webDev: [
    {
      id: 4,
      title: 'Reptile Tracker',
      description: 'A full-stack application for managing pet reptile care schedules, including feeding, cleaning, and husbandry tracking. Built with a React.js front-end and an Express.js back-end, the app supports user authentication and data persistence.',
      imageUrl: reptiletracker,
      projectUrl: 'https://github.com/Tyler-Johnston/Reptile-Tracker'
    },    
    {
      id: 3,
      title: 'Vintage Finds',
      description: 'A web application built with Next.js and Firebase to showcase inventory for a local antique business. Features include real-time database integration, user authentication, and an admin interface for managing stock. Developed to help customers easily browse available items and stay updated on new finds.',
      imageUrl: vintagefinds,
      projectUrl: 'https://github.com/Tyler-Johnston/Vintage-Finds'
    },    
    {
      id: 5,
      title: 'AWS Widget Requests',
      description: 'Designed and implemented both Producer and Consumer applications with AWS, responsible for generating user widgets, queuing them via SQS, processing the data, and persisting results in either S3 buckets or DynamoDB tables.',
      imageUrl: aws,
      projectUrl: 'https://github.com/Tyler-Johnston/cs5260-AWS-Widget-Requests'
    },
    {
      id: 9,
      title: 'Rock Paper Scissors Idle Game',
      description: 'A full-stack Angular Single Page Application (SPA) where players engage in an evolving idle game loop. Features cloud saving, Supabase authentication, reactive service-driven architecture, automated gameplay upgrades, and achievement tracking.',
      imageUrl: rps,
      projectUrl: 'https://github.com/Tyler-Johnston/RPS'
    }
  ],
  gameDev: [
    {
      id: 0,
      title: 'Multiplayer Snake Game',
      description: 'A modern, competitive take on the classic Snake experience, designed for real-time, multiplayer gameplay. Players aim to grow the longest snake while navigating an arena filled with other players.',
      imageUrl: snakegame,
      projectUrl: 'https://github.com/Tyler-Johnston/Multiplayer-Snake-Game'
    },
    {
      id: 1,
      title: 'Lunar Lander Game',
      description: "A physics-based game where the player controls a lunar module's descent, adjusting thrust and angle to land safely on the moon's surface. The player must carefully balance speed and fuel to avoid crashing.",
      imageUrl: lunarlander,
      projectUrl: 'https://github.com/Tyler-Johnston/Lunar-Lander'
    },
    {
      id: 2,
      title: 'Maze Game',
      description: 'A maze game with guaranteed, procedurally generated paths from one corner of the map to the other.',
      imageUrl: maze,
      projectUrl: 'https://github.com/Tyler-Johnston/Maze-Game'
    }
  ]
  
  
};

const Portfolio = () => {
  return (
    <Container size="lg" my={40}>
      <Title>Portfolio</Title>
      <br/>
      <Text size="lg" mb="xl">
        Welcome to my portfolio! Here, you'll find a curated selection of my work and projects, organized into four main categories: <b>Data Analytics</b>, <b>Machine Learning</b>, <b>Web Development</b>, and <b>Game Development</b>. 
        Feel free to explore each project and view their source code. If you have any questions or would like to discuss my work, please don't hesitate to <Link to="mailto:johnstontyler@protonmail.com">contact me</Link>.
      </Text>

      <Accordion multiple defaultValue={['dataAnalytics']}>
        {Object.entries(projects).map(([category, categoryProjects]) => (
          <Accordion.Item value={category} key={category}>
            <Accordion.Control>
              {category === 'dataAnalytics' && 'Data Analytics'}
              {category === 'machineLearning' && 'Machine Learning'}
              {category === 'webDev' && 'Web Development'}
              {category === 'gameDev' && 'Game Development'}
            </Accordion.Control>
            <Accordion.Panel>
              <Grid>
                {categoryProjects.map((project) => (
                  <Grid.Col span={12} key={project.id}>
                    <Card shadow="sm" padding="lg">
                      <Card.Section>
                        <Image src={project.imageUrl} alt={project.title} height={160} />
                      </Card.Section>
                      <Text size="lg" mt="md">{project.title}</Text>
                      <Text size="sm" mt="md">{project.description}</Text>
                      <Button
                        variant="light"
                        color="blue"
                        fullWidth
                        mt="md"
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

      <Group justify="center" mt="md">
        <Button component={Link} to="/" size="md">
          View About Me
        </Button>
        <Button component={Link} to="/experience" size="md" variant="outline">
          View Experience
        </Button>
      </Group>
    </Container>
  );
};

export default Portfolio;
