import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Palette, Smartphone } from 'lucide-react';

const LandingPage: React.FC = () => {
  console.log('LandingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header isAuthenticated={false} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4">
            Create a Stunning Portfolio in Minutes
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
            ShowcaseHub helps you build and publish a professional, responsive portfolio with ease. No coding required.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" asChild>
              <Link to="/authentication">Get Started for Free</Link>
            </Button>
          </div>
          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop" 
              alt="Portfolio on a laptop"
              className="rounded-lg shadow-2xl mx-auto w-full max-w-4xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-20 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose ShowcaseHub?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <span>Effortless Editing</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our intuitive editor lets you add projects, customize layouts, and see changes in real-time. Focus on your work, not on the code.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Palette className="h-6 w-6 text-primary" />
                    <span>Elegant Templates</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose from a selection of professionally designed templates that make your work shine. Perfect for creatives and developers.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Smartphone className="h-6 w-6 text-primary" />
                    <span>Fully Responsive</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your portfolio will look amazing on any device, from desktops to smartphones, ensuring a great experience for every visitor.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Final CTA Section */}
        <section className="container mx-auto px-4 py-20 md:py-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Showcase Your Work?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
                Join thousands of professionals who trust ShowcaseHub.
            </p>
            <Button size="lg" asChild>
                <Link to="/authentication">Sign Up Now</Link>
            </Button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;