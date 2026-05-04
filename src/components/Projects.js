import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import p1 from "../Assets/Images/project1.jpeg";
import p2 from "../Assets/Images/sidcup2.png";
import p3 from "../Assets/Images/netflix.png";
import p4 from "../Assets/Images/myntra.png";
import p5 from "../Assets/Images/petformate.png";
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
  {
    id: 2,
    name: "Sidcup Golf Clone",
    href: "https://rohitshah012.github.io/Sidcup-Family-Golf/",
    imageSrc:
      p2,
    used: "HTML, CSS , JS",
    description: "Golf website Clone.",
  },
  {
    id: 3,
    name: "Netflix Clone",
    href: "https://rohitshah012.github.io/Netflix-Clone/",
    imageSrc:
     p3,

    used: "HTML, CSS , JS",
    description: " Online Movie & Series Streaming Platform.",
  },
  {
    id: 4,
    name: "Myntra Clone",
    href: "https://rohitshah012.github.io/Myntra-clone/",
    imageSrc:
     p4,
    used: "HTML, CSS , JS , API Integration",
    description: "E-Commerce Application.",
  },
  {
    id: 5,
    name: "Pet4Mate",
    href: "https://rohitshah012.github.io/Pets4Mate/",
    imageSrc:
     p5,
    used: "JavaScript",
    description: "Web app for Pet Owner to find perfect mating pet",
  },
  {
    id: 6,
    name: "Spotify - Online Music Player",
    href: "https://rohitshah012.github.io/spotify/",
    imageSrc:
     p6,
    used: "JavaScript",
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
    <div id="projects">
      <div className="mx-auto max-w-2xl px-6 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg leading-7">Browse my recent</h2>
        <p className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          Projects
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group relative h-full overflow-hidden rounded-2xl bg-base-200 shadow-xl ring-2 ring-base-300"
              data-aos="flip-left"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-base-300">
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex h-full justify-between p-4">
                <div className="p-4">
                  <h3 className="text-lg font-bold">
                    <a href={project.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {project.name}
                    </a>
                  </h3>
                  <p className="mt-1 mb-5 text-sm">{project.description}</p>
                  <p className="text-sm font-medium">{project.used}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {visibleCount < projects.length && (
          <div className="mt-16 flex justify-center">
            <button
              className="btn btn-outline"
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
