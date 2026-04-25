/**
 * App — Medcom AS
 * Section order: Nav → Hero → ServicesGrid → AioReveal → Process → StatsInline → Contact → Footer
 */
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { AioReveal } from './components/AioReveal';
import { Process } from './components/Process';
import { StatsInline } from './components/StatsInline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Nav />
      <Hero />
      <ServicesGrid />
      <AioReveal />
      <Process />
      <StatsInline />
      <Contact />
      <Footer />
    </div>
  );
}
