import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Container,
  Group,
  List,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { useLocation } from 'react-router-dom';
import { IconBriefcase, IconCircleCheck } from '@tabler/icons-react';
import { roles } from '../data/experience';
import { TechBadge } from '../components/ui/TechBadge';

export function Experience() {
  const location = useLocation();
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;
    const el = document.getElementById(scrollTo);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setHighlightedId(scrollTo);
        setTimeout(() => setHighlightedId(null), 1800);
      }, 100);
    }
  }, [location.state]);

  return (
    <Container size="lg" py={60}>
      <Stack gap={4} mb={40}>
        <Title order={1} style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 700 }}>
          Career timeline
        </Title>
        <Text c="dimmed" size="md" maw={640} lh={1.75} mt={4}>
          Production software, research, teaching, and workflow tools.
        </Text>
      </Stack>

      <Stack gap={0}>
        {roles.map((role, i) => (
          <Box key={role.id} id={role.id} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 0 }}>
            <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ThemeIcon color="accent" variant="light" size="md" radius="xl" style={{ zIndex: 1 }}>
                <IconBriefcase size={14} />
              </ThemeIcon>
              {i < roles.length - 1 && (
                <Box
                  style={{
                    width: 2,
                    flex: 1,
                    minHeight: 40,
                    background: 'var(--line)',
                    marginTop: 8,
                    marginBottom: 8,
                  }}
                />
              )}
            </Box>

            <Card
              mb={i < roles.length - 1 ? 'xl' : 0}
              ml="md"
              className={highlightedId === role.id ? 'role-highlighted' : undefined}
              style={{
                border: '1px solid var(--line)',
                background: 'var(--surface)',
              }}
            >
              <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                <Stack gap="sm">
                  <Box>
                    <Group justify="space-between" wrap="wrap" gap="xs">
                      <Text fw={700} size="lg">
                        {role.title}
                      </Text>
                      <Text size="xs" c="dimmed" fw={500}>
                        {role.period}
                      </Text>
                    </Group>
                    <Text c="accent" size="sm" fw={600}>
                      {role.organization}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {role.location}
                    </Text>
                  </Box>

                  {role.description.map((para) => (
                    <Text key={para} size="sm" c="dimmed" lh={1.7}>
                      {para}
                    </Text>
                  ))}

                  <Group gap={6} wrap="wrap" mt={4}>
                    {role.techStack.map((tech) => (
                      <TechBadge key={tech} label={tech} size="lg" />
                    ))}
                  </Group>
                </Stack>

                <Stack gap="sm">
                  <Text fw={600} size="sm">
                    Key contributions
                  </Text>
                  <List
                    spacing={6}
                    icon={
                      <ThemeIcon color="accent" variant="light" size="xs" radius="xl">
                        <IconCircleCheck size={10} />
                      </ThemeIcon>
                    }
                  >
                    {role.highlights.map((h) => (
                      <List.Item key={h}>
                        <Text size="sm" c="dimmed" lh={1.55}>
                          {h}
                        </Text>
                      </List.Item>
                    ))}
                  </List>
                </Stack>
              </SimpleGrid>
            </Card>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
