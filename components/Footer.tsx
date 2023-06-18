const Footer = () => {
    return (
        <footer className="p-2 w-full max-w-5xl mx-auto">
            <hr className="border-2 border-gray-200" />
            <div className="pt-6 flex flex-col md:flex-row items-center md:justify-between">
                <p>Powered by <a className="hover:underline font-bold"
                    target="blank"
                    href="https://openai.com/blog/chatgpt">ChatGPT</a>
                </p>
                <p>Made by <a className="hover:underline font-bold"
                    target="blank"
                    href="https://github.com/urwah1248">@urwah1248</a>
                </p>
            </div>
        </footer>
    )
}

export default Footer;