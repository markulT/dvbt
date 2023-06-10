import {FC} from "react";
import {randomUUID} from "crypto";


interface RadioInputProps {
    value:any,
    title:string,
    setValue:Function,
    name:string
}

const RadioInput:FC<RadioInputProps> = ({value, setValue, title, name}) => {
    let random = ''
    if(window) {
        random = window.crypto.randomUUID()
    }
    return (
        <div>
            <input type="radio"  name={name} id={random} value={value} onChange={()=>{
                setValue(value)
            }}
                   className={"h-5 w-5 checked:bg-yellow-1 cursor-pointer"}
            />
            <label className={"text-xl  ml-2 cursor-pointer"} htmlFor={random}>{title}</label>
        </div>
    )
}
export default RadioInput