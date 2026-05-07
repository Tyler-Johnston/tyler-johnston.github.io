import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  SimpleGrid,
  Box,
  Card,
  Image,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconArrowRight,
  IconBriefcase,
  IconLanguage,
  IconMapPin,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { flagshipProjects } from '../data/projects';
import { FlagshipCard } from '../components/ui/FlagshipCard';
import { headshot } from '../data/imageAssets';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const stats = [
  { label: 'Professional experience', value: '2 years', icon: IconBriefcase },
  { label: 'Language level', value: 'Portuguese B1', icon: IconLanguage },
  { label: 'Base', value: 'Lisbon, Portugal', icon: IconMapPin },
];

const focusAreas = [
  {
    title: 'Production software',
    detail: 'C#/.NET, REST APIs, JavaScript, Oracle SQL, QA ownership, and release support.',
  },
  {
    title: 'Data & BI',
    detail: 'Python, Pandas, Plotly, Power BI, Microsoft Fabric, geospatial analysis, and ML workflows.',
  },
  {
    title: 'Interactive systems',
    detail: 'React, Angular 17+, Godot 4, React Flow, IndexedDB, and simulation-driven design.',
  },
];

export function Landing() {
  return (
    <Box>
      <Box py={{ base: 56, md: 88 }}>
        <Container size="lg">
          <Box
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.2fr) minmax(340px, 0.8fr)',
              gap: '52px',
              alignItems: 'start',
            }}
          >
            <motion.div {...fadeUp(0)}>
              <Stack gap="lg" style={{ maxWidth: 720 }}>
                <Text
                  size="xs"
                  tt="uppercase"
                  fw={700}
                  c="orange"
                  style={{ letterSpacing: '0.16em' }}
                >
                  Lisbon, Portugal
                </Text>

                <Title
                  order={1}
                  style={{
                    fontSize: 'clamp(2.8rem, 7vw, 4.8rem)',
                    lineHeight: 1.02,
                    letterSpacing: '-0.05em',
                  }}
                >
                  Full-stack developer building production software, data tools, and game systems.
                </Title>

                <Text size="lg" c="dimmed" maw={720} lh={1.8}>
                  I’m Tyler Johnston, a full-stack developer in Lisbon with 2 years of professional experience
                  building production workflow applications in C#/.NET, JavaScript/TypeScript, and
                  Oracle SQL.
                </Text>

                <Group gap="sm" wrap="wrap">
                  <Button
                    component={Link}
                    to="/projects"
                    size="md"
                    color="orange"
                    rightSection={<IconArrowRight size={16} />}
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    See All Projects
                  </Button>
                  <Button
                    component="a"
                    href="/cv.pdf"
                    target="_blank"
                    size="md"
                    variant="outline"
                    color="orange"
                  >
                    Download CV
                  </Button>
                </Group>
              </Stack>
            </motion.div>

            <motion.div {...fadeUp(0.08)}>
              <Card
                p="xl"
                style={{
                  border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                  background: 'light-dark(var(--mantine-color-white), #141a1e)',
                }}
              >
                <Box
                  style={{
                    overflow: 'hidden',
                    borderRadius: 20,
                    border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                  }}
                >
                  <Image
                    src={headshot}
                    alt="Tyler Johnston"
                    fallbackSrc="https://placehold.co/600x720/141a1e/f5a623?text=Tyler+Johnston"
                  />
                </Box>
              </Card>
            </motion.div>
          </Box>
        </Container>
      </Box>

      <Container size="lg" pb={80}>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <Card
                p="lg"
                className="skill-tile"
                style={{
                  border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                  background: 'light-dark(var(--mantine-color-white), #141a1e)',
                }}
              >
                <stat.icon size={18} color="var(--mantine-color-orange-6)" />
                <Text fw={800} size="lg" mt="sm">
                  {stat.value}
                </Text>
                <Text size="xs" c="dimmed" tt="uppercase" style={{ letterSpacing: '0.08em' }}>
                  {stat.label}
                </Text>
              </Card>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      <Box
        py={84}
        style={{
          borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
          borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
          background: 'linear-gradient(180deg, transparent 0%, rgba(245, 158, 11, 0.04) 100%)',
        }}
      >
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Stack gap={4} mb={40}>
              <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
                Focus
              </Text>
              <Title order={2} style={{ fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', fontWeight: 800 }}>
                What I spend my time on
              </Title>
            </Stack>
          </motion.div>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <Card
                  className="about-tile"
                  style={{
                    border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                    background: 'light-dark(var(--mantine-color-white), #141a1e)',
                    height: '100%',
                  }}
                >
                  <Text fw={700} mb="sm">
                    {area.title}
                  </Text>
                  <Text size="sm" c="dimmed" lh={1.7}>
                    {area.detail}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      <Container size="lg" py={80}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Stack gap={4} mb={32}>
            <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
              Selected Work
            </Text>
            <Title order={2} style={{ fontSize: 'clamp(1.7rem, 4vw, 2.2rem)', fontWeight: 800 }}>
              Projects I care about most
            </Title>
          </Stack>
        </motion.div>

        <Stack gap="xl">
          {flagshipProjects.map((project, i) => (
            <FlagshipCard key={project.id} project={project} reverse={i % 2 !== 0} />
          ))}
        </Stack>

        <Group justify="center" mt={48}>
          <Button
            component={Link}
            to="/projects"
            variant="outline"
            color="orange"
            rightSection={<IconArrowRight size={16} />}
          >
            See All Selected Projects
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
