import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BsStars } from "react-icons/bs";
import { HiMiniWindow } from "react-icons/hi2";
import AllInputBox from "@/components/ui/AllInputBox";

function CreateNew() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg border p-8 sm:p-10 lg:p-16 space-y-8">
        <div className="">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Create New Email Template
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500">
            AI-powered email template creation made simple — professional
            results, no coding needed.
          </p>
        </div>

        <Tabs defaultValue="AI" className="w-full">
          <TabsList className="flex h-15 justify-center gap-2 bg-gray-100 p-1 rounded-xl">
            <TabsTrigger
              value="AI"
              className="flex items-center gap-2 px-4 py-2 text-md font-medium hover:bg-white hover:shadow-sm rounded-md transition"
            >
              Create with AI <BsStars className="text-indigo-400" />
            </TabsTrigger>
            <TabsTrigger
              value="SCRATCH"
              className="flex items-center gap-2 px-4 py-2 text-md font-medium hover:bg-white hover:shadow-sm rounded-md transition"
            >
              Start from Scratch <HiMiniWindow className="text-indigo-400" />
            </TabsTrigger>
          </TabsList>

          <TabsContent value="AI" className="mt-6">
            <AllInputBox />
          </TabsContent>

          <TabsContent value="SCRATCH" className="mt-6 text-gray-600">
            You can start designing your email manually here.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default CreateNew;
