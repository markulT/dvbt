import Image from "next/image";
import {FC} from "react";

const ProductCard:FC = () => {
    return (
        <div className="flex">
            <div className="p-3 bg-white flex flex-col rounded-2xl drop-shadow-xl hover:drop-shadow-xl group hover:scale-105 transition-transform duration-500 cursor-pointer">
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
                {/*<div className=" group-hover:flex hidden justify-between gap-2 mt-[5%]">*/}
                {/*    <button className="bg-gradient-to-r from-blue-2 to-blue-1 w-1/2 py-2 rounded-md*/}
                {/*    hover:scale-105 transition-all duration-500">*/}
                {/*        Придбати*/}
                {/*    </button>*/}
                {/*    <button className="border-blue-2 border-4 w-1/2 rounded-md text-blue-2 py-2 font-semibold*/}
                {/*    hover:scale-105 transition-all duration-500">*/}
                {/*        Детальніше*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}
export default ProductCard