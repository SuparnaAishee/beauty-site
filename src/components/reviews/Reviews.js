import React, { useEffect, useState } from 'react';
import Stars from 'react-stars-display';

const Reviews = () => {
    const route = window.location.href;

    let [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    const preReviews1 = route === 'http://localhost:3000/reviews' ? reviews : reviews.slice(0, 3);


    // console.log(reviews);
    return (
        <div className='grid justify-center '>
            {
                preReviews1.map(review =>
                    <div key={review.id} className='flex items-center my-6 p-3 border-2 rounded-lg w-96 bg-slate-200 shadow-2xl hover:bg-white'>
                        <img className=' w-1/4 rounded-full mr-6' src={review.img} alt="" />
                        <div>
                            <p className='font-bold my-3'>{review.name}</p>
                            <p>Review : {review.review}</p>
                            <div className='flex'>
                                <Stars
                                    stars={review.rating}
                                    size={30} 
                                    spacing={2} 
                                    fill='#ea9c46'
                                />

                            </div>

                        </div>


                    </div>
                )
            }
        </div>

    );
};

export default Reviews;