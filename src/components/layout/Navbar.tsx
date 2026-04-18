import {
  Group,
  Burger,
  Drawer,
  Stack,
  Text,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSun, IconMoon, IconCode } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [drawerOpen, { open, close }] = useDisclosure(false);
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark');

  const toggleColorScheme = () =>
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');

  const navLinks = links.map((link) => (
    <NavLink
      key={link.href}
      to={link.href}
      end={link.href === '/'}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.linkActive : ''}`
      }
      onClick={close}
    >
      {link.label}
    </NavLink>
  ));

  return (
    <>
      <Box component="header" className={classes.header}>
        <div className={classes.inner}>
          <NavLink to="/" className={classes.logo}>
            <IconCode size={20} stroke={2} />
            <Text fw={700} size="sm" ml={6} style={{ letterSpacing: '-0.02em' }}>
              Tyler Johnston
            </Text>
          </NavLink>

          <Group gap="xs" visibleFrom="sm">
            <nav className={classes.navLinks}>{navLinks}</nav>
            <ActionIcon
              variant="subtle"
              color="gray"
              onClick={toggleColorScheme}
              aria-label="Toggle color scheme"
              size="lg"
            >
              {computedColorScheme === 'dark' ? (
                <IconSun size={18} />
              ) : (
                <IconMoon size={18} />
              )}
            </ActionIcon>
          </Group>

          <Group hiddenFrom="sm" gap="xs">
            <ActionIcon
              variant="subtle"
              color="gray"
              onClick={toggleColorScheme}
              aria-label="Toggle color scheme"
              size="lg"
            >
              {computedColorScheme === 'dark' ? (
                <IconSun size={18} />
              ) : (
                <IconMoon size={18} />
              )}
            </ActionIcon>
            <Burger
              opened={drawerOpen}
              onClick={open}
              size="sm"
              aria-label="Open navigation"
            />
          </Group>
        </div>
      </Box>

      <Drawer
        opened={drawerOpen}
        onClose={close}
        title={
          <Group>
            <IconCode size={18} />
            <Text fw={700} size="sm">
              Tyler Johnston
            </Text>
          </Group>
        }
        position="right"
        size="xs"
        overlayProps={{ backgroundOpacity: 0.4, blur: 4 }}
      >
        <Stack gap="xs" mt="md">
          {navLinks}
        </Stack>
      </Drawer>
    </>
  );
}
