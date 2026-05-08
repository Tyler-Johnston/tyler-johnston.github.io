import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  SimpleGrid,
  Box,
  Image,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { IconArrowRight } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { flagshipProjects } from '../data/projects';
import { FlagshipCard } from '../components/ui/FlagshipCard';
import { headshot } from '../data/imageAssets';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const quickFacts = [
  { label: 'Professional experience', value: '2 years' },
  { label: 'Based in', value: 'Lisbon, Portugal' },
  { label: 'Language', value: 'Portuguese B1' },
  { label: 'Study', value: 'NOVA IMS MSc' },
];

const focusAreas = [
  {
    title: 'Production software',
    detail: 'C#/.NET, REST APIs, JavaScript/TypeScript, Oracle SQL, QA ownership, and release support.',
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
            className="landing-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.1fr) minmax(380px, 0.9fr)',
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
                  className="landing-hero-title"
                  style={{
                    fontSize: 'clamp(2rem, 8.5vw, 4.8rem)',
                    lineHeight: 1.02,
                    letterSpacing: '-0.05em',
                  }}
                >
                  Full-stack developer building production software, data tools, and game systems.
                </Title>

                <motion.div {...fadeUp(0.06)}>
                  <Box className="landing-hero-image-mobile">
                    <Box
                      style={{
                        padding: '10px',
                        borderRadius: 22,
                        border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.03), transparent 100%)',
                      }}
                    >
                      <Box
                        style={{
                          overflow: 'hidden',
                          borderRadius: 18,
                          border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                        }}
                      >
                        <Image
                          src={headshot}
                          alt="Tyler Johnston"
                          fallbackSrc="https://placehold.co/600x720/141a1e/f5a623?text=Tyler+Johnston"
                        />
                      </Box>
                    </Box>
                  </Box>
                </motion.div>

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
              <Box
                className="landing-hero-image-desktop"
                style={{
                  padding: '22px',
                  borderRadius: 28,
                  border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.03), transparent 100%)',
                }}
              >
                <Box
                  style={{
                    overflow: 'hidden',
                    borderRadius: 22,
                    border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                  }}
                >
                  <Image
                    src={headshot}
                    alt="Tyler Johnston"
                    fallbackSrc="https://placehold.co/600x720/141a1e/f5a623?text=Tyler+Johnston"
                  />
                </Box>
              </Box>
            </motion.div>
          </Box>

          <Box
            className="landing-facts"
            mt={44}
            pt={24}
            style={{
              borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
              borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
            }}
          >
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={0}>
              {quickFacts.map((fact, i) => (
                <Box
                  className="landing-fact"
                  key={fact.label}
                  style={{
                    padding: '6px 18px 22px',
                    borderRight:
                      i < quickFacts.length - 1
                        ? '1px solid light-dark(var(--mantine-color-gray-2), #273138)'
                        : 'none',
                  }}
                >
                  <Text size="xs" tt="uppercase" fw={700} c="dimmed" style={{ letterSpacing: '0.12em' }}>
                    {fact.label}
                  </Text>
                  <Text fw={800} size="lg" mt={6}>
                    {fact.value}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

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
                What I bring
              </Text>
              <Title order={2} style={{ fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', fontWeight: 800 }}>
                The kind of work I do well
              </Title>
            </Stack>
          </motion.div>

          <Stack gap={0}>
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
              >
                <Box
                  py={22}
                  style={{
                    borderTop: i === 0 ? '1px solid light-dark(var(--mantine-color-gray-2), #273138)' : undefined,
                    borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
                  }}
                >
                  <Group align="flex-start" gap={28} wrap="nowrap">
                    <Text fw={800} size="lg" style={{ minWidth: 180 }}>
                      {area.title}
                    </Text>
                    <Text size="md" c="dimmed" lh={1.7}>
                      {area.detail}
                    </Text>
                  </Group>
                </Box>
              </motion.div>
            ))}
          </Stack>
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
                Featured Projects
              </Text>
              <Title order={2} style={{ fontSize: 'clamp(1.7rem, 4vw, 2.2rem)', fontWeight: 800 }}>
                My best work
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
            See All Projects
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
