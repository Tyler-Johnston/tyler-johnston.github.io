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
  useMantineColorScheme,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBriefcase, IconCircleCheck } from '@tabler/icons-react';
import { roles } from '../data/experience';
import { TechBadge } from '../components/ui/TechBadge';

export function Experience() {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <Container size="lg" py={60}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Stack gap={4} mb={60}>
          <Text size="xs" tt="uppercase" fw={700} c="indigo" style={{ letterSpacing: '0.12em' }}>
            Career
          </Text>
          <Title order={1} style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900 }}>
            Experience
          </Title>
          <Text c="dimmed" size="md" maw={560} lh={1.7} mt={4}>
            Professional roles spanning enterprise web development, computer vision research,
            teaching, and aerospace software.
          </Text>
        </Stack>
      </motion.div>

      <Stack gap={0}>
        {roles.map((role, i) => (
          <motion.div
            key={role.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Box
              style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr',
                gap: 0,
                paddingBottom: i < roles.length - 1 ? 0 : 0,
              }}
            >
              {/* Timeline column */}
              <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ThemeIcon color="indigo" variant="light" size="md" radius="xl" style={{ zIndex: 1 }}>
                  <IconBriefcase size={14} />
                </ThemeIcon>
                {i < roles.length - 1 && (
                  <Box
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 40,
                      background: isDark ? '#2e3347' : 'var(--mantine-color-gray-3)',
                      marginTop: 8,
                      marginBottom: 8,
                    }}
                  />
                )}
              </Box>

              {/* Content */}
              <Card
                mb={i < roles.length - 1 ? 'xl' : 0}
                ml="md"
                style={{
                  border: `1px solid ${isDark ? '#2e3347' : 'var(--mantine-color-gray-3)'}`,
                  background: isDark ? '#1a1d27' : '#ffffff',
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
                      <Text c="indigo" size="sm" fw={600}>
                        {role.organization}
                      </Text>
                      <Text size="xs" c="dimmed">
                        {role.location}
                      </Text>
                    </Box>

                    {role.description.map((para, j) => (
                      <Text key={j} size="sm" c="dimmed" lh={1.7}>
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
                    <Text fw={600} size="sm">
                      Key Contributions
                    </Text>
                    <List
                      spacing={6}
                      icon={
                        <ThemeIcon color="indigo" variant="light" size="xs" radius="xl">
                          <IconCircleCheck size={10} />
                        </ThemeIcon>
                      }
                    >
                      {role.highlights.map((h) => (
                        <List.Item key={h}>
                          <Text size="sm" c="dimmed" lh={1.5}>
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
