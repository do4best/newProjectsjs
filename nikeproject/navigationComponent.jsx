import React, {useState} from 'react';

import image from '../../assets/nikeimages/brand_logo.png'
import {MdDarkMode} from "react-icons/md";
import DarkLight from "./darkLight.jsx";
import MouseEffect from "./mouseEffect.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Location from "./pages/location.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Home from "./pages/menu.jsx";
import Menu from "./pages/menu.jsx";

function NavigationComponent(props) {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', newTheme);
        setTheme(newTheme);
    };

    const containerStyles = {
        background: theme === 'light' ? '#666' : '#DDD',
        width: '50px',
        height: '25px',
        borderRadius: '12.5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '2px',
        cursor: 'pointer',
        boxSizing: 'border-box',
    };

    const buttonStyles = {
        width: '21px',
        height: '21px',
        borderRadius: '50%',
        backgroundColor: theme === 'light' ? '#FFF' : '#333',
        transition: 'transform 0.25s ease-out',
        transform: theme === 'light' ? 'translateX(0)' : 'translateX(24px)',
    };
    return (
        <>

            <nav
                className={`container navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between `}>
                <div className="logo">
                    <img src={image} alt="Logo"/>
                </div>
                <ul className={"nav"}>
                    <li className={"nav-item"}><NavLink to="/" className="nav-link">Menu</NavLink></li>
                    <li className={"nav-item"}><NavLink to="/location" className="nav-link">Location</NavLink></li>
                    <li className={"nav-item"}><NavLink to="/about" className="nav-link">About</NavLink></li>
                    <li className={"nav-item"}><NavLink to={'/contact'} className="nav-link">Contact</NavLink></li>
                </ul>
                <button className={"float-end btn btn-primary"}>Login</button>
                <DarkLight/>


            </nav>

            <MouseEffect/>
        </>
    );
}

export default NavigationComponent;