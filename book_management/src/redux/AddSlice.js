import { createSlice } from "@reduxjs/toolkit";

const AddSlice =createSlice({
    name: "AddBook",
    initialState:{
        books:[],
    },
    reducers: {

        addBook:(state,action)=>{
            state.wishlist.push(action.payload)
        },
        deleteBook:(state,action)=>{
            state.books=state.books.filter(item=>item.name!=action.payload)
        }
    }
})

export const{addBook,deletBook}=AddSlice.actions
export default AddSlice.reducer