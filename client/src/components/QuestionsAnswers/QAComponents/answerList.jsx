import React from 'react';
import Answer from './answer.jsx'

const AnswerList = (props) => {

  let answers = [];
  for (let key in props.q.answers) {
    answers.push(<Answer key={key} a={props.q.answers[key]} />)
  }


  return (
    <div>
      {answers.slice(0, 2)}
    </div>
  )
}


export default AnswerList;