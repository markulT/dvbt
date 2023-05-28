import React, {FC, useEffect, useState} from "react";

interface ProgressBarProps {
    containerId:string
}

const ProgressBar:FC<ProgressBarProps> = ({ containerId }) => {
    const [scrollWidth, setScrollWidth] = useState(0);

    useEffect(() => {
        const container = document.getElementById(containerId);

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            const progressWidth = ((scrollLeft + clientWidth) / scrollWidth) * 100;
            setScrollWidth(progressWidth);
        };

        container.addEventListener("scroll", handleScroll);

        // Initialize scrollWidth state with the current scroll position
        const initialProgressWidth = ((container.scrollLeft + container.clientWidth) / container.scrollWidth) * 100;
        setScrollWidth(initialProgressWidth);

        return () => {
            container.removeEventListener("scroll", handleScroll);
        };
    }, [containerId]);

    return (
        <div className="relative h-3 rounded-md bg-white drop-shadow-xl shadow-blue-5 ">
            <div
                className="absolute rounded-md top-0 left-0 h-full bg-blue-4 transition-transform duration-500"
                style={{ width: `${scrollWidth}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;
