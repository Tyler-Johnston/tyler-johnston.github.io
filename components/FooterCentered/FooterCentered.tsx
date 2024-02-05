import { Link } from 'react-router-dom';
import { Group, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconDeviceLaptop } from '@tabler/icons-react';
import classes from './FooterCentered.module.css';
// import headshot from "../../images/headshot.jpeg";

const links = [
  { link: '/', label: 'Home' },
  { link: '/portfolio', label: 'Portfolio' },
  { link: '/experience', label: 'Experience' },
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
        {/* <Image radius="md" src={headshot} className={classes.smallImage} /> */}
        <Group gap={5}>
            <IconDeviceLaptop size={28}/>
            Tyler Johnston
          </Group>
        
        <Group className={classes.links}>{items}</Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <Link to="https://github.com/Tyler-Johnston" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandGithub style={{ width: '18px', height: '18px' }} stroke={1.5} />
            </ActionIcon>
          </Link>
          <Link to="https://linkedin.com/in/tylerjohnstonn" target="_blank">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandLinkedin style={{ width: '18px', height: '18px' }} stroke={1.5} />
            </ActionIcon>
          </Link>
        </Group>
      </div>
    </div>
  );
}
