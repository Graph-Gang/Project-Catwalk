import React from 'react';
import Answer from './answer.jsx'

const AnswerList = (props) => {

  //create list of answers
  let answers = [];
  for (let key in props.q.answers) {
    answers.push(<Answer incAHelp={props.incAHelp} key={key} a={props.q.answers[key]} />)
  }


  //render the first two answers
  return (
    <div>
     <div>A: {answers.slice(0, 2)} </div>
    </div>
  )
}


export default AnswerList;