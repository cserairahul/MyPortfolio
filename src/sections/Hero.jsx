import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import profile from "../assets/portimg.jpg";

const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "Full Stack Developer",
      "React Specialist",
      "Software Engineer",
      "Problem Solver",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 40,
    delaySpeed: 1500,
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / 50,
        y: e.clientY / 50,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#1a1a40] to-[#000000] text-white"
    >
      {/* Parallax Glow Background */}
      <div
        className="absolute w-96 h-96 bg-pink-500 opacity-20 blur-3xl rounded-full"
        style={{
          top: 100 + mousePosition.y,
          left: 100 + mousePosition.x,
        }}
      ></div>

      <div
        className="absolute w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"
        style={{
          bottom: 100 - mousePosition.y,
          right: 100 - mousePosition.x,
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-widest text-gray-400 text-sm mb-4">
            Hello there, welcome to my site
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            I’m Rahul Ray
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-pink-500 mb-6 glow-text">
            {text}
            <Cursor cursorColor="#ec4899" />
          </h2>

          <p className="text-gray-300 mb-8 max-w-lg">
            I build scalable full-stack applications from scratch with strong hands-on experience in React, JavaScript, and backend development.
          </p>

          <div className="flex gap-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="bg-pink-600 px-6 py-3 rounded-full font-medium hover:bg-pink-700 transition"
            >
              See Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="border border-pink-500 px-6 py-3 rounded-full hover:bg-pink-500 hover:text-white transition"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="p-2 rounded-3xl bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500 shadow-2xl"
          >
            <img
              src={profile}
              alt="Rahul Ray"
              className="w-72 md:w-96 rounded-3xl object-cover"
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
