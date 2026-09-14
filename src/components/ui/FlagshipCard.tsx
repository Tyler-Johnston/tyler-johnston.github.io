import {
  Card,
  Image,
  Text,
  Group,
  Stack,
  Button,
  List,
  ThemeIcon,
  Box,
} from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { FlagshipProject } from '../../data/projects';
import { TechBadge } from './TechBadge';

interface FlagshipCardProps {
  project: FlagshipProject;
  reverse?: boolean;
}

export function FlagshipCard({ project, reverse = false }: FlagshipCardProps) {
  return (
    <Card
      p={0}
      style={{
        border: '1px solid var(--line)',
        overflow: 'hidden',
        background: 'var(--surface)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        <Box
          className="flagship-image"
          style={{
            order: reverse ? 1 : 0,
            position: 'relative',
            minHeight: 280,
            overflow: 'hidden',
            background: 'var(--ink)',
          }}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            fallbackSrc="https://placehold.co/600x400/1b1f25/3e7cb1?text=Project"
          />
        </Box>

        <Stack p="xl" gap="lg" justify="center">
          <div>
            <Text size="sm" c="dimmed" mb={4} style={{ fontFamily: 'var(--mantine-font-family-monospace)' }}>
              {project.subtitle}
            </Text>
            <Text size="xl" fw={700} lh={1.15}>
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
            spacing={7}
            icon={
              <ThemeIcon color="accent" variant="light" size="xs" radius="xl">
                <IconCircleCheck size={10} />
              </ThemeIcon>
            }
          >
            {project.achievements.map((achievement) => (
              <List.Item key={achievement}>
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
                  color="accent"
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
                  color="accent"
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
  );
}
