const AboutPerkin = () => {
  return (
    <section className="py-24 bg-card/50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="aspect-square rounded-3xl overflow-hidden bg-card border border-border">
              <img
                src="/lovable-uploads/IMG_5768.jpeg"
                alt="Perkin - Founder of Oshen Studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Meet Perkin
            </h2>

            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Hey! I'm a student founder passionate about combining AI, creativity, and entrepreneurship to build meaningful projects.
              </p>

              <p>
                I started Oshen Studio because I believe technology should amplify human creativity, not replace it. After spending countless hours learning AI tools and building automation workflows, I realized these skills could help other creators and students like me.
              </p>

              <p>
                When I'm not coding or creating content, you'll find me exploring new AI tools, working on my startup TwoGether, or thinking about how to design a life with more focus, freedom, and flow.
              </p>

              <p className="text-foreground font-medium">
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
