import React from 'react';

const Snapshot = (props) => {
  let ratings = props.ratings.ratings;
  const rating = (ratings) => {
    let total = 0;
    let reviews = 0;
    for (let key in ratings) {
      total += key * ratings[key];
      reviews += ratings[key];
    }
    return total/reviews;
  }

  return (
    <div>
      <props.StarRating rating={3.5}/>
    </div>
  )
}

export default Snapshot;