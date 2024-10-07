
import React from 'react';
import img1 from './../../../assets/nikeimages/amazon.png'
import img2 from './../../../assets/nikeimages/flipkart.png'
import img3 from './../../../assets/nikeimages/hero-image.png'

function Menu(props) {
    return (
        <>
            <main className="d-flex align-content-center container mt-3 vh-100 mt-5">
                <div className="d-flex flex-column gap-5">
                    <h1 className={"display-5 fw-bolder  text-center"}>YOUR FEET DESERVE THE BEST</h1>
                    <p className={"fw-bold "}>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                        YOUR FEET
                        DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="hero-btn">
                        <button className={"btn btn-success me-5"}>Shop Now</button>
                        <button className={"btn btn-outline-dark"}>Category</button>
                    </div>
                    <div className="fs-5 mb-3 fw-bold">
                        <p>Also Available On</p>
                        <div className="d-flex gap-3">
                            <img src={img1} alt=""/>
                            <img src={img2} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={img3} alt=""/>
                </div>

            </main>
        </>
    )
        ;
}

export default Menu;