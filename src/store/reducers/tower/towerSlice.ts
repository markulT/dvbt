import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Tower} from "@/store/models/Tower";
import {getAllTowers} from "@/store/reducers/tower/towerThunk";
import {GetList} from "@/store/types/getList";

interface TowerSliceProps {
    list:Tower[]
}

const initialState:TowerSliceProps = {
    list:[],
}

export const towerSlice = createSlice({
    name:"tower",
    initialState,
    reducers: {
        setError() {}
    },
    extraReducers: {
        [getAllTowers.fulfilled.type]:(state, action:PayloadAction<GetList<Tower>>) => {
            state.list = action.payload.list
        }
    }
})

