import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";
import { useMenu } from "../../context/MenuContext";

export default function Footer() {
    const { menu, setMenu } = useMenu();
    return (
        <footer className="flex flex-col items-center justify-center text-white gap-2 mt-40 mb-6">
            <div className="grid grid-cols-6 sm:grid-cols-5 text-center font-medium text-lg text-white gap-x-10 gap-y-2 sm:gap-5 mb-6">
                <a href="#aboutme" className={`col-span-2 sm:col-span-1 menu ${menu === "aboutme" ? "active" : ""}`} onClick={() => setMenu("aboutme")}>About me</a>
                <a href="#skills" className={`col-span-2 sm:col-span-1 menu ${menu === "skills" ? "active" : ""}`} onClick={() => setMenu("skills")}>Skills</a>
                <a href="#experience" className={`col-span-2 sm:col-span-1 menu ${menu === "experience" ? "active" : ""}`} onClick={() => setMenu("experience")}>Experience</a>
                <a href="#projects" className={`col-span-3 sm:col-span-1 menu ${menu === "projects" ? "active" : ""}`} onClick={() => setMenu("projects")}>Projects</a>
                <a href="#contactme" className={`col-span-3 sm:col-span-1 menu ${menu === "contactme" ? "active" : ""}`} onClick={() => setMenu("contactme")}>Contact me</a>
            </div>

            <div className=" text-orange-500 my-2">Follow Me on Social Media</div>
            <div className="flex justify-center items-center gap-4">
                <a
                    href="https://www.linkedin.com/in/hassanullahusmani" className="rounded-full p-2 w-12 h-12 bg-sky-800 cursor-pointer flex items-center justify-center text-white hover:scale-90 duration-300 transition-all">
                    <LuLinkedin className="size-6" />
                </a>
                <a
                    href="https://github.com/hassanullahusmani45" className="rounded-full p-2 w-12 h-12 bg-black cursor-pointer flex items-center justify-center text-white hover:scale-90 duration-300 transition-all">
                    <FiGithub className="size-6" />
                </a>
                <a
                    href="https://www.facebook.com/hsn.allh.thmany" className="rounded-full p-2 w-12 h-12 bg-blue-600 cursor-pointer flex items-center justify-center text-white hover:scale-90 duration-300 transition-all">
                    <FiFacebook className="size-6" />
                </a>
                <a
                    href="" className="rounded-full p-2 w-12 h-12 bg-conic from-rose-600 via-amber-600 to-rose-600  cursor-pointer flex items-center justify-center hover:scale-90 duration-300 transition-all">
                    <FaInstagram className="size-6" />
                </a>
            </div>

            <p className="mt-8">&copy; 2025 Hassanullah Usmani. All rights reserved.</p>
        </footer>
    )
}
