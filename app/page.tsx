"use client"
import Form from '@/components/Form'
import { useState, useRef } from 'react'

export default function Home() {
  const resultRef = useRef(null);

  return (
    <main className='w-10/12 md:max-w-4xl mx-auto my-20 md:my-14 background-gradient'>
      <h1 className='mx-auto tracking-tighter text-3xl md:text-6xl 
      font-extrabold text-center my-4 md:w-[630px]
      '>
        Generate Explanations of any Term you Enter
      </h1>
      <Form resultRef={resultRef}/>
    </main> 
  )
}
