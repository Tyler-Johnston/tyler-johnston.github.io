import {
  Card,
  Image,
  Text,
  Group,
  Stack,
  Button,
  List,
  ThemeIcon,
} from '@mantine/core';
import { motion } from 'framer-motion';
import { IconCircleCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { FlagshipProject } from '../../data/projects';
import { TechBadge } from './TechBadge';

interface FlagshipCardProps {
  project: FlagshipProject;
  reverse?: boolean;
}

export function FlagshipCard({ project, reverse = false }: FlagshipCardProps) {
  const isDark = true;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Card
        p={0}
        style={{
          border: `1px solid ${isDark ? '#2e3347' : 'var(--mantine-color-gray-3)'}`,
          overflow: 'hidden',
          background: isDark ? '#1a1d27' : '#ffffff',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          }}
        >
          <div
            style={{
              order: reverse ? 1 : 0,
              position: 'relative',
              minHeight: 280,
              overflow: 'hidden',
            }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              fallbackSrc="https://placehold.co/600x400/1a1d27/6366f1?text=Project"
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `linear-gradient(135deg, ${
                  project.accentColor === 'cyan'
                    ? 'rgba(6,182,212,0.15)'
                    : 'rgba(99,102,241,0.15)'
                } 0%, transparent 60%)`,
              }}
            />
          </div>

          <Stack p="xl" gap="lg" justify="center">
            <div>
              <Text
                size="xs"
                tt="uppercase"
                fw={700}
                c={project.accentColor === 'cyan' ? 'cyan' : 'indigo'}
                mb={4}
                style={{ letterSpacing: '0.1em' }}
              >
                {project.subtitle}
              </Text>
              <Text size="xl" fw={800} lh={1.2}>
                {project.title}
              </Text>
            </div>

            <Text size="sm" c="dimmed" lh={1.7}>
              {project.description}
            </Text>

            <Group gap={6} wrap="wrap">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </Group>

            <List
              spacing={6}
              icon={
                <ThemeIcon
                  color={project.accentColor === 'cyan' ? 'cyan' : 'indigo'}
                  variant="light"
                  size="xs"
                  radius="xl"
                >
                  <IconCircleCheck size={10} />
                </ThemeIcon>
              }
            >
              {project.achievements.map((achievement, i) => (
                <List.Item key={i}>
                  <Text size="sm" c="dimmed" lh={1.5}>
                    {achievement}
                  </Text>
                </List.Item>
              ))}
            </List>

            <Group gap="sm" wrap="wrap">
              {project.cta.map((btn) => {
                const isInternal = btn.href.startsWith('/');
                return isInternal ? (
                  <Button
                    key={btn.label}
                    variant={btn.variant}
                    color={project.accentColor === 'cyan' ? 'cyan' : 'indigo'}
                    component={Link}
                    to={btn.href}
                    size="sm"
                  >
                    {btn.label}
                  </Button>
                ) : (
                  <Button
                    key={btn.label}
                    variant={btn.variant}
                    color={project.accentColor === 'cyan' ? 'cyan' : 'indigo'}
                    component="a"
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="sm"
                  >
                    {btn.label}
                  </Button>
                );
              })}
            </Group>
          </Stack>
        </div>
      </Card>
    </motion.div>
  );
}
