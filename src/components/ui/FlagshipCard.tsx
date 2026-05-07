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
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Card
        p={0}
        style={{
          border: '1px solid light-dark(var(--mantine-color-gray-3), #273138)',
          overflow: 'hidden',
          background: 'light-dark(var(--mantine-color-white), #141a1e)',
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
              background: 'rgba(0, 0, 0, 0.12)',
            }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              fallbackSrc="https://placehold.co/600x400/141a1e/f5a623?text=Project"
            />
          </Box>

          <Stack p="xl" gap="lg" justify="center">
            <div>
              <Text
                size="xs"
                tt="uppercase"
                fw={700}
                c="orange"
                mb={4}
                style={{ letterSpacing: '0.12em' }}
              >
                {project.subtitle}
              </Text>
              <Text size="xl" fw={800} lh={1.15}>
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
                <ThemeIcon color="orange" variant="light" size="xs" radius="xl">
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
                    color="orange"
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
                    color="orange"
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
