import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name:"noteSlice",
    initialState:{
        noteList:[]
    },
    reducers:{
        setNoteList:(currentSlice,action)=>{
            currentSlice.noteList = action.payload;
        },
        addNote : (currenSlice,action)=>{
            currenSlice.noteList.push(action.payload)
        }
    }
});
export const noteReducer = notesSlice.reducer;
export const {setNoteList,addNote} =notesSlice.actions