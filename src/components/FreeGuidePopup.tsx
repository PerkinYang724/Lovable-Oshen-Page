import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const FreeGuidePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const popupShown = sessionStorage.getItem('freeGuidePopupShown');

    if (!popupShown && !hasShown) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('freeGuidePopupShown', 'true');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasShown, mounted]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleDownload = () => {
    window.open('https://perkin0909.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40perkin0909%3F&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true', '_blank');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999] flex items-center justify-center px-4 animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-background max-w-[380px] w-full rounded-3xl relative shadow-xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden p-8 border border-border">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 z-10 rounded-full p-1.5 hover:bg-secondary transition-colors"
          aria-label="Close popup"
        >
          <X className="h-4 w-4 text-muted-foreground" />
        </button>

        {/* Content */}
        <div className="text-center space-y-5">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-foreground tracking-tight">
              Welcome to the Community
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Building Oshen Studio.<br />
              Using AI without losing ourselves.
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="w-full bg-foreground hover:opacity-85 text-background font-medium py-3.5 px-6 rounded-full transition-all duration-200 text-sm"
          >
            Join my newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeGuidePopup;
