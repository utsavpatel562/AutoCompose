import React from "react";
import { RiLayout2Line, RiSave2Fill } from "react-icons/ri";
import { RiAiGenerate2 } from "react-icons/ri";

function FeaturesSec() {
  return (
    <>
      <section className="py-10 bg-gray-50 dark:bg-slate-800 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <p className="text-sm tracking-widest text-blue-600 dark:text-sky-300 font-bold uppercase">
              From idea to inbox in 3 easy steps.
            </p>

            <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-slate-50 sm:text-4xl lg:text-5xl">
              Design. Generate. Send. It’s that simple.
            </h2>
          </div>

          <div className="grid items-center grid-cols-1 mt-12 gap-y-10 lg:grid-cols-5 sm:mt-20 gap-x-4">
            <div className="space-y-8 lg:pr-16 xl:pr-24 lg:col-span-2 lg:space-y-12">
              <div className="flex items-center">
                <RiLayout2Line className="w-15 h-15 text-yellow-500" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black dark:text-slate-50">
                    Design Your Layout
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-slate-300">
                    Use the drag & drop editor to build the structure of your
                    email.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <RiAiGenerate2 className="w-15 h-15 text-rose-600" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black dark:text-slate-50">
                    Generate Content with AI
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-slate-300">
                    Choose the email type, tone, and let AI do the writing for
                    you.
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <RiSave2Fill className="w-14 h-14 text-green-600" />
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-black dark:text-slate-50">
                    Save or Export
                  </h3>
                  <p className="mt-3 text-base text-gray-600 dark:text-slate-300">
                    Copy, send, or save templates to use again later.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <img
                className="w-full rounded-lg shadow-xl"
                src="/demopic.png"
                alt="Dashboard screenshot"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesSec;
