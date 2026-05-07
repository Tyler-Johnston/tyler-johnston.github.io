import { useEffect, useState } from 'react';
import {
  Container,
  Title,
  Text,
  Stack,
  Card,
  Group,
  SimpleGrid,
  Box,
  ThemeIcon,
  List,
} from '@mantine/core';
import { motion } from 'framer-motion';
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
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Stack gap={4} mb={56}>
          <Text size="xs" tt="uppercase" fw={700} c="orange" style={{ letterSpacing: '0.16em' }}>
            Experience
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(1.9rem, 4vw, 2.7rem)', fontWeight: 900 }}>
            Career timeline
          </Title>
          <Text c="dimmed" size="md" maw={640} lh={1.75} mt={4}>
            Production software, computer vision research, teaching, and workflow tools. This is
            the part of the site that should feel like evidence rather than decoration.
          </Text>
        </Stack>
      </motion.div>

      <Stack gap={0}>
        {roles.map((role, i) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.38, delay: i * 0.06 }}
          >
            <Box id={role.id} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: 0 }}>
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ThemeIcon color="orange" variant="light" size="md" radius="xl" style={{ zIndex: 1 }}>
                  <IconBriefcase size={14} />
                </ThemeIcon>
                {i < roles.length - 1 && (
                  <Box
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 40,
                      background: 'light-dark(var(--mantine-color-gray-3), #273138)',
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
                  border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
                  background: 'light-dark(var(--mantine-color-white), #141a1e)',
                }}
              >
                <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
                  <Stack gap="sm">
                    <Box>
                      <Group justify="space-between" wrap="wrap" gap="xs">
                        <Text fw={800} size="lg">
                          {role.title}
                        </Text>
                        <Text size="xs" c="dimmed" fw={500}>
                          {role.period}
                        </Text>
                      </Group>
                      <Text c="orange" size="sm" fw={700}>
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
                        <TechBadge key={tech} label={tech} size="xs" />
                      ))}
                    </Group>
                  </Stack>

                  <Stack gap="sm">
                    <Text fw={700} size="sm">
                      Key contributions
                    </Text>
                    <List
                      spacing={6}
                      icon={
                        <ThemeIcon color="orange" variant="light" size="xs" radius="xl">
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
          </motion.div>
        ))}
      </Stack>
    </Container>
  );
}
