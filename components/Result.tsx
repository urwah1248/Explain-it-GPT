import { useEffect } from "react";

interface Props{
    response: any,
    resultRef: any
}
const Result = ({response, resultRef}:Props) => {
    useEffect(() => {
        if (response) {
          resultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [response]);

    return (
        <div id="result" ref={resultRef} className={`w-full md:w-1/2 mx-auto ${response?"":"hidden"}`}>
            <h1>Explained</h1>
            <div className="border-2 border-black rounded-lg p-4">
                {response}
            </div>
        </div>
    )
}

export default Result;