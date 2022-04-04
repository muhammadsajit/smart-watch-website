import React from 'react';
import useReviewers from '../hooks/useReviewers';
import Reviewer from '../Reviewer/Reviewer';

const Reviews = () => {
    const [reviewers, setReviewers] = useReviewers();
    return (
        <div>
                <h1 className='text--style'>What Our Customers say!</h1>
                <div className='review-container'>
                    {
                        reviewers.map(reviewer => <Reviewer
                            key={reviewer.id}
                            reviewer={reviewer}></Reviewer>)

                    }
                   
                </div>
            </div>
    );
};

export default Reviews;