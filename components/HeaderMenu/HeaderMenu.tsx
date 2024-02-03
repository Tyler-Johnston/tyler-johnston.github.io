import { Link } from 'react-router-dom';
import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown, IconDeviceLaptop } from '@tabler/icons-react';
import classes from './HeaderMenu.module.css';

interface LinkItem {
  link: string;
  label: string;
  links?: LinkItem[];
}

const links: LinkItem[] = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/portfolio', label: 'Portfolio' },
  { link: '/experience', label: 'Experience' },
];

export function HeaderMenu() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
          <Menu.Target>
            <Link to={link.link} className={classes.link}>
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size="0.9rem" stroke={1.5} />
              </Center>
            </Link>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    );
  });

  return (
    <header className={classes.header}>
      <Container size="xxl">
        <div className={classes.inner}>
          <Group gap={5}>
            <IconDeviceLaptop size={28}/>
            Tyler Johnston
          </Group>
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
