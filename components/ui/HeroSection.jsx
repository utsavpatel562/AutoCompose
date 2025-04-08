import React from "react";
import { Button } from "./button";

function HeroSection() {
  return (
    <>
      <div>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h1 className="text-sm text-violet-600 font-medium">
                AI that turns your ideas into perfect emails.
              </h1>
              <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                Elevate every message.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#843df6] to-[#fc1af4]">
                  AI-powered email creation, simplified.
                </span>
              </h2>
              <p className="max-w-2xl mx-auto">
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <Button className="cursor-pointer p-5 pr-6 pl-6 border-2 border-violet-600 text-white font-medium bg-violet-600 duration-150 hover:bg-violet-500 active:bg-violet-700 rounded-sm shadow-lg hover:shadow-none">
                  Register Now
                </Button>
                <Button className="cursor-pointer p-5 pr-6 pl-6 border-2 border-violet-600 text-violet-600 font-medium bg-slate-100 duration-150 hover:bg-slate-50 rounded-sm shadow-lg hover:shadow-none">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
