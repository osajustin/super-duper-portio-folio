import { Container } from '@mantine/core';
import { Experience } from '@/components/Experience/Experience';
import FeaturedProjects from '@/components/FeaturedProjects/FeaturedProjects';
import { Hero } from '@/components/Hero/Hero';
import { Navbar } from '@/components/Navbar/navbar';
import { Footer } from '@/components/Footer/Footer';
//import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <Container>
      <Navbar />
      <Hero />
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <FeaturedProjects />
      </section>
      <Footer />
    </Container>
  );
}
