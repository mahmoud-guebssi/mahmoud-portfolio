import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Award } from 'lucide-react';
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";



const About = () => {
  const stats = [
    { label: 'Years of Experience', value: '3+', icon: Calendar },
    { label: 'Projects Completed', value: '10+', icon: Award },
    { label: 'Students Taught', value: '600+', icon: User },
    { label: 'Certifications', value: '10', icon: Award }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Learn more about my background, experience, and passion for technology and education.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Computer Science & Web Developer
              </h3>
              <p className="text-gray-700 leading-relaxed">
                I am a dedicated professional with a strong background in computer science and data science. 
                Currently serving as a University Contract Lecturer at the Higher Institute of Sciences Islamique 
                in Kairouan, I am passionate about sharing knowledge and inspiring the next generation of developers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My expertise spans across web development, data analysis, and artificial intelligence. I have 
                hands-on experience in developing multilingual chatbots, web applications, and data processing 
                systems. My approach combines technical excellence with strong communication skills, making 
                complex concepts accessible to students and clients alike.
              </p>
            </div>

            {/* Personal Info */}
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-900">Mahmoud Guebsi</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium text-gray-900">Kairouan, Tunisia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Experience</p>
                    <p className="font-medium text-gray-900">3+ Years</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Degree</p>
                    <p className="font-medium text-gray-900">Master's in Data Science</p>
                  </div>
                </div>
               <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">E-mail</p>
                    <p className="font-medium text-gray-900">guebsimahmoudd@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">+216 25 090 644</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Languages */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900">Languages</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Arabic (Native)</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">French (Fluent)</span>
                  <div className="flex space-x-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    ))}
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">English (Professional)</span>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    ))}
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 text-center"
                  >
                    <Icon className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Key Qualities */}
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Qualities</h4>
              <div className="space-y-3">
                {[
                  'Dynamic and results-oriented',
                  'Strong communication skills',
                  'Punctual and reliable',
                  'Passionate about technology',
                  'Excellent problem-solving abilities',
                  'Team collaboration expertise'
                ].map((quality, index) => (
                  <motion.div
                    key={quality}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">{quality}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

