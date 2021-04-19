import React from 'react';
// import StarRating from '.../ProductDetail/components/ProductInfo/components/starRating.jsx';

const Review = (props) => (
  <li>
    <div>{props.review.reviewer_name}</div>
    <h2>{props.review.summary}</h2>
    <div>{props.review.body}</div>
  </li>
)

export default Review;