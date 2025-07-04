import { FiGithub } from "react-icons/fi";
import { LuFileDown } from "react-icons/lu";
import MyResume from '../../assets/ministry_logo.png'

export default function BtnLinks() {
    return (
        <section className="flex items-center justify-center gap-8 mt-20">
            <a href="#" className="btn-githup">GitHub<FiGithub className="size-5" /></a>
            <a
                href={MyResume}
                download="MyResume.png"
                className="btn-resume">
                Resume<LuFileDown className="size-5" />
            </a>
        </section>
    )
}
