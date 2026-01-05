import Reveal from "./Reveal";
import {
  FaReact,
  FaJava,
  FaDatabase,
  FaPython,
  FaTools,
  FaMicrochip,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTailwindcss,
  SiMysql,
  SiDocker,
  SiArduino,
  SiRaspberrypi,
} from "react-icons/si";

function SkillsTW() {
  const skills = [
    {
      title: "Frontend",
      icon: <FaReact className="text-xl" />,
      items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <SiSpringboot className="text-xl" />,
      items: ["Java", "Spring Boot", "REST APIs"],
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-xl" />,
      items: ["MySQL"],
    },
    {
      title: "Machine Learning",
      icon: <FaPython className="text-xl" />,
      items: ["Python", "Machine Learning", "NLP"],
    },
    {
      title: "IoT & Embedded Systems",
      icon: <FaMicrochip className="text-xl" />,
      items: ["Arduino Uno", "Raspberry Pi", "Sensors", "IoT Integration"],
    },
    {
      title: "Tools",
      icon: <FaTools className="text-xl" />,
      items: ["Git", "Docker", "Postman"],
    },
  ];

  return (
    <section id="skills" className="pt-28 pb-28">
      <div className="max-w-6xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-14">
            Skills
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <Reveal key={skill.title} delay={index * 0.08}>
              <div className="border rounded-xl p-8 bg-white transition-shadow hover:shadow-sm">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 text-gray-900">
                  {skill.icon}
                  <h3 className="text-lg font-medium">
                    {skill.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-md border bg-gray-50"
                    >
                      {item}
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

export default SkillsTW;
