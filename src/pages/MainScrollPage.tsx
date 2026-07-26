import React from 'react';
import { Hero } from '../components/home/Hero';
import { QuickStats } from '../components/home/QuickStats';
import { AboutSection } from '../components/about/AboutSection';
import { SkillsSection } from '../components/skills/SkillsSection';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { CertificatesSection } from '../components/certificates/CertificationsSection';
import { EducationSection } from '../components/education/EducationSection';
import { ContactSection } from '../components/contact/ContactSection';

interface MainScrollPageProps {
  onOpenResume: () => void;
}

export const MainScrollPage: React.FC<MainScrollPageProps> = ({ onOpenResume }) => {
  return (
    <div className="space-y-4">
      <Hero onOpenResume={onOpenResume} />
      <QuickStats />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};
