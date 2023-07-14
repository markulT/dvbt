import {FC} from "react";
import Navbar from "@/comps/Navbar";


const OrderStatus:FC = () => {
    return (
        <div className="bg-white-bg min-h-screen w-full">
            <Navbar />
            <main className="flex flex-col w-full">
                <article>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col items-center justify-center text-blue-5">
                        <h1>Ваше замовлення додано!</h1>
                        <p>Замовлення буде розглянуте найближчим часом</p>
                    </section>
                </article>
            </main>
        </div>
    )
}
export default OrderStatus