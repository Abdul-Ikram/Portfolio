import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      location: "San Francisco, CA",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      coursework: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Engineering",
        "Web Development",
        "Machine Learning",
        "Computer Networks"
      ]
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      institution: "TechAcademy",
      location: "Online",
      period: "2019",
      gpa: "Completed with Distinction",
      coursework: [
        "Python/Django",
        "JavaScript/React",
        "Database Design",
        "DevOps Fundamentals",
        "API Development",
        "Testing & Deployment"
      ]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-CSA-2023-001"
    },
    {
      name: "Python Professional Certificate",
      issuer: "Python Institute",
      date: "2022",
      credentialId: "PCPP-001-2022"
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-001"
    },
    {
      name: "Django for Professionals",
      issuer: "Django Software Foundation",
      date: "2021",
      credentialId: "DSF-PROF-2021"
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
            My academic background and professional certifications that support my expertise in software development.
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
                          <span>ID: {cert.credentialId}</span>
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
                <p>• Active participant in open-source communities</p>
                <p>• Regular attendee at Python and Django conferences</p>
                <p>• Contributor to technical blogs and documentation</p>
                <p>• Mentor for coding bootcamp students</p>
                <p>• Stay updated with latest technology trends and best practices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;