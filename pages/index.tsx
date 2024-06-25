import { Experience } from '@/components/Experience/Experience';
import { Hero } from '@/components/Hero/Hero';
import { Navbar } from '@/components/Navbar/navbar';
import { Container } from '@mantine/core';

export default function HomePage() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Experience />
    </Container>
  );
}
