import myprofile from '../../assets/myprofile.png'
import TypewriterComponent from 'typewriter-effect'
import BgAnimation from '../../util/BgAnimation'

export default function BottomHeader() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-3 items-center">

            <div className="col-span-2 mx-10 md:mt-40 md:ml-10">

                <div className="text-2xl text-slate-300  animate-pulse">Hi, I am</div>
                <div className="my-5">
                    <span className='text-5xl font-bold bg-gradient-to-r from-orange-500 via-green-500 to-sky-500 bg-clip-text text-transparent'>Hassanullah Usmani</span>
                </div>

                <div className="text-2xl text-slate-100 my-1.5 min-h-[4rem] whitespace-pre-line">
                    <TypewriterComponent
                        options={{
                            strings: ['full-stack developer 💖\nin (Ministry of Finance).'],
                            autoStart: true,
                            loop: true,
                            delay: 30,
                            deleteSpeed: 20,
                            cursor: '',
                        }}
                    />
                </div>
            </div>
            <div className="col-span-1 flex justify-center items-center overflow-hidden md:mt-14">
                <div className="relative w-full">
                    <BgAnimation />
                    <img className="w-full block" src={myprofile} alt="profile" />
                    <div className="absolute bottom-0 left-0 right-0 w-full h-8 bg-gradient-to-t from-slate-800 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    )
}
