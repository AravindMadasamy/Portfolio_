import Reveal from "./Reveal";

function Education() {
  const education = [
    {
      period: "2024 – 2026",
      degree: "Master of Computer Science",
      institution: "Government Arts College(Autonomous), Kumbakonam.",
      description:
        "Focused on advanced software development, databases, machine learning, and full stack application development.",
    },
    {
      period: "2021 – 2024",
      degree: "Bachelor of Computer Science",
      institution: "Government Arts College(Autonomous), Kumbakonam.",
      description:
        "Built strong fundamentals in programming, data structures, web technologies, and software engineering.",
    },
    {
      period: "2020 – 2021",
      degree: "Higher Secondary Education",
      institution: "Raj Vidyalaya Matric Hr Sec School, Kuttalam.",
      description:
        "Specialized in mathematics and biology",
    },
  ];

  return (
    <section id="education" className="pt-28 pb-28">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Education
          </h2>
          <p className="text-gray-600 max-w-2xl mb-14">
            My academic background and educational journey in computer science
            and software development.
          </p>
        </Reveal>

        <div className="relative border-l border-gray-300 pl-8 space-y-12">
          {education.map((item, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-blue-600" />

                {/* Content */}
                <div className="bg-white border rounded-xl p-6">
                  <p className="text-sm text-gray-500 mb-1">
                    {item.period}
                  </p>
                  <h3 className="font-semibold text-lg mb-1">
                    {item.degree}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    {item.institution}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
