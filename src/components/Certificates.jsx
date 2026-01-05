import Reveal from "./Reveal";

function Certificates() {
  const certificates = [
    {
      title: "Pursuing Course Certificate",
      image: "/certificates/certificate-1.jpeg",
    },
    {
      title: "Pursuing Course Certificate",
      image: "/certificates/certificate-2.jpeg",
    },
  ];

  return (
    <section id="certificates" className="pt-28 pb-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Certificates
          </h2>
          <p className="text-gray-600 max-w-2xl mb-12">
            Certifications related to my ongoing academic and technical learning.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group border rounded-xl overflow-hidden bg-white hover:shadow-md transition">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
