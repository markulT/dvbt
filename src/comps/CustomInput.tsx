import {FC} from "react";
import {icon} from "leaflet";
import {BiSearch} from "react-icons/bi";

interface CustomInputProps {
    icon:FC;
    placeholder:string
}

const CustomInput:FC<CustomInputProps> = ({ icon: FC, placeholder }) => {
    return (
        <div className="w-2/3 flex justify-end items-center bg-white relative rounded-lg">
            {/*@ts-ignore*/}
            {icon && <BiSearch className="text-blue-5" />}
            <input
                placeholder="Pesquisar"
                className="text-blue-5 rounded-lg p-3 w-full"
            />

        </div>
    );
}
export default CustomInput
