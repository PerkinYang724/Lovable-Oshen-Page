
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import AboutPerkin from '@/components/oshen/AboutPerkin';

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="About Perkin - Oshen Studio"
        description="Meet Perkin, the student founder behind Oshen Studio. Learn about his journey combining AI, creativity, and entrepreneurship."
        keywords="Perkin, student founder, Oshen Studio, AI tools, creator"
        url="https://oshenstudio.com/about"
      />

      <ModernHeader />
      <Breadcrumb />

      <div className="pt-32 pb-20">
        <AboutPerkin />
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
