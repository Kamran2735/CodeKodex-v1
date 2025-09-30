// app/page.tsx
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="relative">
      <Header /> 
      <Hero heroImg="/Hero/hero.png" />
    
    </main>
  );
}