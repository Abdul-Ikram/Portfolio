// import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
// import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Junior Software Engineer",
      company: "Digimark Developers",
      location: "Johar Town, LHR",
      period: "July 2024 - Present",
      description: "Contributing to the development and optimization of backend systems using Python and Django/FastAPI. Working on AI-integrated projects involving OpenAI APIs and intelligent automation pipelines.",
      achievements: [
        "Contributing to backend systems development using Python and Django/FastAPI",
        "Working on AI-integrated projects with OpenAI APIs and automation pipelines",
        "Collaborating with cross-functional teams to build scalable REST APIs",
        "Involved in designing project architecture and improving code quality"
      ],
      technologies: ["Python", "Django", "FastAPI", "OpenAI API", "PostgreSQL", "REST APIs"]
    },
    {
      title: "Data Science Intern",
      company: "CORVIT",
      location: "Gulberg, LHR",
      period: "Oct 2023 - Feb 2024",
      description: "Gained foundational knowledge in AI through coursework and practical application. Collaborated with teams to analyze data and implement machine learning algorithms.",
      achievements: [
        "Gained foundational knowledge in AI through coursework and practical application",
        "Collaborated with teams to analyze data and implement ML algorithms",
        "Contributed to projects with significant improvements in data analysis efficiency",
        "Developed skills in data manipulation, statistical analysis, and ML techniques"
      ],
      technologies: ["Python", "Machine Learning", "Data Analysis", "Statistical Analysis"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey in software development, showcasing growth and key achievements.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  
                  <div className="ml-20">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div>
                            <CardTitle className="text-xl text-gray-900 dark:text-white">
                              {exp.title}
                            </CardTitle>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {exp.company}
                            </p>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Key Achievements:
                          </h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-gray-600 dark:text-gray-300 text-sm">
                                • {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                            Technologies:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;