import React from 'react';
import Review from './review.jsx';


const List = (props) => (
  <div>
    <ul>
      {props.reviews.map((review, index) => {
        return <Review key={index} review={review} StarRating={props.StarRating}/>
      })}
    </ul>
  </div>
)

export default List;