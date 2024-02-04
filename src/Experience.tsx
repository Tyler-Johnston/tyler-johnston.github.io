import { Container, Title, Paper, Text, List, ListItem, Image } from '@mantine/core';
import blockbuilder from "../images/blockbuilder.jpeg"
import "../styles.css"

const Experience = () => {
  return (
    <>
      <Container size="md" my={40}>
        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Computer Vision Research Assistant, Utah State University | Logan, UT</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>January 2024 - Present</Text>
          <List withPadding>
            <ListItem>Contributed to the development of AI detection algorithms for identifying urban infrastructure, enhancing maps and datasets for accessibility projects.</ListItem>
            <ListItem>Utilized Roboflow and YOLO computer vision software to improve object detection accuracy in urban environments.</ListItem>
          </List>
        </Paper>

        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Modern C++ Teaching Assistant, Utah State University | Logan, UT</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>August 2023 - December 2023</Text>
          <List withPadding>
            <ListItem>Engineered an innovative approach to std::vector, implementing buckets of data to optimize memory usage for an upcoming homework assignment.</ListItem>
            <ListItem>Explored and integrated new C++ features, such as Modules, enhancing the curriculum's relevance and applicability.</ListItem>
            <ListItem>Authored comprehensive documentation to streamline the learning process for students, covering compiler and virtual machine setup.</ListItem>
          </List>
        </Paper>

        <Paper p="md" my="lg" radius="md">
          <Title order={3}>Web Developer, Space Dynamics Laboratory | Remote</Title>
          <Text size="sm" style={{ marginBottom: 10 }}>March 2023 - June 2023</Text>
          <Text> Under the direction of Utah State University's Analytics Solutions Center, I assisted in the development of a custom web user-interface for Space Dynamics Laboratory (SDL). We utilized React.js for the front end, and C#/.NET for the backend. 
            I also leveraged Docker containers to streamline block data extraction, and I had the opportunity to design this web application using the Astro Space UX Design System.</Text>
          <br></br>
          <Text> Originally, for the development of their proprietary software, SDL required developers to hand-write and edit XML documents. As these were often nested and had several layers of parameters, this was incredibly tedious and error-prone. BlockBuilder allows developers to drag-and-drop blocks, connect them with each other, and edit their parameters in a clean user-interface. Afterwards, these processes can be exported in either JSON or XML format to be utilized in their proprietary applications</Text>
          <br></br>
          <Text>I had the opportunity to present my work at SDL. Meeting with developers who would be impacted by our work was incredibly rewarding. They told us this would be extremely helpful in reducing bugs and increasing productivity.</Text>
          {/* <List withPadding>
            <ListItem>Developed a React.js/.NET based drag-and-drop interface, solving complex XML sheet generation challenges with an error-resistant solution.</ListItem>
            <ListItem>Leveraged Docker to streamline data extraction and processing workflows, improving efficiency in block information management.</ListItem>
            <ListItem>Enhanced user interface aesthetics and usability by adopting the Astro Space UX Design System, ensuring a cohesive and engaging user experience.</ListItem>
          </List> */}
          <Image className="mediumImage" src={blockbuilder}/>
        </Paper>
      </Container>
    </>
  );
};

export default Experience;
