import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0f0c29] via-[#1a1a40] to-[#000000] text-white overflow-hidden"
    >
      {/* Glow Background */}
      <div className="absolute w-80 h-80 bg-purple-500 opacity-20 blur-3xl rounded-full top-20 right-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-pink-500 glow-text">Me</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a passionate Frontend Developer specializing in
            building modern, animated, and performance-driven web applications.
            My expertise lies in JavaScript, React, Tailwind css, Express, and Next.js,
            with strong foundations in REST APIs, debugging, and performance optimization.
          </p>

          <p className="text-gray-400 leading-relaxed">
           I have worked with databases (MongoDB & SQL), cloud platforms (AWS & Azure),
             and CI/CD pipelines, giving me exposure to real-world development workflows.
          </p>

          {/* Animated Tags */}
          <div className="flex flex-wrap gap-4 mt-8">
            {["DSA", "OOPS", "DBMS", "MongoDB", "OS"].map(
              (skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm border border-pink-500"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-pink-500">
            Quick Info
          </h3>

          <ul className="space-y-4 text-gray-300">
            <li><strong>Name:</strong> Rahul Kumar Ray</li>
            <li><strong>Location:</strong> India</li>
            <li><strong>Role:</strong> Software Engineer</li>
            <li><strong>Experience:</strong> Production-Ready Frontend | Real-World Projects</li>
            <li><strong>Focus:</strong> React | Scalable UI | Optimization | DSA</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
