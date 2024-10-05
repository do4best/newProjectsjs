import React from 'react';
import './style.css'
import {NavLink, Route, Routes} from "react-router-dom";
function TopNaveBar(props) {
    return (
        <>
            <Routes>
      <div className="navebar">
          <div className={"logo"}>Website</div>
          <ul>
              <li><NavLink to={""}>Home></NavLink></li>
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"/services"}>Services</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
          </ul>
      </div>
            </Routes>
        </>
    );
}

export default TopNaveBar;