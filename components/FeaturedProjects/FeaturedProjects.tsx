import { Container, Grid, Card, Image, Text, Group, GridCol, Divider, SimpleGrid } from '@mantine/core';
import projects from './../../public/projects.json';
import { FaGithub, FaLink } from 'react-icons/fa';
import classes from './FeaturedProjects.module.css';

const FeaturedProjects = () => {
  return (
    <Container className={classes.featuredProjects}>
      <Text className={classes.sectionTitle}>
        FEATURED PROJECTS
      </Text>
      <SimpleGrid
        cols={{ base: 1, sm: 2 }}
        spacing={{ base: 10, sm: 'xl' }}
        verticalSpacing={{ base: 'md', sm: 'xl' }}>
        {projects.map((project, index) => (
          <div>
            <Card radius="md" style={{ width: '100%', maxWidth: '540px', zIndex: -1, position: 'relative'}}>
              
              <Card.Section>
                <Image className={classes.image} src={project.image} alt={project.title} height={160} />
              </Card.Section>

              <Card.Section>
                <Group justify="space-between" align="stretch">
                    <Text className={classes.projectTitle}>{project.title}</Text>
                  
                  <Group>
                      <FaGithub />
                      <FaLink />
                  </Group>
                </Group>
                <Text className={classes.projectDescription}>
                  {project.description}
                </Text>
                <Text className={classes.projectTags}>
                  {project.tags.join(' - ')}
                </Text>
              </Card.Section>
             
                
                
              
            </Card>
          </div>
        ))}
      </SimpleGrid>
      <Divider style={{ marginTop: '4rem', marginBottom: '4rem' }} />
    </Container>
  );
};

export default FeaturedProjects;
