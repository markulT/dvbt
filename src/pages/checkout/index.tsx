import ProductCard from "@/comps/ProductCard";
import CheckoutProductCard from "@/comps/CheckoutProductCard";
import Image from "next/image";
import {RxCross2} from "react-icons/rx";
import {AiOutlinePlus} from "react-icons/ai";
import ExpandableInput from "@/comps/ExpandableInput";
import CustomInput from "@/comps/CustomInput";
import {RiSearchLine} from 'react-icons/ri';
import {FC} from "react";
import Navbar from "@/comps/Navbar";

const Checkout: FC = () => {
    return (
        <div className="bg-white-bg min-h-screen w-full">
            <Navbar />
            <main className="flex flex-col w-full">
                <article>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col">
                        <h1 className="text-4xl text-blue-5 font-bold">Каталог зовнішніх антен</h1>
                        <div className="w-full p-3 bg-white drop-shadow-2xl rounded-xl mt-4">
                            <div className="flex justify-center flex-col lg:flex-row lg:justify-between">
                                <div className="flex flex-col items-center lg:items-start">
                                    <p className="text-blue-5 text-2xl font-medium">Кошик:</p>
                                    <div className="lg:flex lg:gap-4 items-center justify-start">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
                                            <CheckoutProductCard/>
                                            <CheckoutProductCard/>

                                        </div>
                                        <div
                                            className="flex rounded-full justify-center hover:scale-110 transition-all duration-500 mt-4 lg:mt-0">
                                            <div
                                                className="flex items-center justify-center p-4 bg-white drop-shadow-xl rounded-full">
                                                <AiOutlinePlus className="text-blue-5 text-2xl"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-center font-medium mt-4 lg:mt-0">
                                    <p className="text-2xl text-blue-5">До сплати: 57 899 грн</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 mt-10">
                        <h1 className="text-4xl text-blue-5 font-bold">Доставка та оплата</h1>
                        <div className="grid grid-cols-3 grid-rows-3 gap-4 gap-x-60">

                            <ExpandableInput label="Місто доставки" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <CustomInput icon={RiSearchLine} placeholder="Search"/>

                            <ExpandableInput label="Номер карти" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <ExpandableInput label="Тип доставки" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <ExpandableInput label="Ім’я" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <div className={"flex"}>
                                <ExpandableInput label="Дата" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                                <ExpandableInput label="CVV" options={['Львів', 'Київ', 'Івано-Франківськ']}/>
                            </div>

                            <ExpandableInput label="Відділення/адреса" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <ExpandableInput label="Номер телефону" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <button
                                className={"bg-gradient-to-r from-blue-1 to-yellow-4 rounded-md m-3 hover:scale-105 transition-all duration-500"}>
                                Оплатити покупку
                            </button>


                        </div>
                    </section>
                </article>
            </main>
        </div>
    );
}
export default Checkout;