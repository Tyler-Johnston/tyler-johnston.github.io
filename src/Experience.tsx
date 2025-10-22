import { Container, Title, Paper, Text, Image, Button, Group, List, Divider} from '@mantine/core';
import blockbuilder from "../images/blockbuilder.jpeg"
import bucketvector from "../images/bucketvector.png"
import boundingbox from "../images/boundingbox.png"
import fp from "../images/footprints.png"
import { Link } from 'react-router-dom';
import "../styles.css"

const Experience = () => {
  return (
    <>
      <Container size="md" my={40}>
        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Full-Stack Developer | Footprints, Inc., Logan, UT</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>March 2024 - August 2025</Text>

          <Text>
            I worked as a full-stack developer where I designed and implemented applications for engineering teams in the aerospace and steel manufacturing industries. My work focused on creating tools that help users plan, organize, and track critical workflows, ensuring efficiency and precision in highly technical environments.
          </Text>
          <br/>
          <Text>
            On the back end, I leveraged <b>C#/.NET</b>, <b>AJAX</b>, and <b>Oracle SQL</b>, using SQL Developer for database management. On the front end, I built responsive, interactive interfaces with JavaScript frameworks such as <b>Ext JS</b> and <b>jQuery</b>, ensuring seamless integration with backend systems. Additionally, I worked in the <b>4D programming language</b> in-depth, contributing to end-to-end enterprise applications that utilize this technology.
          </Text>
          <br/>
          <Text>
            Throughout this role, I successfully completed <b>240+ full-stack tasks (~2,000 hours)</b> spanning front-end, back-end, and database systems. I optimized SQL queries, improved system performance, and delivered reliable solutions for business-critical workflows. I also performed <b>QA testing and debugging</b>, maintaining code integrity and preventing production issues.
          </Text>
          <br/>
          <Text>
            Collaboration was central to my approach. I worked closely with cross-functional teams to solve complex problems, gather requirements, and deliver projects on schedule. My strong communication skills allowed me to provide clear technical feedback and foster a productive, supportive team environment.
          </Text>
          <br/>
          <Image className="smallImage" src={fp}/>
          <Text>Key Achievements:</Text>
          <br/>
          <List
            spacing="xs"
            size="sm"
            style={{ marginBottom: 10 }}
          >
            <List.Item>Developed end-to-end enterprise applications using <b>C#/.NET, JavaScript (Ext JS / jQuery), Oracle SQL, and 4D</b>.</List.Item>
            <List.Item>Completed <b>240+ full-stack tasks (~2,000 hours)</b> across front-end, back-end, and database systems.</List.Item>
            <List.Item>Optimized SQL queries, improved system performance, and delivered reliable solutions for business-critical workflows.</List.Item>
            <List.Item>Conducted <b>QA testing and debugging</b> to maintain code integrity and prevent production issues.</List.Item>
          </List>
        </Paper>

        <Divider my="lg" />

        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Computer Vision Research Assistant | Utah State University, Logan, UT</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>January 2024 - May 2024</Text>

          <Text>
            I served as a computer vision research assistant under Dr. Brent Chamberlain, with guidance from CS department head Dr. Xiaojun Qi, to apply artificial intelligence for urban infrastructure analysis. Here, I developed automated pipelines to detect and map features such as curb ramps, pedestrian signs, and traffic light posts to assess city-level compliance with the <b>Americans with Disabilities Act (ADA)</b>.
          </Text>
          <br/>
          <Text>
            To do so, I leveraged <b>YOLOv8</b> and <b>Roboflow</b> for object detection, and I trained models on annotated datasets to accurately identify key infrastructure elements across multiple urban environments. Additionally, I implemented Python scripts to batch-download Google Street View imagery, to extract geospatial metadata, and to generate structured latitude/longitude datasets for further analysis. As a result, I produced city-scale visualizations and datasets that support actionable insights for ADA compliance evaluation.
          </Text>
          <br/>
          <Image className="mediumImage" src={boundingbox} alt="Bounding box detection example"/>
          <Text>Key Achievements:</Text>
          <br/>
          <List
            spacing="xs"
            size="sm"
            style={{ marginBottom: 10 }}
          >
            <List.Item>Applied <b>YOLOv8</b> and <b>Roboflow</b> to detect and classify urban infrastructure across multiple U.S. cities.</List.Item>
            <List.Item>Developed Python scripts to automate retrieval of Google Street View imagery and extract geospatial coordinates for mapping infrastructure.</List.Item>
            <List.Item>Generated structured datasets and visualizations to evaluate city-level <b>ADA compliance</b> and identify accessibility gaps.</List.Item>
          </List>
        </Paper>

        <Divider my="lg" />

        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Modern C++ Teaching Assistant | Utah State University, Logan, UT</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>August 2023 - December 2023</Text>

          <Text>
            I served as a Modern C++ Teaching Assistant for Dr. Dean Mathias to enhance the Modern C++ course curriculum. My responsibilities included developing student-facing documentation, researching emerging C++ features, and updating homework assignments to incorporate modern practices and prepare the course for future semesters.
          </Text>
          <br/>
          <Text>
            During this role, I conducted an in-depth evaluation of <b>C++ Modules</b> using the GCC compiler, identifying limitations in current compiler support. Afterwards, I provided actionable insights on the integration feasibility of modules into the course, balancing experimental features with teaching reliability.
          </Text>
          <br/>
          <Text>
            Finally, I designed and implemented a custom <b>std::vector</b> variant utilizing a bucket-based memory allocation system, which allocates memory in chunks rather than contiguous blocks. My goal was to create a rough-draft "proof-of-concept" future homework assignment, to assess vital C++ skills such as templates, iterators, and memory management. The source code is available <Link to="https://github.com/Tyler-Johnston/Bucket-Vector" target="_blank">here</Link>.
          </Text>
          <br/>
          <Image className="mediumImage" src={bucketvector} alt="Bucket vector implementation example"/>
          <Text>Key Achievements:</Text>
          <br/>
          <List
            spacing="xs"
            size="sm"
            style={{ marginBottom: 10 }}
          >
            <List.Item>Enhanced the Modern C++ course by drafting documentation, updating assignments, and researching new language features.</List.Item>
            <List.Item>Analyzed <b>C++ Modules</b> in GCC, identifying limitations and providing recommendations for safe curriculum integration.</List.Item>
            <List.Item>Developed a custom bucket-based <b>std::vector</b> demonstrating templates, iterators, and optimized memory allocation for large datasets.</List.Item>
            <List.Item>Produced educational resources and practical examples that highlight advanced C++ concepts for student learning.</List.Item>
          </List>
        </Paper>


        <Divider my="lg" />

        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Web Developer | Space Dynamics Laboratory (Remote)</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>March 2023 - June 2023</Text>

          <Text>
            I collaborated with Utah State University's Analytics Solutions Center to develop a full-stack web application for Space Dynamics Laboratory (SDL), aimed at modernizing workflows for proprietary software. I designed and implemented the front-end using <b>React.js</b> and <b>React-Flow</b> for interactive drag-and-drop process visualization, and developed the back-end in <b>C#/.NET</b> to connect with a <b>Docker</b> container for automated data extraction.
          </Text>
          <br/>
          <Text>
            Previously, SDL developers manually created and edited deeply nested XML documents, a process that was error-prone and inefficient. To resolve this, I developed <b>BlockBuilder</b>, enabling users to create, edit, and connect flow processes visually. With it, users are able to start a new process from scratch or upload/modify/tweak existing processes. Following which, they can export the results in <b>JSON or XML</b> formats for seamless integration with SDL's proprietary applications.
          </Text>
          <br/>
          <Image className="mediumImage" src={blockbuilder} alt="BlockBuilder interface"/>
          <Text>Key Achievements:</Text>
          <br/>
          <List
            spacing="xs"
            size="sm"
            style={{ marginBottom: 10 }}
          >
            <List.Item>Developed an interactive <b>drag-and-drop UI</b> using <b>React.js</b> and <b>React-Flow</b> to read, display, edit, and export JSON and XML data for SDL's proprietary software.</List.Item>
            <List.Item>Implemented a <b>C#/.NET back-end</b> that connected to a <b>Docker</b> image and transferred data to the front-end via RESTful API calls.</List.Item>
            <List.Item>Enabled clients to create flow processes from scratch or upload existing ones, edit or create new parameters, and export in <b>JSON or XML</b> formats for integration with SDL software.</List.Item>
            <List.Item>Streamlined development workflows, reducing errors and increasing productivity for SDL developers.</List.Item>
          </List>
        </Paper>


        <Group justify="center" mt="md">
        <Button component={Link} to="/" size="md">
          View About Me
        </Button>
        <Button component={Link} to="/portfolio" size="md">
          View Projects
        </Button>
      </Group>
      </Container>
    </>
  );
};

export default Experience;
