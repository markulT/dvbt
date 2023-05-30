import {FC, useState} from "react";
import {BiArrowBack} from "react-icons/bi";
import Image from "next/image";
import {useRouter} from "next/router";
import GradientButton from "@/comps/GradientButton";
import Link from "next/link";


const Signup:FC = () => {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [fullName, setFullName] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const router = useRouter()

    return (
        <main className={"min-h-screen bg-white-bg"}>
            <article className={"min-h-screen flex"}>
                <BiArrowBack className={"text-5xl text-blue-6 absolute top-4 left-4 z-[100] cursor-pointer"} onClick={()=>{router.back()}} />
                <div className={"basis-3/5 grow-0 h-auto relative xl:block hidden order-2"}>
                    <Image layout={'fill'} src={'/images/mainPage/antenna.jpg'} objectFit={'cover'} alt={'image'} objectPosition={'center'}/>
                </div>
                <div className={"grow-1 flex-1 flex justify-center flex-col items-center order-1"}>
                    <h1 className={"text-4xl z-30 text-center text-blue-6 font-medium"}>Вітаємо !</h1>

                    <div className={"p-4 flex flex-col min-w-[60%]"}>
                        <label htmlFor={"email"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Email</label>
                        <input className={"drop-shadow-2xl p-2 rounded-lg text-blue-6 bg-white w-full"} id={"email"} placeholder={"email@example.com..."} type="text" value={email} onChange={(e)=>{setEmail(e.target.value)} }/>
                    </div>

                    <div className={"p-4 flex flex-col min-w-[60%]"}>
                        <label htmlFor={"pass"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Пароль</label>
                        <input className={"drop-shadow-2xl p-2 rounded-lg text-blue-6 bg-white w-full"} id={"pass"} placeholder={"Пароль"} type="password" value={password} onChange={(e)=>{setPassword(e.target.value)} }/>
                    </div>

                    <div className={"p-4 flex flex-col min-w-[60%]"}>
                        <label htmlFor={"fullName"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Повне ім'я</label>
                        <input className={"drop-shadow-2xl p-2 rounded-lg text-blue-6 bg-white w-full"} id={"fullName"} placeholder={"..."} type="text" value={fullName} onChange={(e)=>{setFullName(e.target.value)} }/>
                    </div>

                    <div className={"p-4 flex flex-col min-w-[60%]"}>
                        <label htmlFor={"phone"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Номер телефону</label>
                        <input className={"drop-shadow-2xl p-2 rounded-lg text-blue-6 bg-white w-full"} id={"phone"} placeholder={"+380123456789"} type="text" value={phone} onChange={(e)=>{setPhone(e.target.value)} }/>
                    </div>

                    <GradientButton title={"Логін"} />
                    <div className={"flex items-center mt-4"}>
                        <span className={"text-blue-5 font-medium"}>Є акаунт ?</span>
                        <Link href={"/auth/signup"} className={"text-yellow-4 text-lg font-medium ml-1 hover:underline"}>Увійдіть !</Link>
                    </div>
                </div>
            </article>
        </main>
    )
}
export default Signup