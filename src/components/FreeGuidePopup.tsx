import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const FreeGuidePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [mounted, setMounted] = useState(false);
  const scriptLoaded = useRef(false);
  const formContainerRef = useRef<HTMLDivElement>(null);

  // Ensure component is mounted (client-side only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Inject CSS to remove white edges from eomail5 form
  useEffect(() => {
    if (isOpen) {
      const style = document.createElement('style');
      style.id = 'eomail5-popup-styles';
      style.textContent = `
        #eomail5-form-container,
        #eomail5-form-container * {
          margin: 0 !important;
          padding: 0 !important;
        }
        #eomail5-form-container form {
          padding: 0 !important;
          margin: 0 !important;
        }
        #eomail5-form-container iframe {
          border: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
      `;
      document.head.appendChild(style);

      return () => {
        const existingStyle = document.getElementById('eomail5-popup-styles');
        if (existingStyle) {
          existingStyle.remove();
        }
      };
    }
  }, [isOpen]);

  // Load eomail5 script when popup opens
  useEffect(() => {
    if (isOpen && !scriptLoaded.current && formContainerRef.current) {
      // Check if script already exists in the document
      const existingScript = document.querySelector('script[src*="eomail5.com/form"]');

      if (!existingScript) {
        // Create and load the script using the exact format provided
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://eomail5.com/form/426bb05c-d4bf-11f0-8d00-e31909f50d20.js';
        script.setAttribute('data-form', '426bb05c-d4bf-11f0-8d00-e31909f50d20');

        // Append script to form container
        formContainerRef.current.appendChild(script);
        scriptLoaded.current = true;
      } else {
        // Script already exists, just mark as loaded
        scriptLoaded.current = true;
        // The form should render automatically if the script is already loaded
      }
    }
  }, [isOpen]);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/65 backdrop-blur-sm z-[9999] flex items-center justify-center px-4 animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-white max-w-[420px] w-full rounded-2xl relative shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute right-3 top-3 z-10 rounded-full p-1.5 bg-gray-100 hover:bg-gray-200 transition-all opacity-80 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          aria-label="Close popup"
        >
          <X className="h-4 w-4 text-gray-700" />
        </button>

        {/* eomail5 form container - no padding to remove white edges */}
        <div
          ref={formContainerRef}
          id="eomail5-form-container"
          data-form="426bb05c-d4bf-11f0-8d00-e31909f50d20"
          className="eomail5-form-container"
        ></div>
      </div>
    </div>
  );
};

export default FreeGuidePopup;
