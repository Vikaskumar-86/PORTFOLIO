import React, { useState } from 'react';
import { HashRouter, Routes, Route} from "react-router-dom";
import { RootLayout } from './layouts/RootLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { EducationPage } from './pages/EducationPage';
import { ContactPage } from './pages/ContactPage';
import { NotFound } from './pages/NotFound';

// Wrapper components to pass outlet context props
function HomeRouteWrapper() {
  const { onOpenResume } = useOutletContext<{ onOpenResume: () => void }>();
  return <HomePage onOpenResume={onOpenResume} />;
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomeRouteWrapper />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="skills" element={<SkillsPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="certificates" element={<CertificatesPage />} />
          <Route path="education" element={<EducationPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
