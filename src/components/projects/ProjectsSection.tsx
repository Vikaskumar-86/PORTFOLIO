import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { PROJECTS_DATA } from '../../utils/constants';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Project } from '../../types/portfolio';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Featured Engineering Works"
          title="Featured Projects"
          subtitle="Explore key software projects featuring AI chatbot capabilities, computer vision security systems, and student management portals."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              onSelectProject={p => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Detail / Simulator Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
