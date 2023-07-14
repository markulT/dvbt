import {FC} from "react";
import Image from "next/image";
import {MdGroup, MdGroups2, MdPerson} from "react-icons/md";
import CounterAnimation from "@/comps/CounterAnimation";


const MapChunk:FC = () => {
    return (
        <section className={'flex flex-col items-center mt-28 h-screen lg:mx-28 '}>
            <div className={'mb-4 mx-10'}>
                <h2 className={"md:text-3xl text-xl text-blue-5 max-w-xl text-center font-medium"}>Діяльність
                    назва компанії на території України</h2>
            </div>
            <div className="relative w-full h-full transition-all duration-500">
                <div className="w-full h-full">
                    <Image draggable={false} src="/images/mainPage/map2.0min.png" alt="Your Image" layout="fill"
                           loading={"lazy"}
                           objectFit="contain" className={"rounded-2xl"}/>
                </div>
            </div>
            <div className={'flex w-full md:justify-evenly flex-col gap-y-4  md:flex-row'}>
                <div className={"text-blue-5 text-center flex flex-col items-center"}>
                    <MdGroups2 className={"text-5xl"}/>
                    <CounterAnimation endValue={5000} duration={1}/>
                    <p className={"text-xl text-center"}>антен</p>
                </div>
                <div className={"text-blue-3 text-center flex flex-col items-center"}>
                    <MdGroup className={"text-5xl"}/>
                    <CounterAnimation endValue={3000} duration={3}/>
                    <p className={"text-xl text-center"}>антен</p>
                </div>
                <div className={"text-blue-1 text-center flex flex-col items-center"}>
                    <MdPerson className={"text-5xl"}/>
                    <CounterAnimation endValue={1000} duration={7}/>
                    <p className={"text-xl text-center"}>антен</p>
                </div>
            </div>
        </section>
    )
}
export default MapChunk