  // hooks/useHashScroll.ts
  import { useEffect } from 'react';
  import { useLocation } from 'react-router';
  
  export const useHashScroll = () => {
    const location = useLocation();
  
    useEffect(() => {
      // Check if there's a hash in the URL
      if (location.hash) {
        // Remove the # from the hash
        const elementId = location.hash.substring(1);
        
        // Small delay to ensure the page has rendered
        const timer = setTimeout(() => {
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 100);
  
        return () => clearTimeout(timer);
      }
    }, [location.hash]);
  };
  