import Header from "@/components/ui/Header";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
function ProjectDocs() {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start mt-30 md:px-8">
          <div className="max-w-lg mx-auto space-y-3 text-center">
            <h3 className="text-indigo-600 font-semibold">
              Thanks for Visiting
            </h3>
            <p className="text-gray-800 text-4xl font-semibold sm:text-5xl">
              COMING SOON!
            </p>
            <p className="text-gray-600">
              Contact Developer for furture details about project documentation.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/"
                className="flex border-1 items-center gap-2 py-2 px-4 text-white font-medium bg-violet-600 duration-150 hover:bg-violet-500 active:bg-violet-700 rounded-sm"
              >
                Go back
                <AiFillHome />
              </a>
              <a
                href="https://www.linkedin.com/in/utsav-patel-coder"
                target="_blank"
                className="flex items-center gap-2 py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border-1 rounded-sm"
              >
                Connect on LinkedIn
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default ProjectDocs;
