import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MAX_EMAILS = 5;

export function Contact() {
  const [formData, setFormData] = useState({
    from_name: "",
    reply_to: "",
    message: "",
  });


  const getEmailsSentCount = () => {
    return Number(localStorage.getItem("emailsSentCount")) || 0;
  };


  const incrementEmailsSentCount = () => {
    const currentCount = getEmailsSentCount();
    localStorage.setItem("emailsSentCount", currentCount + 1);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (getEmailsSentCount() >= MAX_EMAILS) {
      alert(`You have reached the maximum email sending limit of ${MAX_EMAILS} emails.`);
      return;
    }

    emailjs
      .sendForm(
        "service_ur9w208",
        "template_eq95l5h",
        e.target,
        "xTXfC0KHoiXVxY89r"
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ from_name: "", reply_to: "", message: "" });
        incrementEmailsSentCount();
      })
      .catch((error) => {
        console.error(error);
        alert("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 bg-gray-900 text-white">
      <div className="px-4 w-96 max-w-lg">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent text-center">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <motion.input
              type="text"
              name="from_name"
              required
              value={formData.from_name}
              onChange={(e) =>
                setFormData({ ...formData, from_name: e.target.value })
              }
              className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
              placeholder="Your Name..."
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />
          </div>


          <div>
            <motion.input
              type="email"
              name="reply_to"
              required
              value={formData.reply_to}
              onChange={(e) =>
                setFormData({ ...formData, reply_to: e.target.value })
              }
              className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
              placeholder="Your Email..."
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />
          </div>


          <div>
            <motion.textarea
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500"
              placeholder="Your Message..."
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
            />
          </div>


          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:translate-y-[-2px] hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
}
