// import React from 'react';
// import { ExternalLink, Github, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "AI Construction Plan (EstiMator)",
      description: "AI-powered backend system that allows users to upload construction-related PDFs and interact with a chatbot for intelligent query handling. Built with Django, PostgreSQL, and OpenAI API.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Django", "PostgreSQL", "OpenAI API", "REST APIs", "PDF Processing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "AI Uniform Generation (Edge Swagtastics)",
      description: "Backend-driven platform for designing and ordering custom uniform visuals. Built with Python (Django) and PostgreSQL, integrating Gemini's API to generate dynamic designs.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Django", "PostgreSQL", "Gemini API", "Custom Design", "Order Management"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Chef Qailo",
      description: "AI-powered recipe recommendation app with core APIs using Django Rest Framework and Neo4j. Features authentication and role-based management for users and admins.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Django REST Framework", "Neo4j", "Authentication", "AI Recommendations"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Clip Sort",
      description: "Python-based media organization tool that auto-sorts images and videos by content type and timestamp using YOLOv8 for object detection and Flask API for remote execution.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Python", "YOLOv8", "PIL", "MoviePy", "Flask", "Object Detection"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Urdu Handwritten Text Recognition",
      description: "Deep learning system using CNN to detect and classify fruits in Urdu handwritten text images. Provides bilingual descriptions in English and Urdu with Django deployment.",
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["CNN", "Deep Learning", "Django", "Image Recognition", "Bilingual Processing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "House Price Prediction ML Model",
      description: "Machine learning model for house price prediction deployed using Django framework. Award-winning project recognized for innovation in real estate analytics.",
      image: "https://images.pexels.com/photos/518244/pexels-photo-518244.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["Machine Learning", "Django", "Predictive Analytics", "Real Estate", "Award Winner"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in AI integration, backend development, and machine learning applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Featured Work
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {/* <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Eye className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button> */}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4 pt-4">
                    {/* <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </a>
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-900 dark:text-white">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2 pt-2">
                    {/* <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button> */}
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

export default Projects;