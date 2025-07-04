import { FaReact } from "react-icons/fa6";
import { SiGitlab, SiLaragon, SiMysql, SiNetlify, SiPostman, SiRedux, SiSupabase, SiSwiper } from "react-icons/si";
import { SiTailwindcss, SiReacthookform, SiZod, SiMui } from "react-icons/si";
import { FaGitAlt, FaGithub, FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GiElephant } from "react-icons/gi";
import { IoLogoFigma, IoLogoLaravel } from "react-icons/io5";
import { DiHtml53dEffects } from "react-icons/di";
import { FcLinux } from "react-icons/fc";
import Skill from './Skill'
import { useMenu } from "../../context/MenuContext";
import { TbApi, TbFileTypeSql } from "react-icons/tb";

export default function Skills() {

    const {menu ,setMenu}=useMenu();
    return (
        <section id="skills" className="my-32 pt-10">
            <a href="#skills" onClick={()=>setMenu("skills")} className={`flex justify-center items-center text-2xl font-bold ${menu === "skills" ? "text-cyan-500" : "text-orange-500"}`}>Skills</a>
            <div className="flex justify-center items-center text-green-500">...................................................................</div>
            <div className="flex items-center justify-center text-slate-300 text-sm gap-16 mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 items-center text-slate-300 text-sm gap-16">
                    <Skill >
                        <div className="flex justify-center items-center mb-6 text-lg font-medium text-white">Frotend</div>
                        <div className=" grid grid-cols-3 gap-4 my-3">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md py-1.5 gap-1.5"><FaReact className="size-8 text-sky-400" />React</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md py-1.5 gap-1.5"><SiRedux className="size-7 text-purple-500" />Redux</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md py-1.5 gap-1.5"><SiZod className="size-7 text-blue-500" />Zod</div>
                        </div>
                        <div className=" grid grid-cols-3 gap-4 my-3">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><FaBootstrap className="size-8 text-green-500" />Bootstrap</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md py-1.5 gap-1.5"><FaHtml5 className="size-6 text-blue-400" />HTML5</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md py-1.5 gap-1.5"><FaCss3 className="size-5 text-amber-500" />CSS3</div>
                        </div>
                        <div className="flex justify-center gap-4 my-3">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><SiTailwindcss className="size-6 text-sky-400" />Tailwindcss</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><SiReacthookform className="size-6  text-pink-500" />React Hook Form</div>
                        </div>
                        <div className="flex justify-center gap-4 my-3">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><IoLogoJavascript className="size-6 text-yellow-500" />JavaScript</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><SiTypescript className="size-5 text-cyan-500" />TypeScript</div>
                        </div>
                        <div className="flex justify-center gap-4 my-3">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><SiMui className="size-5 text-blue-500" />MUI</div>
                        </div>
                    </Skill >
                    <Skill >
                        <div className="flex justify-center items-center mb-6 text-lg font-medium text-white">Backend</div>
                        <div className=" grid grid-cols-3 gap-4 my-5">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md py-1.5 gap-1.5"><IoLogoLaravel className="size-8 text-red-500" />Laravel</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md py-1.5 gap-1.5"><GiElephant className="size-7 text-indigo-500" />PHP</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md py-1.5 gap-1.5"><SiSupabase className="size-5 text-green-500" />Supabase</div>
                        </div>

                        <div className="flex justify-center gap-4 my-5">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-5 py-1.5 gap-1.5"><SiMysql className="size-8 text-cyan-500" />MySQL</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-5 py-1.5 gap-1.5"><TbApi className="size-8 text-blue-400" />Restful-API</div>
                        </div>
                        <div className="flex justify-center gap-4 my-5">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><DiHtml53dEffects className="size-7 text-sky-500" />Blueprint</div>
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><TbFileTypeSql className="size-8 text-rose-500" />SQL</div>
                        </div>
                        <div className="flex justify-center gap-4 my-5">
                            <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><SiLaragon className="size-6 text-sky-300" />Laragon</div>
                        </div>
                    </Skill >
                </div>
            </div>
            <div className="flex justify-center items-center text-slate-300 text-sm mt-16">
                <Skill >
                    <div className="flex justify-center items-center mb-6 text-lg font-medium text-white">Others</div>
                    <div className=" grid grid-cols-3 gap-4 my-5">
                        <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><FaGitAlt className="size-8 text-red-500" />GIt</div>
                        <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><FaGithub className="size-7 text-white-500" />Github</div>
                        <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><SiGitlab className="size-5 text-orange-500" />GitluP</div>
                    </div>

                    <div className="flex justify-center gap-4 my-5">
                        <div className="flex items-center justify-center border border-slate-400 rounded-md px-5 py-1.5 gap-1.5"><FcLinux className="size-8 text-yellow-500" />Linux</div>
                        <div className="flex items-center justify-center border border-slate-400 rounded-md px-5 py-1.5 gap-1.5"><SiPostman className="size-6 text-orange-700" />Postman</div>
                    </div>
                    <div className="flex justify-center gap-4 my-5">
                        <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><SiNetlify className="size-7 text-sky-500" />Netlify</div>
                        <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><IoLogoFigma className="size-7 text-red-500" />Figma</div>
                    </div>
                    <div className="flex justify-center gap-4 my-3">
                        <div className="flex items-center justify-center border border-slate-400 rounded-md px-3 py-1.5 gap-1.5"><SiSwiper className="size-6 text-orange-700" />SwiperJS</div>
                    </div>
                </Skill >
            </div>


        </section>
    )
}
