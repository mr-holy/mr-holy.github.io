import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Globe } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Master's degree from Sharif University of Technology with perfect GPA",
    },
    {
      icon: Award,
      title: "Published Research",
      description: "Multiple journal articles and conference papers in remote sensing",
    },
    {
      icon: Users,
      title: "Teaching Experience",
      description: "Head TA for programming courses, mentoring future engineers",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Research contributing to water resources and environmental sustainability",
    },
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Mohsen
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate researcher and engineer dedicated to advancing water resources management 
            through innovative technology and sustainable solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <h3 className="text-3xl font-bold mb-6">Research Focus</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              My work centers on the intersection of water resources engineering, remote sensing technology, 
              and machine learning. I specialize in developing innovative solutions for agricultural water 
              management, environmental monitoring, and sustainable water allocation systems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Through my master's thesis and ongoing research, I focus on optimizing dam release strategies 
              to balance agricultural demands with environmental conservation, using cutting-edge data 
              analysis and modeling techniques.
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Water Resources Management</Badge>
              <Badge variant="secondary">Remote Sensing</Badge>
              <Badge variant="secondary">Machine Learning</Badge>
              <Badge variant="secondary">GIS & Spatial Analysis</Badge>
              <Badge variant="secondary">Environmental Engineering</Badge>
              <Badge variant="secondary">Data Science</Badge>
            </div>
          </div>

          <div className="grid gap-6 animate-fade-up">
            {highlights.map((highlight, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;