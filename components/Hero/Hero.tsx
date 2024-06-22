import { Image, Container, Title, Button, Group, Text } from '@mantine/core';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import classes from './Hero.module.css';
// import image from './image.svg';

export function Hero() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div>
          
          {/* Title Stuff */}
          <Text className={classes.text}>Hey, I'm</Text>
          <Title className={classes.specialName}>
            Justin Osagie
          </Title>
          <Text className={classes.text}>
            I'm a software engineer currently based in Tampa, Florida.
            I've recently graduated from the University of South Florida with a B.S. in Computer Science.
            In between writing code, I enjoy diving in my artisitic side by creating different projects with creativity being the most important detail.
            With that I plan on showcasing my creativity through my projects and work.
          </Text>

          {/* Button Group */}
          <Group mt={30}>
            <Button  
                variant="outline"
                radius="sm" 
                size="md"
                color="violet"
                className={classes.control} 
                leftSection={<FaEnvelope size={14} />}>
              Send an email
            </Button>
            <Button 
                variant="outline"
                radius="sm" 
                size="md"
                color="violet"
                className={classes.control}
                leftSection={<FaLinkedin size={14} />}>
              LinkedIn
            </Button>
            <Button 
                variant="outline" 
                radius="sm"
                size="md"
                color="violet"
                className={classes.control} 
                leftSection={<FaGithub size={14} />}>
              Github
            </Button>
          </Group>
        </div>
        {/* <Image src={image.src} className={classes.image} /> */}
      </div>
    </Container>
  );
}
