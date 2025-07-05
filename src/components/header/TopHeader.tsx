import { TbTargetArrow } from "react-icons/tb";
import { useMenu } from "../../context/MenuContext";
import { TiThMenuOutline } from "react-icons/ti";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";

export default function TopHeader() {
    const { menu, setMenu } = useMenu();
    const isMobile = useMediaQuery('(max-width:640px)');
    const [showMenu, setShowMenu] = useState(false);
    return (
        <section className="flex items-start justify-between sm:items-center">
            <a href="#" title="hassanullah usmani portfolio"><TbTargetArrow className="size-12 text-cyan-500 hover:scale-95 transition-all" /></a>



            <div>
                {
                    isMobile ? (
                        <div className="flex flex-col  md:justify-center md:items-center  sm:flex-row sm:items-end font-medium text-lg text-white gap-2 sm:gap-5">
                            <div className="relative">
                                <TiThMenuOutline onClick={() => setShowMenu(true)} className="size-8 cursor-pointer text-cyan-700 hover:text-orange-400 transition-all" />
                                {showMenu && (
                                    <div className="absolute transition-all right-0 bg-gray-900 border-x rounded-lg px-6 py-4 space-y-3">
                                        <a href="#aboutme" className={`menu ${menu === "aboutme" ? "active" : ""}`} onClick={() => setMenu("aboutme")}>About me</a>
                                        <a href="#skills" className={`menu ${menu === "skills" ? "active" : ""}`} onClick={() => setMenu("skills")}>Skills</a>
                                        <a href="#experience" className={`menu ${menu === "experience" ? "active" : ""}`} onClick={() => setMenu("experience")}>Experience</a>
                                        <a href="#projects" className={`menu ${menu === "projects" ? "active" : ""}`} onClick={() => setMenu("projects")}>Projects</a>
                                        <a href="#contactme" className={`menu ${menu === "contactme" ? "active" : ""}`} onClick={() => setMenu("contactme")}>Contact me</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col  md:justify-center md:items-center  sm:flex-row sm:items-end font-medium text-lg text-white gap-2 sm:gap-5">
                            <a href="#aboutme" className={`menu ${menu === "aboutme" ? "active" : ""}`} onClick={() => setMenu("aboutme")}>About me</a>
                            <a href="#skills" className={`menu ${menu === "skills" ? "active" : ""}`} onClick={() => setMenu("skills")}>Skills</a>
                            <a href="#experience" className={`menu ${menu === "experience" ? "active" : ""}`} onClick={() => setMenu("experience")}>Experience</a>
                            <a href="#projects" className={`menu ${menu === "projects" ? "active" : ""}`} onClick={() => setMenu("projects")}>Projects</a>
                            <a href="#contactme" className={`menu ${menu === "contactme" ? "active" : ""}`} onClick={() => setMenu("contactme")}>Contact me</a>
                        </div>
                    )
                }

            </div>


        </section>
    )
}
