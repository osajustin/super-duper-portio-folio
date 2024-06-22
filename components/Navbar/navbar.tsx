import React, { useState } from 'react';
import { Autocomplete, Group, Burger, Modal, TextInput, Textarea, Button, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSunFilled } from '@tabler/icons-react';
import classes from './Navbar.module.css';

const links = [
  { link: '/projects', label: 'Projects' },
  { link: '/resume', label: 'Resume' },
  { link: '/Contact', label: 'Contact' },
  { link: '/', label: <IconSunFilled />  },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [modalOpened, setModalOpened] = useState(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const items = links.map((link) => {
    if (link.label === 'Contact') {
      return (
        <button
          key={link.label}
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            setModalOpened(true);
          }}
          style={{ background: 'none', border: 'none', padding: 0, font: 'inherit', color: 'inherit', cursor: 'pointer' }}
        >
          {link.label}
        </button>
      );
    }
    if (link.label === <IconSunFilled />) {
      return (
        <a
          key="iconSunFilled"
          href="#"
          className={classes.link}
          onClick={(event) => {
            event.preventDefault();
            toggleColorScheme();
          }}
        >
          <IconSunFilled />
        </a>
      );
    }
    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <>
      <header className={classes.header}>
        <div className={classes.inner}>
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
            <p>JO.</p>
          </Group>

          <Group>
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              {items}
            </Group>
          </Group>
        </div>
      </header>

      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Contact Us">
        <form>
          <TextInput label="Email" placeholder="Your email" required />
          <TextInput label="Subject" placeholder="Subject" required />
          <Textarea label="Message" placeholder="Your message" required />
          <Group position="right" mt="md">
            <Button type="submit">Send</Button>
          </Group>
        </form>
      </Modal>
    </>
  );
}
