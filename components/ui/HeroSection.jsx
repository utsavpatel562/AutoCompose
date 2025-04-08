import React from "react";

function HeroSection() {
  return (
    <>
      <div>
        <section>
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h1 className="text-sm text-pink-600 font-medium">
                Build products for everyone
              </h1>
              <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                Design your projects faster with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f51d89] to-[#f74bfa]">
                  the largest figma UI kit
                </span>
              </h2>
              <p className="max-w-2xl mx-auto">
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae.
              </p>
              <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
                <a
                  href="javascript:void(0)"
                  className="block border-2 border-pink-600 py-2 px-4 text-white font-medium bg-pink-600 duration-150 hover:bg-pink-500 active:bg-pink-700 rounded-sm shadow-lg hover:shadow-none"
                >
                  Register Now
                </a>
                <a
                  href="javascript:void(0)"
                  className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border-2 rounded-sm"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroSection;
