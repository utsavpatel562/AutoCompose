"use client";
import React from "react";
import { Button } from "./button";
import { Box, Sparkles } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <>
      <div>
        <section className="w-full h-full">
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h1 className="text-sm text-violet-600 font-medium">
                AI that turns your ideas into perfect emails.
              </h1>
              <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                Elevate every message.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#843df6] to-[#fd0fd9]">
                  AI-powered email creation, simplified.
                </span>
              </h2>
              <p className="max-w-2xl mx-auto">
                AutoCompose uses advanced AI to generate, edit, and customize
                email templates for any occasion — saving you time and boosting
                productivity.
              </p>
              <div className="flex items-center justify-center gap-2 sm:flex sm:space-y-0">
                <Link href={"#"}>
                  <Button className="flex items-center gap-2 cursor-pointer p-5 pr-6 pl-6 border-2 border-slate-700 text-white font-medium bg-slate-800 hover:bg-slate-950 rounded-sm shadow-lg hover:shadow-none">
                    Register Now
                    <Sparkles />
                  </Button>
                </Link>
                <Button className="flex items-center gap-2 cursor-pointer p-5 pr-6 pl-6 border-2 border-slate-600 text-slate-600 font-medium bg-slate-50 duration-150 hover:bg-slate-50 rounded-sm shadow-lg hover:shadow-none">
                  Learn More
                  <Box />
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
