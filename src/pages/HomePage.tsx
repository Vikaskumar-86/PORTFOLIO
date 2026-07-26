import React from 'react';
import { MainScrollPage } from './MainScrollPage';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  return <MainScrollPage onOpenResume={onOpenResume} />;
};
