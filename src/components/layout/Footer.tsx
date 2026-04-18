import { Group, Text, ActionIcon, Box } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      py="xl"
      px="lg"
      mt={80}
      style={{
        borderTop: '1px solid light-dark(var(--mantine-color-gray-2), #2e3347)',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Group justify="space-between" wrap="wrap" gap="md">
          <Text size="sm" c="dimmed">
            © {year} Tyler Johnston — Full Stack Developer
          </Text>
          <Group gap="xs">
            <ActionIcon
              component="a"
              href="https://github.com/tyler-johnston"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="gray"
              aria-label="GitHub"
            >
              <IconBrandGithub size={18} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://linkedin.com/in/tylerjohnstonn"
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="gray"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={18} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="mailto:johnstontyler@protonmail.com"
              variant="subtle"
              color="gray"
              aria-label="Email"
            >
              <IconMail size={18} />
            </ActionIcon>
          </Group>
        </Group>
      </div>
    </Box>
  );
}
