
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Settings, Zap, Palette } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "Backend",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
      skills: ["Python", "Django", "Node.js", "Java", "C++"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-green-500 to-teal-500",
      skills: ["MySQL", "MongoDB"]
    },
    {
      title: "DevOps",
      icon: Settings,
      color: "from-orange-500 to-red-500",
      skills: ["Docker", "Kubernetes", "Jenkins", ]
    },
    {
      title: "AI/ML",
      icon: Zap,
      color: "from-purple-500 to-violet-500",
      skills: ["TensorFlow", "Machine Learning", "Libraries"]
    },
    {
      title: "Tools",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      skills: ["Git", "GitHub", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
