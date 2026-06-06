import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rohitshah9958",
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    href: "https://github.com/rohitshah012",
    icon: FaGithub,
  },
  {
    name: "Email",
    href: "mailto:rohitshah9958@gmail.com",
    icon: FaEnvelope,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-content/10 px-4 py-10 text-center sm:px-6 sm:py-12">
      <div className="flex items-center justify-center gap-3">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-base-content/15 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-500"
            aria-label={link.name}
          >
            <link.icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <p className="mt-6 text-base-content/65">
        Designed and built by{" "}
        <span className="font-bold text-base-content">Rohit Shah</span>
      </p>
      <p className="mt-1 text-sm text-base-content/50">
        &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
      </p>
    </footer>
  );
}
