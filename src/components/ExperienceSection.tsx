
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "SVARKS",
      location: "Laxmeshwar",
      duration: "Oct 2023 - Nov 2023",
      type: "Internship",
      description: "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built responsive web applications using Python Django",
        "Learnt SQL and implemented database management systems",
       
      ],
      tech: ["Python","SQL","HTML","CSS","Bootstrap"]
    },
    {
      title: "AI-Devops Engineer Intern",
      company: "Rooman Technologies",
      location: "Online",
      duration: "Sep 2024 - March 2025",
      type: "Internship",
      description: "Completed an AI DevOps internship at Rooman Technologies, where I automated machine learning deployments using Docker and Kubernetes. Gained practical experience in containerization, orchestration, and CI/CD workflows.",
      achievements: [
        "Led the integration of Jenkins, GitHub, Slack, and Docker to build an end-to-end CI/CD pipeline, enhancing team collaboration and automating deployment workflows.",
        "Successfully executed an IBM-assigned DevOps project focused on improving collaboration by integrating multiple tools, resulting in a streamlined and efficient development environment."
      ],
      tech: ["Python","Docker","Kubernetes", "Jenkins","Slack","Flask"]
    },
   
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My professional journey and key accomplishments
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-32 bg-gradient-to-b from-blue-600 to-purple-600"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
              
              <Card className="ml-16 mb-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-purple-600 mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col md:items-end gap-2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-fit">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
