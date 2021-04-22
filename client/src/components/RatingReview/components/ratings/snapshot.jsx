import React from 'react';

const Snapshot = (props) => {
  let ratings = props.ratings.ratings;
  const rating = (stars) => {
    let total = 0;
    let reviews = 0;
    for (let key in stars) {
      total += Number(key) * Number(stars[key]);
      reviews += Number(stars[key]);
    }
    return {average: total/reviews, reviews: reviews}
  }
  let rate = rating(ratings);
  let rounded = Math.round(rate.average * 10) / 10;

  return (
    <div>
      <div>
        <span>{rounded}</span>
        <props.StarRating rating={rate.average}/>
        <span>Out of {rate.reviews} reviews</span>
      </div>
      <div>
        <span>5 stars</span>
        <input type="range" disabled value="25"></input>
      </div>
      <div>
        <span>4 stars</span>
        <input type="range" disabled value="75"></input>
      </div>
      <div>
        <span>3 stars</span>
        <input type="range" disabled value="50"></input>
      </div>
      <div>
        <span>2 stars</span>
        <input type="range" disabled value="25"></input>
      </div>
      <div>
        <span>1 stars</span>
        <input type="range" disabled value="0"></input>
      </div>
    </div>
  )
}

export default Snapshot;