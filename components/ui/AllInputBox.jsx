import React, { useState } from "react";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { RiAiGenerate2 } from "react-icons/ri";
import Prompt from "@/Data/Prompt";
import axios from "axios";

function AllInputBox() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const OnGenerate = async () => {
    const PROMPT = Prompt.EMAIL_PROMPT + "\n-" + userInput;
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-email-generate", {
        prompt: PROMPT,
        userEmail: "",
        tId: 0,
      });
      console.log(result);
    } catch (e) {
      console.error("API Error:", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-2 space-y-4">
      <p className="text-lg text-gray-700 md:ml-1">
        Provide details about your email template you'd like to create.
      </p>

      <Textarea
        placeholder="Start writing typing your idea here..."
        rows={8}
        className="w-full md:h-[120px] text-base sm:text-lg p-4 rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
        onChange={(e) => setUserInput(e.target.value)}
      />

      <Button
        onClick={OnGenerate}
        className="flex items-center w-full gap-1 bg-violet-600 cursor-pointer hover:bg-violet-700 text-white px-6 py-5 rounded-sm text-base sm:text-lg transition"
        disabled={userInput?.length == 0 || loading}
      >
        <RiAiGenerate2 className="w-10 h-10" />
        Generate
      </Button>
    </div>
  );
}

export default AllInputBox;
