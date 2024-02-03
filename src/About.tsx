import { Text, Paper, Container, Title, Image, Accordion, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import portrait from "../images/portrait.jpeg";
import "../styles.css"

const courses = [
  {
    id: 'cs4610',
    label: 'Modern Web Development',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
  {
    id: 'cs3460',
    label: 'Modern C++',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
  {
    id: 'cs5260',
    label: 'Developing Cloud Applications (AWS)',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
  {
    id: 'cs5600',
    label: 'Intelligent Systems',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
  {
    id: 'cs5680',
    label: 'Computer Vision',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
  {
    id: 'cs5630',
    label: 'Data Science In Practice (in progress)',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
  {
    id: 'cs5410',
    label: 'Game Development (in progress)',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
  {
    id: 'cs5050',
    label: 'Advanced Algorithms (in progress)',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },
];

interface AccordionLabelProps {
  label: string;
  description: string;
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

const About = () => {

    const items = courses.map((course) => (
        <Accordion.Item value={course.id} key={course.id}>
          <Accordion.Control>
            <AccordionLabel label={course.label} description={course.description} />
          </Accordion.Control>
          <Accordion.Panel>
            <Text size="sm">{course.content}</Text>
          </Accordion.Panel>
        </Accordion.Item>
      ));

    return (
        <>
        <Container>
            <Paper p="xl">
                <Text className="textHeading" ta="center" fw={700}> Hi, my name is Tyler Johnston!</Text>
                <Image radius="md" src={portrait} className="mediumImage"/>
                <Text className="textSubHeading" fs="italic">I'm an senior undergraduate student at Utah State University studying Computer Science and Mathematics. I'm seeking full-time employment in Software Development.</Text>
            </Paper>
        </Container>

        <Container>
            <Title>Personal Background</Title>
            <Paper p="xl">
                <Text>I'm originally from Nashville, Tennessee! After applying to Utah State, I was granted their full-ride Presidential Scholarship. Moving across the country to an new state straight out of high school was a scary decision, but I have never regretted my decision to attend USU!</Text>
                <br></br>
                <Text>I've always had a passion for technology and software ever since I was a kid. Being able to create an application seemingly out of thin air using only problem-solving and creativity has always drawn me to software development. Even when there are frustrating bugs to figure out, finally creating a working solution is a high that I can't live without.</Text>
                <br></br>
                <Text>In my personal time I love to hang out with friends and family, play video games, collect vinyl records, and learn the guitar! Check out my <Link to="https://www.discogs.com/user/sodafutz/collection">Discogs account</Link> if you want to view my vinyl collection!</Text>
            </Paper>
        </Container>

        <Container>
            <Title>Educational Background</Title>
            <Paper p="xl">
                <Text>As of Spring 2024, I have retaiend a 3.91 GPA. </Text>
            <Accordion chevronPosition="right" variant="contained">
                {items}
            </Accordion>
                
            </Paper>
        </Container>

        <Container>
            <Title>Skills</Title>
            <Paper>
                <Text></Text>
            </Paper>
        </Container>


        </>
    );
  };
  
  export default About;
