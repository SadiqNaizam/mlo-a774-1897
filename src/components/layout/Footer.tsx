import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <LayoutGrid className="h-6 w-6 text-primary hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {currentYear} ShowcaseHub. All rights reserved.
          </p>
        </div>
        <nav className="flex items-center gap-4 md:gap-6 text-sm text-muted-foreground">
          <Link to="#" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link to="#" className="transition-colors hover:text-foreground">
            Terms of Service
          </Link>
          <Link to="#" className="transition-colors hover:text-foreground">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;