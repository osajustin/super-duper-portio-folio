// components/FeaturedProjects.js
import { Container, Grid, Card, Image, Text, Group, Badge, GridCol, Divider } from '@mantine/core';
import projects from './../../public/projects.json';
import { FaGithub, FaLink } from 'react-icons/fa';

const FeaturedProjects = () => {
  return (
    <Container>
      <Text size="xl" style={{ marginBottom: '20px' }}>
        Featured Projects
      </Text>
      <Grid justify="space-between">
        {projects.map((project, index) => (
          <GridCol key={index} span={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Card shadow="sm" padding="lg" radius="md" style={{ width: '100%', maxWidth: '540px' }}>
              <Card.Section>
                <Image src={project.image} alt={project.title} height={160} />
              </Card.Section>
                <Grid>
                    <GridCol span={6}>
                        <Text>{project.title}</Text>
                    </GridCol>
                    <GridCol span={3} offset={3}>
                        <FaGithub />
                        <FaLink />
                    </GridCol>
                </Grid>
                
                
              <Text size="sm" style={{ color: '#666' }}>
                {project.description}
              </Text>
              <Group style={{ marginTop: 10 }}>
                {project.tags.map((tag, idx) => (
                  <Badge key={idx} color="blue" variant="light">
                    {tag}
                  </Badge>
                ))}
              </Group>
            </Card>
          </GridCol>
        ))}
      </Grid>
      <Divider style={{ marginTop: '4rem', marginBottom: '4rem' }} />
    </Container>
  );
};

export default FeaturedProjects;
