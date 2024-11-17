/* eslint-disable @typescript-eslint/no-shadow */
import { Container, Title, Group, Text, List, Divider, UnstyledButton, Stack, Flex } from '@mantine/core';
import { useState } from 'react';
import classes from './Experience.module.css';
import workHistory from '../../public/workHistory.json';

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
      {/* Section Title */}
      <Text className={classes.sectionTitle}>EXPERIENCE</Text>

      {/* Button group of companies */}
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify={{ base: 'space-between', sm: 'center' }}>
        {uniqueCompanies.map((company, index) => (
          <UnstyledButton
            className={classes.button}
            key={index}
            onClick={() => handleButtonClick(company)}
          >
            {company}
          </UnstyledButton>
        ))}
      </Flex>

      {/* Experiences of jobs */}
      <Container className={classes.experience}>
        {filteredWorkHistory.map((job, index) => (
          <Stack key={index}>
            <Group justify="space-between">
              <Title className={classes.role}>{job.role}</Title>
              <Text className={classes.date}>{job.date}</Text>
            </Group>
            <Text className={classes.company}>{job.company}</Text>
            <List className={classes.list}>
              {job.points.map((point, idx) => (
                <List.Item key={idx} className={classes.listItem}>
                  <span className={classes.icon}>-</span>
                  <span>{point}</span>
                </List.Item>
              ))}
            </List>
          </Stack>
        ))}
      </Container>

      <Divider style={{ marginTop: '4rem' }} />
    </Container>
  );
}
