import React from 'react';

const Answer = (props) => {



  return (
    <div>
      <p> {props.a.body}</p>
      <p>by {props.a.answerer_name} {props.a.date} | Helpful? <span onClick={() => {props.incAHelp(props.a.id)}}>Yes</span> ({props.a.helpfulness})| <span>Report</span></p>
    </div>
  )
}


export default Answer;