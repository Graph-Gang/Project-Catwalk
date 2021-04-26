import React from 'react';


const Search = (props) => {

  return (
    <div>
      <input className='search' onChange={(event) => {props.answerModalValues(event)}} type='text' placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS' name='search'></input>
    </div>
  )
}

export default Search;