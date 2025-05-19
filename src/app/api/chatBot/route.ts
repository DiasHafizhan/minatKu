import { together } from "@/lib/together";
import { NextRequest, NextResponse } from "next/server";
import { ChatCompletionMessageParam } from "openai/src/resources.js";

const chat: ChatCompletionMessageParam[] = [
  {
    role: 'system',
    content: 'You are a professional career advisor who helps high school students choose the most suitable subjects based on their interests and strengths. You also provide insights into potential career paths and future job opportunities related to their subject choices. Always respond in Indonesian, and do not answer questions outside of education and career-related topics.'
  }
]

export async function POST(request: NextRequest) {
  try {
    const {message}: {message: ChatCompletionMessageParam[]} = await request.json()
    const promtChat = [...chat,...message]
    const chatBot = await together.chat.completions.create({
      messages: promtChat,
      model: 'meta-llama/Llama-3-70b-chat-hf'
    })
    const response = chatBot.choices[0].message.content
    return NextResponse.json({message: response}, {status: 200})
  } catch (error) {
    return NextResponse.json({
      error: 'server error' + error
    }, 
    {
      status: 500
    })
  }
}