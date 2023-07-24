import {FC, useEffect, useState} from "react";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {getProductImage, getSingleProduct} from "@/store/reducers/products/productThunk";
import Navbar from "@/comps/Navbar";
import {BiLeftArrow} from "react-icons/bi";
import {AiOutlineArrowLeft} from "react-icons/ai";
import Image from "next/image";
import GradientButton from "@/comps/GradientButton";
import {orderSliceActions} from "@/store";
import ComplementaryField from "@/comps/ComplementaryField";


const ProductPage: FC = () => {

    const router = useRouter()
    const {productId} = router.query
    const dispatch = useAppDispatch()
    const product = useAppSelector((state) => state.product.currentItem)
    const imgUrl = useAppSelector((state) => state.product.currentImageUrl)
    async function fetchData() {
        //@ts-ignore
        dispatch(getSingleProduct({id: router.query.productId?.toString()}))
        //@ts-ignore
        dispatch(getProductImage({id: router.query.productId?.toString()}))
    }

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(()=>{
        fetchData()
    }, [router.query.productId])

    function addToCart() {
        dispatch(orderSliceActions.addToCartAction(product))
        router.push('/checkout')
    }

    return (
        <div className={"bg-white-bg min-h-screen w-full"}>
            <Navbar/>
            <main className={"lg:mx-48 md:mx-28 mx-8"}>
                <AiOutlineArrowLeft className={"text-blue-6 mb-4 text-3xl cursor-pointer"} onClick={() => {
                    router.back()
                }}/>
                <article className={""}>

                    <div className={"w-full h-full flex flex-col items-stretch"}>
                        <section className={"lg:grid lg:grid-cols-2 flex flex-col lg:h-fit h-full w-full gap-4"}>
                            <div className={"row-span-2 lg:h-full h-fit bg-white shadow-blue-6 drop-shadow-2xl lg:p-4 p-3 rounded-xl"}>
                                <div className="relative w-full py-36 lg:py-0 h-auto lg:h-full shadow-blue-6">
                                    <Image
                                        draggable={false}
                                        className="rounded-xl"
                                        layout={'fill'}
                                        objectFit={'cover'}
                                        src={imgUrl}
                                        alt="productImage"
                                    />
                                </div>
                            </div>
                            <div className={"bg-white shadow-blue-6 drop-shadow-2xl lg:p-4 p-3 rounded-xl text-blue-6"}>
                                <h1 className={"text-blue-5 lg:text-3xl text-xl font-bold"}>{product?.title}</h1>
                                {/*<h2 className={"text-3xl font-bold mt-4"}>Ціна:</h2>*/}
                                <div className={"text-blue-6 lg:mt-8 mt-4"}>
                                <span className={"lg:text-3xl text-2xl font-bold"}>
                                {product?.price}
                                </span>
                                    <span className={"lg:text-3xl text-xl font-semibold"}>₴</span>
                                </div>
                                {/*<div className={"self-center"}>*/}
                                {/*    <GradientButton title={"Додати в кошик"} onClick={() => {*/}
                                {/*        addToCart()*/}
                                {/*    }}/>*/}
                                {/*</div>*/}
                                <button className={"px-8 w-full py-2 md:py-3 mt-4 bg-gradient-to-l from-yellow-4 to-blue-1 text-white rounded-lg md:text-2xl duration-500 transition-all hover:from-blue-1 hover:to-yellow-4 hover:bg-gradient-to-r"}
                                        onClick={() => {
                                            addToCart()
                                        }}>Додати в кошик</button>
                            </div>
                            <div className={"bg-white shadow-blue-6 drop-shadow-2xl lg:p-4 p-3 rounded-xl text-blue-6"}>
                                <h2 className={"lg:text-3xl text-xl font-bold mt-4"}>Опис:</h2>
                                <p className={"text-blue-6 text-md lg:text-lg"}>{product?.description}</p>
                                <h2 className={"lg:text-3xl text-xl font-bold mt-4"}>Характеристики:</h2>
                                <div className={"flex flex-col w-full font-medium lg:text-xl text-md"}>
                                    <span className={"basis-1/2"}>Довжина: {product?.length} см</span>
                                    <span className={"basis-1/2"}>Вхідна імпеданція: {product?.outputImpedance} Ohm</span>
                                    <span className={"basis-1/2"}>Канал дії: {product?.chanel} Ohm</span>
                                    <span className={"basis-1/2"}>Розхід точок: {product?.amplification} </span>
                                    <span className={"basis-1/2"}>Підсилення: {product?.currentConsumption} </span>
                                    <span className={"basis-1/2"}>Упаковка: {product?.packagement} </span>
                                </div>
                            </div>
                            <div className={"col-span-2 bg-white shadow-blue-6 drop-shadow-2xl lg:p-4 p-3 rounded-xl text-blue-5 mb-8"}>
                                <h2 className={"lg:text-xl text-lg font-bold"}>Рекомендуємо придбати також :</h2>
                                {/*@ts-ignore*/}
                                {product?.complementary && product?.complementary?.map(()=><ComplementaryField key={product.id?.toString()} title={product.title} id={product.id?.toString()} />)}
                            </div>
                        </section>

                    </div>

                </article>
            </main>
        </div>
    )
}
export default ProductPage
