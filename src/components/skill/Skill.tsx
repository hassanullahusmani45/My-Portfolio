import { motion, useMotionValue, useTransform } from "framer-motion";
import useMediaQuery from '@mui/material/useMediaQuery';

type childrenProps = {
    children: React.ReactNode;
};

const Skill = ({ children }: childrenProps) => {
    const isMobile = useMediaQuery('(max-width:640px)');


    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [70, -70]);
    const rotateY = useTransform(x, [100, -100], [-70, 70]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();

        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateAmountX = -(offsetY - centerY) / 8;
        const rotateAmountY = (offsetX - centerX) / 8;

        x.set(rotateAmountY);
        y.set(rotateAmountX);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (

        <div>
            {
                isMobile ? (
                    <div className="sm:w-[400px] h-[360px] bg-gradient-to-tr from-sky-900 to-slate-800 rounded-xl shadow-md shadow-sky-800 overflow-hidden p-6">
                        {children}
                    </div>
                ) : (
                    <motion.div
                        className="sm:w-[400px] h-[360px] bg-gradient-to-tr from-sky-900 to-slate-800 rounded-xl shadow-md shadow-sky-800 hover:shadow-lg hover:shadow-sky-900 overflow-hidden cursor-grab p-6"
                        style={{ x, y, rotateX, rotateY, z: 100 }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        drag
                        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                        dragElastic={0.5}
                    >
                        {children}
                    </motion.div>
                )
            }

        </div>

    );
};

export default Skill;