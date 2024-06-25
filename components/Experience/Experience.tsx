import { Container, Title, Button, Group, Text, List, Divider } from '@mantine/core';
import classes from './Experience.module.css';
import workHistory from './../../public/workHistory.json'
import { useState } from 'react';

const getUniqueCompanies = (workHistory: any[]) => {
  const companies = workHistory.map((job) => job.company);
  return [...companies];
};

export function Experience() {
  
  
  const uniqueCompanies = getUniqueCompanies(workHistory);
  const [selectedCompany, setSelectedCompany] = useState(uniqueCompanies[0]);

  const handleButtonClick = (company: any) => {
    setSelectedCompany(company);
  };

  const filteredWorkHistory = workHistory.filter((job) => job.company === selectedCompany);


  return (
    <Container size="md">
      <Group justify="center" gap="lg" grow>
        {uniqueCompanies.map((company, index) => (
          <Button
            key={index}
            variant="transparent"
            color="rgba(0, 0, 0, 1)"
            onClick={() => handleButtonClick(company)}
          >
            {company}
          </Button>
        ))}
      </Group>

      <Container>
        {filteredWorkHistory.map((job, index) => (
          <Group key={index} style={{ marginBottom: '20px' }}>
            <Title order={3}>{job.role}</Title>
            <Text size="lg">{job.company}</Text>
            <Text size="sm">{job.date}</Text>
            <List withPadding>
              {job.points.map((point, idx) => (
                <List.Item key={idx}>{point}</List.Item>
              ))}
            </List>
          </Group>
        ))}
      </Container>
      <Divider style={{ marginTop: '4rem' }} />
    </Container>
  );
}
