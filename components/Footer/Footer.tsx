import React from 'react';
import { Container, Group, Text, Button, Flex } from '@mantine/core';
import { FaEnvelope, FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';
import classes from './Footer.module.css';

export function Footer() {
  return (
    <Container size="md" className={classes.footerContainer}>
      <Flex justify="space-between" align="center" className={classes.contactSection}>
        <Text className={classes.sectionTitle}>
          CONTACT
        </Text>
        <Group className={classes.buttonGroup}>
          <Button
            justify="center"
            className={classes.button}
            component="a"
            href="https://github.com/osajustin"
            leftSection={<FaGithub />}
            mt="md"
          >
            Github
          </Button>
          <Button
            justify="center"
            className={classes.button}
            component="a"
            href="https://www.linkedin.com/in/justinosagie"
            leftSection={<FaLinkedin />}
            mt="md"
          >
            LinkedIn
          </Button>
          <Button
            justify="center"
            className={classes.button}
            component="a"
            href="/public/OsagieJustin_CV.pdf"
            download
            leftSection={<FaFileDownload />}
            mt="md"
          >
            Resume
          </Button>
          <Button
            justify="center"
            className={classes.button}
            component="a"
            href="mailto:osajustin@gmail.com"
            leftSection={<FaEnvelope />}
            mt="md"
          >
            Send an Email
          </Button>
        </Group>
      </Flex>
    </Container>
  );
}
