import Image from "next/image";
const Header = () => {
  return (
    <header className="p-2 w-11/12 md:max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl md:text-4xl py-6 font-extrabold tracking-tighter mb-0 hover:text-white">
          Explain it GPT
        </h1>
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Logo"
          className="w-[50px] h-[50px] md:w-[80px] md:h-[80px] hover:scale-105 transition-[100ms]"
        />
      </div>
      <hr className="border-2 border-gray-200" />
      <div className="mt-6 md:w-fit mx-auto border-2 flex-grow border-gray-200 rounded-lg p-4 bg-[rgba(0,0,0,0.3)]">
        Note: OpenAI Tokens used in this app got expired. It will get fixed soon.
      </div>
    </header>
  );
};

export default Header;
