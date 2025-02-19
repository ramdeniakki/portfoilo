import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900"
    >
      <RevealOnScroll>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl mx-auto"
        >

          <div className="text-center md:text-left z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Akki
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              I’m a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>

            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded-full font-medium transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border-2 border-blue-500 text-blue-500 py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:bg-blue-500 hover:text-white hover:shadow-xl"
              >
                Contact Me
              </a>

              <a
                href="src\components\sections\File\resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-cyan-500 text-cyan-500 py-3 px-6 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:bg-cyan-500 hover:text-white hover:shadow-xl"
              >
                Resume
              </a>
            </div>
          </div>


          <div className="mt-8 md:mt-0 md:w-1/2 flex flex-col items-center">
            <motion.img
              src="https://avatars.githubusercontent.com/u/117385626?v=4"
              alt="Akshith's Profile"
              className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-blue-500 shadow-lg"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />


            <div className="flex space-x-6 mt-4">
              <a
                href="https://github.com/ramdeniakki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Github size={32} />
              </a>

              <a
                href="https://www.linkedin.com/in/ramdeni-akshith-b96b01203/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <Linkedin size={32} />
              </a>
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
