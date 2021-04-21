import React from 'react';
import AnswerList from './answerList.jsx'


const Question = (props) => {

  return (
    <div>
      <div>Q: {props.q.question_body} <span>Helpful? Yes | Add Answer</span></div>
      <AnswerList q={props.q}/>
    </div>
  )
}

export default Question;