// import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 95 },
    { name: 'C++', level: 80 },
    { name: 'Django', level: 88 },
    { name: 'FastAPI', level: 85 },
    { name: 'Flask', level: 82 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'SQLite', level: 80 },
    { name: 'TensorFlow', level: 78 },
    { name: 'Scikit-learn', level: 80 },
    { name: 'OpenAI API', level: 85 },
    { name: 'Git', level: 88 }
  ];

  const tools = [
    'VS Code', 'Jupyter Notebook', 'Git', 'Linux', 'Pandas', 'NumPy', 
    'PIL', 'MoviePy', 'Matplotlib', 'Seaborn', 'Tableau', 'YOLOv8'
  ];

  const frameworks = [
    'Django REST Framework', 'TensorFlow', 'Keras', 'Scikit-learn', 
    'OpenAI API', 'YOLOv8', 'Pandas', 'NumPy'
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technical expertise and proficiency levels across programming languages, AI/ML frameworks, and development tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Programming & Backend
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                  />
                </div>
              ))}
            </div>
          </div> */}

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                AI/ML & Data Analysis
              </h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm py-1 px-3 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  >
                    {framework}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Development Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="text-sm py-1 px-3 border-emerald-300 text-emerald-700 dark:border-emerald-600 dark:text-emerald-400"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Professional Strengths
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Strong analytical thinking and decision-making under pressure</li>
                <li>• Self-motivated team player with proactive collaboration</li>
                <li>• AI integration and intelligent automation systems</li>
                <li>• RESTful API development and database management</li>
                <li>• Continuous learning and technology exploration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;