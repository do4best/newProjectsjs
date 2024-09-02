import React from 'react';
import {PencilFill, TrashFill} from "react-bootstrap-icons";

function NoteForm({title}) {
    const actionIcons=(
        <>
<div className="col-1">
    <PencilFill/>
</div>
            <div className="col-1">
                <TrashFill/>
            </div>

        </>
    )
    const titleInput=(
        <>
            <label htmlFor="" className="form-control">Title</label>
            <input type="text" name={"title"} className={"form-control"}/>
        </>
    )
    const contentInput=(
        <>
            <label htmlFor="" className="form-control">Content</label>
            <textarea type="text" name={"content"} className={"form-control"} rows={"5"}/>
        </>
    )
    const submitBtn =(
        <div>
            <div className="btn btn-primary">Submit</div>
        </div>
    )
    return (
        <>
            <div>
                <div className={"row justify-content-around space-between"}>
                    <div className={"col-10"}>
                        <h2 className="mb-3">{title}</h2>
                    </div>

                    {actionIcons}
                    <div></div>
                </div>
                <div className={"mb-3"}>{titleInput}</div>
                <div className={"mb-3"}>{contentInput}</div>
                {submitBtn}
            </div>
        </>
    );
}

export default NoteForm;