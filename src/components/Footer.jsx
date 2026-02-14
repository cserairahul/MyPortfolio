import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {

  // 🔗 Add your real social media links here
  const socialLinks = [
    {
      icon: FaGithub,
      link: "https://github.com/cserairahul",
    },
    {
      icon: FaLinkedin,
      link: "https://www.linkedin.com/in/rahul-kumar-ray-5372b2291/",
    },
    {
      icon: FaInstagram,
      link: "https://instagram.com/YOUR_INSTAGRAM_USERNAME",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[#0f0c29] via-[#1a1a40] to-[#000000] text-gray-300 py-16 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute w-72 h-72 bg-pink-500 opacity-20 blur-3xl rounded-full bottom-10 left-20"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center relative z-10">

        {/* Name */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-4"
        >
          Rahul <span className="text-pink-500 glow-text">Ray</span>
        </motion.h2>

        {/* Tagline */}
        <p className="mb-8 text-gray-400 max-w-xl mx-auto">
          Crafting scalable, animated, and performance-driven web experiences
          with modern technologies.
        </p>

        {/* Divider */}
        <div className="w-24 h-1 bg-pink-500 mx-auto mb-10 rounded-full"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8 text-2xl mb-10">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/10 hover:border-pink-500 transition"
              >
                <Icon />
              </motion.a>
            );
          })}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Rahul Ray. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
