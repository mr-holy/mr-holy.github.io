import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  BookOpen,
  Send,
  Globe,
  ExternalLink
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Academic Email",
      value: "mohsen.moghaddas@mail.utoronto.ca",
      link: "mailto:mohsen.moghaddas@mail.utoronto.ca",
      primary: true
    },
    {
      icon: Mail,
      label: "Personal Email", 
      value: "mohsen.moghaddas96@gmail.com",
      link: "mailto:mohsen.moghaddas96@gmail.com",
      primary: false
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+98) 930-111-2330",
      link: "tel:+989301112330",
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tehran, Iran",
      description: "Valiasr Avenue, Amini Street",
      primary: false
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      username: "Mohsen Moghaddas", 
      link: "#",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      username: "Mr.holy",
      link: "#",
      color: "bg-gray-800 hover:bg-gray-900"
    },
    {
      icon: BookOpen,
      label: "Google Scholar",
      username: "Mohsen Moghaddas",
      link: "#",
      color: "bg-blue-600 hover:bg-blue-700"
    }
  ];

  const researchInterests = [
    "Water Resources Management",
    "Remote Sensing Applications", 
    "Machine Learning in Environmental Science",
    "Agricultural Water Optimization",
    "Climate Change Adaptation",
    "Sustainable Engineering Solutions"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's collaborate on innovative research projects and sustainable engineering solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in">
            <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`p-2 rounded-lg ${
                      contact.primary ? 'bg-primary/10' : 'bg-muted'
                    }`}>
                      <contact.icon className={`w-5 h-5 ${
                        contact.primary ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-accent-foreground">
                          {contact.label}
                        </span>
                        {contact.primary && (
                          <Badge className="bg-primary text-primary-foreground text-xs">
                            Primary
                          </Badge>
                        )}
                      </div>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-primary hover:text-primary-dark transition-colors group-hover:underline"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-muted-foreground">{contact.value}</span>
                      )}
                      {contact.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {contact.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <Globe className="w-5 h-5 text-secondary" />
                  </div>
                  Professional Profiles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 justify-start hover:shadow-md transition-all duration-300"
                      asChild
                    >
                      <a href={social.link} className="flex items-center gap-3 w-full">
                        <div className={`p-2 rounded-lg ${social.color} text-white`}>
                          <social.icon className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <div className="font-medium text-sm">{social.label}</div>
                          <div className="text-xs text-muted-foreground">{social.username}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 ml-auto text-muted-foreground" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Research Interests & CTA */}
          <div className="space-y-6 animate-fade-up">
            <Card className="shadow-card hover:shadow-elevated transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Research Interests</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {researchInterests.map((interest, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {interest}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg mb-3 gradient-text">
                  Collaboration Opportunities
                </h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Interested in research collaboration, consulting projects, 
                  or discussing innovative solutions in water resources and remote sensing?
                </p>
                <Button className="w-full bg-primary hover:bg-primary-dark text-primary-foreground">
                  <Mail className="w-4 h-4 mr-2" />
                  Start a Conversation
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 text-accent-foreground">Available for</h4>
                <div className="space-y-2">
                  <Badge variant="outline" className="block w-full text-center py-2">
                    Research Collaboration
                  </Badge>
                  <Badge variant="outline" className="block w-full text-center py-2">
                    Consulting Projects
                  </Badge>
                  <Badge variant="outline" className="block w-full text-center py-2">
                    Speaking Engagements
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;