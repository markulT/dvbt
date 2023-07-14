import {applyMiddleware, combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import productSlice from "@/store/reducers/products/productSlice";
import {authSlice} from "@/store/reducers/authSlice";
import {categorySlice} from "@/store/reducers/category/categorySlice";
import {orderSlice} from "@/store/reducers/orders/orderSlice";
import {towerSlice} from "@/store/reducers/tower/towerSlice";
import {bannerSlice} from "@/store/reducers/banner/bannerSlice";
// import productReducer from "@/store/reducers/productSlice";

const rootReducer = combineReducers({
    product: productSlice.reducer,
    auth: authSlice.reducer,
    category: categorySlice.reducer,
    order:orderSlice.reducer,
    tower:towerSlice.reducer,
    banner:bannerSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
})


export const productSliceActions = productSlice.actions;
export const authSliceActions = authSlice.actions;
export const categorySliceActions = categorySlice.actions;
export const orderSliceActions = orderSlice.actions;
export const towerSliceActions = towerSlice.actions
export const bannerSliceActions = bannerSlice.actions

//@ts-ignore
export type RootState = ReturnType<typeof rootReducer>
//@ts-ignore
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
