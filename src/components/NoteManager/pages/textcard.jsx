import React, {useState} from 'react';
import {Trash} from "react-bootstrap-icons";
import s from "./NoteBrowse/style.module.css"

function Textcard({title,content,subtitle,onClick,onClickTrash}) {
    const [isHovered ,setIsHovered] = useState(false)
    const [isTrashHovered, setIsTrashHovered] =useState(false)
    function onClickTrash_(e){
        onClickTrash();
        e.stopPropagation()
    }
    return (
        <>

            <div onClick={onClick} className={`card ${s.container}`} style={{borderColor:isHovered?"#0d5efd":"transparent"}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
                <div className={`card-body ${s.title_row}`} >
                    <h5 className="card-title">{title} </h5>
<Trash size={25} onMouseEnter={()=>setIsTrashHovered(true)} onMouseLeave={()=>setIsTrashHovered(false)} style={{color:isTrashHovered?"#FF7373":"#b8b8"}} onClick={onClickTrash_}/>
                </div>    <h6 className={`card-subtitle mb-2 text-body-secondary `}>{subtitle}</h6>
                    <p className={`card-text ${s.text_content}`}>{content}</p>


            </div>
        </>
    );
}

export default Textcard;