import Image from "next/image";
import ProductCard from "@/comps/ProductCard";
import Navbar from "@/comps/Navbar";
import dynamic from "next/dynamic";
import GradientButton from "@/comps/GradientButton";
import {useState} from "react";

const MapWithNoSsr = dynamic(() => import('@/components/utilMap'), {ssr: false})
// aa
const Determination = () => {

    const [edit, setEdit] = useState<boolean>(false)

    return (
        <div className={"bg-white-bg w-full h-full"}>
            <Navbar/>
            <main>
                <article>
                    <section className={"md:mx-28 mx-4 flex lg:flex-row flex-col items-center"}>
                        <div className={"flex flex-col py-[10%] lg:w-1/2 w-full"}>
                            <h1 className={"text-blue-5 sm:text-5xl text-4xl font-bold "}>
                                Як визначити яку <a className={"text-yellow-4"}>антену</a> мені потрібно?
                            </h1>
                            <p className={"text-blue-5 sm:text-xl text-lg font-medium  mt-2"}>
                                Для цього вам потрібно буде дозволити нам обробляти вашу геолокацію, за рахунок неї ми
                                визначимо відстань до найближчої вишки,
                                та підберемо найкращу антену саме для вас. Якщо ж ви захочете обрати вашу локацію
                                самостійно - достатньо просто тицьнути на
                                кнопку <a className={"font-bold"}>“Виправити”</a> та обрати на мапі точку. Після того,
                                як ми визначили яку антену вам потрібно - вона з’явиться знизу,
                                та ви одразу зможете її придбати
                            </p>
                        </div>
                        <div className={"lg:basis-1/2 w-[50vw] h-[50vh] relative"}>
                            <Image
                                layout="fill"
                                objectFit="cover"
                                draggable={false}
                                className={"rounded-xl"}
                                fill
                                src="/images/determinationPage/location.png"
                            />
                        </div>
                    </section>
                    <section>
                        <div className={"flex items-center flex-col"}>
                            <h2 className={"text-blue-5 font-bold text-3xl"}>
                                Визначення
                            </h2>
                            <div className={"flex w-[100%] px-10 h-[50vh]"}>
                                <div className={"basis-1/2 flex flex-col items-center justify-end"}>
                                    <span className={"text-blue-6 text-2xl"}>Тут якийсь шлак</span>
                                    <div>
                                        <GradientButton title={"Визначити"} onClick={(e) => {
                                            console.log('click')
                                            setEdit(prev => !prev)
                                        }
                                        }/>
                                    </div>
                                </div>
                                <div className={'basis-1/2 grow-0'}>
                                    <MapWithNoSsr {...{edit: edit}}/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={"mx-28 mt-[5%] pb-[5%] flex items-center flex-col "}>
                        <h2 className={"text-blue-5 font-bold text-3xl"}>
                            Ми знайшли кілька антен для вас
                        </h2>
                        <div className={"flex justify-between gap-4 mt-[2%]"}>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>


                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}
export default Determination;