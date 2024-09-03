import React from 'react';
import NoteForm from "../NoteForm/noteForm.jsx";
import {NoteApi} from "../../api/note-api.js";
import {useDispatch} from "react-redux";
import {addNote} from "../../notes-slice.js";
import {useNavigate} from "react-router-dom";

function Notecreate(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submit=(formvalue)=>{
        const createNote=  NoteApi.create({...formvalue,create_at:new Date().toLocaleDateString()})

        dispatch(addNote(createNote))
        alert("The Note has been created")
        navigate("/")
    }
    return (
        <>
            <NoteForm title={"New Note"} onSubmit={submit}/>
        </>
    );
}

export default Notecreate;