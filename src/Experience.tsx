import {
  Container,
  Title,
  Paper,
  Text,
  Image,
  Button,
  Group,
  List,
  Divider,
  Space,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { FaUser, FaReact, FaUsers } from 'react-icons/fa';
import blockbuilder from '../images/blockbuilder.jpeg';
import bucketvector from '../images/bucketvector.png';
import boundingbox from '../images/boundingbox.png';
import fp from '../images/footprints.png';
import '../styles.css';

const Experience = () => {
  return (
    <Container size="md" my={40}>
      <Title order={1} mb="xl" c="blue.6">
        Professional Experience
      </Title>

      {/* ===================== FOOTPRINTS ===================== */}
      <Paper p="lg" my="xl" radius="md" shadow="xs">
        <Title order={3} c="blue.6">
          Full-Stack Developer | Footprints, Inc.
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          March 2024 – August 2025
        </Text>

        <Text lh={1.7}>
          As a <b>Full-Stack Developer</b> at Footprints, I designed and implemented enterprise
          applications for engineering teams in the aerospace and steel manufacturing industries.
          My focus was on tools that help users plan, organize, and track mission-critical workflows
          with precision and reliability.
        </Text>
        <Space h="md" />
        <Text lh={1.7}>
          I developed with <b>C#/.NET</b>, <b>AJAX</b>, and <b>Oracle SQL</b> on the back end, and
          <b> JavaScript</b> (Ext JS / jQuery) on the front end. I also worked extensively with the{' '}
          <b>4D programming language</b>, supporting legacy systems that integrate with modern web
          interfaces.
        </Text>
        <Space h="md" />
        <Text lh={1.7}>
          Over <b>240+ full-stack tasks (~2,000 hours)</b>, I optimized SQL queries, improved system
          performance, and ensured robust quality assurance across the product line. Collaboration
          and communication were central, as I worked with cross-functional teams to gather
          requirements and deliver polished, scalable solutions.
        </Text>

        <Image src={fp} alt="Footprints dashboard example" className="smallImage" mt="lg" />

        <Title order={5} mt="md">
          Key Achievements:
        </Title>
        <List spacing="xs" size="sm" mt="xs">
          <List.Item>
            Built enterprise-grade apps with <b>C#/.NET, JavaScript (Ext JS/jQuery), Oracle SQL, and 4D</b>.
          </List.Item>
          <List.Item>
            Completed <b>240+ full-stack tasks</b> improving reliability and performance across production.
          </List.Item>
          <List.Item>Optimized SQL queries and streamlined data retrieval pipelines.</List.Item>
          <List.Item>Performed QA testing, debugging, and production-level bug prevention.</List.Item>
        </List>
      </Paper>

      <Divider my="xl" />

      {/* ===================== COMPUTER VISION ===================== */}
      <Paper p="lg" my="xl" radius="md" shadow="xs">
        <Title order={3} c="blue.6">
          Computer Vision Research Assistant | Utah State University
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          January 2024 – May 2024
        </Text>

        <Text lh={1.7}>
          I collaborated with Dr. Brent Chamberlain and Dr. Xiaojun Qi on an AI-driven urban
          accessibility project, developing pipelines to detect and map infrastructure features for
          evaluating <b>ADA (Americans with Disabilities Act)</b> compliance at city scale.
        </Text>
        <Space h="md" />
        <Text lh={1.7}>
          Using <b>YOLOv8</b> and <b>Roboflow</b>, I trained models to detect curb ramps, pedestrian
          signs, and traffic lights from <b>Google Street View</b> imagery. I then automated image
          downloads, extracted GPS metadata, and built geospatial datasets for visualization and
          compliance analysis.
        </Text>

        <Image
          src={boundingbox}
          alt="Bounding box detection example"
          className="mediumImage"
          mt="lg"
        />

        <Title order={5} mt="md">
          Key Achievements:
        </Title>
        <List spacing="xs" size="sm" mt="xs">
          <List.Item>
            Applied <b>YOLOv8</b> and <b>Roboflow</b> to classify infrastructure across U.S. cities.
          </List.Item>
          <List.Item>
            Automated data retrieval and metadata extraction from <b>Google Street View</b>.
          </List.Item>
          <List.Item>
            Produced datasets and heatmaps for <b>ADA compliance</b> evaluation.
          </List.Item>
        </List>
      </Paper>

      <Divider my="xl" />

      {/* ===================== C++ TEACHING ASSISTANT ===================== */}
      <Paper p="lg" my="xl" radius="md" shadow="xs">
        <Title order={3} c="blue.6">
          Modern C++ Teaching Assistant | Utah State University
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          August 2023 – December 2023
        </Text>

        <Text lh={1.7}>
          Supported Dr. Dean Mathias in refining the <b>Modern C++</b> curriculum through updated
          documentation, assignment design, and research into emerging C++ features.
        </Text>
        <Space h="md" />
        <Text lh={1.7}>
          Conducted evaluations of <b>C++ Modules</b> with GCC, providing feedback on adoption
          feasibility. Additionally, I designed a custom <b>bucket-based std::vector</b> that
          optimizes memory allocation for large datasets. The prototype assignment is available{' '}
          <Link to="https://github.com/Tyler-Johnston/Bucket-Vector" target="_blank">
            here
          </Link>
          .
        </Text>

        <Image
          src={bucketvector}
          alt="Bucket vector implementation example"
          className="mediumImage"
          mt="lg"
        />

        <Title order={5} mt="md">
          Key Achievements:
        </Title>
        <List spacing="xs" size="sm" mt="xs">
          <List.Item>
            Enhanced the Modern C++ course with new materials and documentation.
          </List.Item>
          <List.Item>
            Analyzed <b>C++ Modules</b> and recommended safe curriculum integration strategies.
          </List.Item>
          <List.Item>
            Developed a bucket-based <b>std::vector</b> to demonstrate templates and iterators.
          </List.Item>
          <List.Item>Produced practical examples of advanced memory management in C++.</List.Item>
        </List>
      </Paper>

      <Divider my="xl" />

      {/* ===================== SDL ===================== */}
      <Paper p="lg" my="xl" radius="md" shadow="xs">
        <Title order={3} c="blue.6">
          Web Developer | Space Dynamics Laboratory (Remote)
        </Title>
        <Text size="sm" c="dimmed" mb="md">
          March 2023 – June 2023
        </Text>

        <Text lh={1.7}>
          Developed a full-stack web application, <b>BlockBuilder</b>, to modernize XML workflow
          editing for Space Dynamics Laboratory. I implemented the front end with{' '}
          <b>React.js</b> and <b>React Flow</b> for drag-and-drop visualization, and built a{' '}
          <b>C#/.NET</b> backend interfacing with <b>Docker</b> containers.
        </Text>
        <Space h="md" />
        <Text lh={1.7}>
          The application replaced manual XML editing with a visual process designer, allowing users
          to upload, modify, and export configurations in <b>JSON</b> or <b>XML</b> formats. This
          significantly reduced errors and improved developer productivity.
        </Text>

        <Image
          src={blockbuilder}
          alt="BlockBuilder interface"
          className="mediumImage"
          mt="lg"
        />

        <Title order={5} mt="md">
          Key Achievements:
        </Title>
        <List spacing="xs" size="sm" mt="xs">
          <List.Item>
            Built an interactive <b>drag-and-drop UI</b> using <b>React.js</b> and <b>React Flow</b>.
          </List.Item>
          <List.Item>
            Developed a <b>C#/.NET backend</b> integrated with <b>Docker</b> containers.
          </List.Item>
          <List.Item>
            Enabled import/export of <b>JSON</b> and <b>XML</b> configurations for SDL software.
          </List.Item>
          <List.Item>
            Streamlined workflows, reducing XML-related errors and improving efficiency.
          </List.Item>
        </List>
      </Paper>

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
          to="/portfolio"
          size="md"
          leftSection={<FaReact />}
          variant="filled"
        >
          View Projects
        </Button>
      </Group>
    </Container>
  );
};

export default Experience;
