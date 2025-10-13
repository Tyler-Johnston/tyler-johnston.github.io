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
          <Title order={3}>Full-Stack Developer | Logan, UT</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>March 2024 - August 2025</Text>

          <Text>
            I worked as a full-stack developer where I designed and implemented applications for engineering teams in the aerospace and steel manufacturing industries. My work focused on creating tools that help users plan, organize, and track critical workflows, ensuring efficiency and precision in highly technical environments.
          </Text>
          <br/>
          <Text>
            On the back end, I leveraged <b>C#/.NET</b>, <b>AJAX</b>, and <b>Oracle SQL</b>, using SQL Developer for database management. On the front end, I built responsive, interactive interfaces with JavaScript frameworks such as <b>Ext JS</b> and <b>jQuery</b>, ensuring seamless integration with backend systems. Additionally, I worked in <b>4D programming language</b> in-depth, contributing to end-to-end enterprise applications that utilize this technology.
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
            Served as a computer vision research assistant under Dr. Brent Chamberlain, with guidance from CS department head Dr. Xiaojun Qi, to apply artificial intelligence for urban infrastructure analysis. Developed automated pipelines to detect and map features such as curb ramps, pedestrian signs, and traffic light posts to assess city-level compliance with the <b>Americans with Disabilities Act (ADA)</b>.
          </Text>
          <br/>
          <Text>
            Leveraged <b>YOLOv8</b> and <b>Roboflow</b> for object detection, training models on annotated datasets to accurately identify key infrastructure elements across multiple urban environments. Implemented Python scripts to batch-download Google Street View imagery, extract geospatial metadata, and generate structured latitude/longitude datasets for further analysis. Produced city-scale visualizations and datasets that support actionable insights for ADA compliance evaluation.
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
            Served as a Teaching Assistant for Dr. Dean Mathias to enhance the Modern C++ course curriculum. Responsibilities included developing student-facing documentation, researching emerging C++ features, and updating homework assignments to incorporate modern practices and prepare the course for future semesters.
          </Text>
          <br/>
          <Text>
            Conducted an in-depth evaluation of <b>C++ Modules</b> using the GCC compiler, identifying limitations in current compiler support. Provided actionable insights on the integration feasibility of modules into the course, balancing experimental features with teaching reliability.
          </Text>
          <br/>
          <Text>
            Designed and implemented a custom <b>std::vector</b> variant utilizing a bucket-based memory allocation system, which allocates memory in chunks rather than contiguous blocks. This approach demonstrates advanced C++ concepts including templates, iterators, and memory management while improving insertion/deletion efficiency for large datasets. The source code is available <Link to="https://github.com/Tyler-Johnston/Bucket-Vector" target="_blank">here</Link>.
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
            Collaborated with Utah State University's Analytics Solutions Center to develop a full-stack web application for Space Dynamics Laboratory (SDL), aimed at modernizing workflows for proprietary software. Designed and implemented the front-end using <b>React.js</b> and <b>React-Flow</b> for interactive drag-and-drop process visualization, and developed the back-end in <b>C#/.NET</b> to connect with a <b>Docker</b> container for automated data extraction.
          </Text>
          <br/>
          <Text>
            Previously, SDL developers manually created and edited deeply nested XML documents, a process that was error-prone and inefficient. Developed <b>BlockBuilder</b>, enabling users to create, edit, and connect flow processes visually. Users can start from scratch or upload existing processes, modify or add parameters, and export the results in <b>JSON or XML</b> formats for seamless integration with SDL's proprietary applications.
          </Text>
          <br/>
          <Text>
            Presented the application to SDL developers, receiving feedback on its usability and effectiveness in reducing errors, streamlining workflows, and improving overall productivity.
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
        <Button component={Link} to="/portfolio" size="md" variant="outline">
          View Portfolio
        </Button>
      </Group>
      </Container>
    </>
  );
};

export default Experience;
