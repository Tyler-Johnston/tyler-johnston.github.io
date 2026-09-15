import { Image, Modal, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconZoomIn } from '@tabler/icons-react';

interface ZoomableProjectImageProps {
  src: string;
  alt: string;
  fallbackSrc: string;
  height?: number;
  imagePosition?: string;
}

/** A self-contained screenshot trigger and full-size viewer for project pages. */
export function ZoomableProjectImage({ src, alt, fallbackSrc, height, imagePosition }: ZoomableProjectImageProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <UnstyledButton className="project-image-trigger" onClick={open} aria-label={`Open ${alt} screenshot at full size`}>
        <Image
          src={src}
          alt={alt}
          fallbackSrc={fallbackSrc}
          height={height}
          fit={height ? 'contain' : undefined}
          style={height ? { objectPosition: imagePosition ?? 'center' } : undefined}
        />
        <span className="project-image-trigger__hint" aria-hidden="true"><IconZoomIn size={18} /></span>
      </UnstyledButton>

      <Modal
        opened={opened}
        onClose={close}
        title={alt}
        centered
        size="xl"
        padding="md"
        overlayProps={{ backgroundOpacity: 0.8, blur: 5 }}
        styles={{ content: { background: 'var(--surface)' }, header: { background: 'var(--surface)' } }}
      >
        <Image src={src} alt={alt} fallbackSrc={fallbackSrc} fit="contain" style={{ maxHeight: '78dvh' }} />
      </Modal>
    </>
  );
}
