import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'guebsimahmoudd@gmail.com',
      href: 'mailto:guebsimahmoudd@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+216 25 090 644',
      href: 'tel:+21625090644',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kairouan, Tunisia',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/mahmoud-guebssi',
      color: 'hover:bg-gray-900'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/mahmoud-guebsi-000baa195',
      color: 'hover:bg-blue-600'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:guebsimahmoudd@gmail.com',
      color: 'hover:bg-red-500'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
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
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Feel free to reach out if you'd like to discuss a project or just say hello!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Whether you're looking for a dedicated lecturer, a skilled web developer, 
                or an AI trainer, I'm here to help. I bring passion, expertise, and a 
                commitment to excellence to every project.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center text-white`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 font-medium">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-gray-900 font-medium hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-gray-100 rounded-lg text-gray-600 transition-all duration-300 ${social.color} hover:text-white`}
                      aria-label={social.name}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Current Availability
              </h4>
              <p className="text-gray-600 mb-4">
                I'm currently available for new projects and opportunities. 
                I typically respond to messages within 24 hours.
              </p>
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Available for new projects</span>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="h-4 w-4" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg"
                >
                  <AlertCircle className="h-5 w-5" />
                  <span>Failed to send message. Please try again or contact me directly.</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

