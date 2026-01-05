/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        foreground: "#111827",
        muted: "#6b7280",
        border: "#e5e7eb",
        accent: "#2563eb", // professional blue
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
