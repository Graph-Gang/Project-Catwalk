import React from 'react';

const Characteristics = (props) => {
  let keys = Object.keys(props.characteristics);

  return (
    <div>
      {keys.map((char, i) => {
        return (<React.Fragment key={i}>
                  <div>{char}</div>
                  <input type="range" disabled value={props.characteristics[char].value} min="0" max="5"></input>
                  <div>Poor &emsp; &emsp; Perfect</div>
               </React.Fragment>)
      })}
    </div>
  )
}

export default Characteristics;

{/* <div>Comfort</div>
<input type="range" disabled value="25"></input>
<div>Uncomfortable               Perfect</div> */}