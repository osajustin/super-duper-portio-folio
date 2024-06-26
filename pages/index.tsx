import { Experience } from '@/components/Experience/Experience';
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects';
import { Hero } from '@/components/Hero/Hero';
import { Navbar } from '@/components/Navbar/navbar';
import { Footer } from '@/components/Footer/Footer'
import { Container } from '@mantine/core';

export default function HomePage() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <Experience />
      <FeaturedProjects />
      <Footer />
    </Container>
  );
}
