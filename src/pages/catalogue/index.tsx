import Image from "next/image";
import ProductCard from "@/comps/ProductCard";

const Catalogue = () => {
    return (
        <div className="bg-white-bg flex w-full">
            <main>
                <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col  ">
                    <h1 className="text-4xl text-blue-5 font-semibold">Каталог зовнішніх антен</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 justify-between mt-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </section>
                <section className="mx-4 sm:mx-10 md:mx-20 lg:mx-28 flex flex-col mt-10">
                    <h1 className="text-4xl text-blue-5 font-semibold">Каталог радіо антен </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 justify-between mt-4">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                </section>
            </main>
        </div>
    );
}
export default Catalogue;