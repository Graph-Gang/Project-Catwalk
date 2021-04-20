import React from 'react';
import AnswerList from './answerList.jsx'


const Question = (props) => {

  return (
    <div>
      <p>Q: {props.q.question_body}</p>
      <AnswerList q={props.q}/>
    </div>
  )
}

export default Question;