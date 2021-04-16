import React from 'react';
import Feature from './features.jsx';

const ProductOverview = (props) => {
  if (props.product.features !== undefined) {
    var features = <Feature features={props.product.features}/>
  }

  return (
    <div className='pdo_grid'>
      <div className='pdo_item1'>
        <div>{props.product.slogan}</div>
        <br></br>
        <div>{props.product.description}</div>
      </div>
      <div className='pdo_item2'>
        {features}
      </div>
    </div>
  )
}

export default ProductOverview;