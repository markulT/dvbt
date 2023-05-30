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

// Noto_Sans({
//     weight: '400',
//     preload: false,
// });
export default function Home() {
    const [open, setOpen] = useState<boolean>(false)
    const [img, setImg] = useState<string>()

    return (
        <main className={"bg-white-bg"}>

            <Navbar />
            <article className={""}>
                <section className={'lg:mx-28 mx-10'}>
                    <div
                        className={"bg-gradient-to-r from-blue-5 to-blue-3 rounded-xl relative flex lg:flex-row justify-between"}>
                        <div className={"p-5 flex flex-col justify-center mx-4 lg:mx-10 w-full lg:my-28 my-10"}>
                            <h1 className={"text-white lg:text-6xl text-4xl font-semibold whitespace-normal max-w-xl"}>Новітні
                                телевізійні антени</h1>
                            <a className={"lg:text-2xl text-lg font-normal whitespace-normal max-w-lg mt-4"}>Тут
                                потрібно написати мінімальний опис всіх цих антен, чому вони круті. Чому я маю купити
                                саме їх і докази того, що вони не випромінюють 5G</a>
                        </div>
                        <div className="hidden lg:block w-2/3">
                            <div className="relative w-full h-full">
                                <Image
                                    layout="fill"
                                    objectFit="cover"
                                    draggable={false}
                                    className="rounded-r-xl"
                                    fill
                                    src="/images/mainPage/antenna.jpg"
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
                                src={'/images/mainPage/bgPick.jpg'}
                                style={{filter: 'brightness(40%)'}}
                            />
                        </div>
                        <div className={'flex flex-col justify-between mt-4 mb-10 mx-4 md:mt-20 md:mx-20'}>
                            <a className={"text-white md:text-2xl text-lg font-medium text-right max-w-2xl z-10"}>
                                Переваги
                            </a>
                            <a className={"text-white text-4xl sm:text-5xl md:text-7xl font-semibold text-right z-10"}>
                                Створено для <br/>комфорту
                            </a>
                            <div className={"grid grid-cols-2 grid-rows-2 gap-2 justify-between z-10 h-1/3 lg:h-1/2"}>

                                <div className={'flex flex-col'}>
                                    <div className={"flex text-md sm:text-xl md:text-3xl items-center gap-1"}>
                                        <h3 className={"font-bold"}>Вартість</h3>
                                        <BiWallet/>
                                    </div>
                                    <a className={'text-xs sm:text-lg md:text-xl'}>Наші антени досить недорогі<br/> у
                                        порівнянні з іншими<br/> постачальниками</a>
                                </div>

                                <div className={'flex flex-col'}>
                                    <div className={"flex text-md sm:text-xl md:text-3xl items-center gap-1"}>
                                        <h3 className={"font-bold"}>Якість</h3>
                                        <HiSignal className={'mt-1'}/>
                                    </div>
                                    <a className={'text-xs sm:text-lg md:text-xl'}>Ми забезпечуємо найкращий<br/>
                                        сигнал на ринку. Незалежно<br/> від вашого місцезнаходження</a>
                                </div>

                                <div className={'flex flex-col'}>
                                    <div className={"flex text-md sm:text-xl md:text-3xl items-center gap-1"}>
                                        <h3 className={"font-bold"}>Адаптивність</h3>
                                        <FiMapPin/>
                                    </div>
                                    <a className={'text-xs sm:text-lg md:text-xl'}>За допомогою сайту ви
                                        можете<br/> обрати найоптимальнішу антену<br/> відносно вашої локації</a>
                                </div>

                                <div className={'flex flex-col'}>
                                    <div className={"flex text-md sm:text-xl md:text-3xl items-center gap-1"}>
                                        <h3 className={"font-bold"}>Доступність</h3>
                                        <BsTruck className={'mt-2 ml-1'}/>
                                    </div>
                                    <a className={'text-xs sm:text-lg md:text-xl'}>Щоб замовити антену вам<br/> просто
                                        потрібно заповнити<br/> форму для доставки і вказати антену</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex lg:flex-row flex-col mx-10 lg:mx-16 xl:mx-28 gap-y-10 justify-between mt-40">
                    {/*First popup*/}
                    <div className="bg-white-bg drop-shadow-2xl flex flex-col rounded-3xl
                    hover:scale-105 transition-all duration-500
                    ">
                        <div className="relative w-auto  lg:h-60  h-40 rounded-xl overflow-hidden">
                            <div className="rounded-3xl">
                                <Image draggable={false} fill src="/images/mainPage/howToSection/map.jpg" layout="fill"
                                       objectFit="cover" className={""}/>
                            </div>
                        </div>
                        <div className="flex flex-col my-10 mx-2 items-center">
                            <h2 className="lg:text-3xl text-2xl font-medium text-blue-5 text-center">Визначити</h2>
                            <a className="lg:text-xl text-lg font-regular text-blue-4 max-w-sm text-center">
                                вид антени яка вам потрібна відносно вашого місцезнаходження
                            </a>
                            <button className="bg-gradient-to-r from-blue-1 to-yellow-4 w-2/3 mt-4 rounded-xl py-3 text-2xl

                            ">
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
                                       layout="fill" objectFit="cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col my-10 mx-2 items-center">
                            <h2 className="lg:text-3xl text-2xl font-medium text-blue-5 text-center">Обрати</h2>
                            <a className="lg:text-xl text-lg font-regular text-blue-4 max-w-sm text-center">
                                потрібний вид антени у
                                каталозі, та ознайомитись із цінами
                            </a>
                            <button className="bg-gradient-to-r from-blue-1 to-yellow-4 w-2/3 mt-4 rounded-xl py-3 text-2xl

                            ">
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
                                <Image draggable={false} fill src="/images/mainPage/howToSection/sign.jpg" layout="fill"
                                       objectFit="cover"/>
                            </div>
                        </div>
                        <div className="flex flex-col my-10 mx-2 items-center ">
                            <h2 className="lg:text-3xl text-2xl font-medium text-blue-5 text-center">Оформити</h2>
                            <a className="lg:text-xl text-lg font-regular text-blue-4 max-w-sm text-center">
                                замовлення заповнивши
                                форму для доставки та оплати
                            </a>
                            <button className="bg-gradient-to-r from-blue-1 to-yellow-4 w-2/3 mt-4 rounded-xl py-3 text-2xl

                            ">
                                Оформити
                            </button>
                        </div>
                    </div>

                </section>

                <section
                    className="flex mx-10 lg:mx-28 md:justify-between flex-col md:flex-row mt-40 h-screen md:h-auto">
                    <div className="md:w-1/2 w-full h-full"> {/* Update the class here */}
                        <div className="relative w-full h-full">
                            <div className="w-full h-full">
                                <Image draggable={false} src="/images/mainPage/location.png" alt="Your Image"
                                       layout="fill" objectFit="contain"/>
                            </div>
                        </div>
                    </div>
                    <div className={'md:w-1/2 w-full my-20 flex justify-center'}>
                        {/* Rest of the code remains the same */}
                        <div className="">
                            <h2 className="md:text-7xl text-5xl font-bold text-blue-2 max-w-lg">
                                Як визначити тип<a className="text-yellow-4"> антени?</a>
                            </h2>
                            <p className={'text-blue-2 md:text-xl text-lg max-w-lg'}>
                                Щоб визначити необхідний вам тип антени, варто просто перейти на вкладку <a
                                className={'text-yellow-4 font-semibold'}>“Визначити”</a>, на мапі обрати ваше
                                місцезнаходження. Програма все зробить за вас, та вирахує, антену якої
                                потужності вам варто придбати
                            </p>
                            <button
                                className="bg-gradient-to-r from-blue-1 to-yellow-4 mt-4 rounded-xl py-3 px-10 text-2xl hover:scale-110 transition-all duration-500">
                                Оформити
                            </button>
                        </div>
                    </div>
                </section>


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
                                        "transition-all duration-500 hover:scale-105 md:hover:translate-x-1"}>Каталог
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
                                               className={"rounded-2xl"}/>
                                    </div>
                                </div>
                                <div className="relative w-full h-full row-span-2">
                                    <div className="w-full h-full">
                                        <Image draggable={false}
                                               src="/images/mainPage/typesOfAntennasSection/antenna3.jpg"
                                               alt="Your Image" layout="fill" objectFit="cover"
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
                                               className={"rounded-2xl"}/>
                                    </div>
                                </div>
                                <div className="relative w-full h-full row-span-1">
                                    <div className="w-full h-full">
                                        <Image draggable={false}
                                               src="/images/mainPage/typesOfAntennasSection/antenna4.jpg"
                                               alt="Your Image" layout="fill" objectFit="cover"
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
                <section className={'flex flex-col items-center mt-28 h-screen lg:mx-28 '}>
                    <div className={'mb-4 mx-10'}>
                        <h2 className={"md:text-3xl text-xl text-blue-5 max-w-xl text-center font-medium"}>Діяльність
                            назва компанії на території України</h2>
                    </div>
                    <div className="relative w-full h-full transition-all duration-500">
                        <div className="w-full h-full">
                            <Image draggable={false} src="/images/mainPage/map2.0.png" alt="Your Image" layout="fill"
                                   objectFit="contain" className={"rounded-2xl"}/>
                        </div>
                    </div>
                    <div className={'flex w-full md:justify-evenly flex-col gap-y-4  md:flex-row'}>
                        <div className={"text-blue-5 text-center flex flex-col items-center"}>
                            <MdGroups2 className={"text-5xl"}/>
                            <h3 className={"text-7xl font-bold"}>5000</h3>
                            <p className={"text-xl text-center"}>антен</p>
                        </div>
                        <div className={"text-blue-3 text-center flex flex-col items-center"}>
                            <MdGroup className={"text-5xl"}/>
                            <h3 className={"text-7xl font-bold"}>3000</h3>
                            <p className={"text-xl text-center"}>антен</p>
                        </div>
                        <div className={"text-blue-1 text-center flex flex-col items-center"}>
                            <MdPerson className={"text-5xl"}/>
                            <h3 className={"text-7xl font-bold"}>1000</h3>
                            <p className={"text-xl text-center"}>антен</p>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}
