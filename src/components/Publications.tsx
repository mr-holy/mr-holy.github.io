import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ExternalLink, Users, Award, FileText } from "lucide-react";

const Publications = () => {
  const journalArticles = [
    {
      title: "A novel random forest approach to downscale SMAP soil moisture products to 100 m resolution using temporally closest satellite observation data",
      authors: "M. Moghaddas, M. Tajrishy",
      journal: "Remote Sensing Applications: Society and Environment",
      year: "2025",
      doi: "10.1016/j.rsase.2025.101710",
      status: "Published"
    },
    {
      title: "Evaluation of spatial–temporal characteristics of precipitation using discrete maximal overlap wavelet transform and spatial clustering tools",
      authors: "K. Roushangar, M. Moghaddas, R. Ghasempour, F. Alizadeh",
      journal: "Hydrology Research",
      year: "2021",
      doi: "10.2166/nh.2021.141",
      status: "Published"
    },
    {
      title: "Removal of heavy metals from synthetic wastewater using silica aerogel-activated carbon composite by adsorption method",
      authors: "M. H. Falsafi, M. Moghaddas, J. Moghaddas",
      journal: "ARWW",
      year: "2020",
      doi: "10.22126/arww.2020.3512.1093",
      status: "Published"
    }
  ];

  const conferenceProceedings = [
    {
      title: "Is WaPOR precipitation data reliable over Iran?",
      authors: "M. Moghaddas, M. Tajrishy",
      conference: "EGU General Assembly 2023",
      location: "Vienna, Austria",
      year: "2023",
      doi: "10.5194/egusphere-egu23-1357"
    },
    {
      title: "Integrating Machine Learning and Ground-Based Data to Reconstruct ERA5 Precipitation Maps in the Urmia Lake Basin, Iran",
      authors: "M. Moghaddas, M. Tajrishy", 
      conference: "14ICCE",
      year: "2025",
      status: "Accepted"
    }
  ];

  const bookChapters = [
    {
      title: "Remote Sensing Scopes",
      author: "Mohsen Moghaddas",
      isbn: "978-6-0052-6634-4",
      type: "Book Chapter"
    },
    {
      title: "World of AI: A Roadmap Through People and Papers, Volume 1: Founders of Artificial Intelligence",
      author: "Mohsen Moghaddas",
      status: "Under Review",
      type: "Book Chapter"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Publications & Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contributing to the scientific community through peer-reviewed research and academic publications
          </p>
        </div>

        {/* Journal Articles */}
        <div className="mb-16 animate-slide-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/10 p-3 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold">Journal Articles</h3>
            <Badge className="bg-primary text-primary-foreground">
              {journalArticles.length} Publications
            </Badge>
          </div>

          <div className="grid gap-6">
            {journalArticles.map((article, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-3 leading-tight">
                        {article.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{article.authors}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium text-primary">{article.journal}</span>
                        <span>({article.year})</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        <Award className="w-4 h-4 mr-1" />
                        {article.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Conference Proceedings */}
        <div className="mb-16 animate-slide-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-secondary/10 p-3 rounded-lg">
              <Users className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold">Conference Proceedings</h3>
            <Badge variant="secondary">
              {conferenceProceedings.length} Presentations
            </Badge>
          </div>

          <div className="grid gap-6">
            {conferenceProceedings.map((conf, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3 leading-tight">{conf.title}</h4>
                  <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{conf.authors}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium text-secondary">{conf.conference}</span>
                      {conf.location && <span>- {conf.location}</span>}
                      <span>({conf.year})</span>
                    </div>
                    {conf.status && (
                      <Badge variant="outline" className="w-fit text-blue-600 border-blue-200">
                        {conf.status}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Book Chapters */}
        <div className="animate-slide-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-accent/50 p-3 rounded-lg">
              <FileText className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="text-3xl font-bold">Book Chapters & Publications</h3>
            <Badge variant="outline">
              {bookChapters.length} Chapters
            </Badge>
          </div>

          <div className="grid gap-6">
            {bookChapters.map((book, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2 leading-tight">{book.title}</h4>
                      <p className="text-muted-foreground mb-2">{book.author}</p>
                      {book.isbn && (
                        <p className="text-sm text-muted-foreground">ISBN: {book.isbn}</p>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline">{book.type}</Badge>
                      {book.status && (
                        <Badge variant="secondary" className="text-orange-600 bg-orange-50">
                          {book.status}
                        </Badge>
                      )}
                    </div>
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

export default Publications;