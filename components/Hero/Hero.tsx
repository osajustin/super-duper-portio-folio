import { Container, Title, Button, Group, Text, UnstyledButton, TextInput, Modal, Textarea } from '@mantine/core';
import { useState } from 'react';
import classes from './Hero.module.css';

export function Hero() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div>

          {/* Title Stuff */}
          <Text className={classes.text}>Hey, I&apos;m</Text>
          <Title className={classes.specialName}>
            Justin Osagie
          </Title>
          <Text className={classes.text}>
            I&apos;m a software engineer currently based in Tampa, Florida.
            I&apos;ve recently graduated from the University of South Florida with a B.S.
            in Computer Science.In between writing code, I enjoy diving in my artisitic
            side by creating different projects with creativity being the most important detail.
            With that I plan on showcasing my creativity through my projects and work.
          </Text>

          {/* Contact Button */}
          <UnstyledButton
            className={classes.button}
            onClick={(event) => {
              event.preventDefault();
              setModalOpened(true);
            }}
            pl={0}>
            <Group>
              Say hi
              <svg width="34" height="6" viewBox="0 0 34 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.2121 3.21213C33.3293 3.09497 33.3293 2.90503 33.2121 2.78787L31.3029 0.87868C31.1858 0.761522 30.9958 0.761522 30.8787 0.87868C30.7615 0.995837 30.7615 1.18579 30.8787 1.30294L32.5757 3L30.8787 4.69706C30.7615 4.81421 30.7615 5.00416 30.8787 5.12132C30.9958 5.23848 31.1858 5.23848 31.3029 5.12132L33.2121 3.21213ZM0 3.3H33V2.7H0V3.3Z" fill="#1A1A1A" />
              </svg>
            </Group>
          </UnstyledButton>

        </div>
      </div>

      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Contact Us">
        <form>
          <TextInput label="Email" placeholder="Your email" required />
          <TextInput label="Subject" placeholder="Subject" required />
          <Textarea label="Message" placeholder="Your message" required />
          <Group mt="md">
            <Button className={classes.button}>Send</Button>
          </Group>
        </form>
      </Modal>
    </Container>
  );
}
