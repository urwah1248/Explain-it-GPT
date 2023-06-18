import { NextResponse } from 'next/server'
 
export async function GET() {
  const Hello = "How you doing?"
 
  return NextResponse.json({ Hello })
}
