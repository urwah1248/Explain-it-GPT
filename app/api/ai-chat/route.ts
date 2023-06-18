import { NextResponse, NextRequest } from 'next/server'

if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var from OpenAI");
}



export async function POST(req: NextRequest) {
    const request = await req.json();

    const {term} = request;

    if(!term){
        return new NextResponse("No Prompt in the request.", { status: 400 })
    }
    if(term.length>30){
        return new NextResponse("Term is too long.", { status: 400 })
    }
    
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": `Explain ${term} in a simple sentence. If the term is unknown, respond by saying "I am sorry, I dont think that term exists."`}],
            temperature: 0.5
        })
    });

    const aiResponse = await res.json();

    return NextResponse.json({aiResponse})
}