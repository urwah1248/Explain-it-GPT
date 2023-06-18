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
    }
    return (
        <form onSubmit={handleSubmit}
        className='text-center w-full md:w-1/2 mx-auto'>
            <input type="text" name="term" id="term"
            placeholder='Computer' value={term} required onChange={(e)=> setTerm(e.target.value)}
            className='my-4 p-2 text-black w-full border-2 border-black rounded-lg indent-2' />
            <br />
            <button className='w-full my-4 p-2 border-2 font-extrabold
            border-black rounded-lg transition-[100ms] active:scale-90
            hover:text-white hover:bg-black'>Explain</button>
        </form>
    )
}

export default Form;