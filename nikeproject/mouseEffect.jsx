import React, {useEffect, useState} from 'react';

function MouseEffect(props) {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const getRandomColor=()=>{
        let letters = '0123456789ABCDEF';
        let color='#';
        for(let i=0;i<6; i++){
            color += letters[Math.floor(Math.random()*16)]
        }
        return color;
    }
    const mousePosition=(e)=>{
        console.log("mouse")
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        window.addEventListener('mousemove',mousePosition)
        let body = document.querySelector('body')
        body.style.background = getRandomColor()
    }, []);

    return (
        <>




        </>
    );
}

export default MouseEffect;