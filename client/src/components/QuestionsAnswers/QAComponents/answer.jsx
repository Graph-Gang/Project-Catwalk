import React from 'react';

const Answer = (props) => {

  //create and set reported property to handle displaying if an answer has been reported
  if (props.reported.includes(props.a.id)) {
    props.a.reported = "Reported"
  } else {
    props.a.reported = 'Report';
  }

  return (
    <div>
      <p> {props.a.body}</p>
      <p>by {props.a.answerer_name} {props.a.date} | Helpful? <span onClick={() => {props.incAHelp(props.a.id)}}>Yes</span> ({props.a.helpfulness})| <span onClick={() => {props.reportA(props.q, props.a)}}>{props.a.reported}</span></p>
    </div>
  )
}


export default Answer;