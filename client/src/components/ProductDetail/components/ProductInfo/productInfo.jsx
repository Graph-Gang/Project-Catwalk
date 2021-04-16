import React from 'react';

const ProductInfo = (props) => (
  <div>
    <div className='product_category'>
      {props.product.category}
    </div>
    <div className='product_name'>
      {props.product.name}
    </div>
  </div>
)

export default ProductInfo;