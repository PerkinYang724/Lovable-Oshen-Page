import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Community = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Welcome to the Flow! 🌊",
      description: "Check your email for the first insights.",
    });
    setEmail('');
  };

  return (
    <section className="py-20 cinematic-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="cinematic-card p-12 text-center">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mb-6">
            <Mail className="h-10 w-10 text-black" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 cinematic-text-shadow">
            Join the <span className="cinematic-gradient-text">Flow</span>
          </h2>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get weekly AI tools, creative insights, and behind-the-scenes stories from my journey building Oshen Studio
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button type="submit" className="cinematic-cta whitespace-nowrap">
              Join the Flow →
            </Button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime. Just valuable insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;
