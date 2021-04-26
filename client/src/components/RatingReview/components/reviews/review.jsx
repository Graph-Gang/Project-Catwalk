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
      <h3>{props.review.summary}</h3>
      <div>{props.review.body}</div>
      {props.review.photos ?
        props.review.photos.map((photo, i) => {
          return <img onClick={props.showPhoto} name={photo.url} key={i} src={photo.url} width="100" height="50"/>
        })
      : null}
      {props.bigPhoto ?
        <img src={props.bigPhotoUrl} onClick={props.showPhoto} className="bigPhotoModal"/>
      : null}
      {props.review.recommend ?
      <div>
        <span>I recommend this product</span>
        <img src="checkmark.png" className='reviewCheckMark'/>
      </div>
      : null}
      <button>Helpful?</button>
      <div>Yes ({props.review.helpfulness})</div>

    </li>
  )
}

export default Review;