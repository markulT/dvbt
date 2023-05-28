import {applyMiddleware, combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import productSlice from "@/store/reducers/productSlice";
// import productReducer from "@/store/reducers/productSlice";

const rootReducer = combineReducers({
    product:productSlice.reducer
})

export const setupStore = () => {
    return configureStore({
            reducer: rootReducer,
    })
}

export const productSliceActions = productSlice.actions;

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
