import Image from "next/image";
import { RxCross2 } from 'react-icons/rx';
import {FC} from "react";

const CheckoutProductCard:FC = () => {
    return (
        <div className="flex justify-center lg:justify-start">
            <div className="p-3 bg-white flex flex-col rounded-2xl drop-shadow-xl scale-95 hover:scale-100 hover:drop-shadow-2xl group transition-all duration-500">
                <div className="w-auto h-44">
                    <div className="relative w-full h-full">
                        <Image
                            layout="fill"
                            objectFit="cover"
                            draggable={false}
                            className="rounded-xl"
                            src="/images/cataloguePage/barczak.png"
                            alt="productImage"
                        />
                    </div>
                </div>
                <h3 className="text-md text-blue-5 font-medium mt-[10%] max-w-lg">
                    Зовнішня антена DVBT LOG 2-69
                </h3>
                <div className="mt-[5%]">
                    <p className="text-sm text-blue-3">Ціна:</p>
                    <p className="text-lg text-blue-5 font-medium">57 499 грн</p>
                </div>
                <RxCross2 className={"absolute bottom-2 right-2 text-blue-5 text-2xl cursor-pointer"}/>
            </div>
        </div>
    )
}
export default CheckoutProductCard;