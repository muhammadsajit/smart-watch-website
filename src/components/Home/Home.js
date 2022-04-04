import React from 'react';
import watch from "../Assets/Image/watch.jpg";
import './Home.css'

const Home = () => {
    return (
        <div>
            <h1 className='heading'>Smart Watch Shop</h1>
            <div className='header-container'>
                <div className='half-width text-style'>
                  <h1>Rolex Watch choices are <span> best choice</span> </h1>
                  <h1>For everyone...</h1>
                  <p>Rolex offers a wide assortment of Oyster Perpetual and Cellini watches to suit any wrist. Discover the broad selection of Rolex watches to find a perfect combination of style and functionality.</p>
                  <button className='btn'>Live Demo</button>
                </div>
                <div className='half-width'>
                <img className='image'src={watch} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;