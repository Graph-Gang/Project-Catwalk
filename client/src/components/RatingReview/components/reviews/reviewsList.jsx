import React from 'react';
import Review from './review.jsx';


const List = (props) => {
  if (props.filter.length) {
    return(
      <div id="review-list-container">
        <ul>
          {props.reviews.map((review, index) => {
            if (props.filter.includes(review.rating)) {
              return <Review
              key={index}
              review={review}
              bigPhoto={props.bigPhoto}
              bigPhotoUrl={props.bigPhotoUrl}
              onClose={props.onClose}
              showPhoto={props.showPhoto}
              StarRating={props.StarRating}/>
            } else {
              return null;
            }
          })}
        </ul>
      </div>
    )
  } else {
    return(
      <div id="review-list-container">
      <ul>
        {props.reviews.map((review, index) => {
          return <Review
          key={index}
          review={review}
          bigPhoto={props.bigPhoto}
          bigPhotoUrl={props.bigPhotoUrl}
          onClose={props.onClose}
          showPhoto={props.showPhoto}
          StarRating={props.StarRating}/>
        })}
      </ul>
    </div>
    )
  }
}

export default List;