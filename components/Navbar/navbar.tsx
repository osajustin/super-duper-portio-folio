import React, { Key, useState } from 'react';
import { Group, Burger, Modal, TextInput, Textarea, Button, useMantineColorScheme, UnstyledButton, ActionIcon, Drawer, useComputedColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSunFilled } from '@tabler/icons-react';
import classes from './navbar.module.css';
import cx from 'clsx';

const links = [
  { link: '#projects', label: 'Projects' },
  { link: '#experience', label: 'Resume' },
  { link: '#contact', label: 'Contact' },
 //{ link: null, label: <IconSunFilled /> },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [drawerOpened, setDrawerOpened] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);

  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string, offset = 0) => {
    event.preventDefault();
    const target = document.querySelector(link);
    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToTop = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const items = links.map((link) => {
    if (link.label === 'Contact') {
      return (
        <UnstyledButton
          key={link.label}
          className={classes.button}
          onClick={(event) => {
            event.preventDefault();
            setModalOpened(true);
            setDrawerOpened(false);
          }}
        >
          {link.label}
        </UnstyledButton>
      );
    }
    // else if (link.label === <IconSunFilled />) {
    //   return (
    //     <ActionIcon
    //       onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
    //       variant="default"
    //       size="xl"
    //       aria-label="Toggle color scheme"
    //     >
    //       <IconSunFilled className={cx(classes.icon, classes.light)} stroke={1.5} />
    //     </ActionIcon>
    //   );
    // } 
    else {
      return (
        <a
          key={link.label as Key}
          href={link.link}
          className={classes.button}
          onClick={(event) => {
            if (link.link === '#experience') {
              handleScroll(event, link.link, -100); // Adjust offset as needed
            } else {
              handleScroll(event, link.link, -100);
            }
            setDrawerOpened(false);
          }}
        >
          {link.label}
        </a>
      );
    }
  });

  return (
    <>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={() => setDrawerOpened(true)} size="sm" hiddenFrom="sm" />
            <a href="#" className={classes.joLogo} onClick={scrollToTop}>JO.</a>
          </Group>

          <Group>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              {items}
            </Group>
          </Group>
        </div>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={() => setDrawerOpened(false)}
        title="Menu"
        padding="md"
        size="sm"
      >
        {items}
      </Drawer>

      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Contact Us"
        overlayProps={{
          className: classes.modalOverlay,
        }}
        classNames={{
          content: classes.modalContent,
        }}
      >
        <form>
          <TextInput label="Email" placeholder="Your email" required />
          <TextInput label="Subject" placeholder="Subject" required />
          <Textarea label="Message" placeholder="Your message" required />
          <Group mt="md">
            <Button className={classes.button}>Send</Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}
