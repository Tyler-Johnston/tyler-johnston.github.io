import {
  Container,
  Title,
  Text,
  Group,
  Stack,
  SimpleGrid,
  Button,
  Box,
  Image,
  Anchor,
  List,
  ThemeIcon,
  Divider,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconBriefcase,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { grad } from '../data/imageAssets';
import { TechBadge } from '../components/ui/TechBadge';

const programming = ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL'];
const frameworks = ['.NET', 'REST APIs', 'React.js', 'Angular 17+', 'React Flow', 'Docker'];
const dataAndBI = ['Pandas', 'Plotly', 'Power BI', 'Microsoft Fabric', 'PostgreSQL', 'Supabase'];
const devOpsAndQA = ['Git', 'Agile/Scrum', 'CI/CD', 'application testing', 'QA ownership', 'production support'];
const languages = ['English (Native)', 'Portuguese (B1)'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay },
});

const skillGroups = [
  { title: 'Programming', items: programming },
  { title: 'Frameworks & Tools', items: frameworks },
  { title: 'Data & BI', items: dataAndBI },
  { title: 'DevOps & QA', items: devOpsAndQA },
];

export function About() {
  return (
    <Container size="lg" py={60}>
      <motion.div {...fadeUp(0)}>
        <Stack gap={12} mb={52}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Profile
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 900 }}>
            Tyler Johnston
          </Title>
          <Text c="dimmed" size="md" maw={720} lh={1.8}>
            American full-stack developer based in Lisbon with work authorization, focused on
            production software and data work.
          </Text>
        </Stack>
      </motion.div>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={56} mb={72} style={{ alignItems: 'start' }}>
        <motion.div {...fadeUp(0.08)}>
          <Stack gap="lg">
            <Text size="md" lh={1.85} c="dimmed">
              I’m an MSc Information Management candidate at NOVA IMS specializing in Business
              Intelligence. My background spans production web development, research, teaching,
              and applied data work.
            </Text>
            <Text size="md" lh={1.85} c="dimmed">
              At Footprints, I worked on aerospace and steel-manufacturing systems across front
              end, back end, APIs, databases, and QA. Earlier roles expanded that foundation into
              computer vision, C++, and workflow tooling.
            </Text>
            <Text size="md" lh={1.85} c="dimmed">
              I do my best work on systems that need technical depth, careful testing, and
              practical delivery that holds up in production.
            </Text>

            <Group gap="sm" wrap="wrap" mt={4}>
              <Button
                component="a"
                href="/cv.pdf"
                target="_blank"
                color="orange"
                leftSection={<IconDownload size={16} />}
              >
                Download CV
              </Button>
              <Button
                component={Link}
                to="/experience"
                variant="outline"
                color="orange"
                leftSection={<IconBriefcase size={16} />}
              >
                View Experience
              </Button>
            </Group>

            <Group gap="xs" mt={2}>
              <Anchor href="https://github.com/tyler-johnston" target="_blank" rel="noopener noreferrer" c="dimmed">
                <IconBrandGithub size={20} />
              </Anchor>
              <Anchor href="https://linkedin.com/in/tylerjohnstonn" target="_blank" rel="noopener noreferrer" c="dimmed">
                <IconBrandLinkedin size={20} />
              </Anchor>
              <Anchor href="mailto:johnstontyler@protonmail.com" c="dimmed">
                <IconMail size={20} />
              </Anchor>
            </Group>
          </Stack>
        </motion.div>

        <motion.div {...fadeUp(0.12)}>
          <Box
            style={{
              overflow: 'hidden',
              borderRadius: 24,
              border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
              background: 'light-dark(var(--mantine-color-white), #141a1e)',
            }}
          >
            <Image
              src={grad}
              alt="Tyler Johnston at Utah State University in cap and gown"
              fallbackSrc="https://placehold.co/600x720/141a1e/f5a623?text=Tyler+Johnston"
            />
          </Box>
        </motion.div>
      </SimpleGrid>

      <Divider my={32} color="light-dark(var(--mantine-color-gray-3), #273138)" />

      <motion.div {...fadeUp(0.08)}>
        <Stack gap={4} mb={22}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Education
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Academic background
          </Title>
        </Stack>
      </motion.div>

      <Stack gap="lg" mb={56}>
        <Box>
          <Text size="sm" tt="uppercase" fw={700} c="dimmed" style={{ letterSpacing: '0.12em' }}>
            Graduate study
          </Text>
          <Title order={3} size="h4" mt={6}>
            NOVA IMS
          </Title>
          <Text size="md" c="dimmed" lh={1.7}>
            M.S. Information Management, Business Intelligence
          </Text>
          <Text size="sm" c="dimmed" mt={6}>
            Currently enrolled, expected 2027
          </Text>
        </Box>

        <Divider color="light-dark(var(--mantine-color-gray-3), #273138)" />

        <Box>
          <Text size="sm" tt="uppercase" fw={700} c="dimmed" style={{ letterSpacing: '0.12em' }}>
            Undergraduate study
          </Text>
          <Title order={3} size="h4" mt={6}>
            Utah State University
          </Title>
          <Text size="md" c="dimmed" lh={1.7}>
            B.S. Computer Science, Mathematics minor
          </Text>
          <Text size="sm" c="dimmed" mt={6}>
            Magna Cum Laude · GPA 3.92 / 4.00 · Presidential Scholarship
          </Text>
        </Box>
      </Stack>

      <Divider my={32} color="light-dark(var(--mantine-color-gray-3), #273138)" />

      <motion.div {...fadeUp(0.08)}>
        <Stack gap={4} mb={22}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Skills
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Stack and toolset
          </Title>
        </Stack>
      </motion.div>

      <Stack gap="xl" mb={56}>
        {skillGroups.map((group, i) => (
          <motion.div key={group.title} {...fadeUp(i * 0.05)}>
            <Stack gap="sm">
              <Text fw={700}>{group.title}</Text>
              <Group gap={6} wrap="wrap">
                {group.items.map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </Group>
            </Stack>
          </motion.div>
        ))}
      </Stack>

      <Divider my={32} color="light-dark(var(--mantine-color-gray-3), #273138)" />

      <motion.div {...fadeUp(0.08)}>
        <Stack gap={4} mb={22}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Languages
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Communication
          </Title>
        </Stack>
      </motion.div>

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={32}>
        <Box>
          <Text fw={700} mb="sm">
            Spoken languages
          </Text>
          <Group gap={6} wrap="wrap">
            {languages.map((item) => (
              <TechBadge key={item} label={item} />
            ))}
          </Group>
        </Box>

        <Box>
          <Text fw={700} mb="sm">
            Working style
          </Text>
          <List
            spacing={6}
            icon={
              <ThemeIcon color="orange" variant="light" size="xs" radius="xl">
                <IconCircleCheck size={10} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <Text size="sm" c="dimmed">
                Comfortable owning delivery across front end, API, database, and QA boundaries.
              </Text>
            </List.Item>
            <List.Item>
              <Text size="sm" c="dimmed">
                Prefer systems that are testable, maintainable, and easy to hand off to other people.
              </Text>
            </List.Item>
          </List>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
