const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 bg-[#0f172a] text-white"
    >
      {/* Text Part */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Rahul Kumar Rai</h1>
        <h2 className="text-2xl font-semibold">
         <span className="text-green-400">Web Developer | Problem Solver | Lifelong Learner</span>
        </h2>
        <p className="text-gray-400">
          Building modern, responsive websites using React & Tailwind With a passion 
          for clean code and creative solutions, I’m sharpening my skills daily through DSA
           practice and hands-on internships at CodeSoft & Alpha Intern.
        </p>
        <a
          href="#projects"
          className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition"
        >
          View Projects
        </a>
      </div>

      {/* Image Part */}
      <div className="mb-10 md:mb-0 md:ml-10">
        <img
          src="/Profile.jpg" // Put your image in public folder with this name
          alt="Rahul"
          className="w-80 h-80 rounded-full object-cover border-4 border-green-400 shadow-lg "
        />
      </div>
    </section>
  );
};

export default Home;

