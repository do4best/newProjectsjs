import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name:"noteSlice",
    initialState:{
        noteList:[]
    },
    reducers:{
        setNoteList:(currentSlice,action)=>{
            currentSlice.noteList = action.payload;
        }
    }
});
export const noteReducer = notesSlice.reducer;
export const {setNoteList} =notesSlice.actions