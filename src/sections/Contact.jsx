import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center bg-linear-to-br from-[#0f0c29] via-[#1a1a40] to-[#000000] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-pink-500 opacity-20 blur-3xl rounded-full top-10 right-20"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-16 w-full relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Contact <span className="text-pink-500 glow-text">Me</span>
        </motion.h2>

        {/* Glass Form */}
        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-2xl space-y-8"
        >
          <div>
            <label className="block mb-2 text-gray-300">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 transition"
            />
          </div>

          <div>
            <label className="block mb-2 text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-pink-600 py-3 rounded-full font-medium hover:bg-pink-700 transition"
          >
            Send Message
          </motion.button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
