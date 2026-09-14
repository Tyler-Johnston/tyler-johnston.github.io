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

const quickFacts = [
  { label: 'Currently', value: 'VML Portugal' },
  { label: 'Based in', value: 'Porto, Portugal' },
  { label: 'Language', value: 'Portuguese B1' },
  { label: 'Study', value: 'NOVA IMS MSc' },
];

const focusAreas = [
  {
    title: 'Software people rely on',
    detail: 'Full-stack systems, APIs, data flows, and the testing needed to ship them.',
  },
  {
    title: 'Tools that make data clearer',
    detail: 'Dashboards, analysis workflows, and decision-support tools built from messy real-world data.',
  },
  {
    title: 'Interactive systems with depth',
    detail: 'Games, simulations, and learning tools where rules, feedback, and progression matter.',
  },
];

export function Landing() {
  return (
    <Box>
      <Box py={{ base: 48, md: 72 }}>
        <Container size="lg">
          <Box
            className="landing-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.1fr) minmax(380px, 0.9fr)',
              gap: '52px',
              alignItems: 'stretch',
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  maxWidth: 720,
                }}
              >
                <Stack gap="lg">
                  <Text size="sm" c="dimmed">
                    Porto, Portugal
                  </Text>

                  <Title
                    order={1}
                    className="landing-hero-title"
                    style={{
                      fontSize: 'clamp(2rem, 6vw, 3.6rem)',
                      lineHeight: 1.08,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    Full-stack developer building production software, data tools, and game systems.
                  </Title>

                  <Box className="landing-hero-image-mobile">
                    <Box
                      style={{
                        padding: '8px',
                        borderRadius: 6,
                        border: '1px solid var(--line)',
                        background: 'var(--surface)',
                      }}
                    >
                      <Box
                        style={{
                          overflow: 'hidden',
                          borderRadius: 3,
                          border: '1px solid var(--line)',
                        }}
                      >
                        <Image
                          src={headshot}
                          alt="Tyler Johnston"
                          fallbackSrc="https://placehold.co/600x720/1b1f25/3e7cb1?text=Tyler+Johnston"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Stack>

                <Stack gap="lg">
                  <Text size="lg" c="dimmed" maw={720} lh={1.8}>
                    I’m Tyler Johnston, a full-stack developer based in Porto. I build client-facing
                    applications, backend services, data tools, and workflow systems using C#/.NET,
                    TypeScript, Python, and SQL.
                  </Text>

                  <Group gap="sm" wrap="wrap">
                    <Button
                      component={Link}
                      to="/projects"
                      size="md"
                      color="accent"
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
                      color="accent"
                    >
                      Download CV
                    </Button>
                  </Group>
                </Stack>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              <Box
                className="landing-hero-image-desktop"
                style={{
                  padding: '16px',
                  borderRadius: 8,
                  border: '1px solid var(--line)',
                  background: 'var(--surface)',
                }}
              >
                <Box
                  style={{
                    overflow: 'hidden',
                    borderRadius: 4,
                    border: '1px solid var(--line)',
                  }}
                >
                  <Image
                    src={headshot}
                    alt="Tyler Johnston"
                    fallbackSrc="https://placehold.co/600x720/1b1f25/3e7cb1?text=Tyler+Johnston"
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
              borderTop: '1px solid var(--line)',
            }}
          >
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={0}>
              {quickFacts.map((fact, i) => (
                <Box
                  className="landing-fact"
                  key={fact.label}
                  style={{
                    padding: '6px 18px 22px',
                    borderRight: i < quickFacts.length - 1 ? '1px solid var(--line)' : 'none',
                  }}
                >
                  <Text size="sm" c="dimmed">
                    {fact.label}
                  </Text>
                  <Text fw={700} size="lg" mt={6}>
                    {fact.value}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Container>
      </Box>

      <Box py={64}>
        <Container size="lg">
          <Title order={2} mb={40} style={{ fontSize: 'clamp(1.7rem, 4vw, 2.3rem)', fontWeight: 700 }}>
            What I build
          </Title>

          <Stack gap={0}>
            {focusAreas.map((area, i) => (
              <Box
                key={area.title}
                py={22}
                style={{
                  borderTop: i === 0 ? '1px solid var(--line)' : undefined,
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <Group align="flex-start" gap={28} wrap="wrap">
                  <Text fw={700} style={{ minWidth: 240, fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', lineHeight: 1.25 }}>
                    {area.title}
                  </Text>
                  <Text size="md" c="dimmed" lh={1.7}>
                    {area.detail}
                  </Text>
                </Group>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      <Container size="lg" py={64}>
        <Title order={2} mb={32} style={{ fontSize: 'clamp(1.7rem, 4vw, 2.2rem)', fontWeight: 700 }}>
          My best work
        </Title>

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
            color="accent"
            rightSection={<IconArrowRight size={16} />}
          >
            See All Projects
          </Button>
        </Group>
      </Container>
    </Box>
  );
}
