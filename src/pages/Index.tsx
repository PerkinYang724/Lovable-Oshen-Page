import { useState } from 'react';
import ModernHeader from '@/components/ModernHeader';
import Hero from '@/components/Hero';
import MissionSection from '@/components/oshen/MissionSection';
import FeaturedTools from '@/components/oshen/FeaturedTools';
import CreatorJourney from '@/components/oshen/CreatorJourney';
import Projects from '@/components/oshen/Projects';
import Community from '@/components/oshen/Community';
import AboutPerkin from '@/components/oshen/AboutPerkin';
import Collaborate from '@/components/oshen/Collaborate';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import FreeGuidePopup from '@/components/FreeGuidePopup';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Oshen Studio - AI × Flow × Freedom | Student Founder & Creator"
        description="Oshen Studio by Perkin - Empowering students and creators with AI tools, creative workflows, and entrepreneurial insights. Learn AI, build projects, and design a life of focus, freedom, and flow."
        keywords="AI tools for creators, student founder, AI workflows, creative automation, productivity tools, entrepreneurship, content creation, AI learning, student projects, tech creator"
        url="https://oshenstudio.com"
        type="website"
        image="https://oshenstudio.com/lovable-uploads/42844e19-815c-453d-9d1d-66e5ec0590fb.png"
      />
      
      <ModernHeader />
      <Hero />
      <MissionSection />
      <div id="tools">
        <FeaturedTools />
      </div>
      <div id="journey">
        <CreatorJourney />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="community">
        <Community />
      </div>
      <div id="about">
        <AboutPerkin />
      </div>
      <Collaborate />
      <Footer />
      <FreeGuidePopup />
    </div>
  );
};

export default Index;
