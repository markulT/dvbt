import {FC, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "@/store/hooks/redux";
import {useRouter} from "next/router";
import {getBannerImage, getRecentBanner} from "@/store/reducers/banner/bannerThunks";
import {Banner} from "@/store/models/Banner";
import Image from "next/image";
import GradientButton from "@/comps/GradientButton";
import Cookies from 'js-cookie';


const EventPopup: FC = () => {

    const dispatch = useAppDispatch()
    const router = useRouter()
    const banner: Banner = useAppSelector((state) => state.banner.currentItem)
    const imgUrl: string = useAppSelector((state) => state.banner.currentImgUrl)

    async function fetchData() {
        await dispatch(getRecentBanner())
        await dispatch(getBannerImage({imgName: banner.imgName}))
    }

    const [removed, setRemoved] = useState<boolean>(Boolean(Cookies.get("banner")))

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={`flex items-center bg-black-rgba justify-center w-full min-h-screen fixed top-0 left-0 z-[9999999999] ${removed ? "hidden" : "flex"}`}
             onClick={(e) => {
                 if(!Cookies.get("banner")) {
                     const expirationDate = new Date()
                     expirationDate.setDate(expirationDate.getDate() + 7)
                     Cookies.set("banner", "true", {expires: expirationDate})
                 }
                 //@ts-ignore
                 if (e.target.closest('div.fixed') == e.target) {
                     setRemoved(true)
                 }
             }}>
            <div className={"bg-white-bg h-full  rounded-3xl"}>
                <div className="relative pb-cardAspect">
                    <Image
                        draggable={false}
                        className="rounded-xl"
                        layout={'fill'}
                        objectFit={'cover'}
                        src={imgUrl}
                        alt="productImage"
                    />
                </div>

                <div className={"flex items-center justify-center px-4 pb-4"}>
                    <div>
                        <h2 className={"text-2xl text-blue-6"}>{banner.title}</h2>
                        <p className={"text-lg text-blue-6"}>{banner.content}</p>
                        <GradientButton title={"Детальніше"} onClick={()=>{
                            // router.push(banner.detailsLink)
                            console.log(removed)
                        }} />
                    </div>
                </div>

            </div>
        </div>
    )
}
export default EventPopup