import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  BookOpen, 
  Heart, 
  Users, 
  Calendar,
  CheckCircle,
  Clock,
  Brain,
  Bluetooth,
  MessageCircle,
  Award,
  Bell,
  LogOut
} from "lucide-react";

export default function StudentDashboard() {
  const [attendanceStatus, setAttendanceStatus] = useState<'idle' | 'scanning' | 'verified'>('idle');

  const mockData = {
    student: {
      name: "Alex Johnson",
      id: "STU2024001",
      year: "3rd Year",
      major: "Computer Science",
      attendance: 92,
      wellnessScore: 85
    },
    todayClasses: [
      { subject: "Data Structures", time: "09:00 AM", room: "CS-101", status: "present" },
      { subject: "AI Fundamentals", time: "11:00 AM", room: "CS-205", status: "present" },
      { subject: "Web Development", time: "02:00 PM", room: "CS-301", status: "upcoming" }
    ],
    courses: [
      { name: "Data Structures & Algorithms", progress: 78, nextTask: "Binary Trees Assignment" },
      { name: "Artificial Intelligence", progress: 65, nextTask: "Neural Networks Quiz" },
      { name: "Web Development", progress: 90, nextTask: "Final Project Review" }
    ],
    wellnessActivities: [
      { title: "Morning Meditation", completed: true, type: "meditation" },
      { title: "Mood Check-in", completed: false, type: "checkin" },
      { title: "Stress Relief Exercise", completed: false, type: "exercise" }
    ],
    alumni: [
      { name: "Sarah Chen", company: "Google", position: "Software Engineer", year: "2019" },
      { name: "Michael Rodriguez", company: "Microsoft", position: "Product Manager", year: "2020" },
      { name: "Emily Zhang", company: "Apple", position: "UX Designer", year: "2018" }
    ]
  };

  const markAttendance = () => {
    setAttendanceStatus('scanning');
    setTimeout(() => {
      setAttendanceStatus('verified');
      setTimeout(() => setAttendanceStatus('idle'), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Student Portal</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {mockData.student.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="wellness">Wellness</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <p className="text-2xl font-bold">{mockData.student.attendance}%</p>
                      <p className="text-sm text-muted-foreground">Attendance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Brain className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">AI Tasks</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-2xl font-bold">{mockData.student.wellnessScore}%</p>
                      <p className="text-sm text-muted-foreground">Wellness</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-warning" />
                    <div>
                      <p className="text-2xl font-bold">24</p>
                      <p className="text-sm text-muted-foreground">Alumni Connects</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span>Today's Classes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockData.todayClasses.map((class_, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <p className="font-semibold">{class_.time}</p>
                          <p className="text-sm text-muted-foreground">{class_.room}</p>
                        </div>
                        <div>
                          <p className="font-medium">{class_.subject}</p>
                        </div>
                      </div>
                      <Badge variant={class_.status === 'present' ? 'default' : 'secondary'}>
                        {class_.status === 'present' ? 'Present' : 'Upcoming'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Bluetooth className="h-5 w-5" />
                  <span>Smart Attendance</span>
                </CardTitle>
                <CardDescription>
                  Mark your attendance using BLE proximity and biometric verification
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-primary/10 p-8 rounded-2xl">
                    <Bluetooth className={`h-16 w-16 mx-auto mb-4 ${
                      attendanceStatus === 'scanning' ? 'animate-pulse text-primary' : 
                      attendanceStatus === 'verified' ? 'text-success' : 'text-muted-foreground'
                    }`} />
                    <p className="text-lg font-semibold mb-2">
                      {attendanceStatus === 'idle' && 'Ready to mark attendance'}
                      {attendanceStatus === 'scanning' && 'Scanning for teacher device...'}
                      {attendanceStatus === 'verified' && 'Attendance marked successfully!'}
                    </p>
                    <p className="text-muted-foreground">
                      {attendanceStatus === 'idle' && 'Ensure you are near the teacher\'s device'}
                      {attendanceStatus === 'scanning' && 'Please wait while we verify your proximity'}
                      {attendanceStatus === 'verified' && 'Biometric verification completed'}
                    </p>
                  </div>
                  
                  <Button 
                    onClick={markAttendance}
                    disabled={attendanceStatus !== 'idle'}
                    size="lg"
                    className="w-full max-w-md"
                  >
                    {attendanceStatus === 'idle' && 'Mark Attendance'}
                    {attendanceStatus === 'scanning' && 'Verifying...'}
                    {attendanceStatus === 'verified' && 'Completed ✓'}
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Attendance History</h3>
                  <div className="grid gap-4">
                    {mockData.todayClasses.map((class_, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{class_.subject}</p>
                          <p className="text-sm text-muted-foreground">{class_.time} - {class_.room}</p>
                        </div>
                        <Badge variant={class_.status === 'present' ? 'default' : 'secondary'}>
                          {class_.status === 'present' ? '✓ Present' : 'Pending'}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-5 w-5" />
                  <span>AI-Powered Learning</span>
                </CardTitle>
                <CardDescription>
                  Personalized courses and adaptive learning recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockData.courses.map((course, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{course.name}</h3>
                      <Badge variant="outline">{course.progress}% Complete</Badge>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Next: {course.nextTask}</span>
                      <Button size="sm" variant="outline">Continue</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recommended for You</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Advanced React Patterns</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Based on your progress in Web Development
                    </p>
                    <Button size="sm" variant="outline">Explore</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Machine Learning Basics</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Perfect next step after AI Fundamentals
                    </p>
                    <Button size="sm" variant="outline">Explore</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wellness" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-5 w-5" />
                  <span>Mental Wellness Dashboard</span>
                </CardTitle>
                <CardDescription>
                  Track your mental health and access support resources
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-gradient-wellness text-white">
                    <CardContent className="p-4 text-center">
                      <Heart className="h-8 w-8 mx-auto mb-2" />
                      <p className="text-2xl font-bold">{mockData.student.wellnessScore}%</p>
                      <p className="text-sm opacity-90">Wellness Score</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">45min</p>
                      <p className="text-sm text-muted-foreground">Meditation Time</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4 text-center">
                      <MessageCircle className="h-8 w-8 mx-auto mb-2 text-accent" />
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-sm text-muted-foreground">Counselor Sessions</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Today's Wellness Activities</h3>
                  {mockData.wellnessActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          activity.completed ? 'bg-success' : 'bg-muted-foreground'
                        }`} />
                        <span className={activity.completed ? 'line-through text-muted-foreground' : ''}>
                          {activity.title}
                        </span>
                      </div>
                      {!activity.completed && (
                        <Button size="sm" variant="outline">Start</Button>
                      )}
                    </div>
                  ))}
                </div>

                <Card className="bg-accent/10 border-accent/20">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <MessageCircle className="h-6 w-6 text-accent" />
                      <div>
                        <p className="font-semibold">Need someone to talk to?</p>
                        <p className="text-sm text-muted-foreground">
                          Connect with our certified counselors
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="ml-auto">
                        Book Session
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alumni" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Alumni Network</span>
                </CardTitle>
                <CardDescription>
                  Connect with graduates for mentorship and career guidance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {mockData.alumni.map((alumni, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-alumni rounded-full flex items-center justify-center text-white font-semibold">
                            {alumni.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold">{alumni.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {alumni.position} at {alumni.company}
                            </p>
                            <p className="text-xs text-muted-foreground">Class of {alumni.year}</p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">View Profile</Button>
                          <Button size="sm">Connect</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Card className="mt-6 bg-gradient-alumni text-white">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Upcoming Alumni Event</h3>
                    <p className="mb-4 opacity-90">
                      Career Fair 2024 - Meet industry professionals and explore opportunities
                    </p>
                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}