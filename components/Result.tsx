import { useEffect } from "react";
import Typewriter from 'typewriter-effect';

interface Props{
    response: any,
    resultRef: any,
    term: string
}
const Result = ({response, resultRef, term}:Props) => {
    useEffect(() => {
        if (response) {
          resultRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [response]);

    return (
        <div id="result" ref={resultRef} className={`w-full md:w-1/2 mx-auto ${response?"":"hidden"}`}>
            <h1 className="text-center">Explained</h1>
            <div className="border-2 border-gray-200 rounded-lg p-4">
                <Typewriter
                    options={{
                        strings: [response],
                        autoStart: true,
                        delay: 35,
                        pauseFor: 99999,
                        cursor: ""
                    }}
                />
            </div>
        </div>
    )
}

export default Result;