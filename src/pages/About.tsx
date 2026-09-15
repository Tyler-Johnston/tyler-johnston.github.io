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
} from '@mantine/core';
import {
  IconArrowLeft,
  IconBriefcase,
  IconDownload,
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { grad, usuLogo, novaImsLogo } from '../data/imageAssets';
import { TechBadge } from '../components/ui/TechBadge';

const programming = ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL'];
const frameworks = ['.NET', 'REST APIs', 'React.js', 'Angular 17+', 'Docker'];
const dataAndBI = ['Pandas', 'Plotly', 'Power BI', 'Microsoft Fabric', 'Supabase'];
const devOpsAndQA = ['Git', 'Agile/Scrum', 'CI/CD', 'Unit Testing', 'QA workflows'];

const skillGroups = [
  { title: 'Programming', items: programming },
  { title: 'Frameworks & Tools', items: frameworks },
  { title: 'Data & BI', items: dataAndBI },
  { title: 'DevOps & QA', items: devOpsAndQA },
];

export function About() {
  return (
    <Container size="lg" py={60}>
      <Stack gap={12} mb={52}>
        <Title order={1} style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 700 }}>
          Tyler Johnston
        </Title>
      </Stack>

      <Box className="about-photo-mobile" mb={24}>
        <Box
          p={{ base: 8, md: 16 }}
          style={{
            borderRadius: 8,
            border: '1px solid var(--line)',
            background: 'var(--surface)',
          }}
        >
          <Box style={{ overflow: 'hidden', borderRadius: 4, border: '1px solid var(--line)' }}>
            <Image
              src={grad}
              alt="Tyler Johnston at Utah State University in cap and gown"
              fallbackSrc="https://placehold.co/600x720/1b1f25/3e7cb1?text=Tyler+Johnston"
            />
          </Box>
        </Box>
      </Box>

      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={56} mb={72} style={{ alignItems: 'start' }}>
        <Stack gap="lg">
          <Text size="md" lh={1.85} c="dimmed">
            I’m currently an Associate Backend Engineer at VML Portugal, contributing to production
            software and data-driven workflows.
          </Text>

          <Text size="md" lh={1.85} c="dimmed">
            Alongside this role, I’m pursuing an MSc in Information Management at NOVA IMS,
            specializing in Business Intelligence. My background spans production web development,
            research, teaching, and applied data work.
          </Text>

          <Text size="md" lh={1.85} c="dimmed">
            Previously, at Footprints, I worked on aerospace and steel-manufacturing systems across
            the front end, back end, APIs, databases, and QA. Earlier roles added experience in
            computer vision, C++, and workflow tooling.
          </Text>
          <Group gap="sm" wrap="wrap" mt={4}>
            <Button
              component="a"
              href="/cv.pdf"
              target="_blank"
              color="accent"
              leftSection={<IconDownload size={16} />}
            >
              Download CV
            </Button>
            <Button
              component={Link}
              to="/experience"
              variant="outline"
              color="accent"
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

        <Box className="about-photo-desktop">
          <Box
            p={{ base: 8, md: 16 }}
            style={{
              borderRadius: 8,
              border: '1px solid var(--line)',
              background: 'var(--surface)',
            }}
          >
            <Box style={{ overflow: 'hidden', borderRadius: 4, border: '1px solid var(--line)' }}>
              <Image
                src={grad}
                alt="Tyler Johnston at Utah State University in cap and gown"
                fallbackSrc="https://placehold.co/600x720/1b1f25/3e7cb1?text=Tyler+Johnston"
              />
            </Box>
          </Box>
        </Box>
      </SimpleGrid>

      <Stack gap={4} mb={22}>
        <Title order={2} style={{ fontWeight: 700 }}>
          Stack and toolset
        </Title>
      </Stack>

      <Box
        mb={56}
        py={4}
        style={{
          borderTop: '1px solid var(--line)',
        }}
      >
        <SimpleGrid className="about-skills-grid" cols={2} spacing={{ base: 16, md: 32 }}>
          {skillGroups.map((group) => (
            <Stack key={group.title} gap="sm" py={18}>
              <Text size="sm" c="dimmed">
                {group.title}
              </Text>
              <Group gap={6} wrap="wrap">
                {group.items.map((item) => (
                  <TechBadge key={item} label={item} size="lg" />
                ))}
              </Group>
            </Stack>
          ))}
        </SimpleGrid>
      </Box>

      <Stack gap={4} mb={22}>
        <Title order={2} style={{ fontWeight: 700 }}>
          Academic background
        </Title>
      </Stack>

      <Box
        mb={56}
        style={{
          borderTop: '1px solid var(--line)',
        }}
      >
        <Stack gap={0}>
          <Box className="about-row" py={22} style={{ borderBottom: '1px solid var(--line)' }}>
            <Group className="about-row-inner" align="flex-start" gap={28} wrap="nowrap">
              <Anchor
                href="https://www.novaims.unl.pt/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit NOVA IMS website"
                style={{ display: 'block' }}
              >
                <Box
                  className="about-row-label"
                  style={{
                    minWidth: 150,
                    width: 150,
                    height: 88,
                    borderRadius: 6,
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 14,
                    flex: '0 0 auto',
                  }}
                >
                  <Image
                    src={novaImsLogo}
                    alt="Nova IMS logo"
                    style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                  />
                </Box>
              </Anchor>
              <Stack className="about-row-content" gap={6}>
                <Title order={3} style={{ fontWeight: 700, fontSize: 'clamp(1.15rem, 2vw, 1.35rem)' }}>
                  NOVA IMS
                </Title>
                <Text size="sm" c="dimmed">
                  Lisbon, Portugal
                </Text>
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
              <Anchor
                href="https://www.usu.edu/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Utah State University website"
                style={{ display: 'block' }}
              >
                <Box
                  className="about-row-label"
                  style={{
                    minWidth: 150,
                    width: 150,
                    height: 88,
                    borderRadius: 6,
                    background: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 14,
                    flex: '0 0 auto',
                  }}
                >
                  <Image
                    src={usuLogo}
                    alt="Utah State University logo"
                    style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto' }}
                  />
                </Box>
              </Anchor>
              <Stack className="about-row-content" gap={6}>
                <Title order={3} style={{ fontWeight: 700, fontSize: 'clamp(1.15rem, 2vw, 1.35rem)' }}>
                  Utah State University
                </Title>
                <Text size="sm" c="dimmed">
                  Logan, Utah, USA
                </Text>
                <Text size="md" c="dimmed" lh={1.7}>
                  B.S. Computer Science, Mathematics minor
                </Text>
                <Text size="sm" c="dimmed">
                  Magna Cum Laude, GPA 3.92 / 4.00, Presidential Scholarship
                </Text>
              </Stack>
            </Group>
          </Box>
        </Stack>
      </Box>

      <Group justify="center" mt={48}>
        <Button
          component={Link}
          to="/"
          variant="outline"
          color="accent"
          leftSection={<IconArrowLeft size={16} />}
        >
          Back to Home
        </Button>
      </Group>
    </Container>
  );
}
