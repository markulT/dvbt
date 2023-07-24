import Image from "next/image";
import ProductCard from "@/comps/ProductCard";
import Navbar from "@/comps/Navbar";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {getAllCategories} from "@/store/reducers/category/categoryThunk";
import {getProductPage} from "@/store/reducers/products/productThunk";
import {ICategory} from "@/store/models/Category";
import CategoryItem from "@/comps/CategoryItem";
import categoryItem from "@/comps/CategoryItem";
import {useRouter} from "next/router";
import EventPopup from "@/comps/EventPopup";
import Head from "next/head";

const Catalogue = () => {

    const dispatch = useAppDispatch()
    const productList = useAppSelector((state)=>state.product.products)
    const categoryList:ICategory[] = useAppSelector((state)=>state.category.list)
    const router = useRouter()

    useEffect(()=>{
        async function fetchData() {
            await dispatch(getAllCategories())
            await dispatch(getProductPage({pageNumber:1, pageSize:20}))
        }
        fetchData()
    }, [])

    function handleCategoryClick(category:ICategory) {
        router.push(`/catalogue/${category.id}?pageNumber=1`)
    }

    //asd
    return (
        <div className="bg-white-bg w-full min-h-screen ">
            <Head>
                <title>My T2 - Кошик</title>
                <meta name="description" content="Відкрийте широкий світ можливостей з каталогом продуктів My T2 - вашого провідного постачальника антен та передатчиків DVB-T2. Виберіть ідеальну антену або передатчик, що відповідає вашим потребам та вимогам. Наш каталог пропонує різноманітні моделі, які гарантують надійність, якість сигналу та високу продуктивність. Незалежно від вашої географічної області або вимог, ви знайдете відповідний варіант у нашому розмаїтті антен та передатчиків. Зробіть свій вибір з My T2 і насолоджуйтеся якісним ефірним телебаченням та безперебійним з'єднанням уже сьогодні." />
                <meta name="keywords" content="DVB-T2 антени, DVB-T2 передатчики, ефірні антени, ефірне телебачення, антени для цифрового телебачення, передатчики для ефірного телебачення"/>
            </Head>
            <Navbar />
            <main>
                {/*<EventPopup />*/}
                <article>
                    <section className={"flex mx-4 sm:mx-10 md:mx-20 lg:mx-28 gap-x-3 overflow-x-scroll hide-scroll-bar"}>
                        <div className={"rounded-xl px-4 bg-blue-4 hover:bg-blue-5 transition-all duration-500 flex items-center justify-items-center cursor-pointer"} onClick={()=>{
                            router.push('/catalogue');
                        }}>
                        <span className={"text-white text-xl p-3"}>
                          Всі
                        </span>
                        </div>
                        {categoryList.map((category)=><CategoryItem onClick={()=>{
                            handleCategoryClick(category);
                        }} name={category.name} key={category.id} id={category.id?.toString() || ""}/>)}
                    </section>

                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col">
                        <h1 className="mt-4 lg:mt-0 text-4xl text-blue-5 font-semibold">Каталог зовнішніх антен</h1>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 justify-between mt-4">
                            {productList.map((product)=><ProductCard id={product.id?.toString() || ""} key={product.id} name={product.name} title={product.title} imgName={product.imgName} price={product.price} />)}

                            {/*<ProductCard/>*/}
                            {/*<ProductCard/>*/}
                            {/*<ProductCard/>*/}
                        </div>
                    </section>

                </article>
            </main>
            <style jsx>{`
              .hide-scroll-bar {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }

              .hide-scroll-bar::-webkit-scrollbar {
                display: none;
              }
            `}</style>
        </div>
    );
}
export default Catalogue;
