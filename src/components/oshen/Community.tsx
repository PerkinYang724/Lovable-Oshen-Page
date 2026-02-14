import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Community = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        let errorMessage = 'Subscription failed';
        try {
          const error = await response.json();
          errorMessage = error.error || errorMessage;
        } catch {
          errorMessage = response.status === 404
            ? 'Subscription service is not available in development. Please deploy to Vercel or set up environment variables.'
            : `Error: ${response.statusText}`;
        }
        throw new Error(errorMessage);
      }

      toast({
        title: "Welcome to the community",
        description: "Check your email for the first insights.",
      });
      setEmail('');
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Join the Flow
        </h2>

        <p className="text-base text-muted-foreground mb-10 leading-relaxed">
          Get weekly AI tools, creative insights, and behind-the-scenes stories from my journey building Oshen Studio.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 rounded-full px-5 bg-card border-border text-foreground placeholder:text-muted-foreground"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-12 px-6 rounded-full bg-foreground text-background hover:opacity-85 transition-opacity text-sm font-medium whitespace-nowrap"
          >
            {isSubmitting ? "Joining..." : "Subscribe"}
          </Button>
        </form>

        <p className="text-xs text-muted-foreground/60">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
};

export default Community;
