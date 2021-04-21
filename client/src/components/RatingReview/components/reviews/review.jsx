import React from 'react';
import { DateTime } from 'luxon';


const Review = (props) => {

  const formatted = DateTime
  .fromISO(props.review.date)
  .toLocaleString(DateTime.DATETIME_MED)
// {DateTime.fromIso(props.review.date)}

  return(
    <li>
      <props.StarRating rating={props.review.rating}/>
      <div>{props.review.reviewer_name}</div>
      <div>{formatted}</div>
      <h2>{props.review.summary}</h2>
      <div>{props.review.body}</div>
      <button>Helpful?</button>
      <div>Yes ({props.review.helpfulness})</div>

    </li>
  )
}

export default Review;