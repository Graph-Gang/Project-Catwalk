import React from 'react';
import List from './components/reviews/reviewsList.jsx';


const RatingReview = (props) => (
  <div>
    <List reviews={props.reviews}/>
  </div>
)

export default RatingReview;