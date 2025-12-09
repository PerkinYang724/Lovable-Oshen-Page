import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import lovableLogo from '@/assets/lovable-logo.png';

interface LovableOfferPopupProps {
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const LovableOfferPopup = ({ isOpen: externalIsOpen, onOpenChange }: LovableOfferPopupProps = {}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60); // 3 days in seconds
  
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = (open: boolean) => {
    if (onOpenChange) {
      onOpenChange(open);
    } else {
      setInternalIsOpen(open);
    }
  };

  useEffect(() => {
    // Show popup after 5 seconds, only once per session
    if (!hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [hasShown]);

  useEffect(() => {
    // Countdown timer
    if (isOpen && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const mins = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;
    
    return `${days}d ${hours}h ${mins}m ${secs}s`;
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/oshenstudio', '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md p-0 overflow-hidden border-none shadow-none sm:max-w-lg">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 z-50 w-8 h-8 rounded-full border-2 border-orange-500 bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:bg-orange-500/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
        >
          <X className="h-4 w-4 text-foreground" />
          <span className="sr-only">Close</span>
        </button>

        <div className="relative bg-gradient-to-br from-orange-500/10 via-background to-pink-500/10 p-8">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          {/* Lovable Logo */}
          <div className="flex justify-center mb-4 relative z-10">
            <div className="relative">
              <img src={lovableLogo} alt="Lovable" className="h-16 w-16 transform transition-transform hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-500 blur-xl opacity-30 animate-pulse"></div>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="mb-4 text-center relative z-10">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg transform transition-all hover:scale-105">
              🔥 Expires in {formatTime(timeLeft)}
            </div>
          </div>

          {/* Header */}
          <div className="text-center mb-6 relative z-10">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-4 shadow-lg transform transition-all hover:scale-105 animate-bounce">
              💥 EXCLUSIVE OFFER
            </div>
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              Special for Lovable Users
            </h2>
            <p className="text-base text-muted-foreground font-semibold">
              Limited Time Only!
            </p>
          </div>

          {/* Main Offer Box */}
          <div className="relative z-10 bg-gradient-to-br from-card via-card to-primary/5 border-2 border-gradient-to-r from-orange-500 to-pink-500 rounded-xl p-6 mb-6 shadow-2xl transform transition-all hover:scale-[1.02] hover:shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-pink-500/10 rounded-xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-4">
                <div className="text-2xl font-bold text-primary mb-3 tracking-tight">
                  3 Social Media Videos
                </div>
                <div className="flex items-center justify-center gap-4 mb-3">
                  <span className="text-xl text-muted-foreground line-through opacity-70">$250</span>
                  <div className="relative">
                    <span className="text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
                      $100
                    </span>
                    <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-pink-500/20 blur-lg rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic font-semibold">For Lovable Users Only</p>
              </div>

              <p className="text-center text-base text-foreground/90 mb-4 font-medium">
                Perfect for founders who need scroll-stopping content fast.
              </p>

              <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-primary/20 rounded-lg p-4 shadow-inner">
                <p className="text-center text-base font-bold text-foreground">
                  🔥 Full production: editing, captions, pacing & hooks
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mb-4 relative z-10">
            <Button 
              onClick={handleInstagramClick}
              className="w-full bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 bg-[length:200%_auto] hover:bg-[length:300%_auto] text-white font-bold text-lg py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-gradient"
            >
              <span className="flex items-center justify-center gap-2">
                👉 DM "LOVABLE" on Instagram
              </span>
            </Button>
          </div>

          {/* Fine Print */}
          <p className="text-center text-sm text-muted-foreground font-medium relative z-10">
            Get agency-grade video content for startup prices.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LovableOfferPopup;
