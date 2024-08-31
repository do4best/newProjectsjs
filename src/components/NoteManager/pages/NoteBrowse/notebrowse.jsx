import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Textcard from "../textcard.jsx";

function Notebrowse(props) {

    return (
        <>
            <h1>NoteBrowse</h1>
            <Textcard title={"Ravi Scientific"} subtitle={"31/08/24"} content={"Hello to friends"} onClick={()=>alert("Hello")} onClickTrash={()=>alert("Trash")}/>

        </>
    );
}

export default Notebrowse;