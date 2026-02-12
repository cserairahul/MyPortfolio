import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "C++",
    "JavaScript",
    "Java",
    "React.js",
    "Tailwind CSS",
    "Next.js",
    "Node.js",
    "Git & GitHub",
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center bg-linear-to-br from-[#0f0c29] via-[#1a1a40] to-[#000000] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-pink-500 opacity-20 blur-3xl rounded-full bottom-10 left-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full text-center relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16"
        >
          My <span className="text-pink-500 glow-text">Skills</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl cursor-pointer hover:border-pink-500 transition duration-300"
            >
              <p className="text-lg font-semibold tracking-wide">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
