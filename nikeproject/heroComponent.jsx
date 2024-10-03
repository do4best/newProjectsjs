import React from 'react';
import img1 from '../../assets/nikeimages/amazon.png'
import img2 from '../../assets/nikeimages/flipkart.png'
import img3 from '../../assets/nikeimages/hero-image.png'
function HeroComponent(props) {
    return (
        <>
            <main className="hero container">
                <div className="hero-content">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
                    <div className="hero-btn">
                        <button>Shop Now</button>
                        <button className={"btn-secondary"}>Category</button>
                    </div>
                    <div className="shopping">
                        <p>Also Available On</p>
                        <div className="brand-icons">
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

    );
}

export default HeroComponent;