import { Text, Paper, Container, Title, Accordion, Group, Tabs, Grid, List, ListItem, Badge, Image} from '@mantine/core';
import { IconType } from 'react-icons';
import { FaPython, FaJava, FaHtml5, FaCss3, FaReact, FaDocker, FaGitAlt, FaLinux, FaUsers, FaStream, FaLightbulb, FaComments, FaRegClock, FaHandsHelping, FaNode} from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiCsharp, SiPrisma, SiDjango, SiPytorch, SiOpencv, SiCmake, SiPandas} from 'react-icons/si';
import { Link } from 'react-router-dom';
import "../styles.css"
import headshot from "../images/headshot.jpeg";

const csCourses = [
    {
      id: 'cs5050',
      label: 'Advanced Algorithms',
      description: 'Algorithm design and analysis',
      content: "**in-progress** Explored advanced topics in algorithm design, analysis, and implementation, including graph, sorting, and dynamic programming algorithms. Gained insights into the theoretical underpinnings of algorithms and their practical applications.",
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
      content: " **in-progress** Applied data science techniques to analyze real-world data in collaborative, multidisciplinary teams. Utilized python, pandas, and matplotlib for data collection, cleaning, analysis, and visualization.",
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
      id: 'cs5410',
      label: 'Game Development',
      description: 'Discovered game development principles',
      content: " **in-progress** Explored ideas of game development such as the game loop, graphic rendering, and the development cycle. Utilized C# and Monogame for my tech stack.",
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
    { name: 'Python', Icon: FaPython },
    { name: 'JavaScript/TypeScript', Icon: SiTypescript },
    { name: 'C#', Icon: SiCsharp },
    { name: 'Java', Icon: FaJava },
    { name: 'C++', Icon: SiCplusplus },
    { name: 'HTML', Icon: FaHtml5 },
    { name: 'CSS', Icon: FaCss3 },
];

const software = [
    { name: 'React.js', Icon: FaReact },
    { name: 'Node.js', Icon: FaNode},
    { name: 'Django', Icon: SiDjango },
    { name: 'Prisma', Icon: SiPrisma },
    { name: 'Pandas', Icon: SiPandas},
    { name: 'PyTorch', Icon: SiPytorch },
    { name: 'OpenCV', Icon: SiOpencv },
    { name: 'CMake', Icon: SiCmake },
    { name: 'Docker', Icon: FaDocker },
    { name: 'Git', Icon: FaGitAlt },
    { name: 'Linux', Icon: FaLinux }

];

const softSkills =[
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
          <Text>I'm a senior undergraduate student at Utah State University studying Computer Science and Mathematics. I'm seeking full-time employment in Software Development.</Text>
          <br></br>
          <Text>I'm originally from Nashville, Tennessee! After applying to Utah State University, I was offered their full-ride presidential scholarship. I decided to take the plunge and move to Logan, and I have never regretted that decision!</Text>
            <br />
            <Text>I've always had a passion for technology and software ever since I was a kid. Being able to create something seemingly out of thin air using only problem-solving and creativity has always drawn me to software development. Even when there are frustrating bugs to figure out, finally creating a working solution is a high that I can't live without.</Text>
            <br />
            <Text>In my personal time, I love to hang out with friends and family, play video games on my Steam Deck, collect vinyl records and CDs, and learn the guitar. Check out my <Link target="_blank" to="https://www.discogs.com/user/sodafutz/collection">Discogs account</Link> if you want to view my music collection!</Text>
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
          <Paper p="xl">
            <Text>I am majoring in Computer Science with a minor in Mathematics. Throughout my undergrad, I have retained a 3.91 GPA. I'm currently a computer vision research assistant for the landscape architecture department where I use AI to detect urban infrastructure to generate latitude and longitude data of landmarks for the purpose of ADA compliance.</Text>
            <br></br>
            <Text>One aspect that drew me to Computer Science was how it is ever-changing and constantly growing. I have a strong love of learning, and because of this, I wanted to get my hands on almost everything Utah State had to offer. Because of this, I took every opportunity which would teach me new things, challenge me, and encourage me to do better.</Text>
            <br></br>
            <Text>Listed below are the courses I've taken. I had a strong desire to learn web development, machine learning, and object-oriented skills. While this was the route I ended up taking, I do have an open mind and would love the opportunity to learn new skills outside this scope!</Text>
            <br></br>
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