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
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between py-4 relative">
          <motion.a
            href="#"
            className="text-2xl font-bold tracking-tight text-pink-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Amna Ali
          </motion.a>
          {/* Dark Mode Toggle Slider - moved further to the right */}
          <label htmlFor="darkModeToggle" className="absolute right-1 top-4 flex items-center cursor-pointer z-50 lg:right-2">
            <input
              type="checkbox"
              id="darkModeToggle"
              className="sr-only peer"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <div className="block bg-gray-300 w-9 h-5 rounded-full peer-checked:bg-pink-500 transition-colors duration-300 dark:bg-gray-600"></div>
            <div className="dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform duration-300 peer-checked:translate-x-4 dark:bg-gray-300"></div>
          </label>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-2xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 rounded-md p-2 dark:text-gray-50 mr-14"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
          <ul
            className={`lg:flex lg:items-center lg:gap-8 fixed lg:static top-16 right-0 w-full lg:w-auto bg-white p-6 lg:p-0 transition-all duration-300 ease-in-out shadow-lg lg:shadow-none dark:bg-gray-800 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
            } z-40`}
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.id}
                className="my-3 lg:my-0 text-center"
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
                Hi, I’m <span className="text-pink-500 typewriter">Amna Ali</span>
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
                  src="/images/profile1.jpg"
                  alt="Amna Ali"
                  width={320}
                  height={320}
                  className="rounded-full object-cover"
                  onError={(e) => {
                    console.log("Profile image not found at /images/profile1.jpg. Using fallback.");
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
                  I’m a passionate BS Computer Science graduate with a keen interest in{" "}
                  <span className="text-pink-500">AI</span> and{" "}
                  <span className="text-pink-500">full-stack development</span>. My experience
                  includes interning as a .NET Developer at Merik Solutions and currently as an AI
                  Engineer Intern at eGeeks Global. My final year project, an{" "}
                  <span className="text-pink-500">
                    AI-Driven Vulnerability Assessment and Patching Engine with Integrated Web
                    Application
                  </span>
                  , leveraged React, Next.js, ASP.NET, and Python to deliver cutting-edge solutions.
                  I’m excited to contribute my skills to innovative projects in AI and software
                  development.
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
                    <span className="text-pink-500 mr-3 text-xl dark:text-pink-300">★</span>
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
        <section id="work" className="py-24 bg-white flex items-center justify-center dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.h2
              className="text-4xl font-semibold mb-12 tracking-tight text-pink-500 section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Projects
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
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
                  category: "Software,Web",
                },
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300 w-full max-w-xs dark:bg-gray-900 dark:shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.img}
                      alt={project.title}
                      width={400}
                      height={240}
                      className="w-full h-60 object-cover hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        console.log(`${project.title} image not found`);
                        e.currentTarget.src = `https://placehold.co/400x240/cccccc/ffffff?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 dark:text-gray-50">
                      {project.title} <span className="text-sm text-gray-500 dark:text-gray-400">({project.category})</span>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed dark:text-gray-300">{project.desc}</p>
                    {project.technologies && (
                      <p className="text-gray-500 text-xs mb-4 font-medium dark:text-gray-400">
                        **Technologies:** {project.technologies}
                      </p>
                    )}
                    <div className="flex gap-4 justify-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-500 hover:underline text-sm font-medium dark:text-pink-300 dark:hover:text-pink-400"
                      >
                        View Code
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
                    href="mailto:amna@example.com"
                    className="text-pink-500 hover:underline dark:text-pink-300 dark:hover:text-pink-400"
                  >
                    amna@example.com
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