import Reveal from "./Reveal";
import {
  FiCpu,
  FiShield,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

function ProjectsTW() {
  const projects = [
    {
      title: "Smart Parking System",
      role: "Full Stack & IoT Developer",
      overview:
        "An IoT-based system that monitors parking slot availability in real time to reduce congestion and improve parking efficiency.",
      highlights: [
        "Real-time slot detection using sensors",
        "Live dashboard showing parking availability",
        "Reduced manual monitoring and search time",
      ],
      solution:
        "Designed an end-to-end system where vehicle entry and exit are detected through sensors, processed via a backend service, and reflected instantly on a web dashboard.",
      tech: [
        "React",
        "Arduino Uno",
        "Raspberry Pi",
        "Spring Boot",
        "REST API",
        "MySQL",
      ],
    },
    {
      title: "Fake News Detection Using Machine Learning",
      role: "Full Stack & ML Developer",
      overview:
        "A machine learning-based web application that classifies news articles as real or fake using NLP techniques.",
      highlights: [
        "Text classification using ML models",
        "NLP-based feature extraction",
        "Web interface for real-time prediction",
      ],
      solution:
        "Built and trained a machine learning model on labeled datasets and integrated it with a full stack web application to analyze and classify news content in real time.",
      tech: [
        "React",
        "Python",
        "Machine Learning",
        "NLP",
        "Spring Boot",
        "MySQL",
      ],
    },
  ];

  return (
    <section id="projects" className="pt-28 pb-28 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mb-16">
            Selected academic and technical projects demonstrating system
            design, problem solving, and hands-on implementation.
          </p>
        </Reveal>

        <div className="space-y-14">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.1}>
              <div className="border rounded-xl p-10 bg-white transition-shadow hover:shadow-sm">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-1">
                    <FiLayers className="text-gray-500" />
                    <h3 className="text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <FiCpu className="text-gray-500" />
                    {project.role}
                  </p>
                </div>

                {/* Overview */}
                <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
                  {project.overview}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <ul className="space-y-2 text-gray-700">
                    {project.highlights.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2"
                      >
                        <FiCheckCircle className="mt-1 text-gray-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl flex gap-2">
                  <FiShield className="mt-1 text-gray-500" />
                  <span>{project.solution}</span>
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm rounded-md border bg-gray-50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsTW;
