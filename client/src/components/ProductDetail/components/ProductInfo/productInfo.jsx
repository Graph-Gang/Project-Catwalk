import React from 'react';
import StarRating from './components/starRating.jsx';

const ProductInfo = (props) => (
  <div>
    <div className='star_section'>
      <StarRating />
      <div className='readReviews'>
        <a href='#Review_Section'>
          Read all reviews
        </a>
      </div>
    </div>
    <div className='product_category'>
      {props.product.category}
    </div>
    <div className='product_name'>
      {props.product.name}
    </div>
  </div>
)

export default ProductInfo;