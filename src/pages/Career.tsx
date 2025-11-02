
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import CareerHero from '@/components/career/CareerHero';
import CareerPositions from '@/components/career/CareerPositions';
import CareerBenefits from '@/components/career/CareerBenefits';
import CareerCTA from '@/components/career/CareerCTA';

const Career = () => {
  return (
    <div className="min-h-screen cinematic-section">
      <SEO 
        title="Careers at Oshen Studio - Join Our Team"
        description="Join Oshen Studio's creative team! We're looking for talented creators and builders to help empower students and creators with AI tools and creative workflows."
        keywords="Oshen Studio careers, creator jobs, AI tools jobs, student founder opportunities"
        url="https://oshenstudio.com/career"
      />
      
      <ModernHeader />
      <Breadcrumb />
      
      <main className="pt-16">
        <CareerHero />
        <CareerPositions />
        <CareerBenefits />
        <CareerCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Career;
