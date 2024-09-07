import React from 'react';
import {Logo} from "../LogoComponent/index.jsx";
import logo from "../../../assets/logo.png"
import ButtonPrimary from "../buttonPrimary/buttonPrimary.jsx";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate()
    return (
        <>
            <div className="row" style={{background:"white",padding:"30px",boxShadow:"2px 1px 4px 1px rgba(0,0,0,0.4"}}>
                <div className="col-xs-12 col-sm-4">
                    <Logo onClick={()=>navigate("/")} title={"Afzal Note"} subtitle={"Manager Note"} image={logo}/>
                </div>
                <div className="col-xs-12 col-sm-8">
<ButtonPrimary className={"float-end"} onClick={()=>navigate("/notecreate")}>Add Note +</ButtonPrimary>
                </div>
            </div>

        </>
    );
}

export default Header;