import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mahmoud-guebssi',
      icon: Github
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/mahmoud-guebsi-000baa195',
      icon: Linkedin
    },
    {
      name: 'Email',
      href: 'mailto:guebsimahmoudd@gmail.com',
      icon: Mail
    },
    {
      name: 'Phone',
      href: 'tel:+21625090644',
      icon: Phone
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>guebsimahmoudd@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+216 25 090 644</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#certificates" className="hover:text-blue-400 transition-colors">Certificates</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Mahmoud Guebsi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

