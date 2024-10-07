import React, {useReducer} from 'react';

const initialState = 0

const reducer =(state,action)=>{
    switch (action){
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state
    }
}

function UseReducerExample(props) {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <>
            <h1>{count}</h1>
            <button className={"btn btn-primary"} onClick={() => dispatch('increment')}> +</button>
            <button className={"btn btn-primary"} onClick={() => dispatch('decrement')}> -</button>
            <button className={"btn btn-primary"} onClick={() => dispatch('reset')}> Reset 0</button>
        </>
    );
}

export default UseReducerExample;