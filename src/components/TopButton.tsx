import { FaArrowUp } from 'react-icons/fa'

export default function TopButton() {
    return (
        <a
            href="#top"
            className="fixed bottom-3 right-3 rounded-full p-2 w-12 h-12 bg-cyan-700 cursor-pointer hover:bg-cyan-500 flex items-center justify-center text-white hover:scale-95 duration-300 transition-all"
        >
            <FaArrowUp className=" animate-bounce" />
        </a>
    )
}
