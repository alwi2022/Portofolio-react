// hooks/useNavigation.ts
import { useNavigate, useLocation } from 'react-router';
import { useCallback } from 'react';
import { NavItem } from '../utils/navigation';
import { useLang } from '../context/LangContext';
import { getLocalizedPath, getPageFromPath } from '../utils/seo';

export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useLang();

  const handleNavigation = useCallback((item: NavItem) => {
    if (item.type === 'route') {
      navigate(getLocalizedPath(item.target, lang));
    } else if (item.type === 'section') {
      if (getPageFromPath(location.pathname) === 'home') {
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        navigate(`${getLocalizedPath('/', lang)}#${item.target}`);
      }
    }
  }, [lang, navigate, location.pathname]);

  return { handleNavigation };
};
