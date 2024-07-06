import { Container, Group, Text, Grid, GridCol, Button, Flex, SimpleGrid } from '@mantine/core';
import { FaEnvelope, FaFile, FaGithub, FaLinkedin } from 'react-icons/fa';
import classes from './Footer.module.css';

export function Footer() {
  return (
        <Container size='md' className={classes.footerContainer}>
          <SimpleGrid cols={{ base: 2, sm: 1}} spacing={"lg"}>

            {/* SectionTitle */}
            <div>
              <Text className={classes.sectionTitle}>
                CONTACT
              </Text>
            </div>

            {/* Group of Buttons */}
            <Flex 
              direction={{ base: 'column', sm: 'row' }}
              gap={{ base: 'sm', sm: 'lg' }}
              justify={{ base: 'space-between', sm: 'center' }}>
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
              </Flex>
            
          </SimpleGrid>
        </Container>
  );
}