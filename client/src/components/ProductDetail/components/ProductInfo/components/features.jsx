import React from 'react';

const Feature = (props) => (
  <ul>
    {props.features.map((feature, i) =>
      <li key={i}>
        {feature.feature} made of {feature.value}
      </li>
    )}
  </ul>
)

export default Feature;