import { useEffect } from "react";
import {
  MapPinIcon,
  AtSymbolIcon,
  CalendarIcon,
  AcademicCapIcon,
  BriefcaseIcon,
} from "@heroicons/react/20/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { PhoneIcon } from "@heroicons/react/24/solid";
import photo from "../Assets/Images/Profile.jpg";
const features = [
  {
    name: "Age:",
    description: "21",
    icon: CalendarIcon,
  },
  {
    name: "Email:",
    description: "rohitshah9958@gmail.com",
    icon: AtSymbolIcon,
  },
  {
    name: "Phone No. :",
    description: "+91 8527830546",
    icon: PhoneIcon,
  },
  {
    name: "Location:",
    description: "D-318, Indra Kalyan Vihar Okhal Industrial Area Phase-1, South Delhi, Delhi-110020",
    icon: MapPinIcon,
  },
];

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="relative isolate overflow-hidden py-16 sm:py-32"
      id="about"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 sm:gap-y-16 sm:px-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 lg:px-0">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="section-kicker">Get to know me</h2>
              <p className="section-title">
                About Me
              </p>
              <p className="mt-5 text-base leading-7 text-base-content/65 sm:mt-6 sm:text-lg sm:leading-8" data-aos="fade-right">


                I am Rohit Shah, a 3rd-year BCA student at Maharaja Surajmal Institute, affiliated with GGSIPU, and a B.Com graduate from Swami Vivekanand Subharti University with a CGPA of 8.4 . I am a passionate MERN stack developer specializing in building modern, responsive web applications using React. I focus on creating clean, user-friendly interfaces and continuously enhance my skills in Node.js, Express, and MongoDB to grow as a full-stack developer.



              </p>
            </div>
          </div>
        </div>
        <div
          className="mx-auto w-full max-w-xl lg:-ml-12 lg:-mt-12 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:p-12"
          data-aos="fade-left"
        >
          <img
            className="aspect-[4/5] h-auto w-full rounded-2xl border border-base-content/10 object-cover object-center shadow-2xl sm:rounded-[2rem] lg:w-[35rem] lg:max-w-none"
            src={photo}
            alt="Person"
          />
        </div>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 px-4 sm:px-6 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 lg:px-0">
        <div className="lg:col-span-2 lg:col-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="text-base leading-7">
            <div className="grid gap-x-6 sm:grid-cols-2">
              <div
                className="surface-card mt-8 p-5 transition hover:-translate-y-1 sm:mt-10 sm:p-7"
                data-aos="zoom-in"
              >
                <BriefcaseIcon className="mx-auto h-8 w-8 text-indigo-500" aria-hidden="true" />
                <h2 className=" text-2xl text-center font-bold tracking-tight">
                  Experience
                </h2>
                <p className="mt-3 list-item list-inside">
                  Successfully completed multiple freelance projects
                </p>
                <p className="mt-3 list-item list-inside">
                  Actively contributed to open-source projects
                </p>

              </div>
              <div
                className="surface-card mt-5 p-5 transition hover:-translate-y-1 sm:mt-10 sm:p-7"
                data-aos="zoom-in"
              >
                <AcademicCapIcon
                  className="mx-auto h-8 w-8 text-indigo-500"
                  aria-hidden="true"
                />
                <h2 className=" text-2xl text-center font-bold tracking-tigh">
                  Education
                </h2>
                <p className="mt-3 list-item list-inside">
                  3rd-Year BCA Student at MSI
                </p>
                <p className="mt-3 list-item list-inside">
                  B.Com Graduate from SVSU
                </p>
                <p className="mt-3 list-item list-inside">
                  MERN Stack Developer (React, Node.js, Express, MongoDB)
                </p>
              </div>
            </div>
            <dl
              className="surface-card mt-8 grid gap-6 p-5 text-sm leading-6 sm:mt-10 sm:grid-cols-2 sm:p-7 sm:text-base sm:leading-7 lg:max-w-none"
              data-aos="fade-right"
            >
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-500"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline break-words">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
