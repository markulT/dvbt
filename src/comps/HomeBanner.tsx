import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {useRouter} from "next/router";
import {getBannerImage, getRecentBanner} from "@/store/reducers/banner/bannerThunks";
import {Banner} from "@/store/models/Banner";
import Image from "next/image";
import GradientButton from "@/comps/GradientButton";
import Cookies from 'js-cookie';


const HomeBanner: FC = () => {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const banner: Banner = useAppSelector((state) => state.banner.currentItem)
    const imgUrl: string = useAppSelector((state) => state.banner.currentImgUrl)

    async function fetchData() {
        await dispatch(getRecentBanner())
        if (banner.imgName) {
            await dispatch(getBannerImage({imgName: banner.imgName}))
        }
    }

    const [removed, setRemoved] = useState<boolean>(Boolean(Cookies.get("banner")))

    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        fetchData()
    }, [banner.id])

    return (
        <div className={`bg-gradient-to-r from-blue-5 to-blue-3 rounded-xl relative flex flex-col-reverse xl:flex-row justify-between lg:mx-28 mx-10`}>
            <div className={"flex xl:w-1/4 w-fit lg:w-full xs:mx-4 sm:mx-8 items-center xl:justify-center py-8 xs:py-12 md:py-16 xl:py-0 px-4 xl:pb-4"}>
                <div className={""}>
                    <h2 className={"text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-white"}>{banner.title}</h2>
                    <p className={"text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl text-white"}>{banner.content}</p>
                    <button className={"px-8 lg:w-auto w-full py-2 md:py-3 mt-4 bg-gradient-to-l from-yellow-4 to-blue-1 text-white rounded-lg md:text-2xl duration-500 transition-all hover:from-blue-1 hover:to-yellow-4 hover:bg-gradient-to-r"}
                            onClick={() => {
                                router.push(banner.detailsLink)
                            }}>Детальніше</button>
                </div>
            </div>
            <div className={"xl:w-2/3"}>
                <div className="relative xl:pb-[55%] md:pb-[40%] pb-[50%]">
                    <Image
                        draggable={false}
                        className="xl:rounded-r-xl rounded-t-xl"
                        layout={'fill'}
                        objectFit={'cover'}
                        src={imgUrl}
                        alt="productImage"
                    />
                </div>
            </div>
        </div>

    )
}
export default HomeBanner
