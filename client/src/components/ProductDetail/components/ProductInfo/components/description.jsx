import React from 'react';

const Description = (props) => {

  return (
    <div className='description_section'>
      <div className='product_slogan'>{props.product.slogan}</div>
      <p className='product_description'>{props.product.description}</p>
    </div>
  )
}

export default Description;