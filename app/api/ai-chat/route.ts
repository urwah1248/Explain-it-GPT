import { NextResponse, NextRequest } from 'next/server'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { Configuration, OpenAIApi } from 'openai-edge'

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var from OpenAI");
}
const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge'

export async function POST(req: NextRequest) {
    const { messages } = await req.json();

    // if(!term){
    //     return new NextResponse("No Prompt in the request.", { status: 400 })
    // }
    // if(term.length>30){
    //     return new NextResponse("Term is too long.", { status: 400 })
    // }

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        temperature: 0.5,
        messages    
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}