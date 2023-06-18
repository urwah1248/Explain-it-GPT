interface Props{
    response: any
}
const Result = ({response}:Props) => {

    return (
        <div id="result" className={`w-full md:w-1/2 mx-auto ${response?"":"hidden"}`}>
            <h1>Explained</h1>
            <div className="border-2 border-black rounded-lg p-4">
                {response}
            </div>
        </div>
    )
}

export default Result;