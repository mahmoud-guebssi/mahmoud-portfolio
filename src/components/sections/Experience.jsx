import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Users, Code, Wrench, Brain } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "University Contract Lecturer - Computer Science",
      company: "Higher Institute of Sciences Islamique",
      location: "Kairouan, Tunisia",
      period: "September 2021 - Present",
      type: "Contract",
      description: "Teaching computer science courses to university students, developing curriculum, and mentoring students in their academic and professional development.",
      responsibilities: [
        "Deliver lectures on computer science fundamentals and advanced topics",
        "Design and evaluate student assessments and projects",
        "Mentor students in their academic and career development",
        "Collaborate with faculty on curriculum development"
      ],
      skills: ["Teaching", "Curriculum Development", "Student Mentoring"],
      icon: Users,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "University Contract Lecturer - Computer Science",
      company: "Higher Institute of Computer Science and Management of Kairouan",
      location: "Kairouan, Tunisia",
      period: "January 2023 - June 2023",
      type: "Contract",
      description: "Taught computer science courses at my alma mater, sharing knowledge and experience with the next generation of computer science students.",
      responsibilities: [
        "Conducted lectures on programming and software development"
      ],
      skills: ["Programming Instruction", "Software Development", "Academic Evaluation"],
      icon: Users,
      color: "from-green-500 to-blue-500"
    },
    {
      title: "AI Trainer",
      company: "Gold Training",
      location: "Tunisia",
      period: "January 2024 - May 2024",
      type: "Training",
      description: "Designed and delivered comprehensive workshops on artificial intelligence, covering machine learning, neural networks, and natural language processing for beginners.",
      responsibilities: [
        "Developed AI training curriculum for beginners",
        "Conducted hands-on workshops on machine learning",
        "Created practical projects and real-world examples",
        "Mentored participants in AI implementation"
      ],
      skills: ["AI Training", "Machine Learning", "Neural Networks", "NLP", "Workshop Design"],
      icon: Brain,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Python Trainer for Beginners",
      company: "Gold Training",
      location: "Tunisia",
      period: "March 2024 - October 2024",
      type: "Training",
      description: "Taught programming basics, algorithms, and problem-solving using Python, focusing on practical exercises and real-world projects.",
      responsibilities: [
        "Designed Python curriculum for beginners",
        "Taught programming fundamentals and best practices",
        "Created practical coding exercises and projects",
        "Provided individual mentoring and code reviews"
      ],
      skills: ["Python Programming", "Algorithm Design", "Problem Solving", "Code Review"],
      icon: Code,
      color: "from-yellow-500 to-orange-600"
    },
    {
      title: "Web Developer",
      company: "Turing Solution",
      location: "Tunisia",
      period: "January 2022 - September 2023",
      type: "Full-time",
      description: "Developed web applications and e-commerce solutions, including the company's showcase website and electronic products e-commerce platform.",
      responsibilities: [
        "Developed company's showcase website",
        "Built e-commerce platform for electronic products",
        "Implemented responsive design and user-friendly interfaces",
        "Collaborated with design team on UI/UX improvements"
      ],
      skills: ["Web Development", "E-commerce", "Frontend Development", "UI/UX Design"],
      icon: Code,
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "IT Technician",
      company: "Turing Lab",
      location: "Tunisia",
      period: "January 2022 - September 2024",
      type: "Full-time",
      description: "Provided technical maintenance and support for IT equipment in public education institutions, ensuring smooth operation of educational technology.",
      responsibilities: [
        "Performed technical maintenance on IT equipment",
        "Provided technical support to educational institutions",
        "Troubleshot hardware and software issues",
        "Maintained inventory and documentation of IT assets"
      ],
      skills: ["IT Support", "Hardware Maintenance", "Troubleshooting", "Technical Documentation"],
      icon: Wrench,
      color: "from-gray-500 to-slate-600"
    },
    {
      title: "Web Developer",
      company: "Etnafes Development Company",
      location: "Tunisia",
      period: "October 2024 - Present",
      type: "Full-time",
      description: "Contributed to the development of company projects by building websites using modern frameworks such as Nuxt.js (Vue.js 3), creating and customizing websites with WordPress (including plugin installation and configuration), and implementing automation workflows using n8n to enhance efficiency.",
      responsibilities: [
        "Built and maintained websites with Nuxt.js (Vue.js 3) to deliver modern, responsive solutions.",

        "Developed and customized websites with WordPress, including plugin installation and configuration.",

        "Implemented automation workflows using n8n to optimize business processes.",

        "Collaborated with team members to ensure the delivery of high-quality, user-friendly websites.",

        "Performed testing, debugging, and maintenance to ensure site stability and performance."      
      ],
      skills: ["Nuxt.js (Vue.js 3)","WordPress (plugin installation & customization)", "n8n (automation workflows)","Responsive Web Design",
        "Debugging & Testing"],
      icon: Wrench,
      color: "from-gray-500 to-slate-600"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
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
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey spanning education, web development, and technical training.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-green-500 to-purple-500"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-500 rounded-full flex items-center justify-center z-10">
                    <Briefcase className="h-4 w-4 text-blue-500" />
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${exp.color} flex items-center justify-center text-white`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-blue-600 font-medium mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-500 mb-2">
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Key Responsibilities:
                        </h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">
                          Skills Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Professional Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">600+</div>
                <div className="text-gray-600">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                <div className="text-gray-600">Different Roles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                <div className="text-gray-600">Industries</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

