import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Trophy } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Water Resources Engineering and Management",
      school: "Sharif University of Technology",
      period: "September 2020 – February 2023",
      gpa: "4.0/4.0 (16.36/20)",
      supervisor: "Dr. Massoud Tajrishy",
      thesis: "Managing the release of dams, according to agricultural water needs with the aim of increasing water supply for environmental needs",
      type: "M.A.",
      highlight: true,
    },
    {
      degree: "Bachelor of Civil Engineering",
      school: "Sharif University of Technology", 
      period: "September 2015 – June 2020",
      gpa: "3.0/4.0 (14.18/20)",
      type: "B.A.",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey through one of Iran's most prestigious engineering institutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className={`shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-in ${
                edu.highlight ? 'border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5' : ''
              }`}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl mb-2 flex items-center gap-3">
                      {edu.degree}
                      {edu.highlight && (
                        <Badge className="bg-primary text-primary-foreground">
                          <Trophy className="w-4 h-4 mr-1" />
                          Perfect GPA
                        </Badge>
                      )}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">{edu.school}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <Badge variant="outline" className="text-lg px-4 py-2">
                      {edu.type}
                    </Badge>
                    <div className="text-sm text-muted-foreground mt-2">
                      GPA: <span className="font-semibold text-foreground">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {edu.supervisor && (
                  <div className="mb-4">
                    <span className="text-sm font-medium text-muted-foreground">Supervisor: </span>
                    <span className="text-primary font-medium">{edu.supervisor}</span>
                  </div>
                )}
                
                {edu.thesis && (
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-accent-foreground">Master's Thesis</h4>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{edu.thesis}"
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;