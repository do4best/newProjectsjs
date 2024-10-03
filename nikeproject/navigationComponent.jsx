import React, {useState} from 'react';

import image from '../../assets/nikeimages/brand_logo.png'
import {MdDarkMode} from "react-icons/md";

function NavigationComponent(props) {
    const [darkMood,setDarkMood] = useState(false)
    const toggleDarkMode=()=>{
        setDarkMood((d)=> !d)
    }
    return (
        <>

            <nav className={`container navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between ${darkMood?'bg-dark text-light':'bg-light'}`}>
                <div className="logo">
                    <img src={image} alt="Logo"/>
                </div>
                <ul className={"nav"}>
                    <li className={"nav-item"} href={"#"}><a href="" className="nav-link">Menu</a></li>
                    <li className={"nav-item"}  href={"#"}> <a href="" className="nav-link">Location</a></li>
                <li className={"nav-item"}  href={"#"}><a href="" className="nav-link">About</a></li>
                    <li className={"nav-item"}  href={"#"}><a href="" className="nav-link">Contact</a></li>
                </ul>
                <button className={"float-end btn btn-primary"}>Login</button>
                <MdDarkMode onClick={toggleDarkMode}/>
            </nav>
        </>
    );
}

export default NavigationComponent;