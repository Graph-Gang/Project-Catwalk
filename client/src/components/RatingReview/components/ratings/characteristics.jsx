import React from 'react';

const Characteristics = (props) => {
  let keys = Object.keys(props.characteristics);

  return (
    <div>
      {keys.map((char, i) => {
        return (<div className="characteristic-container" key={i}>
                  <div>{char}</div>
                  <span className="characteristic-pointer" style={{ left: `${(props.characteristics[char].value - 1) * 100 / 4}%` }}>&#x25BE;</span>
                  {/* <input type="range" disabled value={props.characteristics[char].value} min="0" max="5"></input> */}
                  <div className="characteristic-bar">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                  <span className="poor">Poor</span>
                  <span className="perfect">Perfect</span>
                  {/* <div>Poor &emsp; &emsp; Perfect</div> */}
               </div>)
      })}
    </div>
  )
}

export default Characteristics;

{/* <div>Comfort</div>
<input type="range" disabled value="25"></input>
<div>Uncomfortable               Perfect</div> */}