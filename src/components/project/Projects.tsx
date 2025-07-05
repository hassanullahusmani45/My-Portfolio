import ArchiveMIS from '../../assets/ArchiveMIS.png'
import Tekup from '../../assets/Tekup.png'
import BMS from '../../assets/BMS.png'
import OES from '../../assets/OES.png'
import SpinzarMIS from '../../assets/SpinzarMIS.png'
import OnlineStore from '../../assets/OnlineStore.png'
import Project from './Project'
import { useMenu } from '../../context/MenuContext'

export default function Projects() {
    const { menu, setMenu } = useMenu()
    return (
        <section id="projects" className="mt-20 pt-10">
            <a href="#projects" onClick={() => setMenu("projects")} className={`flex justify-center items-center font-bold text-2xl ${menu === "projects" ? "text-cyan-500" : "text-orange-500"}`}>Projects</a>
            <div className="flex justify-center items-center text-green-500">...................................................................</div>
            <p className="bg-gradient-to-r from-orange-500 via-green-500 to-sky-500 bg-clip-text text-transparent  text-center font-semibold text-lg my-4">I have worked on a wide range of projects. From web applications to MIS. Here are some of my projects.</p>

            <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 space-y-10 md:space-y-0 md:gap-3  lg:gap-6 xl:gap-10 mx-auto w-full sm:w-5/6 my-10">
                <Project
                    coverImage={ArchiveMIS}
                    technologies={['React', 'Redux-Toolkit', 'MUI', 'Zod', 'ChartJS', 'SweetAlert', 'TailwindCSS', 'i18Next', 'Axios', 'Rect-HookForm', 'ReactSelect', 'React-Multi-Date-Picker', 'Gitlab']}
                    projectName="Archive MIS"
                    date={"2025-01-05"}
                    isPublic={false}
                    description="Archive MIS is a digital document management system designed to store, organize, accessablity, and search records efficiently. Built with React, Redux Toolkit,TailwindCSS and React-Multi-Date-Picker for three calender. It offers a responsive and user-friendly interface. It supports form validation using React Hook Form and Zod, along with features like charts, alerts, and multi-language support. Ideal for government and enterprise-level document archiving needs."
                />

                <Project
                    coverImage={Tekup}
                    technologies={['React', 'Tailwindcss', 'SwiperJS', 'Axios', 'SweetAlert', 'Githup', 'Laravel API', 'Sanctum', 'Vite']}
                    projectName="Tekup"
                    date={"2024-12-16"}
                    isPublic={true}
                    viewCode='https://github.com/hassanullahusmani45/Tekup'
                    viewLive='https://hassanullahusmani-portfolio.netlify.app'
                    description="Tekup is a modern web platform developed with React and Laravel API, focused on delivering secure and dynamic content. It features a responsive UI with TailwindCSS, smooth interactions via SwiperJS, and user authentication using Laravel Sanctum. The platform displays articles created by the Tekup team and includes features like filtering and team member profiles. Tools like Axios and SweetAlert enhance user experience and interactivity."
                />
                <Project
                    coverImage={BMS}
                    technologies={['TailwindCSS', 'JavaScript', 'CSS', 'ChartJS', 'HTML', 'CSS-Grid', 'Flex-box', 'Heroicons']}
                    projectName="BMS"
                    date={"2024-6-04"}
                    isPublic={true}
                    description="The design of BMS (Border Management System) is modern and fully responsive, built as a web-based interface to manage and visualize border-related data. Developed using TailwindCSS, JavaScript, and HTML with a CSS Grid layout, it ensures a clean and adaptable user experience. The system integrates ChartJS to present real-time analytics clearly and effectively. BMS is built to support administrative tasks and enhance operational efficiency in border monitoring and control."
                />
                <Project
                    coverImage={OES}
                    technologies={['Laravel', 'JQuery', 'Bootstrap', 'PHP', 'AJAX', 'SweetAlert', 'CSS', 'MySQL']}
                    projectName="Online Examination System"
                    date={"2024-04-23"}
                    isPublic={true}

                    description="The Online Examination System is a web-based platform developed with Laravel, PHP, MySQL, and jQuery, designed for managing digital exams. It supports both multiple-choice and descriptive questions. Multiple-choice questions are automatically graded by the system, while descriptive answers are manually reviewed by teachers. The system includes three roles: Admin, Teacher, and Student. Although the system was originally developed, I extended it by implementing the descriptive question module and dynamic grading functionality."
                />
                <Project
                    coverImage={SpinzarMIS}
                    technologies={['Laravel', 'PHP', 'MySQL', 'AJAX', 'JQuery', 'Bootstrap', 'SweetAlert', 'CSS']}
                    projectName="Spinzer MIS"
                    date={"2024-04-23"}
                    isPublic={false}
                    description="Spinzer MIS is a Management Information System developed for a government organization by the Entire Thinkers Technology team. Built using Laravel, PHP, MySQL, and Bootstrap, the system handles internal operations such as data entry, reporting, and user management. As an intern, I contributed to both frontend and backend tasks — implementing AJAX features, enhancing UI with jQuery and Bootstrap, and improving user feedback using SweetAlert. This project provided valuable hands-on experience working with real-world data and collaborating in a professional software development environment."
                />
                <Project
                    coverImage={OnlineStore}
                    technologies={['Laravel', 'JQuery', 'Bootstrap', 'PHP', 'AJAX', 'SweetAlert', 'CSS', 'MySQL', 'OTP',]}
                    projectName="Online Store"
                    date={"2023-07-02"}
                    isPublic={true}
                    description="Online Store is a dynamic e-commerce platform developed as my final university project using Laravel, PHP, MySQL, and Bootstrap. It includes features such as product listing, cart management, order placement, and real-time validation with AJAX and SweetAlert. The system also integrates OTP (One-Time Password) for secure customer authentication. I focused on both frontend and backend development to deliver a functional and user-friendly shopping experience."
                />
            </div>
        </section>
    )
}
