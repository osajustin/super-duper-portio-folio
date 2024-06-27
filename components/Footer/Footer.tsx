import { Container, Group, Text, Grid, GridCol, Button } from '@mantine/core';
import { FaEnvelope, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';
import classes from './Footer.module.css';

export function Footer() {
  return (
        <Container size='md' className={classes.footerContainer}>
          <Grid justify="space-between" align="center">

            {/* SectionTitle */}
            <GridCol span={3}>
              <Text className={classes.sectionTitle}>
                CONTACT
              </Text>
            </GridCol>

            {/* Group of Buttons */}
            <GridCol span={9}>
              <Group justify='center' grow preventGrowOverflow={false}>
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
                  leftSection={<FaFile />}
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
            </GridCol>
            
          </Grid>
        </Container>
  );
}