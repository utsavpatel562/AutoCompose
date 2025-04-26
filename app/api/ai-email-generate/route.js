// DO NOT TRY TO CHANGE THIS FILE - OTHERWISE AI WILL NOT WORK PROPERLY

import { GenerateEmailTemplateAiModel } from "@/config/AIModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const result = await GenerateEmailTemplateAiModel.sendMessage(prompt);
    let aiRespText = await result.response.text();

    console.log("Raw AI Response Text:", aiRespText);

    // If wrapped in quotes, remove them manually
    if (aiRespText.startsWith("'") && aiRespText.endsWith("'")) {
      aiRespText = aiRespText.slice(1, -1); // Remove the first and last character
    }

    // Now safely parse
    const aiRespJson = JSON.parse(aiRespText);

    console.log("Parsed AI Response JSON:", aiRespJson);

    return NextResponse.json(aiRespJson);
  } catch (e) {
    console.error("API Error:", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}

