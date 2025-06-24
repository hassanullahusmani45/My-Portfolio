import { TbTargetArrow } from "react-icons/tb";
import { FaArrowUp } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import myprofile from "./assets/myprofile.png";
import { FiGithub } from "react-icons/fi";
import { useState } from "react";
function App() {
  const [menu, setMenu] = useState("aboutme");
  return (
    <div id="header" className="container">

      {/* header part */}
      <section className="flex items-center justify-between">
        <a href="#"><TbTargetArrow className="size-12 text-cyan-500" /></a>
        <div className="flex justify-center items-center font-medium text-lg text-white gap-5">
          <a href="#aboutme" className={`menu ${menu === "aboutme" ? "active" : ""}`} onClick={() => setMenu("aboutme")}>About me</a>
          <a href="#skills" className={`menu ${menu === "skills" ? "active" : ""}`} onClick={() => setMenu("skills")}>Skills</a>
          <a href="#protfolio" className={`menu ${menu === "protfolio" ? "active" : ""}`} onClick={() => setMenu("protfolio")}>Protfolio</a>
          <a href="#contactme" className={`menu ${menu === "contactme" ? "active" : ""}`} onClick={() => setMenu("contactme")}>Contact me</a>
        </div>
      </section>
      <section className="grid grid-cols-3 items-center">
        <div className=" col-span-2 md:mt-48 md:ml-20">
          <div className="text-2xl text-slate-300">Hi, I am</div>
          <div className="my-5">
            <span className='text-5xl font-bold bg-gradient-to-r from-orange-500 via-green-500 to-sky-500 bg-clip-text text-transparent'>Hassanullah Usmani</span>
          </div>
          <div className="text-2xl text-slate-100 my-1.5">full-stack developer 💖</div>
          <div className="text-2xl text-slate-100 my-1.5">in (Ministry of Finance)</div>
        </div>
        <div className="col-span-1 flex justify-center items-center overflow-hidden">
          <img className="w-full" src={myprofile}></img>
        </div>
      </section>

      {/* main part */}
      <section className="flex items-center justify-center gap-8 mt-20">
        <a href="#" className="btn-githup">GitHub<FiGithub className="size-5" /></a>
        <a href="#" className="btn-resume">Resume<FaFileDownload className="size-5" /></a>
        

      </section>

      <section id="aboutme" className="mt-20">
        <a href="#aboutme" className="font-bold text-lg text-cyan-500">{menu === "aboutme" ? "About me" : ""}</a>
        <p className="font-medium text-lg m-4">
          I’m a <b>Full-Stack Developer</b> with over <b>Tow years</b> of experience in web development. I have worked as a back-end developer at Entire Thinkers Technology and I am currently working as a Full-Stack Developer at the Ministry of Finance.
        </p>
      </section>

      <footer className="flex flex-col items-center justify-center text-white mt-10">
        <a
          href="#header"
          className=" fixed bottom-3 right-3 rounded-full p-2 w-12 h-12 bg-orange-500 cursor-pointer hover:bg-orange-400 transition duration-300 flex items-center justify-center text-white shadow-lg"
        >
          <FaArrowUp />
        </a>
        <p>&copy; 2025 Hassanullah Usmani. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
