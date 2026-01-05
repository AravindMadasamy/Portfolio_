import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Reveal from "./Reveal";
import { FiMail } from "react-icons/fi";

function Contact() {
  const formRef = useRef();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [status, setStatus] = useState("");

  // 🔒 Gmail-only validation (REAL TIME)
  const validateEmail = (value) => {
    if (!value.endsWith("@gmail.com")) {
      setEmailError("Email must end with @gmail.com");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // ❌ Block submit if email invalid
    if (!validateEmail(email)) {
      return;
    }

    emailjs
      .sendForm(
        "service_lrx8oz3",
        "template_lcotfc7",
        formRef.current,
        "s0iO7N7rS3t17bljr"
      )
      .then(
        () => {
          setStatus("Message sent successfully.");
          formRef.current.reset();
          setEmail("");
        },
        () => {
          setStatus("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="pt-32 pb-32">
      <div className="max-w-3xl mx-auto px-4">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Get in Touch
          </h2>

          <p className="text-gray-600 max-w-2xl mb-12">
            If you’re interested in working together, discussing a project,
            or have a question, feel free to send a message.
          </p>

          {/* Direct Email */}
          <div className="mb-14">
            <a
              href="mailto:yourmail@gmail.com"
              className="inline-flex items-center gap-3 text-gray-900 font-medium hover:underline"
            >
              <FiMail className="text-lg" />
              aravindmadasamy25@gmail.com
            </a>
          </div>
        </Reveal>

        {/* Divider */}
        <div className="h-px bg-gray-200 mb-14" />

        {/* EmailJS Form */}
        <Reveal delay={0.1}>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-8 max-w-2xl"
          >
            {/* Message */}
            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Your message
              </label>
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Briefly describe your idea or message…"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Your name
              </label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
            </div>

            {/* Email (GMAIL ONLY) */}
            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Email address
              </label>
              <input
                type="text"
                name="from_email"
                value={email}
                required
                placeholder="example@gmail.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                className={`w-full border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 ${
                  emailError
                    ? "border-red-400 focus:ring-red-400"
                    : "border-gray-300 focus:ring-gray-900"
                }`}
              />

              {emailError && (
                <p className="text-sm text-red-500 mt-1">
                  {emailError}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition"
            >
              Send message
            </button>

            {status && (
              <p className="text-sm text-gray-600 mt-4">
                {status}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
