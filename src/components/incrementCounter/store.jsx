import {combineReducers,configureStore} from "@reduxjs/toolkit";
import {counterSlice} from "./counterSlice.jsx";
import {persistStore,persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"


const store = configureStore({
    reducer:{
        Counter:counterSlice.reducer
    },
})


export {store}