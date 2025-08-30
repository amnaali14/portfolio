// page.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Navigation Component
type NavBarProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  navLinks: { id: string; label: string }[];
};

const NavBar = ({ isMenuOpen, toggleMenu, darkMode, toggleDarkMode, navLinks }: NavBarProps) => (
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
      <div className="hidden lg:flex items-center gap-6">
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
          <div className="relative bg-gray-300 w-10 h-6 rounded-full transition-colors duration-300 dark:bg-gray-600 peer-checked:bg-pink-500 hover:bg-pink-400 dark:hover:bg-pink-600">
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-4 shadow-md"></div>
          </div>
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
          <div className="block bg-gray-300 w-9 h-5 rounded-full peer-checked:bg-pink-500 transition-colors duration-300 dark:bg-gray-600 hover:bg-pink-400 dark:hover:bg-pink-600 relative">
            <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 peer-checked:translate-x-4 dark:bg-gray-300 shadow-sm"></div>
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
              onClick={() => toggleMenu()}
            >
              {link.label}
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-pink-500 transform -translate-x-1/2 group-hover:w-full transition-all duration-300 dark:bg-pink-300" />
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  </header>
);

// Home Section Component
const HomeSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-pink-50 dark:bg-gray-900 relative overflow-hidden">
    {/* Background Pattern */}
    <div className="hero-pattern"></div>
    
    <div className="max-w-7xl mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-2 items-center justify-items-center">
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight mb-6 text-gray-900 dark:text-gray-50">
          Hi, I am <span className="text-pink-500 typewriter">Amna Ali</span>
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed dark:text-gray-300 text-center">
          Full-Stack Developer | Crafting Seamless & Innovative Web Experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#contact"
            className="btn btn-primary shadow-lg text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
          <motion.a
            href="#work"
            className="btn btn-outline shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </div>
        {/* Skills Preview */}
        <motion.div 
          className="mt-8 flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {['React', 'Node.js', 'TypeScript', 'Python', 'ASP.NET'].map((skill, index) => (
            <span
              key={skill}
              className="px-3 py-1 bg-pink-100 text-pink-700 text-sm font-medium rounded-full dark:bg-pink-900 dark:text-pink-200"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </motion.div>
        
        <div className="flex gap-6 mt-10 justify-center">
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
      
      {/* Scroll Indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      />
    </div>
  </section>
);

// About Section Component
const AboutSection = () => (
  <section id="about" className="py-32 bg-white dark:bg-gray-800">
    <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
      <motion.h2
        className="text-4xl font-semibold mb-16 tracking-tight text-pink-500 section-title text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.div
        className="grid gap-12 lg:grid-cols-2 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-center space-y-6">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-prose mx-auto">
            I am a passionate Full-Stack Developer with a love for creating responsive, functional, and user-friendly web applications. 
            With expertise in modern web technologies, I bring ideas to life through clean code and intuitive design.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-prose mx-auto">
            When I am not coding, you can find me exploring new technologies, contributing to open-source projects, 
            or sharing knowledge with the developer community.
          </p>
        </div>
        <div className="flex justify-center">
           <div className="w-80 h-60 rounded-lg overflow-hidden shadow-lg">
             <Image
               src="/images/about.jpg"
               alt="About Me - Professional Developer"
               width={320}
               height={240}
               className="w-full h-full object-cover"
               onError={(e) => {
                 console.log("About image not found at /images/about.jpg. Using fallback.");
                 e.currentTarget.src = "https://placehold.co/320x240/f3f4f6/6b7280?text=Professional+Developer&font=inter";
               }}
               onLoad={() => {
                 console.log("About image loaded successfully!");
               }}
             />
           </div>
         </div>
      </motion.div>
    </div>
  </section>
);

// Skills Section Component
const SkillsSection = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "SQL", level: 85 },
    { name: "Javascript", level: 70 }
  ];

  return (
    <section id="skills" className="py-20 bg-pink-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl font-semibold mb-8 tracking-tight text-pink-500 section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-full max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <motion.div
                    className="bg-pink-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  />
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Projects Section Component
// ... existing code ...
// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Driven Vulnerability Assessment & Patching Engine",
      description: "An intelligent system using AI/ML for automated vulnerability identification and patching, featuring an integrated web application for assessment and reporting.",
      technologies: ["Python", "React", "Flask", "HTML", "CSS", "TypeScript"],
      category: "AI/Web"
    },
    {
      title: "Glaucoma Detection",
      description: "A deep learning project focused on early glaucoma detection from retinal images, aiding in timely diagnosis by analyzing fundus image features.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNNs"],
      category: "AI/Machine Learning"
    },
    {
      title: "Real-Time Voice Translator",
      description: "An interactive system providing real-time bilingual voice translation with advanced speech recognition and natural language processing capabilities.",
      technologies: ["Python", "Speech Recognition", "NLP", "Machine Learning"],
      category: "AI/Software"
    },
    {
      title: "Banking System using .NET",
      description: "A secure banking application with user authentication, account management, deposits, withdrawals, and comprehensive transaction history.",
      technologies: [".NET", "C#", "SQL Server", "Entity Framework"],
      category: "Desktop/Web"
    },
    {
      title: "Hotel Booking System",
      description: "A comprehensive web-based application for hotel management, enabling room bookings, management, and complaint handling with RBAC system.",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "Web Application"
    },
    {
      title: "Skin Disease Classification",
      description: "A machine learning model to classify various skin diseases from images of lesions, assisting dermatologists with efficient diagnosis.",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "CNNs"],
      category: "AI/Machine Learning"
    }
  ];
  return (
    <section id="work" className="py-32 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-semibold mb-16 tracking-tight text-pink-500 section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-600 w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
               <div className="relative h-48 overflow-hidden">
                <Image
                  src={`/images/project${index === 0 ? '1' : index === 1 ? '3' : index === 2 ? '4' : index === 3 ? '2' : index === 4 ? '5' : '6'}.${index === 4 ? 'png' : 'jpg'}`}
                  alt={project.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.log(`Project image not found. Using fallback.`);
                    e.currentTarget.src = "https://placehold.co/400x192/cccccc/ffffff?text=Project+Image";
                  }}
                />
                <div className="absolute top-3 right-3 bg-pink-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 text-center">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3 text-center">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 justify-center">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
// ... existing code ...

// Contact Section Component
const ContactSection = () => {
  const [formStatus, setFormStatus] = useState({ loading: false, message: "" });

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

  return (
    <section id="contact" className="py-32 bg-pink-50 flex items-center justify-center dark:bg-gray-900">
      <div className="max-w-lg mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-semibold mb-16 tracking-tight text-pink-500 section-title text-center"
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
              className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 bg-white/70 focus:ring-2 focus:ring-pink-500 transition-all duration-200 dark:bg-gray-700 dark:text-gray-50 dark:border-gray-600 text-center"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 bg-white/70 focus:ring-2 focus:ring-pink-500 transition-all duration-200 dark:bg-gray-700 dark:text-gray-50 dark:border-gray-600 text-center"
              required
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              className="w-full p-4 border border-gray-300 rounded-xl text-gray-900 bg-white/70 focus:ring-2 focus:ring-pink-500 transition-all duration-200 dark:bg-gray-700 dark:text-gray-50 dark:border-gray-600 text-center"
              required
              aria-label="Your Message"
            />
            <motion.button
              type="submit"
              disabled={formStatus.loading}
              className="btn btn-primary w-full"
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
          <div className="mt-12 text-center text-gray-600 dark:text-gray-300">
            <p className="text-lg mb-4">Or reach out directly:</p>
            <div className="flex justify-center gap-6">
              <a
                href="mailto:amnali51214@gmail.com"
                className="text-pink-500 hover:text-pink-700 dark:text-pink-300 dark:hover:text-pink-400 transition-colors duration-150 font-medium"
              >
                amnali51214@gmail.com
              </a>
              <span className="text-gray-400">|</span>
              <a
                href="https://linkedin.com/in/amna-ali-07a391256"
                className="text-pink-500 hover:text-pink-700 dark:text-pink-300 dark:hover:text-pink-400 transition-colors duration-150 font-medium"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 dark:bg-gray-950 py-16 text-center text-gray-300">
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      <div className="text-center">
        <p className="text-xl mb-6">
          Lets work together to bring your ideas to life!
        </p>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="https://linkedin.com/in/amna-ali-07a391256"
            className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://github.com/amnaali14"
            className="text-gray-400 hover:text-pink-400 transition-colors duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={28} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © 2024 Amna Ali. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

// Main Component
export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen font-sans scroll-smooth bg-white dark:bg-gray-900">
      <NavBar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        navLinks={navLinks}
      />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}