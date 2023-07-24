import {FC, useState} from "react";
import {BiCross, BiHome, BiMenu} from 'react-icons/bi';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {GrClose} from "react-icons/gr";
import {useAppSelector} from "@/store/hooks/redux";


const Navbar: FC = () => {

    const [open, setOpen] = useState<boolean>(false)
    const router = useRouter()

    const userEmail = useAppSelector((state) => state.auth.email)

    return (
        <header className={"flex flex-row justify-around  px-8 items-center bg-white-bg"}>
            {/*<div className={"hover:scale-105 transition-all duration-500"}>*/}
            {/*    <Image*/}
            {/*        draggable={false}*/}
            {/*        height={60}*/}
            {/*        width={200}*/}
            {/*        src={'./images/mainPage/logo-color.svg'}*/}
            {/*    />*/}
            {/*</div>*/}
            <div className={"shrink-0 basis-1/8 grow-1 z-[115]"}>
                <Image
                    draggable={false}
                    onClick={() => {
                        router.push('/')
                    }}
                    height={60}
                    width={200}
                    src={'/images/mainPage/logo-color.svg'}
                    alt={"Логотип"}
                    className={"cursor-pointer outline-0 remove-highlight z-[115]"}
                />
            </div>
            <nav
                className={`flex xl:justify-between xl:text-red-500 justify-center items-center xl:flex-row flex-col grow-1 xl:bg-transparent bg-white ${open ? 'xl:visible visible' : ' xl:visible xl:flex hidden'} xl:relative fixed top-0 left-0 xl:w-auto xl:h-auto w-screen h-screen  z-[110]`}>
                <ul className={"text-blue-4 text-2xl font-medium flex xl:flex-row flex-col gap-x-1 xl:gap-x-6 xl:gap-y-0 gap-y-4 xl:mb-0 mb-6 items-center transition-all duration-500 z-[111]"}>
                    <li>
                        <Link href={"/"}
                              className={"cursor-pointer hover:text-blue-5 transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Головна</Link>
                    </li>
                    <li>
                        <Link href={"/services"}
                              className={"cursor-pointer hover:text-blue-5 transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Сервіси</Link>
                    </li>
                    <li>
                        <Link href={"/catalogue"}
                              className={"cursor-pointer hover:text-blue-5 transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Каталог</Link>
                    </li>
                    <li>
                        <Link href={"/checkout"}
                              className={"cursor-pointer hover:text-blue-5 transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Придбати</Link>
                    </li>
                    <li>
                        <Link href={"/destination"}
                              className={"cursor-pointer hover:text-blue-5 transition-all duration-500 hover:underline hover:underline-offset-4 text-center"}>Визначити</Link>
                    </li>
                </ul>

                <div
                    className={"flex flex-row gap-x-6 xl:ml-6 sm:flex-row flex-col sm:gap-y-0 gap-6 items-center z-[111]"}>
                    {userEmail ?
                        <>
                            <div>
                                <div className={"bg-gradient-to-tl from-blue-3 to-blue-2 py-4 px-16 rounded-xl text-2xl font-medium text-white bg-size-200 bg-pos-0 hover:bg-pos-100 from-blue-3 to-blue-2 transition-all duration-500 hover:scale-105 drop-shadow-2xl\""}>
                                    <span className={""}>{userEmail}</span>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <li className={"text-blue-4 text-2xl font-medium flex gap-x-6 cursor-pointer hover:text-blue-5 hover:underline hover:underline-offset-4 text-center"}>
                                <Link href={'/auth/signup'}>Реєстрація</Link>
                            </li>
                            <div>
                                <button
                                    className={"bg-gradient-to-tl from-blue-3 to-blue-2 py-4 px-16 rounded-xl text-2xl font-medium text-white bg-size-200 bg-pos-0 hover:bg-pos-100 from-blue-3 to-blue-2 transition-all duration-500 hover:scale-105 drop-shadow-2xl"}
                                onClick={()=>{
                                    router.push("/auth/login")}
                                        }>
                                    <span>Логін</span>
                                </button>
                            </div>
                        </>
                    }
                </div>
            </nav>
            {open ? <GrClose className={"text-blue-6 text-4xl cursor-pointer mt-2 z-[111] xl:hidden"} onClick={() => {
                setOpen(false)
            }}/> : <BiMenu className={"text-blue-6 cursor-pointer text-5xl mt-2 z-[111] xl:hidden"} onClick={() => {
                setOpen(true)
            }}/>}
        </header>
    )
}
export default Navbar;
