import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

const Community = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const hiddenFormRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  // Load eomail5 script and create hidden form
  useEffect(() => {
    if (!scriptLoaded.current && hiddenFormRef.current) {
      // Check if script already exists in the document
      const existingScript = document.querySelector('script[src*="eomail5.com/form"]');

      if (!existingScript) {
        // Create and load the script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://eomail5.com/form/426bb05c-d4bf-11f0-8d00-e31909f50d20.js';
        script.setAttribute('data-form', '426bb05c-d4bf-11f0-8d00-e31909f50d20');

        // Append script to hidden form container
        hiddenFormRef.current.appendChild(script);
        scriptLoaded.current = true;
      } else {
        scriptLoaded.current = true;
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Wait for eomail5 form to be ready
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Try to find and interact with the eomail5 form
      const container = hiddenFormRef.current;
      if (!container) {
        throw new Error('Form container not found');
      }

      // Method 1: Try to find form in iframe
      const iframe = container.querySelector('iframe');
      if (iframe) {
        try {
          const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
          if (iframeDoc) {
            const form = iframeDoc.querySelector('form');
            const emailInput = iframeDoc.querySelector('input[type="email"], input[name*="email"], input[id*="email"]') as HTMLInputElement;

            if (emailInput && form) {
              emailInput.value = email;
              emailInput.dispatchEvent(new Event('input', { bubbles: true }));
              emailInput.dispatchEvent(new Event('change', { bubbles: true }));

              // Try to find and click submit button
              const submitBtn = iframeDoc.querySelector('button[type="submit"], input[type="submit"], button:not([type])') as HTMLElement;
              if (submitBtn) {
                submitBtn.click();
              } else {
                form.submit();
              }

              toast({
                title: "Welcome to the Flow! 🌊",
                description: "Check your email for the first insights.",
              });
              setEmail('');
              setIsSubmitting(false);
              return;
            }
          }
        } catch (err) {
          // Cross-origin restriction - can't access iframe
          console.log('Cannot access iframe (cross-origin)');
        }
      }

      // Method 2: Try to find form directly in container
      const form = container.querySelector('form');
      if (form) {
        const emailInput = form.querySelector('input[type="email"], input[name*="email"], input[id*="email"]') as HTMLInputElement;
        if (emailInput) {
          emailInput.value = email;
          emailInput.dispatchEvent(new Event('input', { bubbles: true }));
          emailInput.dispatchEvent(new Event('change', { bubbles: true }));

          const submitBtn = form.querySelector('button[type="submit"], input[type="submit"]') as HTMLElement;
          if (submitBtn) {
            submitBtn.click();
          } else {
            form.submit();
          }

          toast({
            title: "Welcome to the Flow! 🌊",
            description: "Check your email for the first insights.",
          });
          setEmail('');
          setIsSubmitting(false);
          return;
        }
      }

      // If we can't programmatically submit, show error
      throw new Error('Unable to submit to eomail5. Please try the popup form instead.');
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
            <Button type="submit" disabled={isSubmitting} className="cinematic-cta whitespace-nowrap">
              {isSubmitting ? "Joining..." : "Join the Flow →"}
            </Button>
          </form>

          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime. Just valuable insights.
          </p>
        </div>
      </div>

      {/* Hidden eomail5 form container for submission */}
      <div
        ref={hiddenFormRef}
        id="eomail5-community-hidden-form"
        data-form="426bb05c-d4bf-11f0-8d00-e31909f50d20"
        style={{ position: 'absolute', visibility: 'hidden', height: 0, overflow: 'hidden' }}
      ></div>
    </section>
  );
};

export default Community;
