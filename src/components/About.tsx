import React from 'react';
import { Code2, Database, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: "Full-Stack Development",
      description: "Expert in Python, Django, React, and modern web technologies"
    },
    {
      icon: <Database className="h-8 w-8 text-emerald-600" />,
      title: "Data Engineering",
      description: "Proficient in PostgreSQL, MongoDB, Redis, and data pipeline optimization"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "API Development",
      description: "RESTful APIs, GraphQL, microservices architecture, and integration"
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      title: "Performance Optimization",
      description: "Application scaling, caching strategies, and performance tuning"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm a passionate Python developer with a strong background in building scalable web applications and data-driven solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over 5 years of experience in software development, I specialize in Python ecosystem 
                technologies including Django, Flask, FastAPI, and modern frontend frameworks. I have a proven 
                track record of delivering high-quality applications that serve thousands of users.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My expertise spans from backend architecture and database design to frontend development 
                and DevOps practices. I'm passionate about clean code, test-driven development, and 
                continuous learning in the ever-evolving tech landscape.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                When I'm not coding, I enjoy contributing to open-source projects, writing technical blogs, 
                and mentoring junior developers. I believe in the power of technology to solve real-world 
                problems and make a positive impact.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {highlight.description}
                  </p>
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