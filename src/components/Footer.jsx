import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="border-t mt-24">
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 text-gray-500">
          <a
            href="https://github.com/AravindMadasamy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/aravindmadasamy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-gray-900 transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="https://x.com/Aravind_chaplin?t=mEsUeZFzoNCc2TdAlDXhSA&s=09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="hover:text-gray-900 transition"
          >
            <FaXTwitter size={18} />
          </a>

          <a
            href="https://www.instagram.com/its__me_arav/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-900 transition"
          >
            <FaInstagram size={18} />
          </a>

          <a
            href="https://wa.me/918489189183"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-gray-900 transition"
          >
            <FaWhatsapp size={18} />
          </a>
        </div>

        {/* Navigation */}
        <nav className="flex justify-center flex-wrap gap-6 text-sm text-gray-500 mb-6">
          <a href="#home" className="hover:text-gray-900 transition">
            Home
          </a>
          <a href="#skills" className="hover:text-gray-900 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-gray-900 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-900 transition">
            Contact
          </a>
        </nav>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Aravind. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
