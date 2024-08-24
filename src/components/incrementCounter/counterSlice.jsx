import {createSlice} from "@reduxjs/toolkit";


export const counterSlice = createSlice({
    name:'Counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state,action)=>{
            state.value += action.payload
        },
        decrement:(state,action)=>{
            state.value -= action.payload;
        },
        incrementByAmount:(state,action)=>{
            state.value += action.payload
        }
    }
})
export const {increment,decrement,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer;
