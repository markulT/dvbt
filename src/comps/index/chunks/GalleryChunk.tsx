import {FC} from "react";
import Image from "next/image";
import {useRouter} from "next/router";


const GalleryChunk:FC = () => {
    const router = useRouter()
    return (
        <section className={"lg:mx-28 mt-40 mx-10"}>
            <div className={"bg-gradient-to-r from-blue-4 via-blue-3 to-blue-5 rounded-3xl p-4 flex flex-row "}>
                <div className={"lg:ml-20 md:mx-10 lg:w-1/2 md:my-36 my-12 "}>
                    <div
                        className={"flex flex-col justify-center items-center md:justify-start md:items-start"}>
                        <h3 className={"md:text-7xl text-4xl text-center md:text-start font-semibold max-w-lg text-white"}>Які
                            є види антен?</h3>
                        <p className={"md:text-2xl text-md sm:text-lg text-center md:text-start md:max-w-lg text-white my-4 "}>Для
                            того, щоб дізнатись які є види антен вам потрібно ознайомитись із нашим каталогом,
                            там детально прописані всі характеристики, ціни, час доставки та ціна
                            встановлення</p>
                        <button
                            className={"bg-gradient-to-r from-blue-1 to-blue-2 md:py-4 py-3 px-16 rounded-xl text-lg md:text-2xl font-medium text-white drop-shadow-2xl " +
                                "transition-all duration-500 hover:scale-105 md:hover:translate-x-1"}  onClick={()=>{router.push("/catalogue")}}>Каталог
                        </button>
                    </div>
                </div>

                <div className={"lg:w-1/2 hidden lg:flex justify-end"}>
                    <div className={"grid grid-cols-2 grid-rows-4 rounded-3xl gap-4 w-full"}>
                        <div className="relative w-full h-full row-span-1">
                            <div className="w-full h-full">
                                <Image draggable={false}
                                       src="/images/mainPage/typesOfAntennasSection/antenna2.jpg"
                                       alt="Your Image" layout="fill" objectFit="cover"
                                       loading={"lazy"}
                                       className={"rounded-2xl"}/>
                            </div>
                        </div>
                        <div className="relative w-full h-full row-span-2">
                            <div className="w-full h-full">
                                <Image draggable={false}
                                       src="/images/mainPage/typesOfAntennasSection/antenna3.jpg"
                                       alt="Your Image" layout="fill" objectFit="cover"
                                       loading={"lazy"}
                                       className={"rounded-2xl"}/>
                            </div>
                        </div>
                        <div className="relative w-full h-full row-span-2">
                            <div className="w-full h-full">
                                <Image draggable={false}
                                       src="/images/mainPage/typesOfAntennasSection/antenna5.jpg"
                                       alt="Your Image" layout="fill" objectFit="cover"
                                       className={"rounded-2xl"}/>
                            </div>
                        </div>
                        <div className="relative w-full h-full">
                            <div className="w-full h-full">
                                <Image draggable={false}
                                       src="/images/mainPage/typesOfAntennasSection/antenna6.jpg"
                                       alt="Your Image" layout="fill" objectFit="cover"
                                       loading={"lazy"}
                                       className={"rounded-2xl"}/>
                            </div>
                        </div>
                        <div className="relative w-full h-full row-span-1">
                            <div className="w-full h-full">
                                <Image draggable={false}
                                       src="/images/mainPage/typesOfAntennasSection/antenna4.jpg"
                                       alt="Your Image" layout="fill" objectFit="cover"
                                       loading={"lazy"}
                                       className={"rounded-2xl"}/>
                            </div>
                        </div>
                        <div className="relative w-full h-full">
                            <div className="w-full h-full">
                                <Image draggable={false}
                                       src="/images/mainPage/typesOfAntennasSection/antenna7.jpg"
                                       alt="Your Image" layout="fill" objectFit="cover"
                                       className={"rounded-2xl"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default GalleryChunk