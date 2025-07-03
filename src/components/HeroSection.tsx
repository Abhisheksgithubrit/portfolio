
import { Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abhishek_Alavandi.pdf';
    link.download = 'Abhishek_Alavandi.pdf';
    link.click();
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-to-r from-indigo-400/20 to-cyan-600/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        {/* Profile Image */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10">
            <img 
              src="/lovable-uploads/85a3ac9e-7b0f-406d-b638-48a735ff39ee.png" 
              alt="Abhishek Alavandi" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-md opacity-50 animate-pulse"></div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Abhishek Alavandi
            </span>
          </h1>
          
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300">
              Full Stack Developer
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           Turning ideas into interactive web experiences with a mix of AI, Python, Java, and full stack development.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Button
              onClick={handleResumeDownload}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              size="lg"
              className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Let's Connect
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
