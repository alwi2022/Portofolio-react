// types/project.d.ts
export interface ProjectType {
  title: string;
  description: string;
  image: string;
  github: string;
  tags: string[];
  status: string;
  featured: boolean;
  links: { labelKey: string; url: string }[];
  live?: string;
  beta?: string;
  expo?: string;
  website?: string;
}


