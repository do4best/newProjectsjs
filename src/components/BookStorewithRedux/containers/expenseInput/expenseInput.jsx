import React, {useState} from 'react';
import s from './style.module.css'
import {addExpenseAction} from "../BookStorewithRedux/store/expenseSlide.js";
import {useDispatch} from "react-redux";
function ExpenseInput() {
    const [expense,setExpense] = useState("")
    const [price,setPrice] = useState(0)
    const dispatch = useDispatch()
    const submit=(e)=>{
        e.preventDefault()
        dispatch(addExpenseAction({name:expense,price}))
        console.log("Submit")
    }
    const handelItem=(e)=>{
        setExpense(e.target.value)
    }
    const handelPrice=(e)=>{
        setPrice(e.target.value)
    }
    return (
        <>
            <form onSubmit={submit}>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-5 col-md-4 mb-2">
                        <input type="text" className={"form-control"}  placeholder={"...Apple"} onChange={handelItem}/>
                    </div>
                    <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
                        <input type={"text"}    className={"form-control"} placeholder={"ex:3.09"} onChange={handelPrice}/>
                    </div>
                    <div className="col-12 col-sm-2 col-md-4 col-lg-4 mb-2">
                        <button type={"submit"} className={`btn btn-primary ${s.btn}`}>Add</button>
                    </div>
                    </div>
            </form>
        </>
);
}

export default ExpenseInput;