import { Text, Paper, Container, Title, Accordion, Group, Tabs, Grid, List, ListItem, Badge, Image} from '@mantine/core';
import { IconType } from 'react-icons';
import { FaPython, FaJava, FaReact, FaDocker, FaGitAlt, FaLinux, FaUsers, FaStream, FaLightbulb, FaComments, FaRegClock, FaHandsHelping} from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiDjango, SiDotnet, Si4D, SiJquery, SiJavascript} from 'react-icons/si';
import { TbSql, TbDiamondFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import "../styles.css"
import headshot from "../images/headshot.jpeg";
import grad from "../images/grad.jpeg";

const csCourses = [
    {
      id: 'cs5050',
      label: 'Advanced Algorithms',
      description: 'Algorithm design and analysis',
      content: "Explored advanced topics in algorithm design, analysis, and implementation, including graph, sorting, and dynamic programming algorithms. Gained insights into the theoretical underpinnings of algorithms and their practical applications.",
    },
    {
      id: 'cs5410',
      label: 'Game Development',
      description: 'Discovered game development principles',
      content: "Explored ideas of game development such as the game loop, graphic rendering, and the development cycle. Utilized C# and Monogame for my tech stack.",
      projects: [
        {
          name: "Multiplayer Snake Game",
          description: "A modern, competitive take on the classic Snake experience, designed for real-time, multiplayer gameplay. Players aim to grow the longest snake while navigating an arena filled other players",
          link: "https://github.com/Tyler-Johnston/Multiplayer-Snake-Game"
        },
        {
          name: "Lunar Lander",
          description: "A physics-based game where the player controls a lunar module's descent, adjusting thrust and angle to land safely on the moon's surface. The player must carefully balance speed and fuel to avoid crashing. ",
          link: "https://github.com/Tyler-Johnston/Lunar-Lander"
        },
        {
          name: "Maze Game",
          description: "A maze game with guaranteed, procedurally generated paths from one corner of the map to the other",
          link: "https://github.com/Tyler-Johnston/Maze-Game"
        }
      ]
    },
    {
      id: 'cs5680',
      label: 'Computer Vision',
      description: 'Learned techniques for digital image analysis',
      content: "Explored computer vision techniques such as image enhancement, edge detection, noise removal, denoising, image restoration, and pattern recognition within machine learning",
      projects: [
        {
          name: "Filtering Techniques in the Spatial Domain",
          description: "Applied filtering techniques for image enhancement, edge detection, and noise removal. Techniques included low-pass and high-pass filters, average and median filters, and Laplacian masks",
          link: "https://github.com/Tyler-Johnston/cs5680-filter-techniques-spatial-domain"
        },
        {
          name: "Filtering Techniques in the Frequency Domain",
          description: "Applied filtering techniques in the frequency domain to solve problems related to image processing, such as denoising, image restoration, and feature manipulation using Fourier and wavelet transforms",
          link: "https://github.com/Tyler-Johnston/cs5680-filter-techniques-frequency-domain"
        },
        {
          name: "Morphological Operations",
          description: "Applied morphological operations to solve various image processing tasks, including enhancement, object isolation, and structural analysis across different images",
          link: "https://github.com/Tyler-Johnston/cs5680-morphological-operations"
        },
        {
          name: "Facial Expression Recognition",
          description: "Developed and trained models for facial expression recognition and predicting emotions in images using LBP, ORB, and their combined feature sets using an SVM",
          link: "https://github.com/Tyler-Johnston/cs5680-facial-expression-recognition"
        }
      ]
    },    
    {
      id: 'cs5630',
      label: 'Data Science In Practice',
      description: 'Engaged in real-world data analysis projects',
      content: "Applied data science techniques to analyze real-world data in collaborative, multidisciplinary teams. Utilized python, pandas, and matplotlib for data collection, cleaning, analysis, and visualization.",
    },
    {
      id: 'cs5260',
      label: 'Developing Cloud Applications',
      description: 'Developed scalable AWS applications',
      content: "Learned to create scalable, fault-tolerant applications on Amazon Web Services, covering core services, cloud architecture best practices, and AWS tools. Implemented projects using EC2, S3, RDS, Lambda, and more.",
      projects: [
        {
          name: "AWS Widgets and Requests",
          description: "Designed and implemented both Producer and Consumer applications with AWS, responsible for generating user widgets, queuing them via SQS, processing the data, and persisting results in either S3 buckets or DynamoDB tables",
          link: "https://github.com/Tyler-Johnston/cs5260-AWS-Widget-Requests"
        },
      ]
    },
    {
      id: 'cs5600',
      label: 'Intelligent Systems',
      description: 'Studied AI and machine learning system design',
      content: "Investigated the creation of systems for tasks requiring human intelligence, such as machine learning and natural language processing. Designed AI models for practical applications.",
      projects: [
        {
          name: "Cart Pole Reinforcement Learning",
          description: "Developed a reinforcement learning model for OpenAI's cart pole",
          link: "https://github.com/Tyler-Johnston/cs5600-cartpole-reinforcement-learning"
        },
        {
          name: "Beehive Weight Prediction",
          description: "Developed Artificial Neural Network, Convolutional Neural Network, and Long Short‐Term Memory models for the purpose of forecasting beehive weight based on its internal temperature using Keras. Also, developed ResNet50 and YOLO ConvNet models for bee/non‐bee image classification using PyTorch",
          link: "https://github.com/Tyler-Johnston/cs5600-Beehive-Weight-Prediction"
        },
      ]
    },
    {
      id: 'cs3460',
      label: 'Modern C++',
      description: 'Advanced C++ programming techniques',
      content: "Focused on modern C++ programming, including templates, STL, and concurrency. Developed efficient code using modern C++ standards and best practices.",
      projects: [
        {
          name: "Conways Game of Life",
          description: "Developed the zero-player game Conway's Game of Life",
          link: "https://github.com/Tyler-Johnston/Conways-Life"
        },
        {
          name: "Autocomplete",
          description: "Developed an autocomplete application for typed words",
          link: "https://github.com/Tyler-Johnston/Autocomplete"
        },
        {
          name: "Smart Pointer",
          description: "Implemented a mock std::shared_ptr from scratch to learn templating, constructors, and memory management",
          link: "https://github.com/Tyler-Johnston/Smart-Pointer"
        },
        {
          name: "Vector",
          description: "Implemented std::vector from scratch to learn iterators, templating, constructors, and memory management ",
          link: "https://github.com/Tyler-Johnston/Vector"
        },

      ]
    },
    {
      id: 'cs4610',
      label: 'Modern Web Development',
      description: 'Comprehensive study of web technologies',
      content: "Introduced to contemporary web development technologies and practices, including React and Node.js. Built full-stack web applications, emphasizing web architecture and security.",
      projects: [
        {
          name: "Reptile Tracker",
          description: "Developed a website to manage one's pet reptile's schedules, husbandry, and feedings. I developed the back-end using Express.js and the front-end using React.js.",
          link: "https://github.com/Tyler-Johnston/Reptile-Tracker"
        },
      ]
    },
];
  
const mathCourses = [
    {
      id: 'math1210',
      label: 'Calculus I',
      description: 'Explored differential and integral calculus basics',
      content: "Covered calculus fundamentals, applying concepts to solve real-world problems in various disciplines. Focused on limits, derivatives, and integrals of single-variable functions.",
    },
    {
      id: 'math1220',
      label: 'Calculus II',
      description: 'Advanced calculus techniques and applications',
      content: "Extended Calculus I knowledge to advanced integration techniques, polar coordinates, and series. Applied Taylor series to differential equations.",
    },
    {
      id: 'math2210',
      label: 'Multivariable Calculus',
      description: 'Extended calculus to functions of multiple variables',
      content: "Covered partial derivatives, multiple integrals, and vector calculus. Applied concepts to fields like fluid dynamics and electromagnetic fields.",
    },
    {
      id: 'math2280',
      label: 'Ordinary Differential Equations',
      description: 'Solving differential equations methodologies',
      content: "Introduced to ODEs and their applications. Covered various types of differential equations and modeling with differential equations in several fields.",
    },
    {
      id: 'math3310',
      label: 'Discrete Mathematics',
      description: 'Foundation of mathematical structures in CS',
      content: "Studied logic, set theory, combinatorics, and graph theory, applying these concepts to algorithm analysis and software design.",
    },
    {
      id: 'math5710',
      label: 'Introduction to Probability',
      description: 'Basic principles and applications of probability',
      content: "Learned probability theory principles, including random variables and distributions. Prepared for further study in statistical inference and stochastic processes.",
    },
];  

const languages = [
    { name: 'C#', Icon: SiCsharp },
    { name: 'JavaScript', Icon: SiJavascript },
    { name: 'Oracle SQL', Icon: TbSql },
    { name: 'Python', Icon: FaPython },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'Java', Icon: FaJava },
    { name: '4D', Icon: Si4D },
];

const software = [
    { name: '.NET', Icon: SiDotnet },
    { name: 'jQuery', Icon: SiJquery },
    { name: 'Git', Icon: FaGitAlt },
    { name: 'Django', Icon: SiDjango },
    { name: 'React.js', Icon: FaReact },
    { name: 'Docker', Icon: FaDocker },
    { name: 'Linux', Icon: FaLinux },

];

const softSkills =[
    { name: 'Quality Assurance', Icon: TbDiamondFilled },
    { name: 'Agile Methodology', Icon: FaUsers },
    { name: 'Waterfall Methodology', Icon: FaStream },
    { name: 'Teamwork', Icon: FaHandsHelping },
    { name: 'Problem‐Solving', Icon: FaLightbulb },
    { name: 'Communication', Icon: FaComments },
    { name: 'Time‐Management', Icon: FaRegClock },
];

interface Skills {
    name: string;
    Icon: IconType;
}

interface SkillsProps {
    skills: Skills[]
}

interface AccordionLabelProps {
    label: string;
    description: string;
}

interface Project {
  name: string;
  description: string;
  link: string;
}

interface Course {
  id: string;
  label: string;
  description: string;
  content: string;
  projects?: Project[];
}

interface CourseAccordionProps {
    courses: Course[];
}

function RenderSkillsSection({ skills }: SkillsProps) {
    return (
      <Paper p="xl">
        {skills.map(({ name, Icon }) => (
          <Group key={name}>
            {Icon ? <Icon size={24}/> : <></>}
            <Text>{name}</Text>
          </Group>
        ))}
      </Paper>
    );
}
  
function AccordionLabel({ label, description }: AccordionLabelProps) {
    return (
      <Group wrap="nowrap">
        <div>
          <Text>{label}</Text>
          <Text size="sm" c="dimmed" fw={400}>
            {description}
          </Text>
        </div>
      </Group>
    );
}

function CourseAccordion({ courses }: CourseAccordionProps) {
  return (
    <Accordion chevronPosition="right" variant="contained">
      {courses.map((course) => (
        <Accordion.Item value={course.id} key={course.id}>
          <Accordion.Control>
            <AccordionLabel label={course.label} description={course.description} />
          </Accordion.Control>
          <Accordion.Panel>
            <Text size="sm">{course.content}</Text>
            {course.projects && (
              <>
                <Text size="sm" style={{ marginTop: '10px' }}>Projects:</Text>
                <List withPadding>
                  {course.projects.map((project, index) => (
                    <ListItem key={index}>
                      <Text size="sm">
                      <Link to={project.link} target="_blank">{project.name}</Link>: {project.description}
                      </Text>
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

const About = () => {

    return (
        <>
        <Container>
          <Title>Hi, i'm Tyler Johnston!</Title>
          <Paper p="xl">
          <Image radius="md" src={headshot} className='smallImage'/>
          <Text>I'm a Full-Stack Developer at Footprints, Inc., working out of the Logan, Utah office. I specialize in creating custom solutions using C#/.NET, JavaScript (Ext JS / jQuery), Oracle SQL, and the 4D Programming Language. I also perform regular Quality Assurance (QA) work to ensure code quality is up to the proper standards for our clients.</Text>
          <br/>
          <Text>I'm a graduate from Utah State University, majoring in Computer Science and minoring in Mathematics. Although I'm originally from Nashville Tennessee, I made the decision to move to Utah after being awarded a full-ride scholarship at USU. It was a tough choice, but I have never regretted the experiences I was able to form here!</Text>
          <br/>
          <Text>I maintained a 3.91 GPA during my undergraduate program while pursuing career-enriching experiences as a Web Developer, a Modern C++ Teaching Assistant, and a Computer Vision Research Assistant. These roles taught me invaluable skills, such as quickly learning new languages and technologies, drafting clear and effective documentation, and conducting thorough unit testing.</Text>
          <br/>
          <Text>I thrive in collaborative environments where problem-solving and innovation are at the forefront. Working closely with our development team has taught me the importance of effective communication in driving successful projects. My goal is to work in an environment that both challenges and enriches me professionally, where I can contribute meaningfully while continuously learning and growing as a developer.</Text>
          <br />
          </Paper>
        </Container>

        <Container>
            <Title>Skills</Title>
            <Grid>
                <Grid.Col span={4}>
                    <RenderSkillsSection skills={languages} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <RenderSkillsSection skills={software} />
                </Grid.Col>
                <Grid.Col span={4}>
                    <RenderSkillsSection skills={softSkills} />
                </Grid.Col>
            </Grid>
        </Container>
  
        <Container>
          <Title>Education</Title>
          <Badge color="pink">3.91 GPA</Badge>
          <Image radius="md" src={grad} className='mediumImage'/>
          <Paper p="xl">
            <Text size="lg" fw={700} style={{ textAlign: 'center' }}>BS in Computer Science with Minor in Mathematics</Text>
            <Text style={{ textAlign: 'center' }}>Graduated May 2024 in Logan, UT.</Text>
            <br/>
            <Text>I began my college journey during the COVID-19 pandemic, adapting to remote learning and immersing myself in all I could about software development. Despite the challenges this brought, along with moving to a new state all together, I excelled in my classes and was able to form strong friendships during this time. I am very proud to have graduated with a 3.91 GPA, a full-ride scholarship, along with the many programming work experiences I have to show for myself.</Text>
            <br/>
            <Text>Here is a selection of the classes I took during my undergraduate program. I had a strong desire to become proficient in both the front-end and back-end, along learning important skills such as Computer Vision, Artificial Intelligence, and Data Science. Additionally, I am proud to have graduated with a minor in Mathematics. The problem solving skills I developed during my time studying mathematics has been invaluable, and these are skills I utilize in my day-to-day life</Text>
            <br/>
            <Tabs defaultValue="cs">
              <Tabs.List>
                <Tabs.Tab value="cs">Computer Science</Tabs.Tab>
                <Tabs.Tab value="math">Mathematics</Tabs.Tab>
              </Tabs.List>
  
              <Tabs.Panel value="cs" pt="xs">
                <CourseAccordion courses={csCourses} />
              </Tabs.Panel>
  
              <Tabs.Panel value="math" pt="xs">
                <CourseAccordion courses={mathCourses} />
              </Tabs.Panel>
            </Tabs>
          </Paper>
        </Container>
      </>
    );
  };
  
  export default About;