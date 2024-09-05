import React from 'react';
import {useSelector} from "react-redux";
import Textcard from "../textcard.jsx";
import {useNavigate} from "react-router-dom";
import s from './style.module.css'
function NoteList() {
    const noteList = useSelector((store) => store.noteSlice.noteList)
    const navigate = useNavigate()
return(
    <>
    <div className="row justify-content-center">
        {noteList.map((note)=>{
            return(
                <div  key={note.id}  className={s.card_container}>
                    <Textcard  title={note.title} content={note.content} subtitle={note.created_at}
                              onClick={()=>navigate("/note/"+note.id)} onClickTrash={()=>alert("noteTrash")}/>

                </div>
            )
        })

        }

    </div>
    </>
)

}
export default NoteList;