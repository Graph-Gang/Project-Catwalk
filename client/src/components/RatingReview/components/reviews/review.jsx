import React from 'react';
// import StarRating from '../ProductDetail/components/ProductInfo/components/starRating.jsx';
// /Users/tomshibley/Project-Catwalk/client/src/components/ProductDetail/components/ProductInfo/components/starRating.jsx
const Review = (props) => (
  <li>
    <props.StarRating rating={props.review.rating}/>
    <div>{props.review.reviewer_name}</div>
    <h2>{props.review.summary}</h2>
    <div>{props.review.body}</div>
    <button>Helpful?</button>
    <div>Yes ({props.review.helpfulness})</div>

  </li>
)

export default Review;