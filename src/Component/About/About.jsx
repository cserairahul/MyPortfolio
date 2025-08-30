
const About = () => {
    return (
      <section id="about" className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg leading-relaxed mb-8">
            Hey! 👋 I'm <span className="font-semibold text-blue-600">Rahul</span>, a Full-Stack Developer passionate about creating modern, scalable, and user-friendly applications.
             My expertise lies in JavaScript, React, Tailwind css, Express, and Next.js, with strong foundations in REST APIs, debugging, and performance optimization.  
            I’ve also worked with databases (MongoDB & SQL), cloud platforms (AWS & Azure), and CI/CD pipelines, giving me exposure to real-world development workflows.
             Alongside development, I’m actively sharpening my DSA skills and preparing for technical interviews to grow into a well-rounded software engineer.
          </p>
  
          {/* Skills Grid */}
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
            {["React", "JavaScript","Tailwind CSS","Next.js","Express","Node.js","MySQL", "Java", "MongoDB", "HTML", "CSS", "Git/GitHub"].map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
  
          {/* Resume Button */}
          <a
            href="/My_Resume (98).pdf"  // Place your actual resume in public folder as resume.pdf
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default About;
  
  