import {
  Container,
  Title,
  Text,
  Image,
  Button,
  Group,
  Box,
  Badge,
  Stack,
  SimpleGrid,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { FaUser, FaReact } from 'react-icons/fa';
import blockbuilder from '../images/blockbuilder.jpeg';
import bucketvector from '../images/bucketvector.png';
import boundingbox from '../images/boundingbox.png';
import fp from '../images/footprints.png';
import '../styles.css';

/* ── Shared accent colours per role ── */
const roles = [
  {
    title: 'Full-Stack Developer',
    org: 'Footprints, Inc.',
    dates: 'Mar 2024 – Aug 2025',
    color: 'blue',
    image: fp,
    imageAlt: 'Footprints dashboard example',
    paragraphs: [
      <>
        Designed and implemented enterprise applications for engineering teams in
        the <b>aerospace</b> and <b>steel manufacturing</b> industries —
        tools that help users plan, organize, and track mission-critical
        workflows with precision and reliability.
      </>,
      <>
        Developed with <b>C#/.NET</b>, <b>AJAX</b>, and <b>Oracle SQL</b> on
        the back end, and <b>JavaScript</b> (Ext JS / jQuery) on the front end.
        Also worked extensively with the <b>4D programming language</b>,
        supporting legacy systems that integrate with modern web interfaces.
      </>,
      <>
        Completed <b>240+ full-stack tasks (~2,000 hours)</b>, optimizing SQL
        queries, improving system performance, and ensuring robust quality
        assurance across the product line.
      </>,
    ],
    highlights: [
      'Enterprise apps with C#/.NET, JavaScript (Ext JS/jQuery), Oracle SQL, and 4D',
      '240+ full-stack tasks improving reliability and performance in production',
      'Optimized SQL queries and streamlined data retrieval pipelines',
      'QA testing, debugging, and production-level bug prevention',
    ],
  },
  {
    title: 'Computer Vision Research Assistant',
    org: 'Utah State University',
    dates: 'Jan 2024 – May 2024',
    color: 'teal',
    image: boundingbox,
    imageAlt: 'Bounding box detection example',
    paragraphs: [
      <>
        Collaborated with Dr. Brent Chamberlain and Dr. Xiaojun Qi on an
        AI-driven urban accessibility project, developing pipelines to detect
        and map infrastructure features for evaluating <b>ADA</b> compliance at
        city scale.
      </>,
      <>
        Using <b>YOLOv8</b> and <b>Roboflow</b>, trained models to detect curb
        ramps, pedestrian signs, and traffic lights from{' '}
        <b>Google Street View</b> imagery. Automated image downloads, extracted
        GPS metadata, and built geospatial datasets for visualization and
        compliance analysis.
      </>,
    ],
    highlights: [
      'YOLOv8 + Roboflow to classify infrastructure across U.S. cities',
      'Automated data retrieval and metadata extraction from Google Street View',
      'Produced datasets and heatmaps for ADA compliance evaluation',
    ],
  },
  {
    title: 'Modern C++ Teaching Assistant',
    org: 'Utah State University',
    dates: 'Aug 2023 – Dec 2023',
    color: 'violet',
    image: bucketvector,
    imageAlt: 'Bucket vector implementation example',
    paragraphs: [
      <>
        Supported Dr. Dean Mathias in refining the <b>Modern C++</b> curriculum
        through updated documentation, assignment design, and research into
        emerging C++ features.
      </>,
      <>
        Conducted evaluations of <b>C++ Modules</b> with GCC, providing
        feedback on adoption feasibility. Designed a custom{' '}
        <b>bucket-based std::vector</b> that optimizes memory allocation for
        large datasets.{' '}
        <Text
          component="a"
          href="https://github.com/Tyler-Johnston/Bucket-Vector"
          target="_blank"
          rel="noopener noreferrer"
          c="blue.4"
          td="underline"
          inherit
        >
          View the prototype →
        </Text>
      </>,
    ],
    highlights: [
      'Enhanced the Modern C++ course with new materials and documentation',
      'Analyzed C++ Modules and recommended safe curriculum integration',
      'Developed a bucket-based std::vector demonstrating templates and iterators',
    ],
  },
  {
    title: 'Web Developer',
    org: 'Space Dynamics Laboratory',
    dates: 'Mar 2023 – Jun 2023',
    color: 'cyan',
    image: blockbuilder,
    imageAlt: 'BlockBuilder interface',
    paragraphs: [
      <>
        Developed <b>BlockBuilder</b>, a full-stack web application that
        modernizes XML workflow editing for Space Dynamics Laboratory.
        Implemented the front end with <b>React.js</b> and <b>React Flow</b>{' '}
        for drag-and-drop visualization, backed by a <b>C#/.NET</b> API
        interfacing with <b>Docker</b> containers.
      </>,
      <>
        Replaced manual XML editing with a visual process designer, allowing
        users to upload, modify, and export configurations in <b>JSON</b> or{' '}
        <b>XML</b> — significantly reducing errors and improving developer
        productivity.
      </>,
    ],
    highlights: [
      'Interactive drag-and-drop UI using React.js and React Flow',
      'C#/.NET backend integrated with Docker containers',
      'Import/export of JSON and XML configurations for SDL software',
      'Streamlined workflows, reducing XML-related errors',
    ],
  },
];

/* ── Single role card ── */
function RoleCard({
  role,
  index,
}: {
  role: (typeof roles)[number];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <Box
      py="xl"
      style={{
        borderLeft: `3px solid var(--mantine-color-${role.color}-7)`,
        paddingLeft: 'var(--mantine-spacing-lg)',
        position: 'relative',
      }}
    >
      {/* ── timeline dot ── */}
      <Box
        style={{
          position: 'absolute',
          left: -7,
          top: 28,
          width: 11,
          height: 11,
          borderRadius: '50%',
          backgroundColor: `var(--mantine-color-${role.color}-5)`,
          border: '2px solid var(--mantine-color-dark-7)',
        }}
      />

      {/* ── header row ── */}
      <Group gap="sm" mb={4} wrap="wrap">
        <Badge variant="light" color={role.color} size="sm" radius="sm">
          {role.dates}
        </Badge>
        <Badge variant="dot" color={role.color} size="sm">
          {role.org}
        </Badge>
      </Group>

      <Title order={3} mb="sm" c="gray.1" lh={1.3}>
        {role.title}
      </Title>

      {/* ── body text ── */}
      <Stack gap="xs" mb="lg">
        {role.paragraphs.map((p, i) => (
          <Text key={i} size="sm" c="gray.4" lh={1.75}>
            {p}
          </Text>
        ))}
      </Stack>

      {/* ── image + highlights side-by-side on larger screens ── */}
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing="lg"
        style={{ alignItems: 'start' }}
      >
        <Box
          style={{
            borderRadius: 'var(--mantine-radius-md)',
            overflow: 'hidden',
            order: isEven ? 1 : 2,
          }}
        >
          <Image
            src={role.image}
            alt={role.imageAlt}
            radius="md"
            style={{
              border: '1px solid var(--mantine-color-dark-4)',
            }}
          />
        </Box>

        <Box style={{ order: isEven ? 2 : 1 }}>
          <Text
            size="xs"
            fw={600}
            c={`${role.color}.4`}
            tt="uppercase"
            mb="xs"
          >
            Key contributions
          </Text>
          <Stack gap={8}>
            {role.highlights.map((h, i) => (
              <Group key={i} gap="xs" wrap="nowrap" align="flex-start">
                <Box
                  mt={7}
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    backgroundColor: `var(--mantine-color-${role.color}-6)`,
                    flexShrink: 0,
                  }}
                />
                <Text size="sm" c="gray.4" lh={1.6}>
                  {h}
                </Text>
              </Group>
            ))}
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

/* ── Page ── */
const Experience = () => {
  return (
    <Container size="md" my={40}>
      {/* ── Page header ── */}
      <Box mb="xl">
        <Title order={1} c="blue.6" mb={4}>
          Experience
        </Title>
        <Text size="md" c="dimmed">
          A timeline of professional roles spanning full-stack development,
          computer vision research, curriculum design, and aerospace tooling.
        </Text>
      </Box>

      {/* ── Timeline ── */}
      <Stack gap={0}>
        {roles.map((role, i) => (
          <RoleCard key={role.title} role={role} index={i} />
        ))}
      </Stack>

      {/* ── Footer nav ── */}
      <Group justify="center" mt={48}>
        <Button
          component={Link}
          to="/"
          size="md"
          leftSection={<FaUser size={14} />}
          variant="light"
        >
          About Me
        </Button>
        <Button
          component={Link}
          to="/portfolio"
          size="md"
          leftSection={<FaReact size={14} />}
          variant="filled"
        >
          Projects
        </Button>
      </Group>
    </Container>
  );
};

export default Experience;
