import React, {useEffect, useState} from 'react';
import {ThemeProvider} from "next-themes";
import DarkLight from "./darkLight.jsx";

function Themes({children}) {
    const [state,setState] = useState(false)
    useEffect(() => {
        setState(true)
    }, []);
    if(!state){
        return  null
    }
    return (
        <>
        <ThemeProvider attribute={'class'}>
            <DarkLight/>
            {children}
        </ThemeProvider>

        </>
    );
}

export default Themes;