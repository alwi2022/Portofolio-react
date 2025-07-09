// src/utils/navigation.ts
export interface NavItem {
    label: string;
    type: 'route' | 'section';
    target: string;
    description?: string; // Optional untuk future use
  }
  
  export const getNavigationItems = (lang: 'en' | 'id'): NavItem[] => {
    const labels = {
      en: ["Home", "Experience", "Projects", "Skills", "Certificates", "Contact"],
      id: ["Beranda", "Pengalaman", "Proyek", "Keahlian", "Sertifikat", "Kontak"]
    };
  
    return [
      { label: labels[lang][0], type: 'route', target: '/' },
      { label: labels[lang][1], type: 'section', target: 'Experience' },
      { label: labels[lang][2], type: 'section', target: 'Projects' },
      { label: labels[lang][3], type: 'section', target: 'Skills' },
      { label: labels[lang][4], type: 'section', target: 'Certificates' },
      { label: labels[lang][5], type: 'section', target: 'Contact' }
    ];
  };
  
  
  

