import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment,decrement} from "./counterSlice.jsx";

function IncrementCounter() {
    const count = useSelector((state)=>state.Counter.value)
    const [counter,setCounter] = useState(0)
    const dispatch = useDispatch()
    return (
        <>
            <h1>Increment Counter Example via Redux toolkit</h1>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment(1))}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement(1))}
                >
                    Decrement
                </button>
            </div>
        </>
    );
}

export default IncrementCounter;