import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  BookOpen, 
  Heart, 
  Bluetooth, 
  Brain,
  ArrowRight
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";

export const Hero = () => {
  const features = [
    {
      icon: Users,
      title: "Smart Attendance",
      description: "BLE-powered proximity detection with biometric verification"
    },
    {
      icon: Brain,
      title: "AI Learning",
      description: "Personalized course recommendations and adaptive quizzes"
    },
    {
      icon: Heart,
      title: "Mental Wellness",
      description: "AI mood tracking with counselor connect and guided meditation"
    },
    {
      icon: BookOpen,
      title: "Alumni Network",
      description: "Connect with graduates for mentorship and career guidance"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-hero relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/50 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-white/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Education
                <br />
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Reimagined
                </span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-lg">
                UNI-AXIS transforms learning with AI-powered personalization, smart attendance, 
                mental wellness support, and seamless alumni connections.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="glass" className="text-lg px-8" asChild>
                <Link to="/login">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-white/70 text-sm">Attendance Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50k+</div>
                <div className="text-white/70 text-sm">Students Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm">Mental Health Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <img 
                src={heroImage} 
                alt="Students using UNI-AXIS educational platform"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold animate-glow">
                🚀 Live Now
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pb-20">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="glass p-6 rounded-2xl text-center space-y-4 hover:bg-white/20 transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};