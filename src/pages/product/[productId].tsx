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
            <main>
                <AiOutlineArrowLeft className={"text-blue-6 mb-4 text-3xl mx-8 cursor-pointer"} onClick={() => {
                    router.back()
                }}/>
                <article>

                    <div className={"w-full h-full flex mx-4 items-stretch"}>
                        <div className="relative pb-pageAspect basis-1/2 shadow-blue-6">
                            <Image
                                draggable={false}
                                className="rounded-xl"
                                layout={'fill'}
                                objectFit={'cover'}
                                src={imgUrl}
                                alt="productImage"
                            />
                        </div>

                        <div className={"basis-1/2 pl-4 flex flex-col text-blue-6"}>
                            <h1 className={"text-4xl font-medium"}>{product?.title}</h1>

                            <h2 className={"text-3xl font-medium mt-4"}>Характеристики:</h2>
                            <div className={"flex flex-wrap w-full font-medium text-xl"}>
                                <span className={"basis-1/2"}>Довжина: {product?.length} см</span>
                                <span className={"basis-1/2"}>Вхідна імпеданція: {product?.outputImpedance} Ohm</span>
                                <span className={"basis-1/2"}>Канал дії: {product?.chanel} Ohm</span>
                                <span className={"basis-1/2"}>Розхід точок: {product?.amplification} </span>
                                <span className={"basis-1/2"}>Підсилення: {product?.currentConsumption} </span>
                                <span className={"basis-1/2"}>Упаковка: {product?.packagement} </span>
                            </div>
                            <h2 className={"text-3xl font-medium mt-4"}>Опис:</h2>
                            <p className={"text-blue-6"}>{product?.description}</p>
                            <h2 className={"text-3xl font-medium mt-4"}>Ціна:</h2>
                            <div className={"text-blue-6"}>
                                <span className={"text-3xl font-medium"}>
                                {product?.price}
                                </span>
                                <span className={"text-xl"}>₴</span>
                            </div>
                            <div className={"mt-4"}>
                                <h2 className={"text-xl font-medium"}>Рекомендуємо придбати також :</h2>

                                {product.complementary && product.complementary.map(()=><ComplementaryField title={product.title} id={product.id?.toString()} />)}
                            </div>
                            <div className={"self-center"}>
                                <GradientButton title={"Додати в кошик"} onClick={() => {
                                    addToCart()
                                }}/>
                            </div>
                        </div>

                    </div>

                </article>
            </main>
        </div>
    )
}
export default ProductPage
