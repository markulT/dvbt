import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import {FC} from "react";

interface ExpandableInput {
    label:string,
    options:string[]
}

const ExpandableInput:FC<ExpandableInput> = ({ label, options }) => {
    return (
        <div className="w-full flex flex-col px-3 mb-6 md:mb-0">

            <label className="tracking-wide text-blue-5 text-xs font-bold mb-2" htmlFor="grid-state">
                {label}
            </label>
            <div className="relative">
                <select className="flex w-full text-blue-5 text-blue-5 py-3 px-4 rounded focus:bg-white" id="grid-state">
                    {options.map((option) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
export default ExpandableInput;