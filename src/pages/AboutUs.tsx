
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import Breadcrumb from '@/components/Breadcrumb';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutFounders from '@/components/about/AboutFounders';
import AboutMission from '@/components/about/AboutMission';
import AboutWhyChoose from '@/components/about/AboutWhyChoose';


const AboutUs = () => {
  const faqs = [
    {
      question: "What is Oshen Studio?",
      answer: "Oshen Studio is a platform empowering students and creators with AI tools, creative workflows, and entrepreneurial insights."
    },
    {
      question: "Who is behind Oshen Studio?",
      answer: "Oshen Studio is run by Perkin, a student founder and creator passionate about helping others build projects and design a life of focus, freedom, and flow."
    },
    {
      question: "What does Oshen Studio offer?",
      answer: "We provide AI tools recommendations, creative workflows, entrepreneurship insights, and resources to help students and creators succeed in their projects."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="About Oshen Studio - AI × Flow × Freedom"
        description="Learn about Oshen Studio's story and mission. Empowering students and creators with AI tools, creative workflows, and entrepreneurial insights."
        keywords="Oshen Studio about, student founder, AI tools for creators, creative workflows, entrepreneurship"
        url="https://oshenstudio.com/about"
      />
      
      <StructuredData type="faq" faqs={faqs} />
      
      <ModernHeader />
      <Breadcrumb />
      
      <AboutHero />
      
      <AboutStory />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AboutFounders />
      </div>
      
      <AboutMission />
      
      <AboutWhyChoose />
      <Footer />
    </div>
  );
};

export default AboutUs;
