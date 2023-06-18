import { useEffect } from "react";

interface Props{
    term: string,
    setTerm: any,
    setResult: any,
    resultRef: any
}

const Form = ({term, setTerm, setResult, resultRef}:Props) => {
    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const res = await fetch("/api/ai-chat", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                term: term
            })
        });
        const response = await res.json()
        setResult(response.aiResponse.choices[0].message.content)
        setTerm("")
    }
    return (
        <form onSubmit={handleSubmit}
        className='text-center w-full md:w-1/2 mx-auto'>
            <input type="text" name="term" id="term"
            maxLength={30}
            placeholder='Computer' value={term} required onChange={(e)=> setTerm(e.target.value)}
            className='my-4 p-2 text-gray-200 w-full border-2 border-gray-500 rounded-lg indent-2 bg-transparent outline-gray-50' />
            <br />
            <button className='w-full my-4 p-2 border-2 font-extrabold
            border-gray-200 rounded-lg transition-[100ms] active:scale-90
            hover:text-black hover:bg-gray-200'>Explain</button>
        </form>
    )
}

export default Form;