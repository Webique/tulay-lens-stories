import { Suspense } from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import LanguageToggle from '@/components/LanguageToggle';

const Index = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-burgundy"></div>
    </div>}>
      <div className="min-h-screen">
        <LanguageToggle />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <CTASection />
        <Footer />
      </div>
    </Suspense>
  );
};

export default Index;
