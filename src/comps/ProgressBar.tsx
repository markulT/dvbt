import React, {FC, useEffect, useRef, useState} from "react";

interface ProgressBarProps {
    containerId:string
}

const ProgressBar:FC<ProgressBarProps> = ({ containerId }) => {
    const [isDown, setIsDown] = useState<boolean>(false)
    const [scrollWidth, setScrollWidth] = useState(0);
    const startX = useRef()
    const scrollLeft = useRef()

    function handleMouseMove(e, slider) {
        if(!slider.classList.contains("slider_active")) {return}
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft

        const walk = (x - startX.current) * 1
        console.log(scrollLeft.current - walk)
        slider.scrollLeft = scrollLeft.current - walk
    }
    function handleMouseDown(e, slider) {
        // slider.classList.add('cursor-grabbing')
        slider.classList.add("slider_active")
        scrollLeft.current = slider.scrollLeft
        startX.current = e.pageX
        // setIsDown(true)
    }

    function handleLeave(e, slider) {
        slider.classList.remove("slider_active")
        // setIsDown(false)
    }
    function handleUp(e, slider) {
        // setIsDown(false)
        slider.classList.remove("slider_active")
    }

    useEffect(()=>{
        console.log(isDown)
    }, [isDown])

    useEffect(() => {
        const container = document.getElementById(containerId);

        const handleScroll = () => {
            const { scrollLeft, scrollWidth, clientWidth } = container;
            const progressWidth = ((scrollLeft + clientWidth) / scrollWidth) * 100;
            setScrollWidth(progressWidth);
        };

        container.addEventListener("scroll", handleScroll);
        container.addEventListener("mousedown", (e)=>{
            handleMouseDown(e, container)
        })
        container.addEventListener("mouseup", (e)=>{
            handleUp(e, container)
        })
        container.addEventListener("mousemove", (e)=>{
            handleMouseMove(e, container)
        })
        container.addEventListener("mouseleave", (e)=>{
            handleLeave(e,container)
        })


        // Initialize scrollWidth state with the current scroll position
        const initialProgressWidth = ((container.scrollLeft + container.clientWidth) / container.scrollWidth) * 100;
        setScrollWidth(initialProgressWidth);

        return () => {
            container.removeEventListener("scroll", handleScroll);
            container.removeEventListener("mousedown", (e)=>{
                handleMouseDown(e,container)
            })
            container.removeEventListener("mouseup", (e)=>{
                handleUp(e,container)
            })
            container.removeEventListener("mousemove", (e)=>{
                handleMouseMove(e,container)
            })
            container.removeEventListener("mouseleave", (e)=>{
                handleLeave(e,container)
            })
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
