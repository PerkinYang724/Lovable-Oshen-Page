import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const FreeGuidePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only show popup on client-side after component is mounted
    if (!mounted) return;

    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('freeGuidePopupShown');

    if (!popupShown && !hasShown) {
      // Show popup after 3 seconds (3000ms)
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
    // Close if clicking on overlay (not the popup box)
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleDownload = () => {
    // Redirect to Substack subscription page
    window.open('https://perkin0909.substack.com/subscribe?next=https%3A%2F%2Fsubstack.com%2F%40perkin0909%3F&utm_source=profile-page&utm_medium=web&utm_campaign=substack_profile&just_signed_up=true', '_blank');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[9999] flex items-center justify-center px-4 animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-white max-w-[420px] w-full rounded-2xl relative shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden p-8">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 rounded-full p-1.5 bg-gray-100 hover:bg-gray-200 transition-all opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          aria-label="Close popup"
        >
          <X className="h-4 w-4 text-gray-700" />
        </button>

        {/* Content */}
        <div className="text-center space-y-6">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Welcome to the Community
            </h2>
            <p className="text-gray-600">
              Building Oshen Studio. <br />
              Using AI without losing ourselves.
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl"
          >
            Join my newsletter
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeGuidePopup;
