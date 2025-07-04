import CustomizedTimeline from '../../util/CustomizedTimeline'
import { useMenu } from '../../context/MenuContext'

export default function Experience() {
    const { menu, setMenu } = useMenu();
    return (
        <section id="experience" className="mt-32 pt-10">
            <a href="#experience" onClick={() => setMenu("experience")} className={`flex justify-center items-center font-bold text-2xl ${menu === "experience" ? "text-cyan-500" : "text-orange-500"}`}>Experience</a>
            <div className="flex justify-center items-center text-green-500 mb-20">...................................................................</div>
            <CustomizedTimeline />
        </section>
    )
}
