import React, {useState} from 'react';
import './style.css'
import {NavLink, Route, Routes} from "react-router-dom";
import Home from "./Pages/home.jsx";
import About from "./Pages/about.jsx";
import Services from "./Pages/services.jsx";
import Contact from "./Pages/contact.jsx";
import DarkLight from "../../nikeproject/darkLight.jsx";
function TopNaveBar(props) {
    const [isOpen,setIsOpen] = useState(false)
    const toggleMenu=()=>{
        setIsOpen(!isOpen)
        console.log("Click")
    }
    return (
        <>


      <div className="navebar">
          <div className={"logo"}>Website</div>
          <div className="menu" onClick={toggleMenu}>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
              <div className="menu-icon"></div>
          </div>
          <ul className={isOpen?"navebar-ul active":"navebar-ul"}>
              <li><NavLink to={"/"} onClick={toggleMenu}>Home</NavLink></li>
              <li><NavLink to={"/about"} onClick={toggleMenu}>About</NavLink></li>
              <li><NavLink to={"/services"} onClick={toggleMenu}>Services</NavLink></li>
              <li><NavLink to={"/contact"} onClick={toggleMenu}>Contact</NavLink></li>
              <li><DarkLight/></li>

          </ul>
      </div>  <Routes>
                <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/services"} element={<Services/>}/>
            <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </>
    );
}

export default TopNaveBar;