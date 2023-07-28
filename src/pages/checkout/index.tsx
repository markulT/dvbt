import ProductCard from "@/comps/ProductCard";
import {AiOutlinePlus} from "react-icons/ai";
import ExpandableInput from "@/comps/ExpandableInput";
import {FC, useState} from "react";
import Navbar from "@/comps/Navbar";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {FaMinus, FaPlus} from "react-icons/fa";
import {orderSliceActions} from "@/store";
import {intentOrder} from "@/store/reducers/orders/orderThunks";
import CheckoutProductCard from "@/comps/CheckoutProductCard";
import {useRouter} from "next/router";
import Head from "next/head";
import {getSettlements} from "@/store/services/NovaPostService";

const Checkout:FC = () => {

    const dispatch = useAppDispatch()
    const orderItemList = useAppSelector((state)=>state.order.createOrder.productList)
    const [locationText, setLocationText] = useState<string>('')
    const router = useRouter()

    function increaseQuantity(quantity:number, id:string) {
        dispatch(orderSliceActions.addQuantity({id:id, quantity:quantity}))
    }
    function decreaseQuantity(quantity:number, id:string) {
        dispatch(orderSliceActions.subtractQuantity({id:id, quantity:quantity}))
    }
    async function submit() {
        //@ts-ignore
        if (orderItemList == [] || locationText === '') {
            return
        }
        const orderItemListRequest = orderItemList.map(orderItem=>{
            return {productId:orderItem.product.id?.toString(), quantity:orderItem.quantity}
        })
        // @ts-ignore
        await dispatch(intentOrder({productList:orderItemListRequest, location:locationText || ""}))
        dispatch(orderSliceActions.clearCart())
        router.push('checkout/status');
    }


    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await getSettlements('Київ');
            if (response.success) {
                setResults(response.data);
            } else {
                // Handle error cases here if needed
            }
        } catch (error) {
            // Handle API call errors here if needed
        }
    };



    return (

        <div className="bg-white-bg min-h-screen w-full">
            <Head>
                <title>My T2 - Кошик</title>
                <meta name="description" content="Зробіть своє замовлення простим і зручним на сторінці My T2 - вашого надійного постачальника антен та передатчиків DVB-T2. Заповнюйте форму замовлення згідно своїх вподобань і потреб, і додавайте бажані товари до свого кошика. Наша інтуїтивно зрозуміла система кошика дозволить вам легко переглядати та керувати своїми замовленнями перед оформленням. З My T2 ви можете бути впевнені, що ваші антени та передатчики будуть відповідати найвищим стандартам якості. Зробіть своє замовлення простим і зручним з My T2 - вашим надійним партнером у покупці антен та передатчиків DVB-T2." />
                <meta name="keywords" content="DVB-T2 антени, DVB-T2 передатчики, ефірні антени, ефірне телебачення, антени для цифрового телебачення, передатчики для ефірного телебачення"/>
            </Head>
            <Navbar />
            <main className="flex flex-col w-full">
                <article>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col">
                        <h1 className="lg:text-4xl text-2xl text-blue-5 font-bold">Каталог зовнішніх антен</h1>
                        <button className={"text-blue-5"} onClick={handleSearch}>test</button>
                        <div className="w-full p-3 bg-white drop-shadow-2xl rounded-xl mt-4">
                            <div className="flex justify-center flex-col lg:flex-row lg:justify-between">
                                <div className="flex flex-col items-center lg:items-start">
                                    <p className="text-blue-5 text-2xl font-medium">Кошик:</p>
                                    <div className="lg:flex lg:gap-4 items-center justify-start">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex gap-4">
                                            {orderItemList.map((orderItem)=> {
                                                    return (
                                                        <div key={orderItem.product.id?.toString()}>
                                                            <ProductCard title={orderItem.product.title}
                                                                         imgName={orderItem.product.imgName}
                                                                         price={orderItem.product.price}
                                                                         id={orderItem.product.id?.toString() || ""}
                                                                         name={orderItem.product.name}/>
                                                            <div className={"text-blue-6 flex items-center w-full justify-around my-4 lg:my-6"}>
                                                                <FaMinus className={"cursor-pointer"} onClick={()=>{
                                                                    //@ts-ignore
                                                                    decreaseQuantity(1, orderItem.product.id?.toString())
                                                                }} />
                                                                <span className={"text-2xl"}>
                                                                {orderItem.quantity}
                                                                </span>
                                                                <FaPlus className={"cursor-pointer"} onClick={()=>{
                                                                    //@ts-ignore
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
                                            <button
                                                className="flex items-center justify-center p-4 bg-white drop-shadow-xl rounded-full cursor-pointer" onClick={()=>{router.push('/catalogue')}}>
                                                <AiOutlinePlus className={"text-blue-6"}/>
                                            </button>
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
                        <h1 className="lg:text-4xl text-2xl text-blue-5 font-bold">Доставка та оплата</h1>
                        <div className="mt-4 grid lg:grid-cols-3 lg:grid-rows-3 gap-4 lg:gap-x-60">

                            <ExpandableInput label="Місто доставки" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <ExpandableInput label="Відділення/адреса" options={['Львів', 'Київ', 'Івано-Франківськ']}/>

                            <div className={" flex flex-col min-w-[60%]"}>
                                <label htmlFor={"location"} className={"text-blue-6 text-xl font-medium mb-0.5"}>Локація</label>
                                <input className={"drop-shadow-2xl p-2 rounded-lg text-blue-6 bg-white w-full"} id={"location"} placeholder={""} type="text" value={locationText || ""} onChange={(e)=>{setLocationText(e.target.value)} }/>
                            </div>

                            <button className={"px-8 mb-8  lg:w-auto w-full py-2 md:py-3 mt-4 bg-gradient-to-l from-yellow-4 to-blue-1 text-white rounded-lg md:text-2xl duration-500 transition-all hover:from-blue-1 hover:to-yellow-4 hover:bg-gradient-to-r"}
                                    onClick={submit}>
                                Замовити
                            </button>


                        </div>
                    </section>
                </article>
            </main>
        </div>
    );
}
export default Checkout;
