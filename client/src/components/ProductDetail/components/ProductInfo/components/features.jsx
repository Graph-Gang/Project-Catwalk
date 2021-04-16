import React from 'react';

const Feature = (props) => {
  if (props.product.features !== undefined) {
    var features = props.product.features.map((feature, i) =>
      <li key={i}>
        {feature.feature} made of {feature.value}
      </li>
    )
  }

  return (
    <ul>
      {features}
    </ul>
  )
}


export default Feature;