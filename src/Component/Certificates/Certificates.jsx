// src/components/Certificates.jsx

const Certificates = () => {
    const certList = [
      {
        name: "Java Certificate",
        link: "https://certifications.geekster.in/APBE0fiJ0yo3eHoRni9kM-geekster.pdf",
      },
      {
        name: "JavaScript Certificate",
        link: "https://certifications.geekster.in/OJnp2yFyOaGorHZDJLYzK-geekster.pdf",
      },
      {
        name: "Web Development Certificate",
        link: "https://www.stpcomputereducation.com/d-marksheet/web-development.html",
      },
      {
        name: "SQL Certificate",
        link: "https://certifications.geekster.in/diFaY16NOhM83EDig6vGR-geekster.pdf",
      },
    ];
  
    return (
      <section id="certificates" className="py-16 px-4 bg-gray-100 text-gray-800">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Certificates</h2>
          <ul className="space-y-4">
            {certList.map((cert, index) => (
              <li key={index}>
                <a
                  href={cert.link}
                  target="_blank"
                  className="text-blue-600 hover:underline font-medium text-lg"
                >
                  📜 {cert.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Certificates;
  