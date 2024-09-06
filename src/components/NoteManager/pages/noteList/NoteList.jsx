import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Textcard from "../textcard.jsx";
import {useNavigate} from "react-router-dom";
import s from './style.module.css'
import {NoteApi} from "../../api/note-api.js";
import {deleteNote} from "../../notes-slice.js";
function NoteList({noteList}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    async  function deleteNote_ (note){
        if(window.confirm("Delete Note?")){
            NoteApi.deleteById(note.id);
            dispatch(deleteNote(note))

        }
    }
return(
    <>
    <div className="row justify-content-center">
        {noteList.map((note)=>{
            return(
                <div  key={note.id}  className={s.card_container}>
                    <Textcard  title={note.title} content={note.content} subtitle={note.created_at}
                              onClick={()=>navigate("/note/"+note.id)} onClickTrash={()=>deleteNote_(note)}/>

                </div>
            )
        })

        }

    </div>
    </>
)

}
export default NoteList;