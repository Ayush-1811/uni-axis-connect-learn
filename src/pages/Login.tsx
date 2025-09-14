import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Users, 
  Mail, 
  Lock, 
  ArrowLeft,
  BookOpen,
  Shield
} from "lucide-react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent, userType: 'student' | 'teacher') => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      // Redirect based on user type
      window.location.href = userType === 'student' ? '/student-dashboard' : '/teacher-dashboard';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Back to Home */}
        <Button variant="ghost" size="sm" className="mb-6 text-white hover:bg-white/10" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl inline-block mb-4">
            <GraduationCap className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome to UNI-AXIS</h1>
          <p className="text-white/80">Choose your portal to continue</p>
        </div>

        <Card className="glass border-white/20">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl text-center text-white">Sign In</CardTitle>
            <CardDescription className="text-center text-white/70">
              Access your personalized learning dashboard
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/10 border border-white/20">
                <TabsTrigger value="student" className="data-[state=active]:bg-white data-[state=active]:text-primary">
                  <Users className="h-4 w-4 mr-2" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="teacher" className="data-[state=active]:bg-white data-[state=active]:text-primary">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Teacher
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="space-y-4 mt-6">
                <form onSubmit={(e) => handleSubmit(e, 'student')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email" className="text-white">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                      <Input
                        id="student-email"
                        type="email"
                        placeholder="student@university.edu"
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                      <Input
                        id="student-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-primary hover:bg-white/90" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Access Student Portal"}
                  </Button>
                </form>
                <div className="text-center space-y-2">
                  <p className="text-white/60 text-sm">
                    New student? <a href="#" className="text-white hover:underline">Request Access</a>
                  </p>
                  <p className="text-white/60 text-sm">
                    <a href="#" className="text-white hover:underline">Forgot your password?</a>
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="teacher" className="space-y-4 mt-6">
                <form onSubmit={(e) => handleSubmit(e, 'teacher')} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="teacher-email" className="text-white">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                      <Input
                        id="teacher-email"
                        type="email"
                        placeholder="professor@university.edu"
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="teacher-password" className="text-white">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                      <Input
                        id="teacher-password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                        required
                      />
                    </div>
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-white text-primary hover:bg-white/90" 
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Access Teacher Portal"}
                  </Button>
                </form>
                <div className="text-center space-y-2">
                  <p className="text-white/60 text-sm">
                    New faculty? <a href="#" className="text-white hover:underline">Contact IT Department</a>
                  </p>
                  <p className="text-white/60 text-sm">
                    <a href="#" className="text-white hover:underline">Forgot your password?</a>
                  </p>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="flex items-center justify-center space-x-2 text-white/60 text-sm">
                <Shield className="h-4 w-4" />
                <span>Secured with biometric authentication</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}