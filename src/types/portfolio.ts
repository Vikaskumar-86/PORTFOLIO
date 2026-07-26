export type ThemeMode = 'light' | 'dark';

export interface Skill {
  name: string;
  category: 'Languages' | 'Frontend' | 'Backend & Database' | 'Tools & Version Control';
  level: number; // 0 - 100
  iconName: string;
  color: string;
  experienceYears?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  category: 'AI & Automation' | 'IoT & Security' | 'Web Application';
  keyFeatures: string[];
  hasInteractiveDemo?: boolean;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
  verificationUrl: string;
  image: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade: string;
  description: string;
  coursework: string[];
  achievements: string[];
  current?: boolean;
}

export interface ExperienceOrAchievement {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  subtitles: string[];
  bio: string;
  careerObjective: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  avatar: string;
}
