import { Container, Grid, Card, Text, Title, Button, Image } from '@mantine/core';
import vintagefinds1 from "../images/vintagefinds1.png"
import reptiletracker1 from "../images/reptiletracker1.png"
import cartpole1 from "../images/cartpole1.png"
import aws from "../images/aws.png"
import facialexpression from "../images/facialexpression.png"
import yolo from "../images/yolo.png"

const projects = [
  {
    id: 1,
    title: 'Vintage Finds',
    description: 'This is a website I started developing for my grandfather. He owns an antique booth and wanted a way to let his customers know what items he had in stock. I developed this using Next.js and Google\'s relational database.',
    imageUrl: vintagefinds1,
    projectUrl: 'https://github.com/Tyler-Johnston/Vintage-Finds'
  },
  {
    id: 2,
    title: 'Reptile Tracker',
    description: 'This is a website to manage one\'s pet reptile\'s schedules, husbandry, and feedings. I developed the back-end using Express.js and the front-end using React.js.',
    imageUrl: reptiletracker1,
    projectUrl: 'https://github.com/Tyler-Johnston/Reptile-Tracker'
  },
  {
    id: 3,
    title: 'AWS Widget Requests',
    description: 'Designed and implemented both Producer and Consumer applications with AWS, responsible for generating user widgets, queuing them via SQS, processing the data, and persisting results in either S3 buckets or DynamoDB tables.',
    imageUrl: aws,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5260-AWS-Widget-Requests'
  },
  {
    id: 4,
    title: 'Cartpole Reinforcement Learning',
    description: 'Developed a reinforcement learning (ANN) model for OpenAI\'s cart pole using DeepQLearning.',
    imageUrl: cartpole1,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5600-cartpole-reinforcement-learning'
  },
  {
    id: 5,
    title: 'Beehive Weight Prediction using Machine Learning',
    description: 'Developed Artificial Neural Network (ANN), Convolutional Neural Network (ConvNet), and Long Short‐Term Memory (LSTM) models for the purpose of forecasting beehive weight based on its internal temperature using Keras. Developed ResNet50 and YOLO ConvNet models for bee/non‐bee image classification using PyTorch.',
    imageUrl: yolo,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5600-Beehive-Weight-Prediction'
  },
  {
    id: 6,
    title: 'Facial Expression Recognition',
    description: 'Developed a SVM model to recognize facial expressions baseds on Local Binary Patterns and Oriented FAST and rotated BRIEF features',
    imageUrl: facialexpression,
    projectUrl: 'https://github.com/Tyler-Johnston/cs5680-facial-expression-recognition'
  },
];

const Portfolio = () => {
  return (
    <Container size="lg" my={40}>
      <Title>Portfolio</Title>
      <Text size="lg" mb="xl">
        Welcome to my portfolio. Here you'll find a selection of my work and projects.
      </Text>
      
      <Grid>
        {projects.map((project) => (
          <Grid.Col span={12} key={project.id}>
            <Card shadow="sm" padding="lg">
              <Card.Section>
                <Image src={project.imageUrl} alt={project.title} height={160} />
              </Card.Section>
              <Text size="lg" mt="md">{project.title}</Text>
              <Text size="sm" mt="md">{project.description}</Text>
              <Button variant="light" color="blue" fullWidth mt="md" component="a" href={project.projectUrl} target="_blank">
                View Project
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
};

export default Portfolio;
