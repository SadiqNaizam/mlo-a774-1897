import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const AuthenticationPage = () => {
  console.log('AuthenticationPage loaded');
  const navigate = useNavigate();

  // Simulate successful authentication and redirect to dashboard
  const handleAuthAction = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Authentication successful, redirecting to dashboard...');
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <Header isAuthenticated={false} />

      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 md:p-8">
        <Tabs defaultValue="login" className="w-full max-w-md">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Log In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          
          {/* Login Form Tab */}
          <TabsContent value="login">
            <Card>
              <form onSubmit={handleAuthAction}>
                <CardHeader>
                  <CardTitle>Log In to Your Account</CardTitle>
                  <CardDescription>
                    Welcome back! Please enter your details to access your dashboard.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <Input id="login-email" type="email" placeholder="user@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password">Password</Label>
                    <Input id="login-password" type="password" placeholder="••••••••" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">Log In</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>

          {/* Sign Up Form Tab */}
          <TabsContent value="signup">
            <Card>
              <form onSubmit={handleAuthAction}>
                <CardHeader>
                  <CardTitle>Create an Account</CardTitle>
                  <CardDescription>
                    Join ShowcaseHub today. It's free and only takes a minute.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name">Name</Label>
                    <Input id="signup-name" type="text" placeholder="Your Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="user@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" placeholder="Create a strong password" required />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full">Create Account</Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default AuthenticationPage;