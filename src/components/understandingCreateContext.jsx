import React, {createContext} from 'react';

const TextContext = createContext("")
const GrandChildA=()=>{
    return(
        <>
        <h1>Grand Child A</h1>
            <TextContext.Consumer>
              {text=><p>{text}</p>}
            </TextContext.Consumer>
        </>
    )
}
const ChildA=()=>{
    return(
        <>
        <h1>Child A</h1>
            <GrandChildA/>
        </>
    )
}
const ParentA=()=>{
    return(
        <>
        <h1>Parent A</h1>
            <ChildA/>
        </>
    )
}
function UnderstandingCreateContext(props) {
    return (
        <>
        <TextContext.Provider value={"Hello World"}>
            <ParentA/>
        </TextContext.Provider>
        </>
    );
}

export default UnderstandingCreateContext;