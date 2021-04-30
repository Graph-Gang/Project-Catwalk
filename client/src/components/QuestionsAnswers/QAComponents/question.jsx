import React from 'react';
import AnswerList from './answerList.jsx'


const Question = (props) => {
  let question = props.q.question_body
  if (props.qStart) {
    console.log(props.qStart.join(' '))
  }


  return (
    <div className='border'>
      <div className='border question'>Q: {props.match ? props.qStart.join(' ') : question} <mark>{props.match ? props.match : null}</mark> {props.match ? props.qEnd.join(' ') : null}<span className='sendRight question-sub'>Helpful? <button className='button-a' onClick={() => {props.incQHelp(props.q.question_id)}}>Yes</button> ({props.q.question_helpfulness}) | <button className='button-a' onClick={() => {props.toggleAnswerModal(props.q)}}>Add Answer</button></span></div>
      <AnswerList collapseAnswers={props.collapseAnswers} loadMoreAnswers={props.loadMoreAnswers} loadMore={props.loadMore} q={props.q} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} q={props.q}/>
    </div>
  )
}

export default Question;