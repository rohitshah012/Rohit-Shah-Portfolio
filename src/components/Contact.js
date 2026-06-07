import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Your message is sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="py-8 sm:py-16" id="contact">
      <div className="section-shell">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-kicker">Have a project in mind?</h2>
          <p className="section-title">
            Contact Me
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          method="POST"
          className="surface-card mx-auto mt-6 max-w-2xl p-4 sm:mt-8 sm:p-8"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2 sm:gap-y-5">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6"
              >
                First name
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  required
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-xl border-base-content/10 bg-base-100/60 px-4 py-2 text-current focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6"
              >
                Last name
              </label>
              <div className="mt-1.5">
                <input
                  type="text"
                  required
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-xl border-base-content/10 bg-base-100/60 px-4 py-2 text-current focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-1.5">
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-xl border-base-content/10 bg-base-100/60 px-4 py-2 text-current focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-1.5">
                <textarea
                  name="message"
                  required
                  id="message"
                  rows={3}
                  className="block w-full rounded-xl border-base-content/10 bg-base-100/60 px-4 py-2 text-current focus:border-indigo-500 focus:ring-indigo-500"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="primary-button w-full">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
