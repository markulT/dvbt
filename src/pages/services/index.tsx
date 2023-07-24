import Image from "next/image";
import ServiceCard from "@/comps/ServiceCard";
import ProgressBar from "@/comps/ProgressBar";
import {FC} from "react";
import Navbar from "@/comps/Navbar";
import Head from "next/head";

const Services: FC = () => {
    return (
        <div className="bg-white-bg w-full min-h-screen">
            <Head>
                <title>My T2 - Посібники</title>
                <meta name="description" content="Вивчайте як встановити та ремонтувати антени DVB-T2 разом з My T2 - провідним постачальником антен та передатчиків. Отримайте доступ до кращих туторіалів, щоб покращити якість сигналу та отримати надійне ефірне телебачення. З нашими детальними посібниками ви зможете швидко та легко встановити антену та забезпечити стабільне з'єднання з найвищою продуктивністю. Вивчайте професійні техніки та отримуйте розуміння процесу налаштування та підтримки вашої антени DVB-T2. Зробіть крок до високоякісного ефірного телебачення разом з My T2." />
                <meta name="keywords" content="DVB-T2 антени, DVB-T2 передатчики, ефірні антени, ефірне телебачення, антени для цифрового телебачення, передатчики для ефірного телебачення"/>
            </Head>
            <Navbar />
            <main>
                <article>
                    <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28">
                        <h1 className="lg:text-4xl text-2xl text-blue-5 font-bold ">Як прикрутити антену?</h1>
                        <div id="scroll-container-1" className="flex overflow-x-scroll pb-4 mt-4 hide-scroll-bar ">
                            <div className="flex gap-4">
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                <ServiceCard/>
                                {/*<div*/}
                                {/*    className="p-3 bg-white w-96 h-72 flex flex-col rounded-2xl drop-shadow hover:drop-shadow-xl group transition-all duration-500 cursor-pointer">*/}
                                {/*    <div className="w-full h-full rounded-xl overflow-hidden">*/}
                                {/*        <div className="relative w-full h-full">*/}
                                {/*            <Image*/}
                                {/*                layout="fill"*/}
                                {/*                objectFit="cover"*/}
                                {/*                draggable={false}*/}
                                {/*                src="/images/cataloguePage/barczak.png"*/}
                                {/*                alt="productImage"*/}
                                {/*            />*/}
                                {/*            <div*/}
                                {/*                className={"absolute w-10 h-5 rounded-md bg-blue-4 bottom-2 right-2 flex justify-center items-center"}>*/}
                                {/*                <p className={"text-xs text-center text-white mb-0.5"}>*/}
                                {/*                    21:49*/}
                                {/*                </p>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*    <div>*/}
                                {/*        <h3 className="text-blue-5 text-xl font-semibold mt-2">*/}
                                {/*            Як прикрутити антену DVBT YAGI 21-69 / 19?*/}
                                {/*        </h3>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                        <ProgressBar containerId="scroll-container-1"/>
                    </section>

                    {/*<section className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-28 mt-10 pb-52">*/}
                    {/*    <h1 className="text-4xl text-blue-5 font-bold">Як зремонтувати антену?</h1>*/}
                    {/*    <div id="scroll-container-2" className="flex overflow-x-scroll pb-4 mt-4 hide-scroll-bar">*/}
                    {/*        <div className="flex gap-4">*/}
                    {/*            <ServiceCard/>*/}
                    {/*            <ServiceCard/>*/}
                    {/*            <ServiceCard/>*/}
                    {/*            <ServiceCard/>*/}
                    {/*            <ServiceCard/>*/}
                    {/*            <ServiceCard/>*/}
                    {/*            <ServiceCard/>*/}
                    {/*            <ServiceCard/>*/}
                    {/*            <ServiceCard/>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <ProgressBar containerId="scroll-container-2"/>*/}
                    {/*</section>*/}
                </article>
            </main>
            <style jsx>{`
              .hide-scroll-bar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }

              .hide-scroll-bar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
        </div>
    );
};

export default Services;
