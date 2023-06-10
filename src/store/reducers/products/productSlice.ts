import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchProducts} from "@/store/reducers/ActionCreators";
import {
    getProductImage,
    getProductPage,
    getProductsByCategory,
    getSingleProduct, searchProducts
} from "@/store/reducers/products/productThunk";
import {Product} from "@/store/models/Product";
import {GetPageResponse} from "@/store/types/GetPage";
import {GetSingle} from "@/store/types/getSingle";


interface ProductState {
    products:Product[],
    isLoading:boolean,
    error:string,
    length:number,
    currentImageUrl:string,
    currentItem:Product,
    searchResult:Product[]
}

const initialState:ProductState = {
    products:[],
    isLoading:false,
    error:'',
    length:0,
    currentImageUrl:'',
    currentItem:null as Product,
    searchResult:[]
}

export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers: {
        fetchProducts(state) {
            state.isLoading = true;
        },
        fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
            state.isLoading = false;
            state.products = action.payload;
            state.error = '';
        },
        fetchProductsError(state, action:PayloadAction<string>) {

        }
    },
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action:PayloadAction<Product[]>) => {
            state.isLoading = false;
            state.products = action.payload;
            state.error = '';
        },
        [fetchProducts.pending.type]: (state, action:PayloadAction<Product[]>) => {
            state.isLoading = true;
        },
        [fetchProducts.rejected.type]: (state, action:PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        [getProductsByCategory.fulfilled.type]: (state, action:PayloadAction<GetPageResponse<Product>>) => {
            state.products = action.payload.page;
            state.length = action.payload.length;
        },
        [getProductPage.fulfilled.type]: (state, action:PayloadAction<GetPageResponse<Product>>) => {
            state.products = action.payload.page;
            state.length = action.payload.length;
        },
        [getProductImage.fulfilled.type]:(state, action:PayloadAction<Blob>) => {
            state.currentImageUrl = action.payload;
        },
        [getSingleProduct.fulfilled.type]: (state, action:PayloadAction<GetSingle<Product>>) => {
            state.currentItem = action.payload.item;
        },
        [searchProducts.fulfilled.type]:(state, action:PayloadAction<Product[]>) => {
            state.searchResult = action.payload;
        }
    }
})

export default productSlice;