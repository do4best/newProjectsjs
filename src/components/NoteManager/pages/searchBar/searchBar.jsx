import React from 'react';
import {Search as SearchIcon} from "react-bootstrap-icons";

function SearchBar({onTextChange,placeholder}) {
    const iconPosition={
        display:"absolute",
        marginTop:"15px",
        marginLeft:"25px",
        color:"#b8b8b8"
    }
    const inputPosition={
        borderRadius:"30px",
        height:"50px",
        paddingLeft:"70px",
        width:"100%",
        borderColor:"transparent",
        boxShadow:"0px 4px 4px 0px rgba(0,0,0,0.2)"
    }
    return (
        <>

        <SearchIcon size={25} className={""} style={iconPosition} />

            <input type="text" style={inputPosition} className={""} onChange={(e)=>onTextChange(e.target.value)} placeholder={placeholder}/>
            </>
    );
}

export default SearchBar;