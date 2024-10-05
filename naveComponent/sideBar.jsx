import React, {useState} from 'react';
import './sidebar.css'
import {sideBarData} from "./sideBarData.jsx";

function SideBar(props) {
    const [isOpen,setIsOpen] = useState(true)
    const toggleButton=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <button className="toggle-btn" onClick={toggleButton}>
                        <div className={`arrow ${isOpen ? 'left' : 'right'}`}></div>

                    </button>
                    <div className="logo">
                        <h2>{isOpen ? "My-App" : ""}</h2>
                    </div>
                </div>
                <nav className={"nav-menu"}>
                    <ul>
                        {sideBarData.map((item, id) => (
                            <li key={id}>
                                <a href={item.path}>
                                    {item.icon}
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

        </>
    );
}

export default SideBar;