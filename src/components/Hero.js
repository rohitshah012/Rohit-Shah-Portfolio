import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import dp from "../Assets/Images/dp.jpg";
import { Crown } from "lucide-react";

const navigation = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Hero() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const themeToggle = (
    <button
      type="button"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-base-content/10 bg-base-200 transition hover:border-indigo-500 hover:text-indigo-500"
      onClick={() => setTheme((current) => current === "dark" ? "light" : "dark")}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" aria-hidden="true" />
      ) : (
        <MoonIcon className="h-5 w-5" aria-hidden="true" />
      )}
    </button>
  );

  return (
    <div className="grid-pattern min-h-screen">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-base-content/10 bg-base-100/80 backdrop-blur-xl">
        <nav className="section-shell flex h-16 items-center justify-between sm:h-20">
      <a
  href="#top"
  className="flex items-center gap-3"
>
  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-white shadow-lg">
    <Crown size={22} />
  </span>

  <span className="hidden sm:block text-xl font-extrabold tracking-wide font-serif">
    Rohit Shah
  </span>
</a>

          <div className="hidden items-center rounded-full border border-base-content/10 bg-base-200/60 p-1.5 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                spy
                smooth
                offset={-72}
                duration={500}
                activeClass="text-indigo-500 bg-base-100 shadow-sm"
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition hover:text-indigo-500"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="/RohitShahCV.pdf"
              download
              className="secondary-button !px-4 !py-2"
            >
              Resume <FaDownload />
            </a>
            {themeToggle}
          </div>

          <button
            type="button"
            className="rounded-xl border border-base-content/10 p-2.5 lg:hidden"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open navigation"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </nav>

        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-[88%] max-w-sm overflow-y-auto border-l border-base-content/10 bg-base-100 p-5 shadow-2xl sm:p-6">
            <div className="flex items-center justify-between">
              {themeToggle}
              <button
                type="button"
                className="rounded-xl border border-base-content/10 p-2.5"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-10 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  offset={-72}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block cursor-pointer rounded-xl px-4 py-3 font-semibold transition hover:bg-indigo-500/10 hover:text-indigo-500"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/RohitShahCV.pdf"
                download
                className="primary-button mt-5 w-full"
              >
                Download resume <FaDownload />
              </a>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main id="top" className="flex min-h-screen items-center pb-16 pt-24 sm:pb-20 sm:pt-28">
        <div className="section-shell w-full">
          <div
            className="grid items-center gap-12 py-6 sm:gap-16 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]"
            data-aos="fade-up"
          >
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-2 text-xs font-bold text-indigo-500 sm:mb-6 sm:px-4 sm:text-sm">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                Available for opportunities
              </div>
              <h1 className="text-[2.65rem] font-black leading-[1.05] tracking-tight min-[375px]:text-5xl sm:text-7xl lg:text-8xl">
                Building digital
                <span className="gradient-text block">experiences.</span>
              </h1>
              <p className="mt-5 min-h-8 text-lg font-semibold text-base-content/80 sm:mt-6 sm:text-2xl">
                <TypeAnimation
                  sequence={[
                    "MERN Stack Developer",
                    2000,
                    "UI/UX Designer",
                    2000,
                    "Web Developer",
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-base-content/65 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
                I&apos;m Rohit Shah, a developer crafting responsive React
                applications with thoughtful interfaces and reliable full-stack
                foundations.
              </p>
              <div className="mt-7 grid grid-cols-1 gap-3 min-[390px]:grid-cols-2 lg:flex lg:justify-start">
                <Link
                  to="projects"
                  smooth
                  offset={-72}
                  duration={500}
                  className="primary-button w-full cursor-pointer"
                >
                  View my work
                </Link>
                <Link
                  to="contact"
                  smooth
                  offset={-72}
                  duration={500}
                  className="secondary-button w-full cursor-pointer"
                >
                  Let&apos;s talk
                </Link>
              </div>
              <div className="mt-8 flex justify-center gap-3 lg:justify-start">
                <a
                  href="https://www.linkedin.com/in/rohitshah9958"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-base-content/15 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-500"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/rohitshah012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-base-content/15 transition hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-500"
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="order-1 flex justify-center px-7 sm:px-0 lg:order-2">
              <div className="relative w-full max-w-[17rem] sm:max-w-none">
                <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-cyan-400 opacity-25 blur-2xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-base-200 p-2 shadow-2xl shadow-indigo-950/20 sm:rounded-[2.5rem] sm:p-3">
                  <img
                    src={dp}
                    alt="Rohit Shah"
                    className="aspect-square h-auto w-full -rotate-90 rounded-[1.5rem] object-cover sm:h-[29rem] sm:w-[24rem] sm:rounded-[2rem]"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 rounded-xl border border-base-content/10 bg-base-100/90 px-4 py-3 shadow-xl backdrop-blur sm:-left-8 sm:rounded-2xl sm:px-5 sm:py-4">
                  <p className="text-xs font-bold uppercase tracking-widest text-indigo-500">
                    Based in
                  </p>
                  <p className="mt-1 font-bold">New Delhi, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
