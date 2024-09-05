import React, {useState} from 'react';
import {PencilFill, TrashFill} from "react-bootstrap-icons";
import s from './sytle.module.css';
import {ValidatryService} from "../../api/velidatorService.js";
import ButtonPrimary from "../buttonPrimary/buttonPrimary.jsx";
import FieldError from "../fieldError/fieldError.jsx";
import PropTypes from "prop-types";

const VALIDATOR={
    title:(value)=>{
        return ValidatryService.min(value,3) || ValidatryService.max(value,20)
    },
    content:(value)=>{
          return ValidatryService.min(value,2)|| ValidatryService.max(value,200)
    }
}

function NoteForm({ isEditable=true,note,title,onClickEdit,onClickDelete,onSubmit}) {
    const [formValue,setFormValue] = useState({title:note?.title,content:note?.content})
    const [formErrors,setFormErrors] = useState({title:note?.title ? undefined : true,
        content:note?.content? undefined :true})
    const updateFormValue=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setFormValue({...formValue,[name]:value})
        validateIt(name,value)
    }
    const validateIt=(fieldName,fieldValue )=>{
setFormErrors({...formErrors,[fieldName]:VALIDATOR[fieldName](fieldValue)})
    }
const hasError=()=>{
        for(const fieldName in formErrors){
            if(formErrors[fieldName]){
                return true
            }
        }
        return false
}
    const actionIcons=(
        <>
<div className="col-1">
    {onClickEdit && <PencilFill onClick={onClickEdit}/>}
</div>
            <div className="col-1">
                { onClickDelete &&  <TrashFill onClick={onClickDelete}/>}
            </div>

        </>
    )
    const titleInput=(
        <>
            <div className="mb-5">

            <label htmlFor="" className="form-control">Title</label>
            <input onChange={updateFormValue} type="text" name={"title"} className={"form-control"} value={formValue.title}/>
                <FieldError msg={formErrors.title}/> </div></>
    )
    const contentInput=(
        <>
            <div className="mb-5">
            <label htmlFor="" className="form-control">Content</label>
            <textarea onChange={updateFormValue} type="text" name={"content"} className={"form-control"} rows={"5"} value={formValue.content}/>
                <FieldError msg={formErrors.content}/> </div></>
    )
    const submitBtn =(
        <div>
            <ButtonPrimary isDisabled={hasError()} onClick={()=>onSubmit(formValue)}>Add To Do</ButtonPrimary>
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
                <div className={`mb-3 ${s.title_input_container}`}>{isEditable && titleInput}</div>
                <div className={"mb-3"}>{isEditable?contentInput:<pre>{note.content}</pre>}</div>
                 {onSubmit && submitBtn}
            </div>
        </>
    );
}

export default NoteForm;
NoteForm.propTypes={
    note:PropTypes.object,
    title:PropTypes.string,
    onClickEdit:PropTypes.func,
    onClickDelete:PropTypes.func,
    onSubmit:PropTypes.any,
    isEditable:PropTypes.any
}