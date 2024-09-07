import React, {useState} from 'react';
import {Link} from "react-router-dom";

import NoteList from "../noteList/NoteList.jsx";
import {useSelector} from "react-redux";

import SearchBar from "../searchBar/searchBar.jsx";

function Notebrowse() {
const noteList = useSelector((store)=>store.noteSlice.noteList)
    const [searchTerm,setSearchTerm] = useState([])
    const filterNoteList = noteList.filter((note)=>{
        const containsTitle= note.title.toUpperCase().includes(searchTerm.toUpperCase())
        const containsContent= note.content.toUpperCase().includes(searchTerm.toUpperCase())
        return containsTitle || containsContent;
    })
    return (
        <>
            <div className="row justify-content-center mb-5">
                <div className="col-sm-12 col-md-4">
            <SearchBar onTextChange={setSearchTerm} placeholder={"Search the Note"}/>
            {noteList?.length === 0 && (
                <div className={"d-flex justify-content-center"}>
                    <span>
                        You don have any note,Do you want to {" "}
                        <Link to={"/note/new"}>Wanna create one</Link>
                    </span>
                </div>
            )}</div></div>
            <NoteList noteList={filterNoteList}/>

        </>
    );
}

export default Notebrowse;