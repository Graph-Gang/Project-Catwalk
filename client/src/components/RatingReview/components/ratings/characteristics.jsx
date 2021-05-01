import React from 'react';

const Characteristics = (props) => {
  let keys = Object.keys(props.characteristics);

  return (
    <div>
      {keys.map((char, i) => {
        return (<div className="characteristic-container" key={i}>
                  <div>{char}</div>
                  <span className="characteristic-pointer" style={{ left: `${(props.characteristics[char].value - 1) * 100 / 4}%` }}>&#x25BE;</span>
                  <div className="characteristic-bar">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                  <span className="poor">Poor</span>
                  <span className="perfect">Perfect</span>
               </div>)
      })}
    </div>
  )
}

export default Characteristics;
