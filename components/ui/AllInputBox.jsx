import React, { useState } from "react";
import { Textarea } from "./textarea";
import { Button } from "./button";
import { RiAiGenerate2 } from "react-icons/ri";
import Prompt from "@/Data/Prompt";
import axios from "axios";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { useUserDetail } from "@/app/provider";
function AllInputBox() {
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const SaveTemplate = useMutation(api.emailTemplate.SaveTemplate);
  const { userDetail, setUserDetail } = useUserDetail();

  const OnGenerate = async () => {
    const PROMPT = Prompt.EMAIL_PROMPT + "\n-" + userInput;
    const tid = uuidv4();
    setLoading(true);
    try {
      const result = await axios.post("/api/ai-email-generate", {
        prompt: PROMPT,
      });
      console.log(result.data);
      // Save the data in DB
      const resp = await SaveTemplate({
        tid: tid,
        design: JSON.stringify(result.data), // Make sure it's a string
        email: userDetail?.email, // Ensure this is not undefined
      });
      console.log("Template saved successfully!");
      setLoading(false);
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
        className="flex items-center justify-center w-full gap-2 bg-violet-600 cursor-pointer hover:bg-violet-700 text-white px-6 py-5 rounded-sm text-base sm:text-lg transition"
        disabled={userInput?.length == 0 || loading}
      >
        {loading ? (
          <svg
            className="animate-spin h-6 w-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          <>Generate</>
        )}
      </Button>
    </div>
  );
}

export default AllInputBox;
