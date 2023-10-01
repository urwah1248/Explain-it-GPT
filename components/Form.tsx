// import { useChat } from "ai/react";
// import Result from "@/components/Result";
// import { useEffect } from "react";

interface Props {
  resultRef: any;
}

const Form = ({ resultRef }: Props) => {
  // const { messages, input, handleInputChange, handleSubmit } = useChat({api:`/api/generate`})

  // const response = messages.filter(m => m.role != "user")

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="text-center w-full md:w-1/2 mx-auto"
      >
        <input
          type="text"
          name="term"
          id="term"
          maxLength={30}
          placeholder={`e.g. Quantum Computing`}
          required
          disabled
          // value={input}
          // onChange={handleInputChange}
          className="cursor-not-allowed my-4 p-2 text-gray-200 w-full border-2 border-gray-500 rounded-lg indent-2 bg-transparent outline-gray-50"
        />
        <br />
        <button
          type="button"
          className={
            "cursor-not-allowed " +
            // "hover:text-blackbg-[rgba(0,0,0,0.3)] hover:bg-gray-200 hover:border-white active:scale-95 "+
            "w-full my-4 p-2 border-2 font-extrabold border-gray-200 rounded-lg transition-[50ms] text-gray-200"
          }
        >
          Explain
        </button>
      </form>

      {/* <Result resultRef={resultRef} response={response}/> */}
    </>
  );
};

export default Form;
