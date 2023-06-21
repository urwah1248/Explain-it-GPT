import { useEffect } from "react";

interface Props{
    resultRef: any,
    response: any
}

const Result = ({response, resultRef}:Props) => {

    useEffect(() => {
        if (response) {
          resultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [response]);

    return (
        <div id="result" ref={resultRef} className={`w-full md:w-1/2 mx-auto ${response[0]?"":"hidden"}`}>
            <h1 className="text-center">Explained</h1>
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-[rgba(0,0,0,0.3)]">
                {
                    response[response.length-1]&&response[response.length-1].content
                }
            </div>
        </div>
    )
}

export default Result;