import {
  Text,
  Paper,
  Container,
  Title,
  Group,
  Grid,
  Image,
  Button,
  Divider,
  Space,
  Stack,
} from '@mantine/core';
import { IconType } from 'react-icons';
import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaUsers,
  FaLightbulb,
  FaComments,
  FaRegClock,
} from 'react-icons/fa';
import {
  SiCplusplus,
  SiCsharp,
  SiAngular,
  SiDotnet,
  Si4D,
  SiJquery,
  SiJavascript,
} from 'react-icons/si';
import { TbSql, TbDiamondFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import headshot from '../images/headshot_portugal.jpg';
import grad from '../images/grad.jpeg';
import '../styles.css';

const languages = [
  { name: 'C#', Icon: SiCsharp },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'SQL', Icon: TbSql },
  { name: 'Python', Icon: FaPython },
  { name: 'C++', Icon: SiCplusplus },
  { name: 'Java', Icon: FaJava },
  { name: '4D', Icon: Si4D },
];

const software = [
  { name: '.NET', Icon: SiDotnet },
  { name: 'jQuery', Icon: SiJquery },
  { name: 'Git', Icon: FaGitAlt },
  { name: 'AngularJS', Icon: SiAngular },
  { name: 'React.js', Icon: FaReact },
  { name: 'Power BI', Icon: FaLightbulb },
  { name: 'Linux', Icon: FaLinux },
  
];

const softSkills = [
  { name: 'Quality Assurance', Icon: TbDiamondFilled },
  { name: 'Problem‐Solving', Icon: FaLightbulb },
  { name: 'Communication', Icon: FaComments },
  { name: 'Time‐Management', Icon: FaRegClock },
];

interface Skill {
  name: string;
  Icon: IconType;
}

interface SkillsProps {
  title: string;
  skills: Skill[];
}

function RenderSkillsSection({ title, skills }: SkillsProps) {
  return (
    <Paper withBorder radius="md" p={{ base: 'md', sm: 'lg' }} shadow="sm">
      <Title order={4} ta="center" mb="sm" c="blue.6">
        {title}
      </Title>

      <Group justify="center" gap="md" wrap="wrap">
        {skills.map(({ name, Icon }) => (
          <Group key={name} gap={6} style={{ width: 'fit-content' }}>
            {Icon && <Icon size={20} color="#1971c2" />}
            <Text size="sm">{name}</Text>
          </Group>
        ))}
      </Group>
    </Paper>
  );
}


const About = () => {
  return (
    <>
      {/* ======================== INTRO SECTION ======================== */}
      <Container size="lg" py="xl">
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Image
              radius="lg"
              src={headshot}
              alt="Portrait of Tyler Johnston"
              className="smallImage"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Title order={1} mb="sm">
              Hi, I'm <span style={{ color: '#1971c2' }}>Tyler Johnston</span>!
            </Title>


            <Text size="lg">
              I’m currently pursuing a <b>Master's in Information Management (specializing in Business Intelligence)</b> at NOVA IMS in Lisbon, Portugal. Originally from Nashville, Tennessee, I earned a <b>full-ride Presidential Scholarship</b> to study <b>Computer Science</b> at Utah State University.
            </Text>

            <Space h="md" />

            <Text size="lg">
              I graduated <b>Magna Cum Laude</b> with a <b>3.92 GPA</b>, gaining experience as a <b>Web Developer, Modern C++ Teaching Assistant, and Computer Vision Research Assistant</b>. 
              Before graduating, I joined <b>Footprints, Inc.</b> as a <b>Full-Stack Developer</b>, developing enterprise applications with 
              <b> C#/.NET, JavaScript (Ext JS/jQuery), Oracle SQL,</b> and <b>4D</b>. Over 240 full-stack tasks later, I’d improved query performance, streamlined workflows, and sharpened my QA instincts.
            </Text>

            <Space h="md" />

            <Text size="lg">
              I thrive where <b>problem-solving</b>, <b>data-driven design</b>, and <b>team collaboration</b> meet. My goal is to grow within environments that challenge me technically while letting me contribute meaningfully to impactful, scalable solutions.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>

      {/* ======================== SKILLS SECTION ======================== */}
      <Container size="lg" py="xl">
        <Divider my="lg" />
        <Title order={2} mb="lg" ta="center">
          Skills
        </Title>

        <Grid gutter="lg">
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <RenderSkillsSection title="Languages" skills={languages} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <RenderSkillsSection title="Frameworks & Tools" skills={software} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
            <RenderSkillsSection title="Soft Skills" skills={softSkills} />
          </Grid.Col>
        </Grid>

        <Space h="xl" />

        <Text size="lg" ta="left" maw={900} mx="auto" lh={1.7}>
          My technical background bridges <b>full-stack development</b> and <b>data-driven design</b>. I’ve built enterprise applications using <b>C#/.NET</b>, <b>JavaScript</b> (Ext JS / jQuery), 
          and <b>Oracle SQL</b>, where I learned to turn complex systems into efficient, maintainable solutions. Now, as I specialize in <b>Business Intelligence</b> at NOVA IMS, I’m expanding that foundation through <b>Python-based analytics</b>, <b>Power BI</b> dashboards, <b>MySQL</b> database design, and <b>data visualization</b> techniques that translate raw information into clear, actionable insights.
        </Text>

      </Container>

      {/* ======================== EDUCATION SECTION ======================== */}
      <Container size="lg" py="xl">
        <Divider my="lg" /> 
        <Title order={2} ta="center" mb="lg">
          Education
        </Title>

        <Grid align="center">
          <Grid.Col span={{ base: 12, md: 5 }}>
            <Image
              radius="lg"
              src={grad}
              alt="Graduation photo"
              className="mediumImage"
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 7 }}>
            <Stack gap="md">
              <Paper withBorder p="lg" radius="md" shadow="sm">
                <Title order={4} ta="center" mb="xs">
                  B.S. in Computer Science <Text span fw={400}>with Minor in Mathematics</Text>
                </Title>
                <Text ta="center" c="dimmed">
                  Utah State University — Logan, UT
                </Text>
                <Space h="xs" />
                <Text>
                  Graduated <b>Magna Cum Laude</b> in May 2024 with a <b>3.92 GPA</b> on a full-ride Presidential Scholarship. Developed foundations in software engineering, algorithms, and data analysis through hands-on roles as a Web Developer, C++ Teaching Assistant, and Computer Vision Research Assistant.
                </Text>
              </Paper>

              <Paper withBorder p="lg" radius="md" shadow="sm">
                <Title order={4} ta="center" mb="xs">
                  Master’s in Information Management — <Text span fw={400}>Specialization in Business Intelligence</Text>
                </Title>
                <Text ta="center" c="dimmed">
                  Nova IMS — Lisbon, Portugal
                </Text>
                <Space h="xs" />
                <Text>
                  Pursuing advanced skills in data modeling, analytics, and visualization. My focus is on turning complex datasets into clear insights and designing intelligent, human-centered BI solutions.
                </Text>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>

        <Group justify="center" mt="xl">
          <Button
            component={Link}
            to="/portfolio"
            size="md"
            leftSection={<FaReact />}
            variant="filled"
          >
            View Projects
          </Button>
          <Button
            component={Link}
            to="/experience"
            size="md"
            leftSection={<FaUsers />}
            variant="light"
          >
            View Experience
          </Button>
        </Group>
      </Container>
    </>
  );
};

export default About;
