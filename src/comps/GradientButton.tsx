import {FC} from "react";

interface ButtonProps {
    title:string,
    onClick?:Function
}

const GradientButton:FC<ButtonProps> = ({title, onClick}) => {
    return (
        //@ts-ignore
        <button className={"px-8 md:px-16 py-2 md:py-3 mt-4 bg-gradient-to-l from-yellow-4 to-blue-1 text-white rounded-lg md:text-2xl hover:scale-105 duration-500 transition-all"} onClick={onClick}>{title}</button>
    )
}
export default GradientButton
