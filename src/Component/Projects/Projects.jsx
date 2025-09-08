const Projects = () => {
  const projectList = [
    {
      title: "Job Portal",
      description: "A role-based job portal for seekers to apply by skill.Developed backend with Express and MongoDB; frontend with React",
      github: "https://github.com/cserairahul/React-series/blob/main/04bgChanger",
      demo: "",
    },
    {
      title: "Food Recipe Finder",
      description: "A food recipe finder app using React and local storage.",
      github: "https://github.com/cserairahul/Food_Recipi_Finder",
      demo: "https://todo-demo.netlify.app",
    },
    {
      title: "HireLense",
      description: "Developed an AI-powered resume and job description matcher as a SaaS platform.",
      github: "https://github.com/cserairahul/Hirelense",
      demo: "https://todo-demo.netlify.app",
    }
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 text-gray-800">
      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm mb-4">{project.description}</p>
            <div className="flex gap-4">
              <a
                href={project.demo}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
