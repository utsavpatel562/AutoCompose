// app/api/ai-email-generate/route.js
import { GenerateEmailTemplateAiModel } from "@/config/AIModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const result = await GenerateEmailTemplateAiModel.sendMessage(prompt);
    const aiResp = result.response.text(); // ✅ await this!

    console.log("AI Response:", aiResp);

    // Optionally save to DB using userEmail, tId, aiResp, etc.

    return NextResponse.json({ aiResp }); // ✅ Return JSON properly
  } catch (e) {
    console.error("API Error:", e);
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}
