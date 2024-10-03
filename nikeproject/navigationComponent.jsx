import React from 'react';

import image from '../../assets/nikeimages/brand_logo.png'
import './style.css';
function NavigationComponent(props) {
    return (
        <>

            <nav className={'container'}>
                <div className="logo">
                    <img src={image} alt="Logo"/>
                </div>
                <ul>
                    <li href={"#"}>Menu</li>
                    <li  href={"#"}>Location</li>
                    <li  href={"#"}>About</li>
                    <li  href={"#"}>Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </>
    );
}

export default NavigationComponent;