import { FiGithub } from "react-icons/fi";
import { LuFileDown } from "react-icons/lu";
import Hassanullahusmani_Resume from '../../assets/Hassanullahusmani_Resume.pdf'

export default function BtnLinks() {
    return (
        <section className="flex items-center justify-center gap-8 mt-20">
            <a href="https://github.com/hassanullahusmani45" className="btn-githup">GitHub<FiGithub className="size-5" /></a>
            <a
                href={Hassanullahusmani_Resume}
                download="Hassanullahusmani_Resume.pdf"
                className="btn-resume">
                Resume<LuFileDown className="size-5" />
            </a>
        </section>
    )
}
