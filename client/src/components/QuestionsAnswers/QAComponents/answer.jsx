import React from 'react';

const Answer = (props) => {



  return (
    <div>
      <p>A: {props.a.body}</p>
      <p>by {props.a.answerer_name} {props.a.date} | Helpful? <span>Yes</span> ({props.a.helpfulness})| <span>Report</span></p>
    </div>
  )
}


export default Answer;