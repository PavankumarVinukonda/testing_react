import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk('fetchProducts',async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    return response.json();
})

const productSlice = createSlice({
    name:'product',
    initialState:{
        isLoading:false,
        data:null,
        error:false
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending,(state,action) => {
            state.isLoading=true;
        });
        builder.addCase(fetchProducts.fulfilled,(state,action) => {
            state.isLoading = false;
            state.data= action.payload;
            state.error=false
        })
        builder.addCase(fetchProducts.rejected,(state,action) => {
            state.error = true;
            isLoading=true;
            console.log('err',action.payload)
        })
    }
})

export default productSlice?.reducer;