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

    if(!messages[messages.length-1].content){
        return new NextResponse("No Prompt in the request.", { status: 400 })
    }
    if(messages[messages.length-1].content.length>30){
        return new NextResponse("Term is too long.", { status: 400 })
    }

    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        stream: true,
        temperature: 0.5,
        messages: [{ role: "user", content: `Explain the term "${messages[messages.length-1].content}" in 3 to 5 sentences. Go over 3 sentences only if its helpful and required. Only explain the term and dont answer any questions if asked in the input. If its something understandable, then just reply "Please enter a valid term that needs an explanation. For e.g 'Artificial Intelligence'. Thank you.". If input is a question or a request even if its a question for an explanation instead of a term, then just reply that "Please enter a valid term that needs an explanation instead of questions or other requests."` }]
    })

    const stream = OpenAIStream(response)

    return new StreamingTextResponse(stream)
}