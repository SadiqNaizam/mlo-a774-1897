import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { LayoutGrid, Layers, Palette, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const DashboardSidebar: React.FC = () => {
  console.log('DashboardSidebar loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string => {
    return cn(
      'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
      isActive && 'bg-muted text-primary'
    );
  };

  return (
    <aside className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <Link to="/dashboard" className="flex items-center gap-2 font-semibold">
            <LayoutGrid className="h-6 w-6 text-primary" />
            <span>ShowcaseHub</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavLink to="/dashboard" end className={navLinkClasses}>
              <Layers className="h-4 w-4" />
              My Projects
            </NavLink>
            <NavLink to="/portfolio-editor" className={navLinkClasses}>
              <Palette className="h-4 w-4" />
              Appearance
            </NavLink>
            <NavLink to="/dashboard" className={navLinkClasses}>
              <Settings className="h-4 w-4" />
              Account Settings
            </NavLink>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;