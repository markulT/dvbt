import Image from "next/image";
import {FC} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {productSliceActions} from "@/store";

const ServiceCard:FC = () => {



    return (
        <div className="p-3 bg-white w-72 h-60 md:w-96 md:h-72 flex flex-col rounded-2xl drop-shadow hover:drop-shadow-xl group transition-all duration-500 cursor-pointer">
            <div className="w-full h-full rounded-xl overflow-hidden">
                <div className="relative w-full h-full">
                    <Image
                        layout="fill"
                        objectFit="cover"
                        draggable={false}
                        src="/images/cataloguePage/barczak.png"
                        alt="productImage"
                    />
                    <div className={"absolute w-10 h-5 rounded-md bg-blue-4 bottom-2 right-2 flex justify-center items-center"}>
                        <p className={"text-xs text-center text-white mb-0.5"}>
                            21:49
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="text-blue-5 text-xl font-semibold mt-2">
                    Як прикрутити антену DVBT YAGI 21-69 / 19?
                </h3>
            </div>
        </div>
    )
}
export default ServiceCard;