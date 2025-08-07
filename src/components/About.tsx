// import React from 'react';
import { Code2, Database, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: "Backend Development",
      description: "Expert in Python, Django, FastAPI, Flask, and REST APIs"
    },
    {
      icon: <Database className="h-8 w-8 text-emerald-600" />,
      title: "AI & Machine Learning",
      description: "Proficient in TensorFlow, Keras, OpenAI API, YOLOv8, and Scikit-learn"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-600" />,
      title: "Data Analysis",
      description: "Pandas, NumPy, Matplotlib, Seaborn, and Tableau for data insights"
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-600" />,
      title: "Automation & Tools",
      description: "Git, Linux, VS Code, Jupyter Notebook, and intelligent automation"
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
            I'm an enthusiastic Software Engineer with hands-on experience in backend development, AI integration, and automation using Python.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                As a recent graduate with a Bachelor's degree in Information Technology from Minhaj University, 
                I specialize in Python ecosystem technologies including Django, Flask, FastAPI, and AI integration. 
                I have hands-on experience building intelligent systems and automation pipelines.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently working as a Junior Software Engineer at Digimark Developers, I contribute to backend 
                systems optimization and AI-integrated projects. My expertise includes working with OpenAI APIs, 
                building REST APIs, and managing databases with PostgreSQL and SQLite.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about continuous learning and exploring new technologies. My goal is to contribute 
                to innovative projects that leverage AI and machine learning to solve real-world problems while 
                growing as part of a collaborative tech team.
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