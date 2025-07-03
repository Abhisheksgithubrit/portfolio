
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhialavandi@gmail.com",
      link: "mailto:abhialavandi@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9590670561",
      link: "tel:+919590670561"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-alavandi/",
      color: "hover:bg-blue-600"
    },
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Abhisheksgithubrit",
      color: "hover:bg-gray-800"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://www.instagram.com/abhialavandi/",
      color: "hover:bg-pink-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/Abhishe19182603",
      color: "hover:bg-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  Get In Touch
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
                          <item.icon className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            {item.label}
                          </p>
                          {item.link ? (
                            <a 
                              href={item.link}
                              className="text-gray-900 dark:text-white hover:text-purple-600 transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-gray-900 dark:text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Follow Me
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      asChild
                      className={`border-2 transition-all duration-300 ${social.color} hover:text-white hover:border-transparent`}
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  Ready to Start a Project?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  Whether you need a full-stack application, AI integration, or DevOps setup, 
                  I'm here to help turn your vision into reality.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <a href="mailto:abhialavandi@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
