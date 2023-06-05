import ProductCard from "@/comps/ProductCard";
import CheckoutProductCard from "@/comps/CheckoutProductCard";
import Image from "next/image";
import {RxCross2} from "react-icons/rx";
import {AiOutlinePlus} from "react-icons/ai";
import ExpandableInput from "@/comps/ExpandableInput";
import CustomInput from "@/comps/CustomInput";
import {RiSearchLine} from 'react-icons/ri';
import {FC, useState} from "react";
import Navbar from "@/comps/Navbar";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {FaMinus, FaPlus} from "react-icons/fa";
import {orderSlice} from "@/store/reducers/orders/orderSlice";
import {orderSliceActions} from "@/store";
import {router} from "next/client";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {intentOrder} from "@/store/reducers/orders/orderThunks";

const Checkout: FC = () => {

    const dispatch = useAppDispatch()
    const orderItemList = useAppSelector((state)=>state.order.createOrder.productList)
    const [location, setLocation] = useState<string>('')

    function increaseQuantity(quantity:number, id:string) {
        dispatch(orderSliceActions.addQuantity({id:id, quantity:quantity}))
    }
    function decreaseQuantity(quantity:number, id:string) {
        dispatch(orderSliceActions.subtractQuantity({id:id, quantity:quantity}))
    }

    async function submit() {
        if (orderItemList === [] || location === '') {
            return
        }
        const orderItemListRequest = orderItemList.map(orderItem=>{
            return {productId:orderItem.product.id?.toString(), quantity:orderItem.quantity}
        })
        await dispatch(intentOrder({productList:orderItemListRequest, location:location}))
        router.push('checkout/payment');
    }

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
                                            {/*<CheckoutProductCard/>*/}
                                            {/*<CheckoutProductCard/>*/}
                                            {orderItemList.map((orderItem)=> {
                                                return (
                                                    <div key={orderItem.product.id?.toString()}>
                                                    <ProductCard title={orderItem.product.title}
                                                             imgName={orderItem.product.imgName}
                                                             price={orderItem.product.price}
                                                             id={orderItem.product.id?.toString()}
                                                             name={orderItem.product.name}/>
                                                        <div className={"text-blue-6 flex items-center w-full justify-around"}>
                                                            <FaMinus className={"cursor-pointer"} onClick={()=>{
                                                                decreaseQuantity(1, orderItem.product.id?.toString())
                                                            }} />
                                                            <span className={"text-2xl"}>
                                                                {orderItem.quantity}
                                                                </span>
                                                            <FaPlus className={"cursor-pointer"} onClick={()=>{
                                                                increaseQuantity(1, orderItem.product.id?.toString())
                                                            }} />
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            )}
                                        </div>
                                        <div
                                            className="flex rounded-full justify-center hover:scale-110 transition-all duration-500 mt-4 lg:mt-0">
                                            <div
                                                className="flex items-center justify-center p-4 bg-white drop-shadow-xl rounded-full cursor-pointer" onClick={()=>{router.push("/catalogue")}}>
                                                <AiOutlinePlus className="text-blue-5 text-2xl"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-end justify-center font-medium mt-4 lg:mt-0">
                                    <p className="text-2xl text-blue-5">До сплати: {orderItemList.reduce((total, orderItem)=>total + (orderItem.product.price * orderItem.quantity), 0)} грн</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 mt-10">
                        <h1 className="text-4xl text-blue-5 font-bold">Доставка та оплата</h1>
                        <div className="grid grid-cols-3 grid-rows-3 gap-4 gap-x-60">

                            <ExpandableInput label="Місто доставки" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            {/*<CustomInput icon={RiSearchLine} placeholder="Search"/>*/}

                            {/*<ExpandableInput label="Тип доставки" options={['Львів', 'Київ', 'Івано-Франківськ']}/>*/}

                            <ExpandableInput label="Відділення/адреса" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <div className={"p-4 flex flex-col min-w-[60%]"}>
                                <label htmlFor={"location"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Локація</label>
                                <input className={"drop-shadow-2xl p-2 rounded-lg text-blue-6 bg-white w-full"} id={"location"} placeholder={""} type="text" value={location} onChange={(e)=>{setLocation(e.target.value)} }/>
                            </div>

                            <button
                                className={"bg-gradient-to-r from-blue-1 to-yellow-4 rounded-md m-3 hover:scale-105 transition-all duration-500"} onClick={submit}>
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