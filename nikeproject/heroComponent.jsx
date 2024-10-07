
import {NavLink, Route, Routes} from "react-router-dom";
import Location from "./pages/location.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
import Home from "./pages/menu.jsx";
import Menu from "./pages/menu.jsx";
function HeroComponent(props) {
    return (
        <>


                <Routes>
                    <Route path={"/"} element={<Menu/>}/>
                    <Route path={"/location"} element={<Location/>}/>
                    <Route path={"/about"} element={<About/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>

                </Routes>
                <hr/>

            {/*<MouseEffect/>*/}
            {/*<UseReducerExample/>*/}
        </>

    );
}

export default HeroComponent;