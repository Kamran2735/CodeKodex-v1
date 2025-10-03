// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ClientCarousel from '@/components/Clients';
import Steps from '@/components/Steps';
import PortfolioSection from '@/components/Portfolio';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonial from '@/components/Testimonial';
import Contact from '@/components/Contact';
import Blog from '@/components/Blog';


export default function Home() {
  return (
    <main className="relative">
      <Header /> 
      <Hero heroImg="/Hero/hero.png" />
      <ClientCarousel />
      <Steps />
      <PortfolioSection />
      <WhyChooseUs />
      <Testimonial />
      <Contact />
      <Blog />
    </main>
  );
}