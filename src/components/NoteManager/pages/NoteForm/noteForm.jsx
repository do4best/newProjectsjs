import React, {useState} from 'react';
import {PencilFill, TrashFill} from "react-bootstrap-icons";
import s from './sytle.module.css';

function NoteForm({title,onClickEdit,onClickDelete,onSubmit}) {
    const [formValue,setFormValue] = useState({title:"",content:""})
    const updateFormValue=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormValue({...formValue,[name]:value})
    }
    const actionIcons=(
        <>
<div className="col-1">
    {onClickEdit && <PencilFill/>}
</div>
            <div className="col-1">
                { onClickDelete &&  <TrashFill/>}
            </div>

        </>
    )
    const titleInput=(
        <>
            <label htmlFor="" className="form-control">Title</label>
            <input onChange={""} type="text" name={"title"} className={"form-control"}/>
        </>
    )
    const contentInput=(
        <>
            <label htmlFor="" className="form-control">Content</label>
            <textarea onChange={""} type="text" name={"content"} className={"form-control"} rows={"5"}/>
        </>
    )
    const submitBtn =(
        <div>
            <div className="btn btn-primary" onClick={()=>  updateFormValue}>Submit</div>
        </div>
    )
    return (
        <>
            <div className={s.container}>
                <div className={"row justify-content-around space-between"}>
                    <div className={"col-10"}>
                        <h2 className={`mb-3 `}>{title}</h2>
                    </div>

                    {actionIcons}
                    <div></div>
                </div>
                <div className={`mb-3 ${s.title_input_container}`}>{titleInput}</div>
                <div className={"mb-3"}>{contentInput}</div>
                {onSubmit && {submitBtn}}
            </div>
        </>
    );
}

export default NoteForm;