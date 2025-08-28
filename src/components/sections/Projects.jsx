import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, Bot, BarChart3, Globe, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Multilingual Chatbot/Voicebot",
      description: "Developed an advanced chatbot and voicebot system supporting Arabic, French, and Tunisian Arabic to reduce customer service call load for Tunisia Telecom. The system uses natural language processing and AI to understand and respond to customer queries in multiple languages.",
      longDescription: "This comprehensive project involved creating a sophisticated conversational AI system capable of handling customer inquiries in three languages. The chatbot was designed to understand context, maintain conversation flow, and provide accurate responses while reducing the workload on human customer service representatives.",
      technologies: ["Python", "AI/ML", "Natural Language Processing", "Speech Recognition", "Multilingual Support"],
      category: "AI & Machine Learning",
      period: "February 2021 - October 2021",
      client: "Tunisia Telecom",
      status: "Completed",
      features: [
        "Multi-language support (Arabic, French, Tunisian Arabic)",
        "Voice recognition and text-to-speech capabilities",
        "Context-aware conversation management",
        "Integration with customer service systems",
        "Real-time response generation"
      ],
      icon: Bot,
      color: "from-blue-500 to-purple-600",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Sports Team Management System (JSK)",
      description: "Created a comprehensive web and mobile application for sports team management, specifically designed for Jeunesse Sportive de Kairouan. The system handles player registration, team management, match scheduling, and performance tracking.",
      longDescription: "This full-stack application was developed as my final bachelor's project, providing a complete solution for sports club management. It includes features for managing players, coaches, matches, and club administration with both web and mobile interfaces.",
      technologies: ["Web Development", "Mobile Development", "Database Management", "User Management"],
      category: "Web & Mobile Development",
      period: "February 2019 - July 2019",
      client: "Jeunesse Sportive de Kairouan",
      status: "Completed",
      features: [
        "Player and coach management",
        "Match scheduling and results tracking",
        "Team statistics and performance analytics",
        "Mobile-responsive design",
        "Administrative dashboard"
      ],
      icon: Users,
      color: "from-green-500 to-teal-600",
      githubUrl: "https://github.com/mahmoud-guebssi",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Personal Chatbot Assistant",
      description: "Developed a personal AI chatbot assistant using Python with advanced AI implementation. This project demonstrates proficiency in conversational AI, natural language understanding, and intelligent response generation.",
      longDescription: "A personal project focused on creating an intelligent chatbot assistant capable of handling various tasks and queries. The project showcases advanced AI implementation techniques and serves as a foundation for more complex conversational AI systems.",
      technologies: ["Python", "Artificial Intelligence", "Machine Learning", "Natural Language Processing"],
      category: "AI & Machine Learning",
      period: "February 2021 - May 2021",
      client: "Personal Project",
      status: "Completed",
      features: [
        "Intelligent conversation handling",
        "Task automation capabilities",
        "Learning from user interactions",
        "Extensible plugin architecture",
        "Multi-platform compatibility"
      ],
      icon: Bot,
      color: "from-purple-500 to-pink-600",
      githubUrl: "https://github.com/mahmoud-guebssi",
      image: "/api/placeholder/400/250"
    },
    {
      title: "COVID-19 Data Processing & Visualization",
      description: "Comprehensive data analysis and visualization project focusing on COVID-19 statistics. Implemented advanced data processing techniques, statistical analysis, and interactive visualizations to provide insights into pandemic trends.",
      longDescription: "This data science project involved collecting, processing, and analyzing COVID-19 data from multiple sources. The project includes statistical analysis, trend identification, and the creation of interactive dashboards for data visualization.",
      technologies: ["Python", "Data Analysis", "Data Visualization", "Statistical Analysis", "Pandas", "Matplotlib"],
      category: "Data Science",
      period: "October 2020 - November 2020",
      client: "Academic Project",
      status: "Completed",
      features: [
        "Multi-source data integration",
        "Statistical trend analysis",
        "Interactive data visualizations",
        "Predictive modeling",
        "Automated reporting system"
      ],
      icon: BarChart3,
      color: "from-orange-500 to-red-600",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Primary School Information System",
      description: "Developed a comprehensive web platform designed for primary schools, facilitating communication and information management between teachers, students, and parents. The system includes grade management, attendance tracking, and parent-teacher communication tools.",
      longDescription: "This educational management system provides a centralized platform for primary school administration. It streamlines communication between all stakeholders and provides tools for academic management, making school administration more efficient and transparent.",
      technologies: ["Web Development", "Database Management", "User Authentication", "Responsive Design"],
      category: "Educational Technology",
      period: "Academic Project",
      client: "Educational Institution",
      status: "Completed",
      features: [
        "Multi-user role management (teachers, students, parents)",
        "Grade and attendance management",
        "Parent-teacher communication portal",
        "Assignment and homework tracking",
        "School announcements and notifications"
      ],
      icon: Globe,
      color: "from-indigo-500 to-blue-600",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Car Brands Showcase Website",
      description: "Created an interactive website presenting various car brands during high school studies. This early project demonstrated web development skills and passion for technology, featuring responsive design and comprehensive car brand information.",
      longDescription: "One of my earliest web development projects, this website showcased different car manufacturers and their models. Despite being a high school project, it demonstrated advanced web development concepts and attention to design details.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      category: "Web Development",
      period: "2014-2015",
      client: "High School Project",
      status: "Completed",
      features: [
        "Interactive car brand galleries",
        "Responsive web design",
        "Brand comparison features",
        "Image optimization",
        "Cross-browser compatibility"
      ],
      icon: Globe,
      color: "from-gray-500 to-slate-600",
      image: "/api/placeholder/400/250"
    }
  ];

  const categories = ["All", "AI & Machine Learning", "Web & Mobile Development", "Data Science", "Educational Technology"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects spanning AI development, web applications, and data science solutions.
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
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-6 py-2"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90 flex items-center justify-center`}>
                    <Icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-white/90 text-gray-800 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{project.client}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-md">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1"
                        asChild
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {!project.githubUrl && !project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        disabled
                      >
                        Private Project
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Project Statistics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{projects.length}</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">Years of Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4</div>
              <div className="text-gray-600">Technology Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Technologies Used</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

