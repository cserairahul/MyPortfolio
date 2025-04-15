// src/components/Contact.jsx

const Contact = () => {
    return (
      <section id="contact" className="py-16 px-4 bg-white text-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
          <p className="text-lg mb-6">
            Feel free to reach out to me on any platform below 👇
          </p>
  
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <a
              href="mailto:rairahul4840@gmail.com"
              className="text-blue-600 hover:underline"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/cserairahul"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              💻 GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-kumar-ray-5372b2291/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://www.instagram.com/dreamchaser_rk_rai/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              📷 Instagram
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;
  