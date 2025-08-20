import { useMenu } from "../../context/MenuContext"

export default function AboutMe() {
    const{menu , setMenu}=useMenu();
  return (
    <section id="aboutme" className="mt-32 pt-10">
        <a href="#aboutme" onClick={()=>setMenu("aboutme")} className={`flex justify-center items-center font-bold text-2xl ${menu === "aboutme" ? "text-cyan-500" : "text-orange-500"}`}>About Me</a>
        <div className="flex justify-center items-center text-green-500">...................................................................</div>
        <div className="flex justify-center items-center">
          <p className="font-medium text-justify m-4 my-10 lg:max-w-2/3 w-full text-slate-200 bg-gray-900 p-5 border border-slate-800 shadow-lg shadow-gray-950 rounded-xl">
            I’m a <b>Full-Stack Developer</b> with over <b>Tow years</b> of experience in web development. I have worked as a back-end developer at Entire Thinkers Technology and I am currently working as a Frontend Developer at the Ministry of Finance.
          </p>
        </div>
      </section>
  )
}
