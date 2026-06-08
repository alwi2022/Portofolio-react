// types/project.d.ts
export interface ProjectType {
  title: string;
  description: string;
  image: string;
  tags: readonly string[];
  status: string;
  featured: boolean;
  duration: string;
  links: readonly {
    labelKey: "website" | "Docs" | "github" | "expo" | "demo";
    url: string;
  }[];
}

export interface CertificateType {
  title: string;
  image: string;
  credentialUrl?: string;
  showTitle: boolean;
}

export interface ExperienceType {
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: readonly string[];
  technologies: readonly string[];
}


