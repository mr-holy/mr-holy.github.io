import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Globe, 
  Brain, 
  Camera, 
  BookOpen,
  Layers,
  BarChart3
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Development",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 95, description: "Advanced data analysis, ML, and automation" },
        { name: "C++", level: 85, description: "System programming and algorithm implementation" },
        { name: "R", level: 80, description: "Statistical analysis and visualization" },
        { name: "MATLAB", level: 90, description: "Numerical computing and modeling" },
        { name: "JavaScript", level: 70, description: "Web development and visualization" }
      ]
    },
    {
      title: "Remote Sensing & GIS",
      icon: Camera,
      color: "secondary",
      skills: [
        { name: "ENVI", level: 95, description: "Advanced image processing and analysis" },
        { name: "ArcGIS", level: 90, description: "Comprehensive spatial analysis" },
        { name: "QGIS", level: 88, description: "Open-source geospatial analysis" },
        { name: "Google Earth Engine", level: 92, description: "Cloud-based remote sensing" },
        { name: "SNAP", level: 85, description: "Sentinel satellite data processing" }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "accent",
      skills: [
        { name: "Scikit-learn", level: 90, description: "Classical ML algorithms" },
        { name: "TensorFlow", level: 85, description: "Deep learning and neural networks" },
        { name: "Random Forest", level: 95, description: "Ensemble learning specialist" },
        { name: "Time Series Analysis", level: 88, description: "Temporal data modeling" },
        { name: "Computer Vision", level: 82, description: "Image analysis and processing" }
      ]
    },
    {
      title: "Water Resources & Engineering",
      icon: Layers,
      color: "primary",
      skills: [
        { name: "HEC-HMS", level: 88, description: "Hydrologic modeling system" },
        { name: "SWAT", level: 85, description: "Soil and water assessment tool" },
        { name: "Dam Management", level: 92, description: "Optimization and operation strategies" },
        { name: "Irrigation Systems", level: 90, description: "Agricultural water management" },
        { name: "Environmental Impact", level: 87, description: "Sustainability assessment" }
      ]
    }
  ];

  const languages = [
    { name: "Persian", level: "Native", flag: "🇮🇷" },
    { name: "English", level: "Advanced", flag: "🇺🇸" },
    { name: "Arabic", level: "Intermediate", flag: "🇸🇦" }
  ];

  const certifications = [
    "Google Earth Engine Certified User",
    "ESRI ArcGIS Desktop Associate",
    "Python for Data Science Specialization",
    "Remote Sensing and GIS Certificate"
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning engineering, technology, and research methodologies
          </p>
        </div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="shadow-card hover:shadow-elevated transition-all duration-300 animate-slide-in"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className={`p-2 rounded-lg ${
                    category.color === 'primary' ? 'bg-primary/10' :
                    category.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/50'
                  }`}>
                    <category.icon className={`w-5 h-5 ${
                      category.color === 'primary' ? 'text-primary' :
                      category.color === 'secondary' ? 'text-secondary' : 'text-accent-foreground'
                    }`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {skill.level}%
                        </Badge>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Languages & Certifications */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-up">
          {/* Languages */}
          <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Globe className="w-5 h-5 text-secondary" />
                </div>
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{lang.flag}</span>
                      <span className="font-medium">{lang.name}</span>
                    </div>
                    <Badge variant="secondary">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                Certifications & Training
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center animate-fade-up">
          <Card className="shadow-card bg-gradient-to-br from-primary/5 to-secondary/5 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Technical Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                "I believe in leveraging cutting-edge technology to solve real-world environmental challenges. 
                My interdisciplinary approach combines engineering principles with advanced data science 
                techniques to create sustainable solutions for water resource management."
              </p>
              <div className="flex justify-center gap-4 flex-wrap">
                <Badge className="bg-primary text-primary-foreground">10+ Technologies</Badge>
                <Badge variant="secondary">5+ Years Experience</Badge>
                <Badge variant="outline">Research & Industry</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;