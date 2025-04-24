import React from "react";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { RiAiGenerate2 } from "react-icons/ri";

function AllInputBox() {
  return (
    <div className="mt-8 space-y-4">
      <p className="text-lg text-gray-700">
        Provide details about your email template you'd like to create.
      </p>

      <Textarea
        placeholder="Start writing here..."
        rows={5}
        className="w-full text-base sm:text-lg p-4 rounded-xl border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
      />

      <Button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl text-base sm:text-lg transition">
        <RiAiGenerate2 className="text-xl" />
        Generate
      </Button>
    </div>
  );
}

export default AllInputBox;
