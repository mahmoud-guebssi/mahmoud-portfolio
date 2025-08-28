import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Professional Master's in Data Science",
      institution: "Higher Institute of Computer Science and Management",
      location: "Kairouan, Tunisia",
      period: "September 2019 - October 2021",
      description: "Specialized in data analysis, machine learning, and artificial intelligence. Completed a final project on multilingual chatbot development for Tunisia Telecom.",
      achievements: [
        "Developed multilingual chatbot/voicebot in Arabic, French, and Tunisian Arabic",
        "Focused on AI implementation and natural language processing",
        "Gained expertise in Python, data analysis, and machine learning algorithms"
      ],
      icon: "🎓",
      color: "from-blue-500 to-purple-600"
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: "Higher Institute of Computer Science and Management",
      location: "Kairouan, Tunisia",
      period: "September 2015 - June 2019",
      description: "Comprehensive study of computer science fundamentals including programming, databases, web development, and software engineering.",
      achievements: [
        "Created web/mobile application (JSK) for sports team management",
        "Gained proficiency in multiple programming languages",
        "Developed strong foundation in software development principles"
      ],
      icon: "💻",
      color: "from-green-500 to-blue-500"
    },
    {
      degree: "Baccalaureate in Computer Science",
      institution: "Chedli Atallah High School",
      location: "Kairouan, Tunisia",
      period: "September 2014 - June 2015",
      description: "Graduated with 'Fairly Good' honors. Early introduction to computer science concepts and web development.",
      achievements: [
        "Graduated with 'Fairly Good' honors",
        "Created a website presenting various car brands",
        "Developed early interest in web technologies"
      ],
      icon: "🏫",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
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
            Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My academic journey in computer science and data science, building a strong foundation for my career as a Fullstack Web Developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>

          {/* Education Items */}
          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                  <GraduationCap className="h-4 w-4 text-blue-500" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${edu.color} flex items-center justify-center text-white text-xl`}>
                        {edu.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-green-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Academic Excellence
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Throughout my academic journey, I have consistently demonstrated a passion for learning and 
              innovation in computer science. My education has provided me with a solid foundation in both 
              theoretical concepts and practical applications, preparing me for the challenges of the modern 
              technology landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <div className="text-gray-600">Years of Study</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-gray-600">Degrees Earned</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
                <div className="text-gray-600">Major Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

