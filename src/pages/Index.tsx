import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PictureCollageSection from '@/components/PictureCollageSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import GrantsSection from '@/components/GrantsSection';
import ImpactMetrics from '@/components/ImpactMetrics';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PictureCollageSection />
      <WhatWeOfferSection />
      <GrantsSection />
      <ImpactMetrics />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
