import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

function ContactMe() {
  const contactMethods = [
    {
      icon: <BsLinkedin />,
      title: "Connect with me on LinkedIn",
      desc: "Let's connect and grow your professional network - Utsav Patel",
      link: {
        name: "Connect Me",
        href: "https://www.linkedin.com/in/utsav-patel-coder",
      },
    },
    {
      icon: <BsGithub />,

      title: "Follow and check out my GitHub",
      desc: "Check out my GitHub profile to see my projects and contributions.",
      link: {
        name: "View GitHub",
        href: "https://github.com/utsavpatel562",
      },
    },
  ];
  return (
    <>
      <section className="py-14 p-10 md:p-10" id="Contact">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 gap-12 md:px-8 lg:flex">
          <div className="max-w-md md:mt-5">
            <h3 className="text-slate-600 text-3xl font-semibold sm:text-4xl">
              Let’s connect
            </h3>
            <p className="mt-3 text-lg md:text-2xl">
              I'm here to help and answer any question you might have, I look
              forward to hearing from you .
            </p>
          </div>
          <div className="">
            <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
              {contactMethods.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
                >
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                    {item.icon}
                  </div>
                  <h4 className="text-gray-800 text-lg font-medium xl:text-xl">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                  <a
                    target="_blank"
                    href={item.link.href}
                    className="flex items-center gap-1 text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium"
                  >
                    {item.link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMe;
