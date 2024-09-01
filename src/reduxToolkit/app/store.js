import { configureStore } from "@reduxjs/toolkit"; 
import shoppingBoxReducer from '../features/shoppingBox/shoppingBoxSlice';

const store = configureStore({
    reducer : {
        shoppingBoxItems : shoppingBoxReducer
    }
})

export default store;