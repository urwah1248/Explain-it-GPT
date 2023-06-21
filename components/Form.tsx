import { useChat } from 'ai/react'
import Result from '@/components/Result'

interface Props{
    resultRef: any
}

const Form = ({resultRef}:Props) => {
    
    const { messages, input, handleInputChange, handleSubmit } = useChat({api:`/api/generate`})
    
    return (
        <>
            <form onSubmit={handleSubmit}
            className='text-center w-full md:w-1/2 mx-auto'>
                <input type="text" name="term" id="term"
                maxLength={30}
                placeholder={`e.g. Quantum Computing`} value={input} required onChange={handleInputChange}
                className='my-4 p-2 text-gray-200 w-full border-2 border-gray-500 rounded-lg indent-2 bg-transparent outline-gray-50' />
                <br />
                <button className='w-full my-4 p-2 border-2 font-extrabold
                border-gray-200 rounded-lg transition-[50ms] active:scale-95
                text-gray-200 hover:text-black
                bg-[rgba(0,0,0,0.3)] hover:bg-gray-200 hover:border-white'>
                Explain</button>
            </form>

            <Result resultRef={resultRef} response={messages}/>
        </>
    )
}

export default Form;