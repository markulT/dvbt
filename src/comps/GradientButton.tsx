import {FC} from "react";

interface ButtonProps {
    title:string,
    onClick?:Function
}

const GradientButton:FC<ButtonProps> = ({title, onClick}) => {
    return (
        //@ts-ignore
        <button className={"px-16 py-2 mt-4 bg-gradient-to-l from-yellow-4 to-blue-1 text-white rounded-lg text-2xl"} onClick={onClick}>{title}</button>
    )
}
export default GradientButton