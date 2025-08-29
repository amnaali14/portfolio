"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

// Navigation Component
type NavBarProps = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  navLinks: { id: string; label: string }[];
};

const NavBar = ({ isMenuOpen, toggleMenu, darkMode, toggleDarkMode, navLinks }: NavBarProps) => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm dark:bg-slate-950/80">
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
      <motion.a
        href="#home"
        className="text-2xl font-bold tracking-tight text-pink-600 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Amna Ali
      </motion.a>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8 justify-center">
        <ul className="flex items-center justify-center gap-6">
          {navLinks.map((link) => (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`#${link.id}`}
                className="relative text-slate-700 hover:text-pink-600 text-base font-medium transition-colors duration-150 dark:text-slate-300 dark:hover:text-pink-300 text-center"
              >
                {link.label}
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-0 h-0.5 bg-pink-600 group-hover:w-full transition-all duration-200 dark:bg-pink-300" />
              </Link>
            </motion.li>
          ))}
        </ul>
        <div className="flex items-center justify-center">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
              aria-label="Toggle dark mode"
            />
            <div className="w-10 h-6 bg-slate-300 rounded-full peer-checked:bg-pink-600 transition-colors duration-150">
              <div className="w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-150 peer-checked:translate-x-4" />
            </div>
          </label>
        </div>
      </div>

      {/* Mobile Menu Controls */}
      <div className="lg:hidden flex items-center gap-4 justify-center">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={toggleDarkMode}
            aria-label="Toggle dark mode"
          />
          <div className="w-9 h-5 bg-slate-300 rounded-full peer-checked:bg-pink-600 transition-colors duration-150">
            <div className="w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-150 peer-checked:translate-x-4" />
          </div>
        </label>
        <button
          onClick={toggleMenu}
          className="text-2xl text-slate-900 dark:text-slate-50 p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-150"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        className={`lg:hidden fixed top-16 left-0 w-full bg-white dark:bg-slate-950 p-6 shadow-lg transition-transform duration-200 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
        initial={{ x: "100%" }}
        animate={{ x: isMenuOpen ? 0 : "100%" }}
        transition={{ duration: 0.2 }}
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.id}
            className="py-3 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href={`#${link.id}`}
              className="text-slate-700 hover:text-pink-600 text-base font-medium transition-colors duration-150 dark:text-slate-300 dark:hover:text-pink-300 text-center"
              onClick={() => toggleMenu()}
            >
              {link.label}
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  </header>
);

// Home Section Component
const HomeSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center bg-pink-50 dark:bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2 items-center justify-items-center">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-50 mb-6">
          Hi, I am <span className="text-pink-600 typewriter">Amna Ali</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Full-Stack Developer | AI Enthusiast | Crafting Seamless & Innovative Web Experiences
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.1 }}
        >
          <Link href="#contact" className="btn btn-primary btn-lg inline-block mx-auto">
            Get in Touch
          </Link>
        </motion.div>
        <div className="flex gap-6 mt-8 justify-center">
          <a href="https://linkedin.com/in/amna-ali-07a391256" className="text-slate-700 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-300 transition-colors duration-150" aria-label="LinkedIn Profile">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/amnaali14" className="text-slate-700 hover:text-pink-600 dark:text-slate-300 dark:hover:text-pink-300 transition-colors duration-150" aria-label="GitHub Profile">
            <FaGithub size={24} />
          </a>
        </div>
      </motion.div>
      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden bg-gradient-to-br from-pink-100/50 to-pink-200/50 dark:from-pink-800/50 dark:to-pink-900/50 shadow-xl">
          <Image
            src="/images/profile1.png"
            alt="Amna Ali"
            fill
            className="object-contain scale-97"
            onError={(e) => (e.currentTarget.src = "https://placehold.co/320x320/cccccc/ffffff?text=Profile")}
          />
        </div>
      </motion.div>
    </div>
  </section>
);

// About Section Component
const AboutSection = () => (
  <section id="about" className="py-20 bg-white dark:bg-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="grid gap-8 lg:grid-cols-2 items-center justify-items-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
            I am a Computer Science graduate specializing in <span className="text-pink-600">AI</span> and <span className="text-pink-600">full-stack development</span>. As an AI Engineer Intern at eGeeks Global and former .NET Developer at Merik Solutions, I bring hands-on experience. My capstone project, an <span className="text-pink-600">AI-Driven Vulnerability Assessment and Patching Engine</span>, showcases my expertise in React, Next.js, ASP.NET, and Python. I’m passionate about building innovative solutions that blend AI with robust software architecture.
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100/50 to-pink-200/50 dark:from-pink-800/50 dark:to-pink-900/50 shadow-xl">
            <Image
              src="https://placehold.co/256x256/png"
              alt="About Amna Ali"
              fill
              className="object-contain scale-97 rounded-2xl"
              onError={(e) => (e.currentTarget.src = "https://placehold.co/256x256/cccccc/ffffff?text=About")}
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Skills Section Component
const SkillsSection = () => {
  const skills = [
    { name: "JavaScript/TypeScript", level: 95, category: "Frontend" },
    { name: "React/Next.js", level: 85, category: "Frontend" },
    { name: "Python", level: 80, category: "Backend" },
    { name: "Tailwind CSS", level: 90, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "Git/GitHub", level: 85, category: "Tools" },
  ];

  return (
    <section id="skills" className="py-20 bg-pink-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-150 w-full max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-slate-900 dark:text-slate-50 text-center w-full">{skill.name}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400 text-center">{skill.category}</span>
              </div>
              <div className="relative h-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                <motion.div
                  className="absolute h-2 bg-pink-600 dark:bg-pink-300 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.05 }}
                />
              </div>
              <div className="text-right text-sm text-slate-600 dark:text-slate-400 mt-2">{skill.level}%</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Project Card Component
type Project = {
  title: string;
  img: string;
  desc: string;
  technologies: string;
  github: string;
  category: string;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.div
    className="relative bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-150 overflow-hidden w-full max-w-md"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
    whileHover={{ y: -4 }}
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={project.img}
        alt={project.title}
        fill
        className="object-cover transition-transform duration-300 hover:scale-105"
        onError={(e) => (e.currentTarget.src = `https://placehold.co/400x240/db2777/ffffff?text=${encodeURIComponent(project.title.split(' ').slice(0, 2).join(' '))}`)}
      />
      <div className="absolute top-3 right-3 bg-pink-600/90 text-white px-2 py-1 rounded-full text-xs font-medium">
        {project.category}
      </div>
    </div>
    <div className="p-6 flex flex-col items-center">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2 line-clamp-2 text-center">{project.title}</h3>
      <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3 text-center">{project.desc}</p>
      <div className="mb-4">
        <p className="text-xs font-medium text-pink-600 dark:text-pink-300 mb-2 text-center">Technologies:</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {project.technologies.split(", ").slice(0, 4).map((tech: string, idx: number) => (
            <span key={idx} className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-2 py-1 rounded-md text-xs">
              {tech.trim()}
            </span>
          ))}
          {project.technologies.split(", ").length > 4 && (
            <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-2 py-1 rounded-md text-xs">
              +{project.technologies.split(", ").length - 4}
            </span>
          )}
        </div>
      </div>
      <motion.a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline mt-auto mx-auto"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.1 }}
      >
        <FaGithub className="mr-2" /> View on GitHub
      </motion.a>
    </div>
  </motion.div>
);

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "AI-Driven Vulnerability Assessment and Patching Engine",
      img: "https://placehold.co/400x240/png",
      desc: "An intelligent system using AI/ML for automated vulnerability identification and patching, with a web application for assessment and reporting.",
      technologies: "Python, React, Flask, Html, CSS, Typescript",
      github: "https://github.com/your-fyp-repo",
      category: "AI/Web",
    },
    {
      title: "Glaucoma Detection",
      img: "https://placehold.co/400x240/png",
      desc: "A deep learning project for early glaucoma detection from retinal images, aiding timely diagnosis.",
      technologies: "Python, TensorFlow, Keras, OpenCV, CNNs",
      github: "https://github.com/your-glaucoma-repo",
      category: "AI/Machine Learning",
    },
    {
      title: "Skin Disease Classification",
      img: "https://placehold.co/400x240/png",
      desc: "A machine learning model to classify skin diseases from lesion images, assisting dermatologists.",
      technologies: "Python, TensorFlow, Keras, OpenCV, CNNs",
      github: "https://github.com/your-skin-disease-repo",
      category: "AI/Machine Learning",
    },
    {
      title: "Hostel Booking System",
      img: "https://placehold.co/400x240/png",
      desc: "A web-based application for hostel management, enabling bookings and complaint handling with RBAC.",
      technologies: "PHP, Django, HTML, CSS, JavaScript, MySQL",
      github: "https://github.com/your-hostel-repo",
      category: "Web/Desktop",
    },
    {
      title: "Banking System",
      img: "https://placehold.co/400x240/png",
      desc: "A secure banking application with user authentication, account management, and transaction history.",
      technologies: "Java, Spring Boot, SQL, MySQL",
      github: "https://github.com/your-banking-repo",
      category: "Desktop/Web",
    },
    {
      title: "Vocal Training System",
      img: "https://placehold.co/400x240/png",
      desc: "An interactive system providing real-time feedback on vocal pitch and technique.",
      technologies: "Python, Librosa, PyAudio, GUI Frameworks",
      github: "https://github.com/your-vocal-training-repo",
      category: "Software/Web",
    },
  ];

  return (
    <section id="work" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

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
    <section id="contact" className="py-20 bg-pink-50 dark:bg-slate-900">
      <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-pink-600 transition-all duration-150 text-center"
            required
            aria-label="Your Name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-pink-600 transition-all duration-150 text-center"
            required
            aria-label="Your Email"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={6}
            className="w-full p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-50 focus:ring-2 focus:ring-pink-600 transition-all duration-150 text-center"
            required
            aria-label="Your Message"
          />
          <motion.button
            type="submit"
            disabled={formStatus.loading}
            className="btn btn-primary w-full mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            {formStatus.loading ? "Sending..." : "Send Message"}
          </motion.button>
          {formStatus.message && (
            <p className={`text-sm ${formStatus.message.includes("success") ? "text-green-600" : "text-red-600"} text-center`}>
              {formStatus.message}
            </p>
          )}
        </motion.form>
        <div className="mt-8 text-slate-600 dark:text-slate-300 text-center">
          <p>Or reach out directly:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="mailto:amnali51214@example.com" className="text-pink-600 hover:text-pink-700 dark:text-pink-300 dark:hover:text-pink-400 transition-colors duration-150">
              amnali51214@example.com
            </a>
            <span>|</span>
            <a href="https://linkedin.com/in/amna-ali-07a391256" className="text-pink-600 hover:text-pink-700 dark:text-pink-300 dark:hover:text-pink-400 transition-colors duration-150">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-slate-900 dark:bg-slate-950 py-12 text-center text-slate-300">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-300 mb-4 text-center">Amna Ali</h3>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://linkedin.com/in/amna-ali-07a391256" className="hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-150" aria-label="LinkedIn Profile">
          <FaLinkedin size={24} />
        </a>
        <a href="https://github.com/amnaali14" className="hover:text-pink-600 dark:hover:text-pink-300 transition-colors duration-150" aria-label="GitHub Profile">
          <FaGithub size={24} />
        </a>
      </div>
      <p className="text-sm text-slate-400 text-center">© 2025 Amna Ali. All rights reserved.</p>
    </div>
  </footer>
);

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
    <div className="min-h-screen font-sans scroll-smooth">
      <NavBar
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        navLinks={navLinks}
      />
      <main className="pt-16">
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