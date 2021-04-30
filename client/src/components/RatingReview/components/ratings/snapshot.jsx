import React from 'react';
import Characteristics from './characteristics.jsx';

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
  let recommended = Math.floor((props.ratings.recommended.true / rate.reviews) * 100);

  return (
    <div id="rating-snapshot">
      <div>
        <span>{rounded}</span>
        <props.StarRating rating={rate.average}/>
        <span>Out of {rate.reviews} reviews</span>
      </div>
      <div>
        <div>{recommended}% of reviews recommend this product</div>
      </div>
      <div id="snapshot-filter-container">
        <div>
          <span onClick={() => props.onClick(5)}>5 stars</span>
          <progress onClick={() => props.onClick(5)} min="0" max="100" value={((props.ratings.ratings['5'] || 0) / rate.reviews) * 100}></progress>
        </div>
        <div>
          <span onClick={() => props.onClick(4)}>4 stars</span>
          <progress onClick={() => props.onClick(4)} min="0" max="100" value={((props.ratings.ratings['4'] || 0) / rate.reviews) * 100}></progress>
        </div>
        <div>
          <span onClick={() => props.onClick(3)}>3 stars</span>
          <progress onClick={() => props.onClick(3)} min="0" max="100" value={((props.ratings.ratings['3'] || 0) / rate.reviews) * 100}></progress>
        </div>
        <div>
          <span onClick={() => props.onClick(2)}>2 stars</span>
          <progress onClick={() => props.onClick(2)} min="0" max="100" value={((props.ratings.ratings['2'] || 0) / rate.reviews) * 100}></progress>
        </div>
        <div>
          <span onClick={() => props.onClick(1)}>1 stars</span>
          <progress onClick={() => props.onClick(1)} min="0" max="100" value={((props.ratings.ratings['1'] || 0) / rate.reviews) * 100}></progress>
        </div>
      </div>
      {props.filter.length ? <button onClick={props.removeFilter}>Remove all filters</button> : null}
      <div>
        <Characteristics characteristics={props.ratings.characteristics}/>
      </div>
    </div>
  )
}

export default Snapshot;