import {configureStore} from "@reduxjs/toolkit";
import {noteReducer} from "./notes-slice.js";

export const store = configureStore({
    reducer:{
        noteSlice:noteReducer
    }
})