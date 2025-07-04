import { MdStarPurple500 } from "react-icons/md";
import React from "react";
interface StarPosition {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    animationDelay: string;
    animationDuration: string;
}

const generateRandomStars = (count: number): StarPosition[] => {
    const stars: StarPosition[] = [];

    for (let i = 0; i < count; i++) {
        const useTop = Math.random() > 0.5;
        const useLeft = Math.random() > 0.5;

        const verticalPercent = `${5 + Math.random() * 85}%`;
        const horizontalPercent = `${5 + Math.random() * 85}%`;

        const animationDelay = `${(Math.random() * 2.5 + 0.5).toFixed(2)}s`;
        const animationDuration = `${(Math.random() * 1.5 + 1.5).toFixed(2)}s`;

        const pos: StarPosition = {
            animationDelay,
            animationDuration,
        };

        if (useTop) pos.top = verticalPercent;
        else pos.bottom = verticalPercent;

        if (useLeft) pos.left = horizontalPercent;
        else pos.right = horizontalPercent;

        stars.push(pos);
    }

    return stars;
};

interface StarBackgroundProps {
    count?: number;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ count = 50 }) => {
    const stars = React.useMemo(() => generateRandomStars(count), [count]);

    return (
        <>
            {stars.map((pos, idx) => (
                <MdStarPurple500
                    key={idx}
                    className="fixed text-cyan-200 opacity-70"
                    style={{
                        width: 7,
                        height: 7,
                        zIndex: -100,
                        animationName: "ping",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                        ...pos
                    }}

                />
            ))}
            <style>
                {`
          @keyframes ping {
                    0% {
                            transform: scale(1);
                            opacity: 0.7;
                        }
                    50% {
                            transform: scale(1.5);
                            opacity: 0;
                        }   
                    100% {
                            transform: scale(1);
                            opacity: 0.7;
                        }
                }
                `}
            </style>
        </>
    );
};

export default StarBackground;
