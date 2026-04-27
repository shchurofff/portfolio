export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface Project {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  planned?: string;
  techStack: string[];
  links: ProjectLink[];
  image?: string;
}
