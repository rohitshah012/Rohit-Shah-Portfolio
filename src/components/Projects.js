import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../Assets/Images/project1.jpeg";
// import p2 from "../Assets/Images/sidcup2.png";
// import p3 from "../Assets/Images/netflix.png";
import p4 from "../Assets/Images/myntra.png";
// import p5 from "../Assets/Images/petformate.png";
import p6 from "../Assets/Images/spotify.png";
import p7 from "../Assets/Images/memegen.png";



const projects = [
  {
    id: 1,
    name: "Portfolio",
    href: "https://www.rohitshah.me",
    imageSrc: p1,
    used: "ReactJS, TailwindCSS, DaisyUI, Email.js ",
    description: "A Personal Portfolio Website.",
  },
  // {
  //   id: 2,
  //   name: "Sidcup Golf Clone",
  //   href: "https://rohitshah012.github.io/Sidcup-Family-Golf/",
  //   imageSrc:
  //     p2,
  //   used: "HTML, CSS , JS",
  //   description: "Golf website Clone.",
  // },
  // {
  //   id: 3,
  //   name: "Netflix Clone",
  //   href: "https://rohitshah012.github.io/Netflix-Clone/",
  //   imageSrc:
  //    p3,

  //   used: "HTML, CSS , JS",
  //   description: " Online Movie & Series Streaming Platform.",
  // },
  {
    id: 4,
    name: "Myntra Clone",
    href: "https://rohitshah012.github.io/Myntra-clone/",
    imageSrc:
     p4,
    used: "JavaScript Application",
    description: "E-Commerce Application.",
  },
  // {
  //   id: 5,
  //   name: "Pet4Mate",
  //   href: "https://rohitshah012.github.io/Pets4Mate/",
  //   imageSrc:
  //    p5,
  //   used: "JavaScript Application",
  //   description: "Web app for Pet Owner to find perfect mating pet",
  // },
  {
    id: 6,
    name: "Spotify - Online Music Player",
    href: "https://rohitshah012.github.io/spotify/",
    imageSrc:
     p6,
    used: "JavaScript Application",
    description: "Funcional Music Player",
  },
  {
    id: 7,
    name: "MemeGen",
    href: "https://rohitshah012.github.io/memegen/",
    imageSrc:
     p7,
    used: "ReactJS, React-draggable, HTML-TO-IMAGE, TailwindCSS, Email.js",
    description: "Web app to create trending meme online.",
  },
];

const PROJECTS_PER_ROW = 3;

export default function Projects() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_ROW);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const visibleProjects = projects.slice(0, visibleCount);

  return (
    <div id="projects" className="py-16 sm:py-32">
      <div className="section-shell">
        <h2 className="section-kicker">Selected work</h2>
        <p className="section-title">
          Projects
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-base-content/65 sm:mt-5 sm:text-lg sm:leading-8">
          A collection of interfaces and web experiences built with modern
          frontend tools.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="surface-card group relative overflow-hidden transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-base-300">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-6">
                    <h3 className="text-lg font-black sm:text-xl">
                    <a href={project.href} target="_blank" rel="noreferrer">
                      <span aria-hidden="true" className="absolute inset-0" />
                        {project.name}
                      </a>
                  </h3>
                  <p className="mb-5 mt-2 text-sm leading-6 text-base-content/60">{project.description}</p>
                  <p className="break-words text-xs font-bold uppercase leading-5 tracking-wider text-indigo-500">{project.used}</p>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < projects.length && (
          <div className="mt-10 flex justify-center sm:mt-16">
            <button
              className="secondary-button"
              onClick={() =>
                setVisibleCount((currentCount) =>
                  Math.min(currentCount + PROJECTS_PER_ROW, projects.length)
                )
              }
            >
              View More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
