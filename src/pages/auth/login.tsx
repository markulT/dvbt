 import {FC, useEffect, useState} from "react";
import Image from "next/image";
import {BiArrowBack} from "react-icons/bi";
import {useRouter} from "next/router";
import GradientButton from "@/comps/GradientButton";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {login} from "@/store/reducers/authSlice";



const Login:FC = () => {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false)


    const dispatch = useAppDispatch()
    const authError = useAppSelector((state)=>state.auth.error)
    const userEmail = useAppSelector((state)=>state.auth.email)

    async function handleLogin() {
        await dispatch(login({ email: email, password: password }))
    }

    useEffect(() => {
        if (userEmail) {
            router.push('/');
        }
    }, [userEmail, router]);

    return (
        <main className={"min-h-screen bg-white-bg"}>
            <article className={"min-h-screen flex"}>
                <BiArrowBack className={"text-5xl lg:text-white text-blue-6 absolute top-8 left-8 z-[100] cursor-pointer"} onClick={()=>{router.back()}} />
                <div className={"basis-3/5 grow-0 h-auto relative lg:block hidden"}>
                    <Image layout={'fill'} src={'/images/mainPage/antenna.jpg'} objectFit={'cover'} alt={'image'} objectPosition={'center'}/>
                </div>
                <div className={"grow-1 flex-1 flex justify-center flex-col items-center"}>
                    <h1 className={"text-4xl z-30 text-center text-blue-6 font-bold"}>З поверненням!</h1>

                    <div className={"p-4 flex flex-col md:min-w-[60%] min-w-[90%]"}>
                        <label htmlFor={"email"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Email</label>
                        <input className={"drop-shadow-2xl py-3 p-2 rounded-lg text-blue-6 bg-white w-full"} id={"email"} placeholder={"email@example.com..."} type="text" value={email} onChange={(e)=>{setEmail(e.target.value)} }/>
                    </div>

                    <div className={"p-4 flex flex-col md:min-w-[60%] min-w-[90%]"}>
                        <label htmlFor={"password"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Пароль</label>
                        <input className={"drop-shadow-2xl py-3 p-2 rounded-lg text-blue-6 bg-white w-full"} id={"password"} placeholder={"87654321"} type="password" value={password} onChange={(e)=>{setPassword(e.target.value)} }/>
                    </div>
                    {error? <label htmlFor={"email"} className={"text-error text-md font-medium mb-0.5"}>Помилка логіну, спробуйте ще раз!</label> : ' '}
                    <GradientButton title={"Логін"} onClick={handleLogin} />
                    <div className={"flex items-center mt-4"}>
                        <span className={"text-blue-5 font-medium"}>Немає акаунту ?</span>
                        <Link href={"/auth/signup"} className={"text-yellow-4 text-lg font-medium ml-1 hover:underline"}>Створіть його!</Link>
                    </div>
                </div>
            </article>
        </main>
    )
}
export default Login
