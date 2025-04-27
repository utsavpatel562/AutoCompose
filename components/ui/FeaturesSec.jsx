import React from "react";
import { RiLayout2Line, RiMailDownloadLine, RiSave2Fill } from "react-icons/ri";
import { RiAiGenerate2 } from "react-icons/ri";
import { TbDragDrop } from "react-icons/tb";
import { MdOutlineAutoAwesome } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { Safari } from "../magicui/safari";
import { useUserDetail } from "@/app/provider";
import Link from "next/link";
import { Button } from "./button";
import { PanelsTopLeft, UsersRound } from "lucide-react";
function FeaturesSec() {
  const { userDetail, setUserDetail } = useUserDetail();
  return (
    <>
      <div
        className="bg-slate-50 p-4 pb-25 w-full"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, rgba(255, 255, 255, 0.4) 40%, rgba(178, 102, 255, 0.4) 100%)",
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>
        </div>
        <div
          className="max-w-[100%] mx-auto px-6 md:px-12 xl:px-6"
          id="forLearnMore"
        >
          <div className="text-center mt-12 text-gray-100">
            <p className="text-slate-500" id="TopFeatures">
              We have built many products and some of them are below
            </p>
            <h2 className="my-2 text-2xl font-bold text-black md:text-4xl">
              Top Features of{" "}
              <span className="text-violet-700">AutoCompose</span>
            </h2>
          </div>

          {/* ✅ Responsive feature grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-700 overflow-hidden rounded-3xl border text-gray-600 border-gray-700">
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl  hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <TbDragDrop className="w-14 h-14 text-violet-100" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Drag & Drop Layout Builder
                  </h5>
                  <p className="text-gray-300">
                    Design your perfect layout with zero code using our
                    intuitive editor.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <MdOutlineAutoAwesome className="w-14 h-14 text-violet-100" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    AI-Powered Template Generator
                  </h5>
                  <p className="text-gray-300">
                    From subject line to CTA — generate clear, compelling emails
                    in seconds.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <RiMailDownloadLine className="w-14 h-14 text-violet-100" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Save & Reuse Templates
                  </h5>
                  <p className="text-gray-300">
                    Save your favorite templates and reuse them with a click.
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <MdOutlineDashboardCustomize className="w-14 h-14 text-violet-100" />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-white transition group-hover:text-secondary">
                    Custom Branding
                  </h5>
                  <p className="text-gray-300">
                    Apply your logos, fonts, and colors for consistent,
                    professional emails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps section */}
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

          {/* ✅ Responsive steps grid */}
          <div className="grid items-center grid-cols-1 gap-y-10 gap-x-8 mt-12 sm:grid-cols-2 lg:grid-cols-5 sm:mt-20">
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
              <Safari
                url="magicui.design"
                className="size-full border rounded-md border-slate-200 shadow-xl"
                videoSrc="/vid.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <div className="p-5 bg-zinc-50">
        <section
          className="py-28 rounded-lg"
          style={{
            background:
              "linear-gradient(152.92deg, rgba(192, 132, 252, 0.1) 4.54%, rgba(232, 121, 249, 0.29) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
          }}
        >
          <div className="max-w-screen-xl mx-auto px-4 md:text-center md:px-8">
            <div className="max-w-4xl space-y-3 md:mx-auto">
              <h3 className="text-indigo-600 font-semibold">
                UNLOCK THE POWER OF AI-GENERATED EMAILS
              </h3>
              <p className="text-gray-800 text-3xl font-semibold sm:text-5xl">
                Start writing emails you’re proud of.
              </p>
              <p className="text-gray-600">
                Design layouts visually and generate powerful, personalized
                content with AI. AutoCompose makes email building faster,
                smarter, and easier than ever.
              </p>
            </div>
            <div className="mt-4">
              {userDetail?.email ? (
                <Link href="/dashboard">
                  <Button className="flex items-center gap-2 justify-center m-auto cursor-pointer p-6 md:pr-10 md:w-[16%] md:pl-10 border-2 border-slate-600 text-slate-100 font-medium bg-slate-800 duration-150 hover:bg-slate-900 rounded-full shadow-lg hover:shadow-none">
                    Dashboard <PanelsTopLeft />
                  </Button>
                </Link>
              ) : (
                <Link href="/">
                  <Button className="flex items-center gap-2 justify-center m-auto cursor-pointer p-6 md:pr-10 md:w-[16%] md:pl-10 border-2 border-slate-600 text-slate-100 font-medium bg-slate-800 duration-150 hover:bg-slate-900 rounded-full shadow-lg hover:shadow-none">
                    Regsiter Today <UsersRound />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default FeaturesSec;
