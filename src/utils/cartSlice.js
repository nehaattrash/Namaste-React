import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    reducers : {
        addItems : (state,action)=>{
            //vanilla redux
            //const newState = [...state];
            //newState.items.push(action.payload);
            //return newState;
            state.items.push(action.payload);
        },
        deleteItem : (state,action)=>{
            state.items.pop();
        },
        clearItem : (state,action)=>{
            //state = ["Neha"]
            // console.log("Clear Items>>");
            // console.log(state);
            // console.log(current(state));
            state.items.length = 0;
            //return {items:[]};
        }
    }
});
console.log("Cart Slice >>>>>");
console.log(cartSlice);
export const {addItems,deleteItem,clearItem} = cartSlice.actions;
export default cartSlice.reducer;