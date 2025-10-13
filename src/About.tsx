import { Text, Paper, Container, Title, Group, Grid, Badge, Image, Button, Divider } from '@mantine/core';
import { IconType } from 'react-icons';
import { FaPython, FaJava, FaReact, FaDocker, FaGitAlt, FaLinux, FaUsers, FaStream, FaLightbulb, FaComments, FaRegClock, FaHandsHelping} from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiAngular, SiDotnet, Si4D, SiJquery, SiJavascript} from 'react-icons/si';
import { TbSql, TbDiamondFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import "../styles.css"
import headshot from "../images/headshot_portugal.jpg";
import grad from "../images/grad.jpeg";


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
    { name: 'AngularJS', Icon: SiAngular },
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

const About = () => {

    return (
        <>
        <Container>
          <Title>Hi, I'm Tyler Johnston!</Title>
          <Paper p="xl">
          <Image radius="md" src={headshot} className='smallImage'/>
          <Text>I am currently pursuing a <b>Master's degree in Information Management (specializing in Business Intelligence)</b> from NOVA IMS University in Lisbon, Portugal. I originally grew up in Nashville, Tennessee, and upon receiving a full-ride presidential scholarship at Utah State University, I relocated to Logan Utah to pursue a bachelors in Computer Science.</Text>
          <br/>
          <Text>While attending Utah State University, I focused on gaining both a strong education and hands-on experience. I graduated <b>Magna Cum Laude</b>, an honor awarded to the top-performing students, with a <b>3.92/4.00 GPA</b>, earning a Major in Computer Science and a Minor in Mathematics. During my studies here, I gained hands-on experience as a <b>Web Developer, a Modern C++ Teaching Assistant, and a Computer Vision Research Assistant</b>.</Text>
          <br/>
          <Text>Prior to graduating from Utah State University, I received a job offer as a <b>Full-Stack Developer</b> for Footprints, Inc., where I worked in their Logan, UT office. In this role, I developed end-to-end enterprise applications using <b>C#/.NET</b>, <b>JavaScript</b> (Ext JS / jQuery), <b>Oracle SQL</b>, and the 4D programming language. I completed over 240 full-stack tasks across front-end, back-end, and database systems, optimized SQL queries to improve performance, and conducted rigorous <b>Quality Assurance</b> to ensure reliable, high-quality deliverables for business-critical workflows.</Text>
          <br/>
          <Text>I thrive in collaborative environments where problem-solving and innovation are at the forefront. Working closely with our development team has taught me the importance of effective communication in driving successful projects. My goal is to work in an environment that both challenges and enriches me professionally, where I can contribute meaningfully while continuously learning and growing as a developer.</Text>
          <br />
          </Paper>
        <Divider my="lg" />
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
        <Divider my="lg" />
        </Container>
  
        <Container>
          <Title>Education</Title>
          <Image radius="md" src={grad} className='mediumImage'/>
          <Paper p="xl">
            <Text size="19px" fw={700} style={{ textAlign: 'center' }}>
              BS in Computer Science with Minor in Mathematics – Magna Cum Laude
            </Text>
            <Text style={{ textAlign: 'center' }}>
              <i>Utah State University, Logan, UT</i>
            </Text>
            <br/>
            <Text>
              I entered Utah State University on a full-ride Presidential Scholarship and graduated <b>Magna Cum Laude</b> with a 3.92/4.00 GPA May of 2024. During my studies, I built strong technical foundations in software development, algorithms, and data analysis, complemented by hands-on experience as a Web Developer, Modern C++ Teaching Assistant, and Computer Vision Research Assistant.
            </Text>
            <br/>
            <Text size="19px" fw={700} style={{ textAlign: 'center' }}>
              Master’s in Information Management – Specialization in Business Intelligence
            </Text>
            <Text style={{ textAlign: 'center' }}>
              <i>Nova IMS, Lisbon, Portugal</i>
            </Text>
            <br/>
            <Text>
              I am currently pursuing a Master’s in Information Management at Nova IMS in Lisbon, specializing in Business Intelligence. My focus is on transforming complex data into actionable insights, developing dashboards and analytics solutions, and applying data-driven strategies to real-world business challenges.
            </Text>
          </Paper>
          <Group justify="center" mt="md">
              <Button component={Link} to="/portfolio" size="md">
                View Projects
              </Button>
              <Button component={Link} to="/experience" size="md" variant="outline">
                View Experience
              </Button>
           </Group>
        </Container>
      </>
    );
  };
  
  export default About;