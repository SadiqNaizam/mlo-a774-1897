import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import ProjectEditorForm from '@/components/ProjectEditorForm';
import ThemeCustomizer from '@/components/ThemeCustomizer';

const PortfolioEditorPage: React.FC = () => {
  console.log('PortfolioEditorPage loaded');

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <DashboardSidebar />
      <div className="flex flex-col">
        <Header isAuthenticated={true} />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Portfolio Editor</h1>
          </div>
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="projects">Project Editor</TabsTrigger>
              <TabsTrigger value="appearance">Theme & Appearance</TabsTrigger>
            </TabsList>
            <TabsContent value="projects" className="mt-6">
              <ProjectEditorForm />
            </TabsContent>
            <TabsContent value="appearance" className="mt-6">
              <div className="w-full max-w-3xl mx-auto">
                <ThemeCustomizer />
              </div>
            </TabsContent>
          </Tabs>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioEditorPage;