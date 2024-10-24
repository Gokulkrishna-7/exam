import { configureStore } from "@reduxjs/toolkit";
import AddSlice from './AddSlice'
const BookStore=configureStore({
    reducer:{
        AddReducer:AddSlice,
        
    }

})