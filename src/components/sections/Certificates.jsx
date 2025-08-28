import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: "Software Development Bootcamp with AI Skills",
      issuer: "Professional Training Program",
      year: 2025,
      description: "Comprehensive bootcamp covering modern software development practices with a focus on AI integration and implementation.",
      skills: ["Software Development", "AI Integration", "Modern Development Practices", "Project Management"],
      category: "Software Development",
      status: "Completed",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Nuxt.js Training",
      issuer: "Etnafes Development Company",
      year: 2024,
      description: "Advanced training in Nuxt.js framework for building modern Vue.js applications with server-side rendering and static site generation.",
      skills: ["Nuxt.js", "Vue.js", "SSR", "Static Site Generation", "Modern Web Development"],
      category: "Web Development",
      status: "Completed",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Vue.js Training",
      issuer: "Etnafes Development Company",
      year: 2024,
      description: "Comprehensive training in Vue.js framework covering component development, state management, and modern frontend development practices.",
      skills: ["Vue.js", "Component Development", "State Management", "Frontend Development"],
      category: "Web Development",
      status: "Completed",
      color: "from-emerald-500 to-green-600"
    },
    {
      title: "Angular Training",
      issuer: "Online Training Platform",
      year: 2023,
      description: "Professional training in Angular framework for building scalable web applications with TypeScript and modern development tools.",
      skills: ["Angular", "TypeScript", "Component Architecture", "Web Applications"],
      category: "Web Development",
      status: "Completed",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Web Development Training",
      issuer: "Professional Training Institute",
      year: 2019,
      description: "Comprehensive web development training covering HTML5, CSS3, JavaScript, and PHP for full-stack web development.",
      skills: ["HTML5", "CSS3", "JavaScript", "PHP", "Full-Stack Development"],
      category: "Web Development",
      status: "Completed",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Android Development Training",
      issuer: "Mobile Development Institute",
      year: 2019,
      description: "Training in Android application development using Java and Android SDK, covering mobile app architecture and development best practices.",
      skills: ["Android Development", "Java", "Mobile Applications", "Android SDK"],
      category: "Mobile Development",
      status: "Completed",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "LaTeX Training",
      issuer: "Academic Training Program",
      year: 2019,
      description: "Professional training in LaTeX document preparation system for creating high-quality academic and technical documents.",
      skills: ["LaTeX", "Document Preparation", "Academic Writing", "Technical Documentation"],
      category: "Documentation",
      status: "Completed",
      color: "from-gray-500 to-slate-600"
    },
    {
      title: "Design Training",
      issuer: "Design Institute",
      year: 2019,
      description: "Training in graphic design principles, user interface design, and visual communication for web and mobile applications.",
      skills: ["Graphic Design", "UI Design", "Visual Communication", "Design Principles"],
      category: "Design",
      status: "Completed",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const categories = ["All", "Web Development", "Software Development", "Mobile Development", "Design", "Documentation"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCertificates = selectedCategory === "All" 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getCertificatesByYear = () => {
    const grouped = {};
    filteredCertificates.forEach(cert => {
      if (!grouped[cert.year]) {
        grouped[cert.year] = [];
      }
      grouped[cert.year].push(cert);
    });
    return Object.keys(grouped)
      .sort((a, b) => b - a)
      .map(year => ({ year, certificates: grouped[year] }));
  };

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certifications & Training
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Continuous learning and professional development through specialized training programs and certifications.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Certificates Timeline */}
        <div className="space-y-12">
          {getCertificatesByYear().map((yearGroup, yearIndex) => (
            <motion.div
              key={yearGroup.year}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: yearIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Year Header */}
              <div className="flex items-center mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{yearGroup.year}</h3>
                </div>
                <div className="flex-1 h-0.5 bg-gray-300 ml-6"></div>
              </div>

              {/* Certificates Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {yearGroup.certificates.map((cert, certIndex) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: certIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    {/* Certificate Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center text-white flex-shrink-0`}>
                        <Award className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                          {cert.title}
                        </h4>
                        <p className="text-blue-600 font-medium text-sm mb-2">
                          {cert.issuer}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {cert.status}
                          </span>
                          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full">
                            {cert.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="space-y-3">
                      <h5 className="text-sm font-semibold text-gray-900">Skills Acquired:</h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 py-1 text-xs font-medium bg-blue-50 text-blue-700 rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Learning Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{certificates.length}</div>
              <div className="text-gray-600">Total Certifications</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600">Years of Learning</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">5</div>
              <div className="text-gray-600">Technology Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
          </div>
        </motion.div>

        {/* Commitment to Learning */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Commitment to Continuous Learning
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              I believe in the importance of staying current with technology trends and continuously 
              expanding my skill set. These certifications represent my dedication to professional 
              growth and my commitment to delivering high-quality solutions using the latest technologies 
              and best practices.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center space-x-2 text-blue-600">
                <Award className="h-5 w-5" />
                <span className="font-medium">Always Learning, Always Growing</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;

