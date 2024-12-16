import { Container, Title, Paper, Text, Image } from '@mantine/core';
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
        <Text size="sm" style={{ marginBottom: 10 }}>March 2024 - Present</Text>
        <Text>I work as a full-stack developer, contributing to both the front-end and back-end of applications used by engineering teams in the aerospace and steel manufacturing industries. These applications are designed to help users plan, organize, and track critical workflows, ensuring efficiency and precision in highly technical environments.</Text>
        <br/>
        <Text>On the back end, I use .NET (C#) with .ashx handler files, AJAX calls, and Oracle SQL, leveraging SQL Developer for database management. On the front end, I utilize JavaScript frameworks such as Ext JS and jQuery to build responsive user interfaces that interact seamlessly with the backend systems.</Text>
        <br/>
        <Text>In addition to development tasks, I frequently perform Quality Assurance (QA) checks to ensure the validity and correctness of the code produced by myself and other developers. This includes debugging, optimizing performance, and adhering to coding standards to maintain high-quality deliverables for clients.</Text>
        <br/>
        <Text>Collaboration is an integral part of my role, as I work closely with a team of developers to solve complex problems and deliver projects on schedule. My strong communication skills allow me to effectively discuss technical details, gather requirements, and provide feedback, fostering a productive and supportive team environment.</Text>
        <br/>
        <Image className="smallImage" src={fp}/>
    </Paper>


        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Computer Vision Research Assistant, Utah State University | Logan, UT</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>January 2024 - May 2024</Text>
          <Text>I worked as a computer vision research assistant for Dr. Brent Chamberlain with assistance from CS department head Dr. Xiaojun Qi. I utilized artificial intelligence to detect urban infrastructure such as curb ramps, pedestrian signs, traffic light posts, among others for the purpose of verifying a city's ADA (The Americans with Disabilities Act) compliance.</Text>
          <br/>
          <Text>I utilized YOLOv8 and Roboflow - two advanced computer vision software packages - to detect such urban infrastructure. I also developed Python scripts to download Google Street View images and to generate latitude/longitude data. This is used to generate maps and datasets of a city's urban infrastructure.</Text>
          <Image className="mediumImage" src={boundingbox}/>
        </Paper>

        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Modern C++ Teaching Assistant, Utah State University | Logan, UT</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>August 2023 - December 2023</Text>
          <Text>I had the opportunity to work with Dr. Dean Mathias to improve the quality of his Modern C++ course as a Teaching Assistant. I was tasked with drafting documentation for students, researching new C++ features to be introduced to the course, and modifying previous homework assignments to incorporate new ideas which may be expanded upon in future semesters.</Text>
          <br/>
          <Text>For instance, in my exploration of C++ Modules with the GCC compiler, I discovered their current limitations within this compiler's context. Although promising, C++ Modules are yet to reach a level of reliability and effectiveness necessary for integration into the curriculum of the Modern C++ course as a standard practice.</Text>
          <br/>
          <Text>I also created a custom std::vector implementation which differs from the typical std::vector by using a bucket system, which allocates memory in chunks (buckets) rather than a contiguous block. This can improve memory management efficiency, especially for large datasets, by reducing the need for frequent reallocations and memory copies during insertions and deletions. The bucket-version also demonstrates advanced C++ concepts like templates, iterators, and memory management. The source code can be viewed <Link to="https://github.com/Tyler-Johnston/Bucket-Vector" target="_blank">here</Link>.</Text>
          <Image className="mediumImage" src={bucketvector}/>

        </Paper>

        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Web Developer, Space Dynamics Laboratory | Remote</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>March 2023 - June 2023</Text>
          <Text> Under the direction of Utah State University's Analytics Solutions Center, I assisted in the development of a custom web user-interface for Space Dynamics Laboratory (SDL). We utilized React.js for the front end, and C#/.NET for the backend. 
            I also leveraged Docker containers to streamline block data extraction, and I had the opportunity to design this web application using the Astro Space UX Design System.</Text>
          <br/>
          <Text>Originally, for the development of their proprietary software, SDL required developers to hand-write and edit XML documents. As these were often nested and had several layers of parameters, this was incredibly tedious and error-prone. BlockBuilder allows developers to drag-and-drop blocks, connect them with each other, and edit their parameters in a clean user-interface. Afterwards, these processes can be exported in either JSON or XML format to be utilized in their proprietary applications</Text>
          <br/>
          <Text>I had the opportunity to present my work at SDL. Meeting with developers who would be impacted by our work was incredibly rewarding. They told us this would be extremely helpful in reducing bugs and increasing productivity.</Text>
          <Image className="mediumImage" src={blockbuilder}/>
        </Paper>
      </Container>
    </>
  );
};

export default Experience;
