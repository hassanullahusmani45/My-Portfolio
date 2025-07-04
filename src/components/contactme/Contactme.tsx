import ContactForm from './ContactForm'
import { useMenu } from '../../context/MenuContext'

export default function Contactme() {
    const { menu, setMenu } = useMenu()
    return (
        <section id="contactme" className="mt-32 pt-4">
            <a href="#contactme" onClick={() => setMenu("contactme")} className={`flex justify-center items-center font-bold text-2xl ${menu === "contactme" ? "text-cyan-500" : "text-orange-500"}`}>Contact Me</a>
            <div className="flex justify-center items-center text-green-500">...................................................................</div>
            <p className="bg-gradient-to-r from-green-500 to-sky-500 bg-clip-text text-transparent text-start sm:text-center font-semibold text-lg my-6">Let’s connect! Whether it’s a question or a project idea, I’m just a message away.</p>

            <ContactForm />
        </section>
    )
}
