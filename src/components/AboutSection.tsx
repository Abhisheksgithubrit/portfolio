
import { Card, CardContent } from '@/components/ui/card';
import { Code, Zap, Globe, Users } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable applications"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized solutions for maximum efficiency"
    },
    {
      icon: Globe,
      title: "Modern Stack",
      description: "Latest technologies and best practices"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Team player with strong communication skills"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate full stack developer skilled in building scalable web applications and integrating AI-powered solutions using Java, Python, and modern frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="Profile(3).jpg" 
                alt="Abhishek Alavandi" 
                className="w-full max-w-md rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl -z-10"></div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Hello! I'm Abhishek Alavandi, a passionate and motivated Java Full Stack Developer with a strong foundation in software development, web technologies, and DevOps practices. As a recent engineering graduate in Information Science with a CGPA of 8.63, I am eager to contribute to innovative projects and grow in the tech industry.
Throughout my academic journey and internships, I’ve built full-stack web applications using Java, Python, HTML/CSS, JavaScript, Django, and MongoDB. I have hands-on experience with Docker, Kubernetes, CI/CD pipelines, and cloud-native deployment from my AI DevOps Internship. My projects range from smart city service platforms to AI-based medical diagnosis systems using TensorFlow and OpenCV.

I'm a fast learner, enthusiastic about solving real-world problems with technology, and always open to new challenges. With a strong understanding of Data Structures, OOP, Machine Learning, and Modern DevOps Tools, I’m ready to contribute effectively as part of a collaborative team.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I believe in writing clean, efficient code and staying updated with the latest industry trends. 
              My goal is to create solutions that not only meet technical requirements but also provide 
              exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 text-center">
                    <item.icon className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
