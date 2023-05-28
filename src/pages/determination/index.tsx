import Image from "next/image";
import ProductCard from "@/comps/ProductCard";

const Determination = () => {
    return (
        <div className={"bg-white-bg w-full h-full"}>
            <main>
                <section className={"mx-28 flex"}>
                    <div className={"flex flex-col py-[10%] w-1/2"}>
                        <h1 className={"text-blue-5 text-5xl font-bold "}>
                            Як визначити яку <a className={"text-yellow-4"}>антену</a> мені потрібно?
                        </h1>
                        <p className={"text-blue-5 text-xl font-medium  mt-2"}>
                            Для цього вам потрібно буде дозволити нам обробляти вашу геолокацію, за рахунок неї ми визначимо відстань до найближчої вишки,
                            та підберемо найкращу антену саме для вас. Якщо ж ви захочете обрати вашу локацію самостійно - достатньо просто тицьнути на
                            кнопку <a className={"font-bold"}>“Виправити”</a> та обрати на мапі точку. Після того, як ми визначили яку антену вам потрібно - вона з’явиться знизу,
                            та ви одразу зможете її придбати
                        </p>
                    </div>
                    <div className={"w-1/2"}>
                        <div className={"w-full h-full relative"}>
                            <Image
                                layout="fill"
                                objectFit="contain"
                                draggable={false}
                                className={"rounded-xl"}
                                fill
                                src="/images/determinationPage/location.png"
                            />
                        </div>
                    </div>
                </section>
                <section >
                    <div className={"flex items-center flex-col"}>
                        <h2 className={"text-blue-5 font-bold text-3xl"}>
                            Визначення
                        </h2>
                        <h2 className={"text-blue-5 text-xl italic"}>
                            Тут мапу тре вклинити
                        </h2>
                        {/*<UtilMap/>*/}
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
            </main>
        </div>
    )
}
export default Determination;