import Reveal from "./Reveal";
import { FaGlobeAsia } from "react-icons/fa";

function Languages() {
  const languages = [
    {
      name: "English",
      level: "Professional Working Proficiency",
      usage: "Technical communication, documentation, interviews",
    },
    {
      name: "Tamil",
      level: "Native Proficiency",
      usage: "Daily communication, reading and writing",
    },
  ];

  return (
    <section id="languages" className="pt-28 pb-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-14">
            Languages
          </h2>
        </Reveal>

        <div className="space-y-8">
          {languages.map((lang, index) => (
            <Reveal key={lang.name} delay={index * 0.1}>
              <div className="border rounded-xl p-8 bg-white transition-shadow hover:shadow-sm">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="mt-1 text-gray-700">
                    <FaGlobeAsia className="text-xl" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      {lang.name}
                    </h3>

                    <p className="text-sm text-gray-700 mb-2">
                      {lang.level}
                    </p>

                    <p className="text-sm text-gray-600">
                      {lang.usage}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
