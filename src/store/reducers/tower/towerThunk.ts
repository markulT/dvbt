import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {ngrokInstance} from "@/api/authApi";


export const getAllTowers = createAsyncThunk("tower/getAll", async ()=>{
    const response = await ngrokInstance.get(`${process.env.SERVER_URL}/api/v1/towers/all`)
    return response.data
})