import React from 'react';
import AnswerList from './answerList.jsx'


const Question = (props) => {

  return (
    <div>
      <div>Q: {props.q.question_body} <span>Helpful? <span onClick={() => {props.incQHelp(props.q.question_id)}}>Yes ({props.q.question_helpfulness})</span>| Add Answer</span></div>
      <AnswerList incAHelp={props.incAHelp} q={props.q}/>
    </div>
  )
}

export default Question;