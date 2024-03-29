import Image from "next/image";
import ProductCard from "@/comps/ProductCard";
import Navbar from "@/comps/Navbar";
import dynamic from "next/dynamic";
import GradientButton from "@/comps/GradientButton";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {getAllTowers} from "@/store/reducers/tower/towerThunk";
import {searchProducts} from "@/store/reducers/products/productThunk";
import Head from "next/head";
// import RadioInput from "@/comps/RadioInput";

const MapWithNoSsr = dynamic(() => import('@/components/utilMap'), {ssr: false})
const RadioInput = dynamic(() => import("@/comps/RadioInput"), {ssr: false})

export enum ObstacleStatus {
    NO,
    FEW,
    MANY
}

interface Obstacle {
    title: string,
    status: ObstacleStatus
}

export enum GeoStatus {
    PLAINS,
    HILLY,
    MOUNTAINS
}

interface Geo {
    title:string,
    status:GeoStatus
}


const Determination = () => {

    const [edit, setEdit] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const towerList = useAppSelector((state) => state.tower.list)
    const obstacleList: Obstacle[] = [
        {title: "Відсутні", status: ObstacleStatus.NO},
        {title: "Малі перешкоди", status: ObstacleStatus.FEW},
        {title: "Багато перешкод. Без прямого доступу до вежі", status: ObstacleStatus.MANY}
    ]
    const geoList:Geo[] = [
        {title:"Рівнинна", status:GeoStatus.PLAINS},
        {title:"Горбиста", status:GeoStatus.HILLY},
        {title:"Гірська", status:GeoStatus.MOUNTAINS}
    ]

    const [obstacles, setObstacles] = useState()
    const [geo, setGeo] = useState()
    const [distance, setDistance] = useState(0)
    const recommendProducts = useAppSelector((state)=>state.product.searchResult)

    useEffect(() => {
        async function fetchData() {
            dispatch(getAllTowers())
        }

        fetchData()
    }, [])

    async function findProducts() {
        if (geo == null || obstacles == null) {
            return
        }
        dispatch(searchProducts({geo:geo, obstacle:obstacles, distance:distance}))
    }
    function setD(d:any) {
        setDistance(d)
    }

    return (
        <div className={"bg-white-bg w-full h-full"}>
            <Head>
                <title>My T2 - Локація</title>
                <meta name="description" content="Знайдіть ідеальну антену DVB-T2 для своїх потреб разом з My T2 - вашим надійним постачальником антен та передатчиків. Використовуйте нашу унікальну сторінку підбору, щоб визначити найкращу антену, яка відповідає вашим вподобанням і особистим вимогам. Завдяки широкому асортименту антен та детальним фільтрам, ви зможете знайти ідеальне рішення для вашого регіону та отримати високоякісне ефірне телебачення. Наш інтуїтивно зрозумілий інструмент підбору допоможе вам зробити правильний вибір. Виберіть My T2 для надійної антени DVB-T2, яка задовольнить ваші потреби і надасть якісне телевізійне відтворення." />
                <meta name="keywords" content="DVB-T2 антени, DVB-T2 передатчики, ефірні антени, ефірне телебачення, антени для цифрового телебачення, передатчики для ефірного телебачення"/>
            </Head>
            <Navbar/>
            <main>
                <article>
                    <section className={"md:mx-28 mx-4 flex lg:flex-row flex-col items-center"}>
                        <div className={"flex flex-col py-[10%] lg:w-1/2 w-full px-10 lg:px-0"}>
                            <h1 className={"text-blue-5 sm:text-5xl text-4xl font-bold "}>
                                Як визначити яку <a className={"text-yellow-4"}>антену</a> мені потрібно?
                            </h1>
                            <p className={"text-blue-5 sm:text-xl text-lg font-medium  mt-2"}>
                                Для цього вам потрібно буде дозволити нам обробляти вашу геолокацію, за рахунок неї ми
                                визначимо відстань до найближчої вишки,
                                та підберемо найкращу антену саме для вас. Якщо ж ви захочете обрати вашу локацію
                                самостійно - достатньо просто тицьнути на
                                кнопку <a className={"font-bold"}>“Виправити”</a> та обрати на мапі точку. Після того,
                                як ми визначили яку антену вам потрібно - вона з’явиться знизу,
                                та ви одразу зможете її придбати
                            </p>
                        </div>
                        <div className={"lg:basis-1/2 w-full lg:w-[50vw] lg:h-[50vh] h-[40vh] relative"}>
                            <Image
                                layout="fill"
                                objectFit="cover"
                                draggable={false}
                                className={"rounded-xl"}
                                fill
                                alt={"Локація"}
                                src="/images/determinationPage/location.png"
                            />
                        </div>
                    </section>
                    <section>
                        <div className={"flex items-center flex-col"}>
                            <h2 className={"text-blue-5 font-bold text-3xl"}>
                                Визначення
                            </h2>
                            <div className={"mt-4 lg:mt-8 flex w-[100%] px-10 lg:h-[50vh] h-screen flex-col-reverse lg:flex-row"}>
                                <div className={"basis-1/2 flex flex-col items-center justify-start"}>

                                    <div className={"mt-4 justify-self-start self-start text-blue-6"}>
                                        <h3 className={"text-2xl font-semibold"}>Чи є перешкоди на шляху до вежі ?</h3>
                                        <div>
                                            {obstacleList.map((obstacle) => <RadioInput key={obstacle.status}
                                                                                        value={obstacle.status}
                                                                                        title={obstacle.title}
                                                                                        setValue={setObstacles}
                                                                                        name={'obstacles'}/>)}
                                        </div>
                                    </div>

                                    <div className={"mt-4 justify-self-start self-start text-blue-6"}>
                                        <h3 className={"text-2xl font-medium"}>Опишіть свою місцевість: </h3>
                                        <div>
                                            {geoList.map((geo) => <RadioInput key={geo.status}
                                                                                        value={geo.status}
                                                                                        title={geo.title}
                                                                                        setValue={setGeo}
                                                                                        name={'geo'}/>)}
                                        </div>
                                    </div>

                                    <span className={"mt-4 text-blue-6 text-2xl"}>
                                        <h3>Відстань : {Math.floor(distance)/1000} км</h3>
                                    </span>

                                    <div className={"flex w-full flex-col"}>
                                        {/*@ts-ignore*/}
                                        {/*<GradientButton title={"Виправити"} onClick={(e:any) => {*/}
                                        {/*    setEdit(prev => !prev)*/}
                                        {/*}*/}
                                        {/*}/>*/}
                                        <button className={"px-8 self-center lg:w-2/3 w-full py-2 md:py-3 mt-4 bg-gradient-to-l from-yellow-4 to-blue-1 text-white rounded-lg md:text-2xl duration-500 transition-all hover:from-blue-1 hover:to-yellow-4 hover:bg-gradient-to-r"}
                                                onClick={(e:any) => {
                                                    setEdit(prev => !prev)
                                                }}
                                        >Виправити</button>
                                            <button className={"px-8 self-center lg:w-2/3 w-full py-2 md:py-3 mt-4 bg-gradient-to-l from-yellow-4 to-blue-1 text-white rounded-lg md:text-2xl duration-500 transition-all hover:from-blue-1 hover:to-yellow-4 hover:bg-gradient-to-r"}
                                                    onClick={(e:any) => {
                                                        findProducts()
                                                    }}
                                            >Знайти</button>
                                            {/*<GradientButton title={"Знайти"} onClick={(e:any) => {*/}
                                            {/*    findProducts()*/}
                                            {/*}*/}
                                            {/*}/>*/}
                                    </div>

                                </div>
                                <div className={'lg:basis-1/2 grow-0 h-full'}>
                                    {/*@ts-ignore*/}
                                    <MapWithNoSsr {...{edit: edit, dvbtArr: towerList, callback:setD}}/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className={"md:mx-28 mx-4 mt-[5%] pb-[5%] flex items-center flex-col "}>
                        <h2 className={"text-blue-5 font-bold text-3xl"}>
                            Ми знайшли кілька антен для вас
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  gap-4 justify-between mt-4">
                            {/*@ts-ignore-*/}
                            {recommendProducts?.map((product)=><ProductCard title={product.title} imgName={product.imgName} price={product.price} id={product.id?.toString()} key={product.id?.toString()} name={product.name}/>)}
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}
export default Determination;
