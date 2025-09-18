import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Github, Linkedin, BookOpen, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="animate-fade-up">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <MapPin className="w-4 h-4 mr-2" />
            Tehran, Iran
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mohsen Moghaddas
            <span className="block text-2xl md:text-4xl font-normal mt-2 text-white/90">
              M.Sc., Water Resources Engineering
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Researcher & Engineer specializing in water resources management, remote sensing, 
            and machine learning applications for environmental sustainability.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              Remote Sensing
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              Machine Learning
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              Water Resources
            </Badge>
            <Badge variant="outline" className="bg-white/10 text-white border-white/30">
              Python & GIS
            </Badge>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elevated"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
              >
                <BookOpen className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;