"use client";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsStars } from "react-icons/bs";
import { HiMiniWindow } from "react-icons/hi2";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import AllInputBox from "@/components/ui/AllInputBox";
function CreateNew() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="items-center justify-center mt-10">
        <img
          src="/surprise_img.jpg"
          className="justify-center flex items-center m-auto rounded-2xl mb-5"
        />
        <p className="text-center text-xl text-red-600 font-semibold px-4">
          Open this on Laptop/PC - Currently Mobile View is not supported.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg border p-8 sm:p-10 lg:p-16 space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-violet-600">
            Create New Email Template
          </h2>
          <p className="mt-2 text-base sm:text-lg text-gray-500">
            AI-powered email template creation made simple — professional
            results, no coding needed.
          </p>
        </div>

        <Tabs defaultValue="AI" className="w-full">
          <TabsList className="flex h-13 justify-center gap-2 bg-gray-100 p-1 rounded-xl">
            <TabsTrigger
              value="AI"
              className="flex items-center gap-2 px-4 py-2 text-md font-medium hover:bg-white hover:shadow-sm rounded-sm transition"
            >
              Create with AI <BsStars className="text-indigo-400" />
            </TabsTrigger>
            <TabsTrigger
              value="SCRATCH"
              className="flex items-center gap-2 px-4 py-2 text-md font-medium hover:bg-white hover:shadow-sm rounded-sm transition"
            >
              Start from Scratch <HiMiniWindow className="text-indigo-400" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="AI" className="mt-1">
            <AllInputBox />
          </TabsContent>

          <TabsContent value="SCRATCH" className="mt-6 text-gray-600">
            <h2 className="font-semibold md:ml-2 text-lg flex items-center gap-2">
              Feature Coming Soon! <FaRegFaceSmileBeam />
            </h2>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateNew;
