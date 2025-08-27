"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ loading: false, message: "" });
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, message: "" });
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    if (!data.name || !data.email || !data.message) {
      setFormStatus({ loading: false, message: "Please fill out all fields." });
      return;
    }
    try {
      setFormStatus({ loading: false, message: "Message sent successfully!" });
    } catch (error) {
      console.error("Failed to send message:", error);
      setFormStatus({ loading: false, message: "Failed to send message." });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen font-sans scroll-smooth">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm dark:bg-gray-950/95">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4">
          <motion.a
            href="#"
            className="text-2xl font-bold tracking-tight text-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Amna Ali
          </motion.a>

          {/* Desktop Navigation with Dark Mode Toggle */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <a
                    href={`#${link.id}`}
                    className="relative text-gray-700 hover:text-pink-500 text-base font-medium transition-colors duration-200 group dark:text-gray-300 dark:hover:text-pink-300"
                  >
                    {link.label}
                    <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-pink-500 transform -translate-x-1/2 group-hover:w-full transition-all duration-300 dark:bg-pink-300" />
                  </a>
                </motion.li>
              ))}
            </ul>
            
            {/* Dark Mode Toggle for Desktop */}
            <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer ml-4">
              <input
                type="checkbox"
                id="darkModeToggle"
                className="sr-only peer"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="block bg-gray-300 w-9 h-5 rounded-full peer-checked:bg-pink-500 transition-colors duration-300 dark:bg-gray-600"></div>
              <div className="dot absolute bg-white w-3 h-3 rounded-full transition-transform duration-300 peer-checked:translate-x-4 dark:bg-gray-300" style={{left: '4px', top: '50%', transform: 'translateY(-50%)'}}></div>
            </label>
          </div>

          {/* Mobile Menu Controls */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Dark Mode Toggle for Mobile */}
            <label htmlFor="darkModeToggleMobile" className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="darkModeToggleMobile"
                className="sr-only peer"
                checked={darkMode}
                onChange={toggleDarkMode}
              />
              <div className="block bg-gray-300 w-9 h-5 rounded-full peer-checked:bg-pink-500 transition-colors duration-300 dark:bg-gray-600 relative">
                <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 peer-checked:translate-x-4 dark:bg-gray-300"></div>
              </div>
            </label>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="text-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md p-2 dark:text-gray-50"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          <ul
            className={`lg:hidden fixed top-16 right-0 w-full bg-white p-6 transition-all duration-300 ease-in-out shadow-lg dark:bg-gray-800 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } z-40`}
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                className="my-3 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={`#${link.id}`}
                  className="relative text-gray-700 hover:text-pink-500 text-base font-medium transition-colors duration-200 group dark:text-gray-300 dark:hover:text-pink-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-pink-500 transform -translate-x-1/2 group-hover:w-full transition-all duration-300 dark:bg-pink-300" />
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-pink-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center justify-items-center">
            <motion.div
              className="text-center max-w-md mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-gray-900 dark:text-gray-50">
                Hi, I am <span className="text-pink-500 typewriter">Amna Ali</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed dark:text-gray-300">
                Full-Stack Developer | Crafting Seamless & Innovative Web Experiences
              </p>
              <motion.a
                href="#contact"
                className="inline-block bg-pink-500 text-white font-semibold text-xs py-4 px-12 rounded-full hover:bg-pink-600 transition-all duration-300 shadow-md whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <div className="flex gap-6 mt-8 justify-center">
                <a
                  href="https://linkedin.com/in/amna-ali-07a391256"
                  className="text-gray-700 hover:text-pink-500 text-2xl transition-colors duration-200 dark:text-gray-300 dark:hover:text-pink-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/amnaali14"
                  className="text-gray-700 hover:text-pink-500 text-2xl transition-colors duration-200 dark:text-gray-300 dark:hover:text-pink-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="justify-self-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-pink-100/50 to-pink-200/50 backdrop-blur-sm shadow-2xl overflow-hidden dark:from-pink-800/50 dark:to-pink-900/50">
                <Image
                  src="/images/profile1.png"
                  alt="Amna Ali"
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                  onError={(e) => {
                    console.log("Profile image not found at /images/profile1.png. Using fallback.");
                    e.currentTarget.src = "https://placehold.co/320x320/cccccc/ffffff?text=Profile";
                  }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white flex items-center justify-center dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-semibold mb-12 tracking-tight text-pink-500 section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <div className="grid gap-12 lg:grid-cols-2 items-center justify-items-center">
              <motion.div
                className="text-center max-w-md mx-auto"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg font-medium text-gray-600 leading-7 tracking-wide dark:text-gray-300">
                  I am a Computer Science graduate specializing in{" "}
                  <span className="text-pink-500">Artificial Intelligence</span> and{" "}
                  <span className="text-pink-500">full-stack development</span>. Currently serving as an AI
                  Engineer Intern at eGeeks Global, I bring hands-on experience from my previous role as a .NET Developer at Merik Solutions.
                  {" "}My capstone project—an{" "}
                  <span className="text-pink-500">
                    AI-Driven Vulnerability Assessment and Patching Engine
                  </span>
                  —showcases my expertise in React, Next.js, ASP.NET, and Python.
                  I am committed to developing innovative solutions that bridge AI capabilities with robust software architecture.
                </p>
              </motion.div>
              <motion.div
                className="justify-self-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-pink-100/50 to-pink-200/50 backdrop-blur-sm shadow-xl overflow-hidden dark:from-pink-800/50 dark:to-pink-900/50">
                  <Image
                    src="https://placehold.co/288x288/png"
                    alt="About Amna Ali"
                    width={288}
                    height={288}
                    className="rounded-2xl object-cover"
                    onError={(e) => {
                      console.log("About image not found");
                      e.currentTarget.src = "https://placehold.co/288x288/cccccc/ffffff?text=About";
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-pink-50 flex items-center justify-center dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-semibold mb-12 tracking-tight text-pink-500 section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Skills
            </motion.h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {[
                { name: "JavaScript/TypeScript", level: "95%", category: "Frontend" },
                { name: "React/Next.js", level: "85%", category: "Frontend" },
                { name: "Python", level: "80%", category: "Backend" },
                { name: "Tailwind CSS", level: "90%", category: "Frontend" },
                { name: "Node.js", level: "75%", category: "Backend" },
                { name: "Git/GitHub", level: "85%", category: "Tools" },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-xs dark:bg-gray-800 dark:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <span className="text-pink-500 mr-3 text-xl dark:text-pink-300"></span>
                    <span className="font-semibold text-gray-900 dark:text-gray-50">{skill.name}</span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">({skill.category})</span>
                  </div>
                  <div className="relative h-2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <motion.div
                      className="absolute h-2 bg-pink-500 rounded-full dark:bg-pink-300"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  <div className="text-right text-sm text-gray-600 mt-2 dark:text-gray-400">{skill.level}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="py-24 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-semibold mb-16 tracking-tight text-pink-500 section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Projects
            </motion.h2>
            
            {/* Projects Grid - Improved Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 place-items-center">
              {[
                {
                  title: "AI-Driven Vulnerability Assessment and Patching Engine",
                  img: "https://placehold.co/400x240/png",
                  desc: "Developed an intelligent system using AI/ML for automated vulnerability identification and patching, featuring an integrated web application for assessment and reporting.",
                  technologies: "Python, React, Flask, Html, CSS, Typescript",
                  github: "https://github.com/your-fyp-repo",
                  category: "AI/Web",
                },
                {
                  title: "Glaucoma Detection",
                  img: "https://placehold.co/400x240/png",
                  desc: "A deep learning project focused on early glaucoma detection from retinal images, aiding in timely diagnosis by analyzing fundus image features.",
                  technologies: "Python (TensorFlow/Keras/PyTorch), OpenCV, Scikit-image, CNNs",
                  github: "https://github.com/your-glaucoma-repo",
                  category: "AI/Machine Learning",
                },
                {
                  title: "Skin Disease Classification",
                  img: "https://placehold.co/400x240/png",
                  desc: "Implemented a machine learning model to classify various skin diseases from images of lesions, assisting dermatologists with efficient diagnosis.",
                  technologies: "Python (TensorFlow/Keras/PyTorch), OpenCV, CNNs",
                  github: "https://github.com/your-skin-disease-repo",
                  category: "AI/Machine Learning",
                },
                {
                  title: "Hostel Booking System",
                  img: "https://placehold.co/400x240/png",
                  desc: "A comprehensive web-based application for hostel management, enabling room bookings, room management, and complaint handling for administrators with a Role-based Access Control (RBAC) system.",
                  technologies: "PHP/Python (Django/Flask) or Java (Spring Boot), HTML/CSS/JavaScript, MySQL/PostgreSQL",
                  github: "https://github.com/your-hostel-repo",
                  category: "Web/Desktop",
                },
                {
                  title: "Banking System",
                  img: "https://placehold.co/400x240/png",
                  desc: "A secure banking application simulating core functionalities including user authentication, account management, deposits, withdrawals, and transaction history.",
                  technologies: "Java (Swing/Spring Boot), SQL (MySQL/PostgreSQL/Oracle)",
                  github: "https://github.com/your-banking-repo",
                  category: "Desktop/Web",
                },
                {
                  title: "Vocal Training System",
                  img: "https://placehold.co/400x240/png",
                  desc: "An interactive system providing real-time feedback on vocal pitch, tone, and technique to assist users in improving their singing or speaking voice.",
                  technologies: "Python (Librosa, PyAudio), potentially Machine Learning, GUI Frameworks",
                  github: "https://github.com/your-vocal-training-repo",
                  category: "Software/Web",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden w-full max-w-sm mx-auto transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48 bg-gradient-to-br from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={400}
                      height={240}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        console.log(`${project.title} image not found`);
                        e.currentTarget.src = `https://placehold.co/400x240/ec4899/ffffff?text=${encodeURIComponent(project.title.split(' ').slice(0, 2).join(' '))}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-pink-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {project.category}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col h-72">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-50 mb-3 line-clamp-2 leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.desc}
                      </p>
                      
                      {project.technologies && (
                        <div className="mb-4">
                          <p className="text-xs font-semibold text-pink-500 dark:text-pink-300 mb-2">Technologies:</p>
                          <div className="flex flex-wrap gap-1">
                            {project.technologies.split(', ').slice(0, 4).map((tech, idx) => (
                              <span 
                                key={idx}
                                className="inline-block bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-1 rounded-md text-xs font-medium"
                              >
                                {tech.trim()}
                              </span>
                            ))}
                            {project.technologies.split(', ').length > 4 && (
                              <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-md text-xs">
                                +{project.technologies.split(', ').length - 4} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full bg-pink-500 hover:bg-pink-600 dark:bg-pink-600 dark:hover:bg-pink-500 text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 text-sm group-hover:shadow-lg"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        View on GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-pink-50 flex items-center justify-center dark:bg-gray-900">
          <div className="max-w-lg mx-auto px-6 lg:px-8 text-center">
            <motion.h2
              className="text-4xl font-semibold mb-12 tracking-tight text-pink-500 section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Contact Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 bg-white/70 focus:ring-2 focus:ring-pink-500 transition-all duration-200 dark:bg-gray-700 dark:text-gray-50 dark:border-gray-600"
                  required
                  aria-label="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 bg-white/70 focus:ring-2 focus:ring-pink-500 transition-all duration-200 dark:bg-gray-700 dark:text-gray-50 dark:border-gray-600"
                  required
                  aria-label="Your Email"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 bg-white/70 focus:ring-2 focus:ring-pink-500 transition-all duration-200 dark:bg-gray-700 dark:text-gray-50 dark:border-gray-600"
                  required
                  aria-label="Your Message"
                />
                <motion.button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full bg-pink-500 text-white font-semibold py-3 px-6 rounded-xl hover:bg-pink-600 transition-all duration-300 disabled:opacity-50 shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {formStatus.loading ? "Sending..." : "Send Message"}
                </motion.button>
                {formStatus.message && (
                  <p
                    className={`text-sm text-center ${
                      formStatus.message.includes("success")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {formStatus.message}
                  </p>
                )}
              </form>
              <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
                <p>Or reach out directly:</p>
                <div className="flex justify-center gap-4 mt-2">
                  <a
                    href="mailto:amnali51214@example.com"
                    className="text-pink-500 hover:underline dark:text-pink-300 dark:hover:text-pink-400"
                  >
                    amnali51214@example.com
                  </a>
                  <span>|</span>
                  <a
                    href="https://linkedin.com/in/amna-ali-07a391256"
                    className="text-pink-500 hover:underline dark:text-pink-300 dark:hover:text-pink-400"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-semibold mb-4 tracking-tight text-pink-500 dark:text-pink-300">Amna Ali</h3>
          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://linkedin.com/in/amna-ali-07a391256"
              className="text-white hover:text-pink-500 text-2xl transition-colors duration-200 dark:text-gray-300 dark:hover:text-pink-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/amnaali14"
              className="text-white hover:text-pink-500 text-2xl transition-colors duration-200 dark:text-gray-300 dark:hover:text-pink-300"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
          <p className="text-sm text-gray-400">© 2025 Amna Ali. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}