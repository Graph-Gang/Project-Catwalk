import React from 'react';
import Question from './question.jsx'


const QuestionList = (props) => {

  // generate a list of the questions
  let questions = [];
  if(props.questions.results !== undefined) {
    props.questions.results.forEach((q, index) => {
      questions.push(<Question reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} incQHelp={props.incQHelp} key={q.question_id} q={q} /> )
    })
  }

  //on load, return up to 4 questions

  return (

    <div>
      List of Questions
      {questions.slice(0, 4)}
    </div>
  )
}

export default QuestionList;