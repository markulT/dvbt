import {FC, useState} from "react";
import Image from "next/image";
import {BiArrowBack} from "react-icons/bi";
import {useRouter} from "next/router";



const Login:FC = () => {
    const router = useRouter()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    return (
        <main className={"min-h-screen bg-white-bg"}>
            <article className={"min-h-screen flex"}>
                <BiArrowBack className={"text-5xl text-white absolute top-4 left-4 z-[100] cursor-pointer"} onClick={()=>{router.back()}} />
                <div className={"basis-3/5 grow-0 h-auto relative"}>
                    <Image layout={'fill'} src={'/images/mainPage/antenna.jpg'} objectFit={'cover'} alt={'image'} objectPosition={'center'}/>
                </div>
                <div className={"grow-1 flex-1 flex justify-center flex-col items-center"}>
                    <h1 className={"text-4xl z-30 text-center text-blue-6 font-medium"}>З поверненням!</h1>

                    <div className={"p-4 flex flex-col min-w-[60%]"}>
                        <label htmlFor={"email"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Email</label>
                        <input className={"drop-shadow-2xl p-2 rounded-lg text-blue-6 bg-white w-full"} id={"email"} placeholder={"email@example.com..."} type="text" value={email} onChange={(e)=>{setEmail(e.target.value)} }/>
                    </div>

                </div>
            </article>
        </main>
    )
}
export default Login