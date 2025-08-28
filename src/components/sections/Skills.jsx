import { motion } from 'framer-motion';
import { Code, Database, Globe, Wrench, Brain, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "PHP", level: 75 },
        { name: "Nuxt.js", level: 85 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "PHP", level: 75 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Oracle", level: 80 },
        { name: "PLSQL", level: 75 },
        { name: "Data Warehouse", level: 70 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: Server,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Bootstrap", level: 90 },
        { name: "Angular", level: 75 },
        { name: "Vue.js", level: 80 },
        { name: "Nuxt.js", level: 85 },
        { name: "React", level: 70 }
      ]
    },
    {
      title: "AI & Data Science",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "Data Analysis", level: 85 },
        { name: "Natural Language Processing", level: 75 },
        { name: "Neural Networks", level: 70 },
        { name: "Chatbot Development", level: 85 }
      ]
    },
    {
      title: "Tools & Environments",
      icon: Wrench,
      color: "from-gray-500 to-slate-600",
      skills: [
        { name: "Git", level: 85 },
        { name: "LaTeX", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Linux", level: 75 },
        { name: "Docker", level: 65 }
      ]
    }
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-400";
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
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
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of computer science and web development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-lg shadow-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">90+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert</h4>
              <p className="text-sm text-gray-600">Advanced proficiency with extensive experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">80+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proficient</h4>
              <p className="text-sm text-gray-600">Strong skills with practical experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">70+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Intermediate</h4>
              <p className="text-sm text-gray-600">Good understanding with some experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold">60+</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Beginner</h4>
              <p className="text-sm text-gray-600">Basic knowledge and learning</p>
            </div>
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Soft Skills */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Teaching & Mentoring",
                "Problem Solving",
                "Team Collaboration",
                "Communication",
                "Project Management",
                "Critical Thinking",
                "Adaptability",
                "Leadership"
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-700">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications & Training */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Training</h3>
            <div className="space-y-3">
              {[
                "Software Development Bootcamp with AI Skills (2025)",
                "Angular Training - Online (2023)",
                "Vue.js Training - Etnafes Development Company (2024)",
                "Nuxt.js Training - Etnafes Development Company (2024)",
                "Android Development Training (2019)",
                "LaTeX Training (2019)"
              ].map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-2"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span className="text-sm text-gray-700">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

