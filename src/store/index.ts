import {applyMiddleware, combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import productSlice from "@/store/reducers/productSlice";
import {authSlice} from "@/store/reducers/authSlice";
// import productReducer from "@/store/reducers/productSlice";

const rootReducer = combineReducers({
    product: productSlice.reducer,
    auth: authSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
})


export const productSliceActions = productSlice.actions;
export const authSliceActions = authSlice.actions;

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']
