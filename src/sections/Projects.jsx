import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Job Portal",
      description:
        "A role-based job portal enabling candidates to apply for jobs based on their skills, increasing relevant applications by 50%.",

      tech: "React, Tailwind, Node.js, MongoDB",
      live: "#",
      github: "https://github.com/cserairahul/Job_Portal",
    },
    {
      title: "Food Recipe Finder",
      description:
        " Built a cross-platform mobile app with React Native and Expo, enabling users to browse, search, and view detailed recipes.",
      tech: "React Native, Expo, Express.js, PostgreSQL",
      live: "#",
      github: "https://github.com/cserairahul/Food_Recipi_Finder",
    },
    {
      title: "HireLense",
      description:
        "An AI-powered resume and job description matcher as a SaaS platform, improving candidate-job fit accuracy by 60%.",
      tech: " Next.js, Full-Stack",
      live: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen flex items-center bg-linear-to-br from-[#0f0c29] via-[#1a1a40] to-[#000000] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-indigo-500 opacity-20 blur-3xl rounded-full top-20 left-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          My <span className="text-pink-500 glow-text">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transition duration-300 hover:border-pink-500 cursor-pointer"
            >
              {/* Fake Image Preview Area */}
              <div className="h-40 bg-linear-to-r from-pink-500/20 to-indigo-500/20 rounded-2xl mb-6"></div>

              <h3 className="text-xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <p className="text-sm text-pink-400 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.live}
                  className="bg-pink-600 px-4 py-2 rounded-full text-sm hover:bg-pink-700 transition"
                >
                  Live Demo
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  className="border border-pink-500 px-4 py-2 rounded-full text-sm hover:bg-pink-500 hover:text-white transition"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
