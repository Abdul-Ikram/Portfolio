// import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Minhaj University",
      location: "Lahore, Pakistan",
      period: "2020 - 2024",
      gpa: "Completed",
      coursework: [
        "Artificial Intelligence",
        "Machine Learning",
        "Data Analysis",
        "Neural Networks",
        "Tableau",
        "Software Engineering"
      ]
    }
  ];

  const certifications = [
    {
      name: "Artificial Intelligence",
      issuer: "Akhuwat",
      date: "Sep 2024",
      credentialId: "View Certificate",
      credentialUrl: "https://drive.google.com/file/d/1b49tHATswoiAsAEQRq910HgoRwifbsk7/view?usp=drive_link"
    },
    {
      name: "Artificial Intelligence",
      issuer: "Corvit Systems",
      date: "May 2024",
      credentialId: "View Certificate",
      credentialUrl: "https://drive.google.com/file/d/1bZlk3D-ba_VB5yp9Q2380i90dSfUQPdp/view?usp=drive_link"
    },
    {
      name: "Artificial Intelligence (ML, DL, Communication)",
      issuer: "Minhaj University",
      date: "May 2023",
      credentialId: "View Certificate",
      credentialUrl: "https://drive.google.com/file/d/13DPUc58sSkrqrZv1fd6eNgYX_6oi0nRW/view?usp=drive_link"
    },
    {
      name: "RHEL Intensive",
      issuer: "ALnafi",
      date: "2023",
      credentialId: "View Certificate",
      credentialUrl: "https://portal.alnafi.com/certificates/a4t1nauynu"
    },
    {
      name: "Software Development Fundamentals",
      issuer: "Peak Solutions",
      date: "2020",
      credentialId: "View Certificate",
      credentialUrl: "https://drive.google.com/file/d/1LRohBU6Bhkb99gyV-jaolDxzh_hxZj_7/view?usp=drive_link"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Academic background in Information Technology and professional certifications in AI, machine learning, and software development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-3 text-blue-600" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {edu.degree}
                    </CardTitle>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <Calendar size={14} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          {edu.location}
                        </div>
                      </div>
                      <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                        {edu.gpa}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Relevant Coursework:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center">
              <Award className="mr-3 text-emerald-600" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {cert.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <span>Issue Date: {cert.date}</span>
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            View Certificate
                          </a>
                        </div>
                      </div>
                      <Award className="text-yellow-500 ml-4" size={24} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>• Strong analytical thinking with ability to remain composed under pressure</p>
                <p>• Self-motivated team player with proactive approach to collaboration</p>
                <p>• Passionate about continuous learning and exploring new technologies</p>
                <p>• Curiosity-driven development and problem-solving approach</p>
                <p>• Stay updated with latest AI/ML trends and backend technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;