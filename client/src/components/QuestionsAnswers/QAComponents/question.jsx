import React from 'react';
import AnswerList from './answerList.jsx'


const Question = (props) => {

  return (
    <div className='border'>
      <div className='border'>Q: {props.q.question_body} <span className='sendRight'>Helpful? <button onClick={() => {props.incQHelp(props.q.question_id)}}>Yes</button> ({props.q.question_helpfulness}) | <button onClick={() => {props.toggleAnswerModal(props.q)}}>Add Answer</button></span></div>
      <AnswerList collapseAnswers={props.collapseAnswers} loadMoreAnswers={props.loadMoreAnswers} loadMore={props.loadMore} q={props.q} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} q={props.q}/>
    </div>
  )
}

export default Question;