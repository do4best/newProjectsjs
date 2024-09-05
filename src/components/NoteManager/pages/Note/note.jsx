import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import NoteForm from "../NoteForm/noteForm.jsx";
import {NoteApi} from "../../api/note-api.js";
import {updateNote} from "../../notes-slice.js";

function Note() {
    const {noteId} = useParams()
    const note = useSelector((store)=>store.noteSlice.noteList.find((note)=>note.id === noteId))
    console.log("***",note)
    const [isEditable,setIsEditable] = useState(false)
    const dispatch = useDispatch()
    const submit= async (formValue)=>{
const noteUpdate = await NoteApi.updateById(note.id,formValue)
    dispatch(updateNote(noteUpdate))
        setIsEditable(false)
    }
    return (
        <>
        <h1>Note</h1>
            {note && (<NoteForm isEditable={isEditable?"Edit Note":isEditable}
                                title={note.title} note={note} onClickDelete={()=>alert("")}
                                onClickEdit={()=> setIsEditable(!isEditable)}
                onSubmit={isEditable && submit}/>
            )}
        </>
    );
}

export default Note;