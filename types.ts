export interface Project {
  id: string;
  title: string;
  description: string;
  tools: string[];
  caseStudy?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  roleTitle: string;
  description: string;
  features: string[];
  tools: string[];
  iconType: 'GIS' | 'Map' | 'Digitize' | 'CAD' | 'Satellite' | 'Viz' | 'Academic';
}

export enum InquiryType {
  GEOMATICS = "Geomatics Services",
  ACADEMIC = "Academic / Admission",
  COLLABORATION = "Project Collaboration",
  GENERAL = "General Inquiry"
}