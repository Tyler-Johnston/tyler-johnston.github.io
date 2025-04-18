import { Text, Paper, Container, Title, Accordion, Group, Tabs, Grid, List, ListItem, Badge, Image} from '@mantine/core';
import { IconType } from 'react-icons';
import { FaPython, FaJava, FaReact, FaDocker, FaGitAlt, FaLinux, FaUsers, FaStream, FaLightbulb, FaComments, FaRegClock, FaHandsHelping} from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiAngular, SiDotnet, Si4D, SiJquery, SiJavascript} from 'react-icons/si';
import { TbSql, TbDiamondFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import "../styles.css"
import headshot from "../images/headshot.jpeg";
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
          <Badge color="pink">3.91/4.00 GPA</Badge>
          <Image radius="md" src={grad} className='mediumImage'/>
          <Paper p="xl">
            <Text size="lg" fw={700} style={{ textAlign: 'center' }}>BS in Computer Science with Minor in Mathematics - Magna Cum Laude</Text>
            <Text style={{ textAlign: 'center' }}>Utah State University, Logan, UT – Class of 2024</Text>
            <br/>
            <Text>I began my college journey during the COVID-19 pandemic, adapting to remote learning and immersing myself in all I could about software development. Despite the challenges this brought, along with moving to a new state all together, I excelled in my classes and was able to form strong friendships during this time. I am very proud to have graduated with a 3.91 GPA, a full-ride scholarship, along with the many programming work experiences I have to show for myself.</Text>
            <br/>
            <Text fw={700}>Relevant Coursework:</Text>
            <Text>
            Data Science in Practice, Intelligent Systems, Computer Vision, Advanced Algorithms, Developing Cloud Applications, Modern Web Development, Game Development, Linear Algebra, Multivariable Calculus, Probability
            </Text>
          </Paper>
        </Container>
      </>
    );
  };
  
  export default About;