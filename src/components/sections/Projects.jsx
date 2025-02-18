import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20 bg-black text-white">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Project 1 */}
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_4px_15px_rgba(0,255,255,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2 text-cyan-400">TuneCraft</h3>
                            <p className="text-gray-400 mb-4">
                            TuneCraft is a SaaS-based platform for managing collaborative music queues, allowing users to create, organize, and curate song playlists together. It features seamless Google OAuth authentication for secure user login and access management, providing a smooth and efficient way for users to collaborate on music selection while maintaining control over their queues.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["NextJs", "TypeScript", "OAuth", "Prisma"].map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-cyan-600/20 text-cyan-400 py-1 px-3 rounded-full text-sm hover:bg-cyan-600/30 hover:shadow-[0_2px_8px_rgba(0,255,255,0.1)] transition-all"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <motion.a
                                    href="https://github.com/ramdeniakki/TuneCraft"
                                    className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                                    whileHover={{ scale: 1.05, color: "#00e5ff" }}
                                >
                                    View Project →
                                </motion.a>
                            </div>
                        </div>

                        {/* Project 2 */}
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_4px_20px_rgba(255,105,180,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2 text-pink-400">Chat Application</h3>
                            <p className="text-gray-400 mb-4">
                                Developed a real-time chat application using React, Firebase, and Tailwind CSS, providing users with seamless, interactive messaging in dedicated chat rooms.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "TypeScript", "Firebase", "Tailwind"].map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-pink-600/20 text-pink-400 py-1 px-3 rounded-full text-sm hover:bg-pink-600/30 hover:shadow-[0_2px_8px_rgba(255,105,180,0.1)] transition-all"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <motion.a
                                    href="https://github.com/ramdeniakki/chat_app"
                                    className="text-pink-400 hover:text-pink-300 transition-colors my-4"
                                    whileHover={{ scale: 1.05, color: "#ff69b4" }}
                                >
                                    View Project →
                                </motion.a>
                            </div>
                        </div>

                        {/* Project 3 */}
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-indigo-500/30 hover:shadow-[0_4px_20px_rgba(75,0,130,0.1)] transition-all">
                            <h3 className="text-xl font-bold mb-2 text-indigo-400">Draw App</h3>
                            <p className="text-gray-400 mb-4">
                                Developed a real-time drawing application that allows users to join a shared canvas, collaborate, and communicate visually. Built using TurboRepo for a monorepo structure, the project integrates multiple modern technologies for an efficient and scalable experience.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Next.js", "TypeScript", "TailwindCss", "Websockets", "Express", "Prisma"].map((tech, key) => (
                                    <motion.span
                                        key={key}
                                        className="bg-indigo-600/20 text-indigo-400 py-1 px-3 rounded-full text-sm hover:bg-indigo-600/30 hover:shadow-[0_2px_8px_rgba(75,0,130,0.1)] transition-all"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <motion.a
                                    href="https://github.com/ramdeniakki/draw-app"
                                    className="text-indigo-400 hover:text-indigo-300 transition-colors my-4"
                                    whileHover={{ scale: 1.05, color: "#4b0082" }}
                                >
                                    View Project →
                                </motion.a>
                            </div>
                        </div>

                        {/* Upcoming Projects */}
                        <div className="p-6 rounded-xl border border-white/20 text-center bg-gray-800">
                            <h3 className="text-xl font-bold mb-2 text-yellow-400">  Coming Soon</h3>
                            <p className="text-gray-400">Exciting projects are on the way! Stay tuned for updates.</p>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
