import Reveal from "./Reveal";
import HeroIllustration from "./HeroIllustration";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Illustration */}
      <HeroIllustration />

      <div className="max-w-4xl mx-auto px-4 text-center">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-6">
            Hi, I’m Aravind
            <span className="block text-gray-500 text-3xl md:text-4xl mt-3">
              Full Stack Developer
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed mb-12">
            I build scalable, reliable web applications with a strong focus on
            clean architecture, performance, and real-world problem solving.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/resume/Aravind_Resume.pdf"
              download="Aravind_Resume.pdf"
              className="px-7 py-3 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="px-7 py-3 rounded-lg border text-sm hover:bg-gray-100 transition"
            >
              Contact Me
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
