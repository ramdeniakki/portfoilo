import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "Express", "Prisma", "MongoDB"];
  const databaseAndOrm = ["MongoDB", "PostgreSQL", "Prisma"];
  const devopsAndTools = ["Git", "Docker", "Linux", "Kubernetes", "AWS", "Vercel"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
      <RevealOnScroll>
        <motion.div
          className="max-w-4xl mx-auto px-6 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <p className="text-gray-400 mb-6">
              Passionate developer with expertise in building scalable web applications and creating innovative solutions.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="rounded-xl p-6 bg-gray-800 hover:bg-gray-700 transition-all">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-600 text-white py-1 px-3 rounded-full text-sm hover:bg-cyan-500 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend Skills */}
              <div className="rounded-xl p-6 bg-gray-800 hover:bg-gray-700 transition-all">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-orange-600 text-white py-1 px-3 rounded-full text-sm hover:bg-orange-500 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Database & ORM */}
              <div className="rounded-xl p-6 bg-gray-800 hover:bg-gray-700 transition-all">
                <h3 className="text-xl font-bold mb-4 text-yellow-400">Database & ORM</h3>
                <div className="flex flex-wrap gap-2">
                  {databaseAndOrm.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-600 text-white py-1 px-3 rounded-full text-sm hover:bg-yellow-500 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* DevOps & Tools */}
              <div className="rounded-xl p-6 bg-gray-800 hover:bg-gray-700 transition-all">
                <h3 className="text-xl font-bold mb-4 text-green-400">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {devopsAndTools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-600 text-white py-1 px-3 rounded-full text-sm hover:bg-green-500 hover:shadow-md transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Education */}
            <div className="p-6 rounded-xl border border-gray-700 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-purple-500">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.E. in Computer Science</strong> - Sathyabama Institute of Science and Technology (2020-2024)
                </li>
                <li>Relevant Coursework: Web Development, Cloud Computing, Databases, Operating System.</li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-6 rounded-xl border border-gray-700 hover:shadow-2xl transition-all">
              <h3 className="text-xl font-bold mb-4 text-pink-500">💼 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold">Programming Intern at Venkys io (June - Oct 2024)</h4>
                  <p>
                    Contributed to multiple software development projects with a focus on high-quality and timely delivery.
                  </p>
                  <p>
                    Collaborated with senior engineers in designing, developing, and debugging software applications.
                  </p>
                  <p>Assisted in code reviews, testing, and documentation to enhance overall code quality.</p>
                  <p>Developed skills in managing project workflows, identifying bugs, and ensuring project consistency.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
