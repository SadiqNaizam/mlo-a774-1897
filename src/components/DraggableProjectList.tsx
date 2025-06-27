import React, { useState, useEffect } from 'react';
import { Reorder } from 'framer-motion';
import { GripVertical, FolderKanban } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

// Define the shape of a single project
export interface Project {
  id: string;
  title: string;
  imageUrl?: string;
}

// Define the props for the DraggableProjectList component
interface DraggableProjectListProps {
  projects: Project[];
  onOrderChange: (reorderedProjects: Project[]) => void;
}

const DraggableProjectList: React.FC<DraggableProjectListProps> = ({ projects: initialProjects, onOrderChange }) => {
  const [items, setItems] = useState<Project[]>(initialProjects);

  // Sync state if the initial projects prop changes from the parent
  useEffect(() => {
    setItems(initialProjects);
  }, [initialProjects]);

  console.log('DraggableProjectList loaded');

  const handleReorder = (newOrder: Project[]) => {
    // Update local state for immediate UI feedback
    setItems(newOrder);
    // Propagate the change to the parent component
    onOrderChange(newOrder);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Your Projects</CardTitle>
        <CardDescription>Drag and drop the projects below to change their order on your public portfolio.</CardDescription>
      </CardHeader>
      <CardContent>
        {items.length === 0 ? (
          <Alert>
            <FolderKanban className="h-4 w-4" />
            <AlertTitle>No Projects Yet!</AlertTitle>
            <AlertDescription>
              You haven't added any projects. Click the "Create Project" button to get started.
            </AlertDescription>
          </Alert>
        ) : (
          <Reorder.Group axis="y" values={items} onReorder={handleReorder} className="flex flex-col gap-2">
            {items.map((project) => (
              <Reorder.Item
                key={project.id}
                value={project}
                className="bg-white dark:bg-slate-900 p-3 border rounded-lg shadow-sm flex items-center gap-4 cursor-grab active:cursor-grabbing transition-shadow"
                whileDrag={{ boxShadow: '0px 4px 12px rgba(0,0,0,0.1)' }}
              >
                <div className="text-muted-foreground">
                  <GripVertical className="h-5 w-5" />
                </div>
                <Avatar>
                  <AvatarImage src={project.imageUrl} alt={project.title} className="object-cover" />
                  <AvatarFallback>{project.title.charAt(0).toUpperCase()}</AvatarFallback>
                </Avatar>
                <span className="font-medium flex-grow">{project.title}</span>
              </Reorder.Item>
            ))}
          </Reorder.Group>
        )}
      </CardContent>
    </Card>
  );
};

export default DraggableProjectList;