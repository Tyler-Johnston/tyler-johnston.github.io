import { Link } from 'react-router-dom';
import { Group, ActionIcon, Image } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './FooterCentered.module.css';
import headshot from "../../images/headshot.jpeg";

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/portfolio', label: 'Portfolio' },
  { link: '/experience', label: 'Workforce Experience' },
  { link: 'mailto:johnstontyler@protonmail.com', label: 'Contact'}
];

export function FooterCentered() {
  const items = links.map((link) => {
    if (link.link.startsWith('mailto:')) {
      return (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
        >
          {link.label}
        </a>
      );
    }

    return (
      <Link
        to={link.link}
        key={link.label}
        className={classes.link}
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image radius="md" src={headshot} className={classes.smallImage} />
        <Group className={classes.links}>{items}</Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandGithub style={{ width: '18px', height: '18px' }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin style={{ width: '18px', height: '18px' }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}
