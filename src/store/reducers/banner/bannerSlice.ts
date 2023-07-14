import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Banner} from "@/store/models/Banner";
import {GetPageResponse} from "@/store/types/GetPage";
import {GetSingle} from "@/store/types/getSingle";
import {act} from "react-dom/test-utils";
import {getBannerImage, getRecentBanner} from "@/store/reducers/banner/bannerThunks";

interface BannerProps {
    currentItem:Banner,
    error:string,
    currentImgUrl:string,
}

const initialState:BannerProps = {
    currentItem:{} as Banner,
    error:'',
    currentImgUrl:'',
}


export const bannerSlice = createSlice({
    name:"banners",
    initialState,
    reducers: {
        setError(error) {}
    },
    extraReducers: {

        [getBannerImage.fulfilled.type]:(state, action:PayloadAction<Blob>)=>{
            console.log('runs')
            console.log(action.payload)
            //@ts-ignore
            state.currentImgUrl = action.payload
        },
        [getRecentBanner.fulfilled.type]: (state, action:PayloadAction<GetSingle<Banner>>)=>{
            state.currentItem = action.payload.item;
        }
    }

})
// export default bannerSlice.reducer;