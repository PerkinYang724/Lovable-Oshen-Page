const AboutPerkin = () => {
  return (
    <section className="py-20 cinematic-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden cinematic-card">
              <img 
                src="/lovable-uploads/47f8806e-3150-4774-b551-83e624d0fa40.jpg" 
                alt="Perkin - Founder of Oshen Studio"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative flares */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl cinematic-flare"></div>
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-yellow-400/15 rounded-full blur-3xl cinematic-flare" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white cinematic-text-shadow">
              Meet <span className="cinematic-gradient-text">Perkin</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                Hey! I'm a student founder passionate about combining AI, creativity, and entrepreneurship to build meaningful projects.
              </p>
              
              <p>
                I started Oshen Studio because I believe technology should amplify human creativity, not replace it. After spending countless hours learning AI tools and building automation workflows, I realized these skills could help other creators and students like me.
              </p>
              
              <p>
                When I'm not coding or creating content, you'll find me exploring new AI tools, working on my startup TwoGether, or thinking about how to design a life with more focus, freedom, and flow.
              </p>
              
              <p className="text-yellow-400 font-semibold">
                My mission? Share what I learn so you can build faster, create better, and live with intention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPerkin;
