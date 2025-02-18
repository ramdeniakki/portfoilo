import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-gray-900 text-white">
      <RevealOnScroll>
        <div className="px-4 w-96 max-w-lg">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative">
              <motion.input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 transition duration-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <motion.input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 transition duration-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            {/* Message Textarea */}
            <div className="relative">
              <motion.textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 transition duration-300 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                whileHover={{ scale: 1.05 }}
                whileFocus={{ scale: 1.05 }}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium transition duration-300 hover:translate-y-[-2px] hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
