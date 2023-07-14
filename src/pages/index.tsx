import Image from 'next/image'
import {Noto_Sans} from 'next/font/google'
import {BiCross, BiMenu, BiWallet} from 'react-icons/bi';
import {FiMapPin} from 'react-icons/fi';
import {HiSignal} from 'react-icons/hi2';
import {BsTruck} from 'react-icons/bs';
import {MdGroups2} from 'react-icons/md';
import {MdGroup} from 'react-icons/md';
import {MdPerson} from 'react-icons/md';
import Navbar from "../comps/Navbar";
import {useEffect, useState} from "react";
import {btoa} from "buffer";
import CounterAnimation from "@/comps/CounterAnimation";
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import Link from "next/link";
import Head from "next/head";

// import CountUp from "react-countup";
// Noto_Sans({
//     weight: '400',
//     preload: false,
// });

const GalleryChunk = dynamic(()=>import('../comps/index/chunks/GalleryChunk'), {
    loading: ()=><p>Загрузка...</p>,
    ssr:false
})

const MapChunk = dynamic(()=>import('../comps/index/chunks/MapChunk'), {
    loading: ()=><p>Загрузка...</p>,
    ssr:false
})

export default function Home() {
    const [open, setOpen] = useState<boolean>(false)
    const [img, setImg] = useState<string>()

    const router = useRouter()
    // a
    return (
        <main className={"bg-white-bg"}>
            <Head>
                <title>My T2</title>
                <meta name="description" content="Купуйте найкращі DVB-T2 антени та передатчики від My T2 - лідера у галузі. Покращіть якість сигналу та отримайте високоякісний ефірний телебачення з нашою широкою колекцією антен та передатчиків. Забезпечте надійне та стабільне з'єднання з високою продуктивністю. Оптимальні рішення для вашого цифрового телевізора. Виберіть ідеальну антену для вашого регіону та насолоджуйтесь якісним ефірним телебаченням вже сьогодні!" />
                <meta name="keywords" content="DVB-T2 антени, DVB-T2 передатчики, ефірні антени, ефірне телебачення, антени для цифрового телебачення, передатчики для ефірного телебачення"/>
            </Head>
            <Navbar/>
            <article className={""}>
                <section className={'lg:mx-28 mx-10'}>
                    <div
                        className={"bg-gradient-to-r from-blue-5 to-blue-3 rounded-xl relative flex lg:flex-row justify-between"}>
                        <div className={"p-5 flex flex-col justify-center mx-4 lg:mx-10 w-full lg:my-28 my-10"}>
                            <h1 className={"text-white lg:text-6xl text-4xl font-semibold whitespace-normal max-w-xl"}>Новітні
                                телевізійні антени</h1>
                            <p className={"lg:text-2xl text-lg font-normal whitespace-normal max-w-lg mt-4"}>Тут
                                потрібно написати мінімальний опис всіх цих антен, чому вони круті. Чому я маю купити
                                саме їх і докази того, що вони не випромінюють 5G</p>
                        </div>
                        <div className="hidden lg:block w-2/3">
                            <div className="relative w-full h-full">
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    draggable={false}
                                    fill
                                    alt={"Антенна"}
                                    src="/images/mainPage/antennamin.jpg"
                                    priority={true}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className={'mt-20 '}>
                    <div className={'flex h-screen md:h-screen justify-end'}>
                        <div className={"w-full h-full brightness-50 absolute"}>
                            <Image
                                draggable={false}
                                fill
                                layout="fill"
                                objectFit="cover"
                                className={"object-cover w-full h-full "}
                                alt={"Телебачення"}
                                src={'/images/mainPage/bgPick.jpg'}
                                style={{filter: 'brightness(40%)'}}
                            />
                        </div>
                        <div className={'flex flex-col justify-between mt-4 mb-10 mx-4 md:mt-20 md:mx-20'}>
                            <p className={"text-white md:text-2xl text-lg font-medium text-right max-w-2xl z-10"}>
                                Переваги
                            </p>
                            <h2 className={"text-white text-4xl sm:text-5xl md:text-7xl font-semibold text-right z-10"}>
                                Створено для <br/>комфорту
                            </h2>
                            <div className={"grid grid-cols-2 grid-rows-2 gap-2 justify-between z-10 h-1/3 lg:h-1/2"}>

                                <div className={'flex flex-col'}>
                                    <div className={"flex text-md sm:text-xl md:text-3xl items-center gap-1"}>
                                        <h3 className={"font-bold"}>Вартість</h3>
                                        <BiWallet/>
                                    </div>
                                    <p className={'text-xs sm:text-lg md:text-xl'}>Наші антени досить недорогі<br/> у
                                        порівнянні з іншими<br/> постачальниками</p>
                                </div>

                                <div className={'flex flex-col'}>
                                    <div className={"flex text-md sm:text-xl md:text-3xl items-center gap-1"}>
                                        <h3 className={"font-bold"}>Якість</h3>
                                        <HiSignal className={'mt-1'}/>
                                    </div>
                                    <p className={'text-xs sm:text-lg md:text-xl'}>Ми забезпечуємо найкращий<br/>
                                        сигнал на ринку. Незалежно<br/> від вашого місцезнаходження</p>
                                </div>

                                <div className={'flex flex-col'}>
                                    <div className={"flex text-md sm:text-xl md:text-3xl items-center gap-1"}>
                                        <h3 className={"font-bold"}>Адаптивність</h3>
                                        <FiMapPin/>
                                    </div>
                                    <p className={'text-xs sm:text-lg md:text-xl'}>За допомогою сайту ви
                                        можете<br/> обрати найоптимальнішу антену<br/> відносно вашої локації</p>
                                </div>

                                <div className={'flex flex-col'}>
                                    <div className={"flex text-md sm:text-xl md:text-3xl items-center gap-1"}>
                                        <h3 className={"font-bold"}>Доступність</h3>
                                        <BsTruck className={'mt-2 ml-1'}/>
                                    </div>
                                    <p className={'text-xs sm:text-lg md:text-xl'}>Щоб замовити антену вам<br/> просто
                                        потрібно заповнити<br/> форму для доставки і вказати антену</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <div className={"relative"}>
                    <Image src={'/splash.png'} alt={'bloob'} width={700} height={700} loading={"lazy"}
                           className={"absolute top-0 left-0 h-full w-auto lg:block hidden"}/>
                    <div className={"bg-mega-gradient absolute top-0 left-0 h-full w-full block lg:hidden"}></div>
                    <section
                        className="flex lg:flex-row flex-col items-center mx-10 lg:mx-16 xl:mx-28 gap-y-10 justify-between pt-40">
                        {/*First popup*/}
                        <div className="bg-white-bg drop-shadow-2xl flex flex-col rounded-3xl
                    hover:scale-105 transition-all duration-500
                    ">
                            <div className="relative w-auto  lg:h-60  h-40 rounded-xl overflow-hidden">
                                <div className="rounded-3xl">
                                    <Image draggable={false} fill src="/images/mainPage/howToSection/map.jpg"
                                           layout="fill"
                                           alt={"Мапа"}
                                           loading={"lazy"}
                                           objectFit="cover" className={""}/>
                                </div>
                            </div>
                            <div className="flex flex-col my-10 mx-2 items-center">
                                <h2 className="lg:text-3xl text-2xl font-medium text-blue-5 text-center">Визначити</h2>
                                <p className="lg:text-xl text-lg font-regular text-blue-4 max-w-sm text-center">
                                    вид антени яка вам потрібна відносно вашого місцезнаходження
                                </p>
                                <button className="bg-gradient-to-r from-blue-1 to-yellow-4 w-2/3 mt-4 rounded-xl py-3 text-2xl

                            "
                                onClick={()=>{router.push("/destination")}}>

                                    Визначити
                                </button>
                            </div>
                        </div>

                        {/*Second popup*/}
                        <div className="bg-white-bg drop-shadow-2xl flex flex-col rounded-3xl
                    hover:scale-105 transition-all duration-500
                    ">
                            <div className="relative w-auto lg:h-60 h-40 rounded-xl overflow-hidden">
                                <div className="rounded-t-3xl">
                                    <Image draggable={false} fill src="/images/mainPage/howToSection/choice.jpg"
                                           loading={"lazy"}
                                           alt={"Вибір"}
                                           layout="fill" objectFit="cover"/>
                                </div>
                            </div>
                            <div className="flex flex-col my-10 mx-2 items-center">
                                <h2 className="lg:text-3xl text-2xl font-medium text-blue-5 text-center">Обрати</h2>
                                <p className="lg:text-xl text-lg font-regular text-blue-4 max-w-sm text-center">
                                    потрібний вид антени у
                                    каталозі, та ознайомитись із цінами
                                </p>
                                <button className="bg-gradient-to-r from-blue-1 to-yellow-4 w-2/3 mt-4 rounded-xl py-3 text-2xl" onClick={()=>{router.push("/catalogue")}}>
                                    Обрати
                                </button>
                            </div>
                        </div>

                        {/*Third popup*/}
                        <div className="bg-white-bg drop-shadow-2xl flex flex-col rounded-3xl
                    hover:scale-105 transition-all duration-500
                    ">
                            <div className="relative w-auto lg:h-60 h-40 rounded-xl overflow-hidden">
                                <div className="rounded-t-xl">
                                    <Image draggable={false} fill src="/images/mainPage/howToSection/sign.jpg"
                                           layout="fill"
                                           alt={"Оформити"}
                                           loading={"lazy"}
                                           objectFit="cover"/>
                                </div>
                            </div>
                            <div className="flex flex-col my-10 mx-2 items-center ">
                                <h2 className="lg:text-3xl text-2xl font-medium text-blue-5 text-center">Оформити</h2>
                                <p className="lg:text-xl text-lg font-regular text-blue-4 max-w-sm text-center">
                                    замовлення заповнивши
                                    форму для доставки та оплати
                                </p>
                                <button className="bg-gradient-to-r from-blue-1 to-yellow-4 w-2/3 mt-4 rounded-xl py-3 text-2xl

                            " onClick={()=>{router.push("/checkout")}}>
                                    Оформити
                                </button>
                            </div>
                        </div>


                    </section>

                    <section
                        className=" mt-40 h-screen md:h-auto">
                        <div className={"flex md:justify-between items-center flex-col lg:flex-row"}>
                            <div className="md:w-1/2 w-full h-full relative"> {/* Update the class here */}
                                {/*<div className="relative w-full h-full">*/}
                                {/*    <div className="w-full h-full">*/}
                                {/*        <Image draggable={false} src="/images/mainPage/location.png" alt="Your Image"*/}
                                {/*               layout="fill" objectFit="contain"/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                <Image src={"/images/mainPage/location.png"} alt={''} width={1000} height={1000}
                                       loading={"lazy"}
                                       className={"z-50"}/>
                            </div>
                            <div className={'md:w-1/2 w-full my-20 flex justify-center z-50'}>

                                {/* Rest of the code remains the same */}
                                <div className="">
                                    <h2 className="md:text-7xl text-5xl font-bold text-blue-2 max-w-lg">
                                        Як визначити тип<span className="text-yellow-4"> антени?</span>
                                    </h2>
                                    <p className={'text-blue-2 md:text-xl text-lg max-w-lg'}>
                                        Щоб визначити необхідний вам тип антени, варто просто перейти на вкладку <Link
                                        className={'text-yellow-4 font-semibold cursor-pointer'} href={"/destination"}>“Визначити”</Link>, на мапі обрати ваше
                                        місцезнаходження. Програма все зробить за вас, та вирахує, антену якої
                                        потужності вам варто придбати
                                    </p>
                                    <button
                                        className="bg-gradient-to-r from-blue-1 to-yellow-4 mt-4 rounded-xl py-3 px-10 text-2xl hover:scale-110 transition-all duration-500"
                                        onClick={()=>{router.push("/catalogue")}}>
                                        Оформити
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                <GalleryChunk />
                <MapChunk />
            </article>
        </main>
    )
}
