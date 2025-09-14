import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  BookOpen, 
  Users, 
  Calendar,
  CheckCircle,
  Bluetooth,
  Upload,
  BarChart3,
  MessageCircle,
  Award,
  Bell,
  LogOut,
  Play,
  Square,
  Settings
} from "lucide-react";

export default function TeacherDashboard() {
  const [attendanceSession, setAttendanceSession] = useState<'idle' | 'active' | 'ended'>('idle');
  const [connectedStudents, setConnectedStudents] = useState(0);

  const mockData = {
    teacher: {
      name: "Dr. Sarah Wilson",
      id: "TEA2024001",
      department: "Computer Science",
      courses: ["Data Structures", "AI Fundamentals", "Web Development"]
    },
    todayClasses: [
      { subject: "Data Structures", time: "09:00 AM", room: "CS-101", students: 45, attended: 42 },
      { subject: "AI Fundamentals", time: "11:00 AM", room: "CS-205", students: 38, attended: 35 },
      { subject: "Web Development", time: "02:00 PM", room: "CS-301", students: 52, attended: 0 }
    ],
    students: [
      { name: "Alex Johnson", id: "STU001", progress: 85, attendance: 92, wellness: 88 },
      { name: "Maria Garcia", id: "STU002", progress: 78, attendance: 89, wellness: 75 },
      { name: "David Chen", id: "STU003", progress: 92, attendance: 95, wellness: 82 },
      { name: "Emma Brown", id: "STU004", progress: 67, attendance: 78, wellness: 70 }
    ],
    materials: [
      { name: "Lecture 1: Introduction to Data Structures", type: "PDF", uploaded: "2 days ago" },
      { name: "Lab Exercise: Binary Trees", type: "ZIP", uploaded: "1 week ago" },
      { name: "Assignment 3: Sorting Algorithms", type: "PDF", uploaded: "3 days ago" }
    ]
  };

  const startAttendanceSession = () => {
    setAttendanceSession('active');
    setConnectedStudents(0);
    
    // Simulate students connecting
    const interval = setInterval(() => {
      setConnectedStudents(prev => {
        const newCount = prev + Math.floor(Math.random() * 3) + 1;
        if (newCount >= 35) {
          clearInterval(interval);
          return 35;
        }
        return newCount;
      });
    }, 1000);
  };

  const endAttendanceSession = () => {
    setAttendanceSession('ended');
    setTimeout(() => setAttendanceSession('idle'), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Teacher Portal</h1>
                <p className="text-sm text-muted-foreground">Welcome back, {mockData.teacher.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
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
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="materials">Materials</TabsTrigger>
            <TabsTrigger value="alumni">Alumni</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-2xl font-bold">135</p>
                      <p className="text-sm text-muted-foreground">Total Students</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <div>
                      <p className="text-2xl font-bold">89%</p>
                      <p className="text-sm text-muted-foreground">Avg Attendance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-warning" />
                    <div>
                      <p className="text-2xl font-bold">78%</p>
                      <p className="text-sm text-muted-foreground">Avg Progress</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-accent" />
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-sm text-muted-foreground">Wellness Alerts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Classes */}
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
                          <p className="text-sm text-muted-foreground">
                            {class_.attended > 0 ? `${class_.attended}/${class_.students} present` : `${class_.students} enrolled`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={class_.attended > 0 ? 'default' : 'secondary'}>
                          {class_.attended > 0 ? 'Completed' : 'Upcoming'}
                        </Badge>
                        {class_.attended === 0 && (
                          <Button size="sm" variant="outline">Start Session</Button>
                        )}
                      </div>
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
                  <span>BLE Attendance System</span>
                </CardTitle>
                <CardDescription>
                  Start a session to broadcast attendance signal via Bluetooth Low Energy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-primary/10 p-8 rounded-2xl">
                    <Bluetooth className={`h-16 w-16 mx-auto mb-4 ${
                      attendanceSession === 'active' ? 'animate-pulse text-primary' : 
                      attendanceSession === 'ended' ? 'text-success' : 'text-muted-foreground'
                    }`} />
                    <p className="text-lg font-semibold mb-2">
                      {attendanceSession === 'idle' && 'Ready to start attendance session'}
                      {attendanceSession === 'active' && `Broadcasting session - ${connectedStudents} students connected`}
                      {attendanceSession === 'ended' && 'Session completed successfully!'}
                    </p>
                    <p className="text-muted-foreground">
                      {attendanceSession === 'idle' && 'Students will be able to mark attendance once session starts'}
                      {attendanceSession === 'active' && 'Students in proximity can now mark their attendance'}
                      {attendanceSession === 'ended' && 'Attendance data has been saved to the system'}
                    </p>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    {attendanceSession === 'idle' && (
                      <Button onClick={startAttendanceSession} size="lg" className="w-full max-w-md">
                        <Play className="h-5 w-5 mr-2" />
                        Start Attendance Session
                      </Button>
                    )}
                    {attendanceSession === 'active' && (
                      <Button onClick={endAttendanceSession} size="lg" variant="destructive">
                        <Square className="h-5 w-5 mr-2" />
                        End Session
                      </Button>
                    )}
                  </div>
                </div>

                {attendanceSession === 'active' && (
                  <Card className="bg-primary/5 border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold">Session Progress</span>
                        <span className="text-sm text-muted-foreground">{connectedStudents}/38 students</span>
                      </div>
                      <Progress value={(connectedStudents / 38) * 100} className="h-2" />
                    </CardContent>
                  </Card>
                )}

                <div className="space-y-4">
                  <h3 className="font-semibold">Recent Sessions</h3>
                  <div className="grid gap-4">
                    {mockData.todayClasses.filter(c => c.attended > 0).map((class_, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-medium">{class_.subject}</p>
                          <p className="text-sm text-muted-foreground">
                            {class_.time} - {class_.attended}/{class_.students} present ({Math.round((class_.attended/class_.students)*100)}%)
                          </p>
                        </div>
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>Student Progress & Wellness</span>
                </CardTitle>
                <CardDescription>
                  Monitor student performance and mental wellness indicators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Input placeholder="Search students..." className="max-w-sm" />
                    <Button variant="outline">Filter</Button>
                  </div>

                  <div className="grid gap-4">
                    {mockData.students.map((student, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-semibold">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className="font-semibold">{student.name}</p>
                              <p className="text-sm text-muted-foreground">{student.id}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View Profile</Button>
                            <Button size="sm">Message</Button>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{student.progress}%</span>
                            </div>
                            <Progress value={student.progress} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Attendance</span>
                              <span>{student.attendance}%</span>
                            </div>
                            <Progress value={student.attendance} className="h-2" />
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Wellness</span>
                              <span className={student.wellness < 75 ? 'text-warning' : 'text-success'}>
                                {student.wellness}%
                              </span>
                            </div>
                            <Progress 
                              value={student.wellness} 
                              className={`h-2 ${student.wellness < 75 ? '[&>div]:bg-warning' : '[&>div]:bg-success'}`} 
                            />
                          </div>
                        </div>

                        {student.wellness < 75 && (
                          <div className="mt-4 p-3 bg-warning/10 border-warning/20 border rounded-lg">
                            <div className="flex items-center space-x-2">
                              <MessageCircle className="h-4 w-4 text-warning" />
                              <p className="text-sm font-medium text-warning">Wellness Alert</p>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Student may need additional support. Consider reaching out.
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="materials" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Upload className="h-5 w-5" />
                  <span>Course Materials</span>
                </CardTitle>
                <CardDescription>
                  Upload and manage course content for your students
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-semibold mb-2">Upload Course Materials</p>
                  <p className="text-muted-foreground mb-4">
                    Drag and drop files here, or click to browse
                  </p>
                  <Button>Choose Files</Button>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold">Recent Uploads</h3>
                  <div className="grid gap-4">
                    {mockData.materials.map((material, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{material.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {material.type} • Uploaded {material.uploaded}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">Share</Button>
                          <Button size="sm" variant="outline">Edit</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alumni" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Alumni Engagement</span>
                </CardTitle>
                <CardDescription>
                  Connect with alumni and facilitate student-alumni interactions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-alumni text-white">
                    <CardContent className="p-6">
                      <Users className="h-8 w-8 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Alumni Network</h3>
                      <p className="mb-4 opacity-90">
                        Connect your students with successful graduates for mentorship and career guidance.
                      </p>
                      <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                        Browse Alumni
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <MessageCircle className="h-8 w-8 mb-4 text-primary" />
                      <h3 className="text-xl font-semibold mb-2">Guest Lectures</h3>
                      <p className="text-muted-foreground mb-4">
                        Invite alumni to share their industry experience with current students.
                      </p>
                      <Button variant="outline">Schedule Session</Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Alumni Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">Career Fair 2024</p>
                          <p className="text-sm text-muted-foreground">
                            March 15, 2024 • Main Auditorium
                          </p>
                        </div>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <p className="font-semibold">Tech Industry Panel</p>
                          <p className="text-sm text-muted-foreground">
                            March 22, 2024 • CS Department
                          </p>
                        </div>
                        <Button size="sm" variant="outline">Manage</Button>
                      </div>
                    </div>
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