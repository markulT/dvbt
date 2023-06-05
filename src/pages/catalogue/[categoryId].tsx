import {FC, useEffect} from "react";
import Navbar from "@/comps/Navbar";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {getProductsByCategory} from "@/store/reducers/products/productThunk";
import CategoryItem from "@/comps/CategoryItem";
import {ICategory} from "@/store/models/Category";
import ProductCard from "@/comps/ProductCard";


const CatalogueCategory: FC = () => {

    const router = useRouter()
    const dispatch = useAppDispatch()
    const {categoryId, pageNumber} = router.query
    const categoryList = useAppSelector((state) => state.category.list)
    const productList = useAppSelector((state) => state.product.products)

    async function fetchData() {
        await dispatch(getProductsByCategory({
            categoryId: categoryId?.toString(),
            page: {pageSize: 20, pageNumber: Number(pageNumber)}
        }))
    }

    // useEffect(()=>{
    //     fetchData()
    // },[])

    useEffect(() => {
        fetchData()
    }, [categoryId])


    function handleCategoryClick(category: ICategory) {
        router.push(`/catalogue/${category.id}?pageNumber=1`)
    }

    return (
        <div className={"bg-white-bg w-full min-h-screen"}>
            <Navbar/>
            <main>
                <article>
                    <section className={"flex mx-4 sm:mx-10 md:mx-20 lg:mx-28 gap-x-3"}>
                        <div className={"rounded-xl bg-blue-2 flex items-center justify-items-center cursor-pointer"}
                             onClick={() => {
                                 router.push('/catalogue')
                             }}>
                            <span className={"text-white text-xl p-3"}>
                                Всі
                            </span>
                        </div>
                        {categoryList.map((category) => <CategoryItem onClick={() => {
                            handleCategoryClick(category)
                        }} name={category.name} key={category.id} id={category.id?.toString()}/>)}
                    </section>
                    <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 justify-between mt-4">
                            {productList.map((product) => {
                                return (

                                        <ProductCard id={product.id?.toString()} key={product.id} name={product.name}
                                                     title={product.title} imgName={product.imgName}
                                                     price={product.price}/>


                                )
                            })}
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}
export default CatalogueCategory