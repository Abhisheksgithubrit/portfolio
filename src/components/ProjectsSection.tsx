
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Smart City Service Provider and Finder",
      description: "A comprehensive Django-based platform that connects users with local service providers in real-time, featuring advanced search algorithms and business visibility tools.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=300&fit=crop",
      tech: ["Django", "MongoDB", "Python", "JavaScript", "HTML","CSS"],
      category: "Full Stack"
    },
    {
      title: "AI Medical Diagnosis System",
      description: "Deep learning application using CNN and TensorFlow to detect diseases from medical images (X-ray/CT scans) with 93.6% accuracy.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
      tech: ["TensorFlow", "OpenCV", "Python", "Flask", "CNN"],
      category: "AI/ML",
    },
    {
      title: "Credit Risk Assessment Tool",
      description: "Machine learning model using Random Forest classifier achieving 82.16% accuracy in evaluating loan default risks with comprehensive statistical analysis.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      category: "Data Science"
    },
    {
      title: "DevOps Collaboration Hub",
      description: "Integrated CI/CD platform combining Jenkins, GitHub, Slack, and Docker to streamline development workflows and team collaboration.",
      image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?w=500&h=300&fit=crop",
      tech: ["Jenkins", "Docker", "GitHub", "Slack API"],
      category: "DevOps"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real-world applications showcasing my technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${
                    project.category === 'AI/ML' ? 'bg-purple-600' :
                    project.category === 'Full Stack' ? 'bg-blue-600' :
                    project.category === 'Data Science' ? 'bg-green-600' :
                    'bg-orange-600'
                  } text-white`}>
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
