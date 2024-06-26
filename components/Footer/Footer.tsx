import { Container, Group, Text, Button, Flex } from '@mantine/core';
import classes from './Footer.module.css';
import { FaEnvelope, FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export function Footer() {

  return (
        <Container style={{ padding: '20px 0', borderTop: '1px solid #333' }}>
          <Flex justify="space-between" align="center">
            <Text size="sm">
              Contact
            </Text>
            <Group>
              <Button
                component="a"
                href="mailto:your-email@example.com"
                leftSection={<FaEnvelope />}
                variant="outline"
                color="black"
              >
                Send an email
              </Button>
              <Button
                component="a"
                href="https://www.linkedin.com/in/your-profile"
                leftSection={<FaLinkedin />}
                variant="outline"
                color="black"
              >
                LinkedIn
              </Button>
              <Button
                component="a"
                href="https://www.upwork.com/freelancers/~your-profile"
                leftSection={<FaExternalLinkAlt />}
                variant="outline"
                color='black'
              >
                Upwork
              </Button>
              <Button
                component="a"
                href="https://github.com/your-profile"
                leftSection={<FaGithub />}
                variant="outline"
                color="black"
              >
                Github
              </Button>
            </Group>
          </Flex>
        </Container>
  );
}