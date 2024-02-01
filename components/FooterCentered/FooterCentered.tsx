import { Anchor, Group, ActionIcon, rem, Image } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import classes from './FooterCentered.module.css';
import headshot from "../../images/headshot.jpeg"

const links = [
  { link: '/', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/portfolio', label: 'Portfolio' },
  { link: '/skills', label: 'Technical Skills' },
  { link: 'mailto:johnstontyler@protonmail.com', label: 'Contact' },
];

export function FooterCentered() {
  const items = links.map((link) => (
    <Anchor
      c="dimmed"
      key={link.label}
      href={link.link}
      lh={1}
      size="m"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image radius="md" src={headshot} className={classes.smallImage}/>
        <Group className={classes.links}>{items}</Group>
        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandGithub style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandLinkedin style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}