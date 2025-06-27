import React from 'react';
import { Link } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom UI Components
import ProjectCard from '@/components/ProjectCard';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Icons
import { Mail, Github, Linkedin } from 'lucide-react';

// --- Placeholder Data ---
const userProfile = {
  name: 'Alex Doe',
  title: 'Senior Product Designer & Frontend Developer',
  bio: 'A passionate designer and developer with a knack for creating intuitive, beautiful, and user-centric digital experiences. Currently transforming ideas into reality at a leading tech company.',
  avatarUrl: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  email: 'alex.doe@example.com',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
};

const userSkills = [
  'UI/UX Design',
  'Figma',
  'React',
  'TypeScript',
  'Node.js',
  'User Research',
  'Prototyping',
  'Design Systems',
];

const portfolioProjects = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800',
    title: 'Data Analytics Dashboard',
    description: 'A comprehensive dashboard for visualizing complex business intelligence data, built with React and D3.js.',
    tags: ['React', 'D3.js', 'Data Visualization', 'UI Design'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800',
    title: 'Collaborative Platform',
    description: 'A real-time collaborative tool for teams to manage tasks and projects efficiently.',
    tags: ['SaaS', 'Project Management', 'Collaboration'],
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=800',
    title: 'E-Commerce Mobile App',
    description: 'A sleek and modern mobile shopping application designed for a seamless user experience from browsing to checkout.',
    tags: ['Mobile App', 'E-commerce', 'UX Research'],
  },
];
// --- End Placeholder Data ---

const PublicPortfolioPage = () => {
  console.log('PublicPortfolioPage loaded');

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      {/* The header shows user controls because the logged-in user is viewing their own page */}
      <Header isAuthenticated={true} />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 md:py-20">
          
          {/* --- Hero/Profile Section --- */}
          <section className="mb-16 flex flex-col items-center gap-6 text-center md:mb-24 md:flex-row md:gap-10 md:text-left">
            <Avatar className="h-28 w-28 md:h-36 md:w-36 border-4 border-primary/20">
              <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} />
              <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{userProfile.name}</h1>
              <p className="mt-2 text-lg text-primary">{userProfile.title}</p>
              <p className="mt-4 max-w-2xl text-muted-foreground">{userProfile.bio}</p>
              <div className="mt-6 flex justify-center gap-4 md:justify-start">
                <Link to={userProfile.socials.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link to={userProfile.socials.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* --- Skills Section --- */}
          <section className="mb-16 md:mb-24">
            <h2 className="mb-6 text-center text-2xl font-semibold tracking-tight md:text-3xl">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {userSkills.map((skill) => (
                <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </section>

          {/* --- Projects Section --- */}
          <section className="mb-16 md:mb-24">
            <h2 className="mb-8 text-center text-2xl font-semibold tracking-tight md:text-3xl">Featured Projects</h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {portfolioProjects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  imageUrl={project.imageUrl}
                  description={project.description}
                  tags={project.tags}
                />
              ))}
            </div>
          </section>

          {/* --- Contact Section --- */}
          <section className="text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight md:text-3xl">Get In Touch</h2>
            <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
            </p>
            <Button size="lg" asChild>
              <a href={`mailto:${userProfile.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Say Hello
              </a>
            </Button>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PublicPortfolioPage;