import {
  Container,
  Title,
  Text,
  Group,
  Stack,
  SimpleGrid,
  Card,
  Button,
  Box,
  Image,
  ThemeIcon,
  List,
  useMantineColorScheme,
  Anchor,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconBriefcase,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconSchool,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { headshot } from '../data/imageAssets';
import { TechBadge } from '../components/ui/TechBadge';

const languages = ['C#', 'TypeScript', 'JavaScript', 'Python', 'C++', 'SQL', 'HTML/CSS'];
const frameworks = ['React', 'Angular', '.NET', 'Node.js', 'Godot 4', 'PyTorch', 'Pandas'];
const tools = ['Docker', 'Git', 'Oracle SQL', 'Power BI', 'Roboflow', 'Vite', 'IndexedDB'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

export function About() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Container size="lg" py={60}>
      {/* Header */}
      <motion.div {...fadeUp(0)}>
        <Stack gap={4} mb={60}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            About
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900 }}>
            Tyler Johnston
          </Title>
        </Stack>
      </motion.div>

      {/* Bio + photo */}
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={48} mb={80} style={{ alignItems: 'start' }}>
        <motion.div {...fadeUp(0.1)}>
          <Stack gap="lg">
            <Text size="md" lh={1.8} c="dimmed">
              I'm a full-stack software engineer completing my M.S. in Information Management at NOVA
              IMS, specializing in Business Intelligence. I graduated Magna Cum Laude
              from Utah State University with a B.S. in Computer Science and a
              Mathematics minor.
            </Text>
            <Text size="md" lh={1.8} c="dimmed">
              My work spans enterprise C#/.NET applications, Angular and React front-ends, data
              pipelines, ML models, and game systems. I enjoy building things that are technically
              interesting and actually useful in my daily life.
            </Text>
            <Text size="md" lh={1.8} c="dimmed">
              I'm actively seeking full-stack or software engineering roles. Comfortable working
              across the stack, picking up new languages fast, and shipping production code.
            </Text>
            <Group gap="sm" wrap="wrap">
              <Button
                component="a"
                href="/cv.pdf"
                target="_blank"
                color="indigo"
                leftSection={<IconDownload size={16} />}
              >
                Download CV
              </Button>
              <Button
                component={Link}
                to="/experience"
                variant="outline"
                color="indigo"
                leftSection={<IconBriefcase size={16} />}
              >
                View Experience
              </Button>
            </Group>
            <Group gap="xs">
              <Anchor
                href="https://github.com/tyler-johnston"
                target="_blank"
                rel="noopener noreferrer"
                c="dimmed"
              >
                <IconBrandGithub size={20} />
              </Anchor>
              <Anchor
                href="https://linkedin.com/in/tyler-johnston"
                target="_blank"
                rel="noopener noreferrer"
                c="dimmed"
              >
                <IconBrandLinkedin size={20} />
              </Anchor>
              <Anchor href="mailto:johnstontyler@protonmail.com" c="dimmed">
                <IconMail size={20} />
              </Anchor>
            </Group>
          </Stack>
        </motion.div>

        <motion.div {...fadeUp(0.2)}>
          <Box
            style={{
              borderRadius: 16,
              overflow: 'hidden',
              border: `1px solid ${isDark ? '#2e3347' : 'var(--mantine-color-gray-3)'}`,
            }}
          >
            <Image
              src={headshot}
              alt="Tyler Johnston"
              style={{ display: 'block', width: '100%' }}
              fallbackSrc="https://placehold.co/500x600/1a1d27/6366f1?text=TJ"
            />
          </Box>
        </motion.div>
      </SimpleGrid>

      {/* Skills */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            Technical Skills
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Stack & Tools
          </Title>
        </Stack>
      </motion.div>

      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mb={80}>
        {[
          { title: 'Languages', items: languages },
          { title: 'Frameworks & Libraries', items: frameworks },
          { title: 'Tools & Platforms', items: tools },
        ].map((group, i) => (
          <motion.div key={group.title} {...fadeUp(i * 0.08)}>
            <Card
              style={{
                border: `1px solid ${isDark ? '#2e3347' : 'var(--mantine-color-gray-3)'}`,
                background: isDark ? '#1a1d27' : '#ffffff',
                height: '100%',
              }}
            >
              <Text fw={600} mb="md" size="sm">
                {group.title}
              </Text>
              <Group gap={6} wrap="wrap">
                {group.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </Group>
            </Card>
          </motion.div>
        ))}
      </SimpleGrid>

      {/* Education */}
      <motion.div {...fadeUp(0.1)}>
        <Stack gap={4} mb={32}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            Education
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Academic Background
          </Title>
        </Stack>
      </motion.div>

      <Stack gap={0}>
        {[
          {
            school: 'NOVA IMS',
            degree: 'M.S. Information Management',
            sub: 'Business Intelligence Specialization',
            period: '2025 – 2027',
            location: 'Lisbon, Portugal',
            color: 'indigo' as const,
            highlights: [] as string[],
          },
          {
            school: 'Utah State University',
            degree: 'B.S. Computer Science',
            sub: 'Mathematics Minor',
            period: '2020 – 2024',
            location: 'Logan, UT',
            color: 'teal' as const,
            highlights: [
              'Magna Cum Laude — 3.92 GPA',
              'Full-ride scholarship recipient',
              'Teaching Assistant · Research Assistant',
            ],
          },
        ].map((edu, i, arr) => (
          <motion.div key={edu.school} {...fadeUp(i * 0.1)}>
            <Box style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 0 }}>
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ThemeIcon color={edu.color} variant="light" size="md" radius="xl" style={{ zIndex: 1 }}>
                  <IconSchool size={14} />
                </ThemeIcon>
                {i < arr.length - 1 && (
                  <Box style={{
                    width: 2, flex: 1, minHeight: 40,
                    background: isDark ? '#2e3347' : 'var(--mantine-color-gray-3)',
                    marginTop: 8, marginBottom: 8,
                  }} />
                )}
              </Box>

              <Card
                mb={i < arr.length - 1 ? 'xl' : 0}
                ml="md"
                style={{
                  border: `1px solid ${isDark ? '#2e3347' : 'var(--mantine-color-gray-3)'}`,
                  background: isDark ? '#1a1d27' : '#ffffff',
                }}
              >
                <Group justify="space-between" wrap="wrap" gap="xs" mb={4}>
                  <Box>
                    <Text fw={700} size="lg">{edu.school}</Text>
                    <Text fw={600} c={edu.color} size="sm">{edu.degree}</Text>
                    <Text size="xs" c="dimmed">{edu.sub} · {edu.location}</Text>
                  </Box>
                  <Text size="xs" c="dimmed" fw={500}>{edu.period}</Text>
                </Group>
                {edu.highlights.length > 0 && (
                  <List
                    spacing={4}
                    mt="sm"
                    icon={
                      <ThemeIcon color={edu.color} variant="light" size="xs" radius="xl">
                        <IconCircleCheck size={10} />
                      </ThemeIcon>
                    }
                  >
                    {edu.highlights.map((h) => (
                      <List.Item key={h}>
                        <Text size="sm" c="dimmed">{h}</Text>
                      </List.Item>
                    ))}
                  </List>
                )}
              </Card>
            </Box>
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
}
