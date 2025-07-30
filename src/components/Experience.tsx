import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Python Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading a team of 5 developers in building scalable web applications using Django and React. Architected microservices infrastructure serving 100K+ daily active users.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Mentored 3 junior developers and conducted code reviews"
      ],
      technologies: ["Python", "Django", "React", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Full Stack Python Developer",
      company: "DataFlow Inc.",
      location: "New York, NY",
      period: "2020 - 2022",
      description: "Developed and maintained multiple web applications using Flask and Django. Built data processing pipelines handling millions of records daily.",
      achievements: [
        "Built RESTful APIs serving 50+ client applications",
        "Designed and implemented real-time data processing system",
        "Improved database query performance by 35%"
      ],
      technologies: ["Python", "Flask", "Django", "MongoDB", "Redis", "Celery"]
    },
    {
      title: "Python Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      period: "2019 - 2020",
      description: "Worked on MVP development for fintech startup. Built core backend services and integrated third-party payment systems.",
      achievements: [
        "Developed MVP from scratch serving 10K+ users",
        "Integrated Stripe and PayPal payment gateways",
        "Implemented automated testing achieving 90% code coverage"
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "React", "Stripe API"]
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