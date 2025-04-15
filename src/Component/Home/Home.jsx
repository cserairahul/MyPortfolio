const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 bg-[#0f172a] text-white"
    >
      {/* Text Part */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl mt-8 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold">Hi, I'm Rahul Kumar Rai</h1>
        <h2 className="text-2xl font-semibold text-green-400">
          Web Developer | Problem Solver | Lifelong Learner
        </h2>
        <p className="text-gray-400">
          Building modern, responsive websites using React & Tailwind. With a passion 
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
      <div className="flex justify-center md:justify-end md:ml-10">
      <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-80 lg:h-80">
        <img
          src="/Profile.jpg"
          alt="Rahul"
          className="w-full h-full rounded-full object-cover border-4 border-green-400 shadow-lg"
        />
      </div>
      </div>
    </section>
  );
};

export default Home;

