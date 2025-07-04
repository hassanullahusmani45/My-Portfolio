import { TbTargetArrow } from "react-icons/tb";
import { useMenu } from "../../context/MenuContext";

export default function TopHeader() {
    const { menu, setMenu } = useMenu();
    return (
        <section className="flex items-start justify-between sm:items-center">
            <a href="#" title="hassanullah usmani portfolio"><TbTargetArrow className="size-12 text-cyan-500 hover:scale-95 transition-all" /></a>
            <div className="flex flex-col  md:justify-center md:items-center  sm:flex-row sm:items-end font-medium text-lg text-white gap-5">
                <a href="#aboutme" className={`menu ${menu === "aboutme" ? "active" : ""}`} onClick={() => setMenu("aboutme")}>About me</a>
                <a href="#skills" className={`menu ${menu === "skills" ? "active" : ""}`} onClick={() => setMenu("skills")}>Skills</a>
                <a href="#experience" className={`menu ${menu === "experience" ? "active" : ""}`} onClick={() => setMenu("experience")}>Experience</a>
                <a href="#projects" className={`menu ${menu === "projects" ? "active" : ""}`} onClick={() => setMenu("projects")}>Projects</a>
                <a href="#contactme" className={`menu ${menu === "contactme" ? "active" : ""}`} onClick={() => setMenu("contactme")}>Contact me</a>
            </div>
        </section>
    )
}
