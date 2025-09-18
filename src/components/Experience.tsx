import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Code, BookOpen } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Head of Teaching Assistants",
      subtitle: "Basics of Programming (Python & C++)",
      organization: "Sharif University of Technology",
      department: "Department of Computer Engineering",
      period: "Winter 2022 – Winter 2023",
      location: "Tehran, Iran",
      responsibilities: [
        "Led a team of teaching assistants for programming fundamentals courses",
        "Developed curriculum and learning materials for Python and C++ programming",
        "Mentored students in programming concepts and best practices",
        "Coordinated with faculty to ensure consistent learning outcomes"
      ],
      skills: ["Leadership", "Python", "C++", "Curriculum Development", "Mentoring"],
      icon: Users,
      highlight: true
    },
    {
      title: "Teaching Assistant",
      subtitle: "Basics of Programming (Python)",
      organization: "Sharif University of Technology",
      department: "Department of Computer Engineering",
      period: "Fall 2018 – Fall 2021",
      location: "Tehran, Iran",
      instructors: ["Dr. Elham Seifossadat", "Dr. Hamidreza Hosseinkhani"],
      responsibilities: [
        "Assisted in teaching Python programming fundamentals to undergraduate students",
        "Conducted lab sessions and provided hands-on programming guidance",
        "Graded assignments and provided constructive feedback to students",
        "Held office hours to support students with programming challenges"
      ],
      skills: ["Python", "Teaching", "Problem Solving", "Student Support"],
      icon: Code,
      highlight: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Teaching Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about education and sharing knowledge with the next generation of engineers
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className={`shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-in ${
                exp.highlight ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex gap-4">
                    <div className={`p-3 rounded-lg flex-shrink-0 ${
                      exp.highlight ? 'bg-primary/10' : 'bg-secondary/10'
                    }`}>
                      <exp.icon className={`w-6 h-6 ${
                        exp.highlight ? 'text-primary' : 'text-secondary'
                      }`} />
                    </div>
                    
                    <div>
                      <CardTitle className="text-2xl mb-2 flex items-center gap-3">
                        {exp.title}
                        {exp.highlight && (
                          <Badge className="bg-primary text-primary-foreground">
                            <BookOpen className="w-4 h-4 mr-1" />
                            Leadership Role
                          </Badge>
                        )}
                      </CardTitle>
                      
                      <h4 className="text-lg text-muted-foreground mb-3">{exp.subtitle}</h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{exp.organization}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="text-xs">{exp.department}, {exp.location}</div>
                      </div>

                      {exp.instructors && (
                        <div className="mt-4">
                          <span className="text-sm font-medium text-muted-foreground">Instructors: </span>
                          <span className="text-sm text-primary font-medium">
                            {exp.instructors.join(", ")}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <h5 className="font-semibold mb-3 text-accent-foreground">Key Responsibilities</h5>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                        <span className="leading-relaxed">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-3 text-accent-foreground">Skills & Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Teaching Philosophy */}
        <div className="mt-16 max-w-3xl mx-auto text-center animate-fade-up">
          <Card className="shadow-card bg-gradient-to-br from-accent/20 to-secondary-soft/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Teaching Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "I believe in fostering a collaborative learning environment where students feel empowered 
                to explore, question, and innovate. My approach emphasizes hands-on experience, practical 
                problem-solving, and building strong foundational concepts that students can build upon 
                throughout their careers."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;