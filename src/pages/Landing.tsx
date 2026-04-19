import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  SimpleGrid,
  Box,
  ThemeIcon,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconCode,
  IconDatabase,
  IconDeviceGamepad2,
  IconArrowRight,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { flagshipProjects } from '../data/projects';
import { FlagshipCard } from '../components/ui/FlagshipCard';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay },
});

const skills = [
  {
    icon: IconCode,
    label: 'Full-Stack Web',
    detail: 'React, Angular, C#/.NET, Node.js',
    color: 'indigo',
  },
  {
    icon: IconDatabase,
    label: 'Data & ML',
    detail: 'Python, Pandas, PyTorch, Oracle SQL',
    color: 'cyan',
  },
  {
    icon: IconDeviceGamepad2,
    label: 'Game Development',
    detail: 'C#, Godot 4, AI systems, Pixel Art',
    color: 'violet',
  },
];

export function Landing() {
  const isDark = true;


  return (
    <Box>
      {/* Hero */}
      <Box
        py={100}
        style={{
          background: isDark
            ? 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.15) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(79,70,229,0.08) 0%, transparent 60%)',
        }}
      >
        <Container size="md">
          <Stack align="center" gap="xl" ta="center">
            <motion.div {...fadeUp(0)}>
              <Text
                size="sm"
                tt="uppercase"
                fw={700}
                c="indigo"
                style={{ letterSpacing: '0.12em' }}
              >
                Full Stack Developer
              </Text>
            </motion.div>

            <motion.div {...fadeUp(0.1)}>
              <Title
                order={1}
                style={{
                  fontSize: 'clamp(2.4rem, 6vw, 4rem)',
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                }}
              >
                Tyler Johnston
              </Title>
            </motion.div>

            <motion.div {...fadeUp(0.2)}>
              <Text
                size="lg"
                c="dimmed"
                maw={560}
                lh={1.7}
              >
                American programmer based in Lisbon, Portugal. Currently pursuing a Master's in Information Management at Nova University. Building web apps, games, and data tools with C#, TypeScript, and Python.
              </Text>
            </motion.div>

            <motion.div {...fadeUp(0.3)}>
              <Group gap="sm" justify="center" wrap="wrap">
                <Button
                  component={Link}
                  to="/projects"
                  size="md"
                  color="indigo"
                  rightSection={<IconArrowRight size={16} />}
                >
                  View Projects
                </Button>
                <Button
                  component="a"
                  href="/cv.pdf"
                  target="_blank"
                  size="md"
                  variant="outline"
                  color="indigo"
                >
                  Download CV
                </Button>
              </Group>
            </motion.div>
          </Stack>
        </Container>
      </Box>

      {/* Skills snapshot */}
      <Container size="lg" pb={80}>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Box
                p="lg"
                style={{
                  border: `1px solid ${isDark ? '#2e3347' : 'var(--mantine-color-gray-3)'}`,
                  borderRadius: 14,
                  background: isDark ? '#1a1d27' : '#ffffff',
                  transition: 'box-shadow 0.2s ease',
                }}
                className="skill-tile"
              >
                <ThemeIcon color={skill.color} variant="light" size="lg" radius="md" mb="sm">
                  <skill.icon size={20} />
                </ThemeIcon>
                <Text fw={600} size="sm" mb={4}>
                  {skill.label}
                </Text>
                <Text size="xs" c="dimmed">
                  {skill.detail}
                </Text>
              </Box>
            </motion.div>
          ))}
        </SimpleGrid>
      </Container>

      {/* Featured Projects */}
      <Box
        py={80}
        style={{
          background: isDark ? '#0f1117' : '#f8fafc',
          borderTop: `1px solid ${isDark ? '#2e3347' : 'var(--mantine-color-gray-2)'}`,
          borderBottom: `1px solid ${isDark ? '#2e3347' : 'var(--mantine-color-gray-2)'}`,
        }}
      >
        <Container size="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Stack gap={4} mb={48} align="center" ta="center">
              <Text
                size="xs"
                tt="uppercase"
                fw={700}
                c="indigo"
                style={{ letterSpacing: '0.12em' }}
              >
                Flagship Projects
              </Text>
              <Title order={2} style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)', fontWeight: 800 }}>
                Things I'm most proud of
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
              color="indigo"
              rightSection={<IconArrowRight size={16} />}
            >
              View All Projects
            </Button>
          </Group>
        </Container>
      </Box>
    </Box>
  );
}
