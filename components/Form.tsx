import { useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

interface Props{
    term: string,
    setTerm: any,
    setResult: any,
    resultRef: any
}

const antIcon = <LoadingOutlined style={{ fontSize: 24, color: 'rgb(17,24,39)' }} spin />;

const Form = ({term, setTerm, setResult, resultRef}:Props) => {
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e:any) => {
        e.preventDefault();

        try{
            setLoading(true)
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
            setLoading(false)
            console.log(response.aiResponse);
        }
        catch (error) {
            setLoading(false)
            alert("Sorry for inconvenience, error occured with the API.")
        }
    }
    return (
        <form onSubmit={handleSubmit}
        className='text-center w-full md:w-1/2 mx-auto'>
            <input type="text" name="term" id="term"
            maxLength={30}
            placeholder={`e.g. Quantum Computing`} value={term} required onChange={(e)=> setTerm(e.target.value)}
            className='my-4 p-2 text-gray-200 w-full border-2 border-gray-500 rounded-lg indent-2 bg-transparent outline-gray-50' />
            <br />
            <button className='w-full my-4 p-2 border-2 font-extrabold
            border-gray-200 rounded-lg transition-[50ms] active:scale-95
            text-gray-900
            bg-gray-200 hover:bg-white hover:border-white'>
            {!loading ? 'Explain': <Spin indicator={antIcon} />}</button>
        </form>
    )
}

export default Form;