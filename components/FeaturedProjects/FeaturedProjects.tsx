import { Container, Grid, Card, Image, Text, Group, GridCol, Divider } from '@mantine/core';
import projects from './../../public/projects.json';
import { FaGithub, FaLink } from 'react-icons/fa';
import classes from './FeaturedProjects.module.css';

const FeaturedProjects = () => {
  return (
    <Container className={classes.featuredProjects}>
      <Text className={classes.sectionTitle}>
        FEATURED PROJECTS
      </Text>
      <Grid justify="space-between">
        {projects.map((project, index) => (
          <GridCol key={index} span={6} style={{ display: 'flex', justifyContent: 'center' }}>
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
          </GridCol>
        ))}
      </Grid>
      <Divider style={{ marginTop: '4rem', marginBottom: '4rem' }} />
    </Container>
  );
};

export default FeaturedProjects;
