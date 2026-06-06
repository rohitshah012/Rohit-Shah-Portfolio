import { useEffect } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import AOS from "aos";
import "aos/dist/aos.css";

const frontend = [
  {
    name: "HTML/CSS",
    value: 80,
    icon: CheckCircleIcon,
  },
  {
    name: "JavaScript",
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: "React",
    value: 70,
    icon: CheckCircleIcon,
  },

  {
    name: "Redux / Context API",
    value: 60,
    icon: CheckCircleIcon,
  },
  {
    name: "TailwindCSS/Bootstrap",
    value: 80,
    icon: CheckCircleIcon,
  },
];
const backend = [
  {
    name: "NodeJS",
    value: 60,
    icon: CheckCircleIcon,
  },
  {
    name: "Express.JS",
    value: 75,
    icon: CheckCircleIcon,
  },
  {
    name: "APIs",
    value: 55,
    icon: CheckCircleIcon,
  },
  {
    name: "REST API Development",
    value: 70,
    icon: CheckCircleIcon,
  },
  {
    name: " Authentication (JWT , OAuth)",
    value: 65,
    icon: CheckCircleIcon,
  },
  {
    name: "MySQL",
    value: 75,
    icon: CheckCircleIcon,
  },
  {
    name: "MongoDB",
    value: 65,
    icon: CheckCircleIcon,
  },
  {
    name: "PostgreSQL",
    value: 60,
    icon: CheckCircleIcon,
  },
];

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="py-16 sm:py-32" id="skills">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-kicker">What I work with</h2>
          <p className="section-title">
            Skills
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-y-10">
          <div
            className="surface-card mt-8 max-w-2xl p-5 sm:mt-10 sm:p-7 lg:mt-10 lg:max-w-4xl"
            data-aos="fade-up"
          >
            <p className="mb-6 text-center text-xl font-bold sm:text-2xl">
              Frontend Development
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {frontend.map((frontend) => (
                <div key={frontend.name} className="relative pl-12 sm:pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10">
                      <frontend.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {frontend.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7">
                    <progress
                      className="progress w-full"
                      value={frontend.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div
            className="surface-card max-w-2xl p-5 sm:mt-10 sm:p-7 lg:mt-10 lg:max-w-4xl"
            data-aos="fade-up"
          >
            <p className="mb-6 text-center text-xl font-bold sm:text-2xl">
              Backend Development
            </p>
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-6 lg:max-w-none lg:grid-cols-2 lg:gap-y-6">
              {backend.map((backend) => (
                <div key={backend.name} className="relative pl-12 sm:pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-lg sm:h-10 sm:w-10">
                      <backend.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {backend.name}
                  </dt>
                  <dd className="mt-2 text-base leading-2">
                    <progress
                      className="progress w-full"
                      value={backend.value}
                      max="100"
                    ></progress>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
