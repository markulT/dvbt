import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getAllTowers = createAsyncThunk("tower/getAll", async ()=>{
    const response = await axios.get(`${process.env.SERVER_URL}/api/v1/towers/all`)
    return response.data
})