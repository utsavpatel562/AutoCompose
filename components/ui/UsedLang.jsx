import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
function UsedLang() {
  return (
    <>
      <div>
        <div className="py-14">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h3 className="font-semibold text-md text-gray-600 text-center">
              POWERED BY AND DEVELOPED USING
            </h3>
            <div className="mt-6">
              <ul className="flex gap-y-6 flex-wrap items-center justify-center [&>*]:px-12 lg:divide-x">
                {/* LOGO 1 */}
                <li className="flex items-center gap-2 text-slate-700">
                  <RiNextjsLine className="w-11 h-11" />
                  <h2 className="text-2xl font-semibold">NEXT.JS</h2>
                </li>
                {/* LOGO 1 */}
                <li className="flex items-center gap-2 text-slate-700">
                  <RiReactjsLine className="w-11 h-11" />
                  <h2 className="text-2xl font-semibold">REACT.JS</h2>
                </li>
                {/* LOGO 1 */}
                <li className="flex items-center gap-2 text-slate-700">
                  <RiTailwindCssLine className="w-11 h-11" />
                  <h2 className="text-2xl font-semibold">TAILWIND CSS</h2>
                </li>
                {/* LOGO 1 */}
                <li className="flex items-center gap-2 text-slate-700">
                  <RiNodejsLine className="w-11 h-11" />
                  <h2 className="text-2xl font-semibold">NODE.JS</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UsedLang;
