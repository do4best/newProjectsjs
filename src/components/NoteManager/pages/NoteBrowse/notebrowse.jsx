import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Textcard from "../textcard.jsx";
import NoteList from "../noteList/NoteList.jsx";

function Notebrowse(props) {

    return (
        <>
            <h1>NoteBrowse</h1>
            <NoteList/>

        </>
    );
}

export default Notebrowse;