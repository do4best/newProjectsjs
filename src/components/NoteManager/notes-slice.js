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
        },
        updateNote : (currenSlice,action)=>{
            const indexToDate = currenSlice.noteList.findIndex((note)=>note.id === action.payload.id)
            currenSlice.noteList[indexToDate] = action.payload
        },
        deleteNote : (currenSlice,action)=>{
            const indexToDate = currenSlice.noteList.filter((note)=>note.id !== action.payload.id)
            currenSlice.noteList = indexToDate
        }
    }
});

export const noteReducer = notesSlice.reducer;
export const {setNoteList,addNote,updateNote,deleteNote} =notesSlice.actions