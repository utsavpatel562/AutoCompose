import { GenerateEmailTemplateAiModel } from "@/config/AIModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const result = await GenerateEmailTemplateAiModel.sendMessage(prompt);

    const aiRespText = await result.response.text(); // Get the string
    const aiRespJson = JSON.parse(aiRespText); // ✅ Properly parse into JSON (which is your array)

    console.log("AI Response:", aiRespJson);

    // Save aiRespJson directly into the database (this is already an array, no { aiResp: [...] } wrapping)

    return NextResponse.json(aiRespJson); // ✅ Directly return the array
  } catch (e) {
    console.error("API Error:", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
