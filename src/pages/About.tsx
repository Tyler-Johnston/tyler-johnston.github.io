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
  Divider,
} from '@mantine/core';
import { motion } from 'framer-motion';
import {
  IconBriefcase,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { grad } from '../data/imageAssets';
import { TechBadge } from '../components/ui/TechBadge';

const programming = ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL'];
const frameworks = ['.NET', 'REST APIs', 'React.js', 'Angular 17+', 'Docker'];
const dataAndBI = ['Pandas', 'Plotly', 'Power BI', 'Microsoft Fabric', 'Supabase'];
const devOpsAndQA = ['Git', 'Agile/Scrum', 'CI/CD', 'Unit Testing', 'QA workflows'];

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

      <Box className="about-photo-mobile" mb={24}>
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
      </Box>

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
          <Box className="about-photo-desktop">
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
          </Box>
        </motion.div>
      </SimpleGrid>

      <motion.div {...fadeUp(0.08)}>
        <Stack gap={4} mb={22}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Skills
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Stack and toolset
          </Title>
          <Text size="sm" c="dimmed" maw={920} lh={1.7}>
            I use these tools across production development, data work, testing, and delivery.
          </Text>
        </Stack>
      </motion.div>

      <Box
        mb={56}
        py={4}
        style={{
          borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
          borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
        }}
      >
        <SimpleGrid className="about-skills-grid" cols={{ base: 1, md: 2 }} spacing={{ base: 24, md: 32 }}>
          {skillGroups.map((group, i) => (
            <motion.div key={group.title} {...fadeUp(i * 0.05)}>
              <Stack gap="sm" py={18}>
                <Text size="sm" tt="uppercase" fw={700} c="dimmed" style={{ letterSpacing: '0.12em' }}>
                  {group.title}
                </Text>
                <Group gap={6} wrap="wrap">
                  {group.items.map((item) => (
                    <TechBadge key={item} label={item} size="lg" />
                  ))}
                </Group>
              </Stack>
            </motion.div>
          ))}
        </SimpleGrid>
      </Box>

      <Divider my={32} color="light-dark(var(--mantine-color-gray-3), #273138)" />

      <motion.div {...fadeUp(0.08)}>
        <Stack gap={4} mb={22}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Education
          </Text>
          <Title order={2} style={{ fontWeight: 800 }}>
            Academic background
          </Title>
          <Text size="sm" c="dimmed" maw={920} lh={1.7}>
            My degrees connect software development, business intelligence, and technical
            problem-solving.
          </Text>
        </Stack>
      </motion.div>

      <Box
        mb={56}
        style={{
          borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #273138)',
        }}
      >
        <Stack gap={0}>
          <Box className="about-row" py={22} style={{ borderBottom: '1px solid light-dark(var(--mantine-color-gray-2), #273138)' }}>
            <Group className="about-row-inner" align="flex-start" gap={28} wrap="nowrap">
              <Text className="about-row-label" size="sm" tt="uppercase" fw={700} c="dimmed" style={{ letterSpacing: '0.12em', minWidth: 150 }}>
                Graduate
              </Text>
              <Stack className="about-row-content" gap={6}>
                <Title order={3} style={{ fontWeight: 800, fontSize: 'clamp(1.15rem, 2vw, 1.35rem)' }}>
                  NOVA IMS
                </Title>
                <Text size="md" c="dimmed" lh={1.7}>
                  M.S. Information Management, Business Intelligence
                </Text>
                <Text size="sm" c="dimmed">
                  Currently enrolled, expected 2027
                </Text>
              </Stack>
            </Group>
          </Box>

          <Box className="about-row" py={22}>
            <Group className="about-row-inner" align="flex-start" gap={28} wrap="nowrap">
              <Text className="about-row-label" size="sm" tt="uppercase" fw={700} c="dimmed" style={{ letterSpacing: '0.12em', minWidth: 150 }}>
                Undergraduate
              </Text>
              <Stack className="about-row-content" gap={6}>
                <Title order={3} style={{ fontWeight: 800, fontSize: 'clamp(1.15rem, 2vw, 1.35rem)' }}>
                  Utah State University
                </Title>
                <Text size="md" c="dimmed" lh={1.7}>
                  B.S. Computer Science, Mathematics minor
                </Text>
                <Text size="sm" c="dimmed">
                  Magna Cum Laude · GPA 3.92 / 4.00 · Presidential Scholarship
                </Text>
              </Stack>
            </Group>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}
