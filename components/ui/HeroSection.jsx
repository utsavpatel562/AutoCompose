"use client";
import React from "react";
import { Button } from "./button";
import { Box, PanelsTopLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import SignInButton from "../customs/SignInButton";
import { useUserDetail } from "@/app/provider";
import { useRouter } from "next/navigation";

function HeroSection() {
  const { userDetail, setUserDetail } = useUserDetail();
  const router = useRouter();
  return (
    <>
      <div>
        <section className="w-full h-full">
          <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
              <h1 className="text-md text-violet-600 font-medium">
                AI that turns your ideas into perfect emails.
              </h1>
              <h2 className="text-3xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                Elevate every message.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#843df6] to-[#fd0fd9]">
                  AI-powered email creation, simplified.
                </span>
              </h2>
              <p className="max-w-2xl mx-auto md:text-lg">
                AutoCompose uses advanced AI to generate, edit, and customize
                email templates for any occasion — saving you time and boosting
                productivity.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 py-11 relative z-[20]">
                {userDetail?.email ? (
                  <Button
                    onClick={() => router.push("/dashboard")}
                    className="flex w-full md:w-fit justify-center items-center gap-2 cursor-pointer p-5 border-2 border-slate-800 text-slate-100 font-medium bg-slate-800 duration-150 hover:bg-slate-950 rounded-sm shadow-lg hover:shadow-none"
                  >
                    Dashboard <PanelsTopLeft />
                  </Button>
                ) : (
                  <SignInButton />
                )}
                <Button
                  onClick={() => {
                    const element = document.getElementById("forLearnMore");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex w-full md:w-fit justify-center items-center gap-2 cursor-pointer p-5 border-2 border-slate-600 text-slate-600 font-medium md:text-lg bg-slate-50 duration-150 hover:bg-slate-50 rounded-sm shadow-lg hover:shadow-none"
                >
                  Learn More
                  <Box className="w-6 h-6" />
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
