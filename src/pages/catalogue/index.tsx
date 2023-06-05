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
            <Navbar />
            <main>
                <article>
                    <section className={"flex mx-4 sm:mx-10 md:mx-20 lg:mx-28 gap-x-3"}>
                        <div className={"rounded-xl bg-blue-2 flex items-center justify-items-center cursor-pointer"} onClick={()=>{
                            router.push('/catalogue')
                        }}>
                            <span className={"text-white text-xl p-3"}>
                                Всі
                            </span>
                        </div>
                        {categoryList.map((category)=><CategoryItem onClick={()=>{
                            handleCategoryClick(category)
                        }} name={category.name} key={category.id} id={category.id?.toString()}/>)}
                    </section>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col">
                        <h1 className="text-4xl text-blue-5 font-semibold">Каталог зовнішніх антен</h1>
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 justify-between mt-4">
                            {productList.map((product)=><ProductCard id={product.id?.toString()} key={product.id} name={product.name} title={product.title} imgName={product.imgName} price={product.price} />)}

                            {/*<ProductCard/>*/}
                            {/*<ProductCard/>*/}
                            {/*<ProductCard/>*/}
                        </div>
                    </section>

                </article>
            </main>
        </div>
    );
}
export default Catalogue;