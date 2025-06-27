import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DashboardSidebar from '@/components/layout/DashboardSidebar';

// Custom UI Components
import DraggableProjectList, { Project } from '@/components/DraggableProjectList';

// shadcn/ui Components and lucide-react for icons
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

// Sample data for projects. In a real application, this would come from an API.
// Based on user journey, this could also start as an empty array.
const initialProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'E-commerce Platform Redesign',
    imageUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=300&h=300&fit=crop',
  },
  {
    id: 'proj-2',
    title: 'Mobile Banking App Concept',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=300&fit=crop',
  },
  {
    id: 'proj-3',
    title: 'SaaS Dashboard UI/UX',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop',
  },
];

const DashboardPage = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>(initialProjects);

  const handleCreateProject = () => {
    // Navigate to the editor page, consistent with the user journey and App.tsx routes
    navigate('/portfolio-editor');
  };

  const handleOrderChange = (reorderedProjects: Project[]) => {
    // In a real app, you would persist this new order to your backend.
    console.log('New project order:', reorderedProjects.map(p => p.id));
    setProjects(reorderedProjects);
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header isAuthenticated={true} />
      <div className="flex-1 md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />
        <main className="flex flex-col gap-4 p-4 lg:p-6">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">My Projects</h1>
            <Button onClick={handleCreateProject}>
              <PlusCircle className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </div>
          <div className="flex-1 rounded-lg">
             {/* The DraggableProjectList component shows a welcome message if the projects array is empty */}
            <DraggableProjectList projects={projects} onOrderChange={handleOrderChange} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardPage;