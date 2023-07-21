import {createAsyncThunk} from "@reduxjs/toolkit";
import {GetPageRequest} from "@/store/types/GetPage";
import api, {ngrokInstance} from "@/api/authApi";
import {Banner} from "@/store/models/Banner";
import {GetByIdRequest} from "@/store/types/getByIdRequest";
import axios from "axios";
import {UpdateItem} from "@/store/types/updateItem";

export const getBannerPage = createAsyncThunk("banner/page", async (body:GetPageRequest)=>{
    const response = await api.get(`${process.env.SERVER_URL}/api/v1/banner/page?pageNumber=${body.pageNumber}&pageSize=${body.pageSize}`)
    console.log(response.data)
    return response.data
})



interface BannerImage {
    imgName:string
}

export const getBannerImage = createAsyncThunk("banner/getImage", async (body:BannerImage)=> {
    console.log('getting image')
    const response = await ngrokInstance.get(`${process.env.SERVER_URL}/api/v1/banner/image/${body.imgName}`, {responseType:"blob"})
    const imgUrl = URL.createObjectURL(response.data)
    console.log('url is : ' + imgUrl)
    return imgUrl
})

export const getRecentBanner = createAsyncThunk("banner/recentBanner", async(body)=>{
    const response = await ngrokInstance.get(`${process.env.SERVER_URL}/api/v1/banner/last`)
    return response.data;
})

//
// export const updateBanner = createAsyncThunk("banner/update", async (body:UpdateItem<any>)=>{
//     const response = await api.put(`${process.env.SERVER_URL}/api/v1/banner`, body)
//     return response.data
// })
// export const getBannerById = createAsyncThunk("banner/getSingle", async (body:GetByIdRequest)=>{
//     const response = await api.get(`${process.env.SERVER_URL}/api/v1/banner/${body.id}`)
//     return response.data
// })