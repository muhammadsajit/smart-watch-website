import React from 'react';
import './Reviewer.css'

const Reviewer = ({reviewer}) => {
    const {img,name,rating,comment}=reviewer
    
    return (
        <div className='review-details'>
            <img src={img} alt="" />
            <div className='review-info'>
            <h4>Name:{name}</h4>
            <p>Comment:{comment}</p>
            <p>Ratings:{rating}</p>
            </div>
            
        </div>
    );
};

export default Reviewer;