"use client"
import Image from 'next/image'
import Result from '@/components/Result'
import Form from '@/components/Form'
import { useState, useRef, useEffect } from 'react'

export default function Home() {
  const [term, setTerm] = useState("")
  const [result, setResult] = useState("")
  const resultRef = useRef(null);

  return (
    <main className='w-10/12 md:max-w-4xl mx-auto my-20 md:my-14 background-gradient'>
      <h1 className='mx-auto tracking-tighter text-3xl md:text-6xl 
      font-extrabold text-center my-4 md:w-[630px]
      '>
        Generate Explanations of any Term you Enter
      </h1>
      <Form term={term} setTerm={setTerm} setResult={setResult} resultRef={resultRef}/>
      <Result term={term} response={result} resultRef={resultRef}/>
    </main> 
  )
}
