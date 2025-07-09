// hooks/useNavigation.ts
import { useNavigate, useLocation } from 'react-router';
import { useCallback } from 'react';
import { NavItem } from '../utils/navigation';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = useCallback((item: NavItem) => {
    if (item.type === 'route') {
      // Direct route navigation
      navigate(item.target);
    } else if (item.type === 'section') {
      // Section navigation
      if (location.pathname === '/') {
        // We're on homepage, scroll to section
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // We're on a different page, navigate to homepage with hash
        navigate(`/#${item.target}`);
      }
    }
  }, [navigate, location.pathname]);

  return { handleNavigation };
};