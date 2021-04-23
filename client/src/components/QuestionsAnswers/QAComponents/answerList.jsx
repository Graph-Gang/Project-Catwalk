import React from 'react';
import Answer from './answer.jsx'

const AnswerList = (props) => {

  //create list of answers
  let answers = [];
  //sort answers by helpfulness
  let sorted = Object.entries(props.q.answers).sort((a, b) =>  b[1].helpfulness -a[1].helpfulness)

  //build answers array
  sorted.forEach((a) => {
    answers.push(<Answer q={props.q} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} key={a[0]} a={a[1]} />)
  })

  //if there are not more than two answers and loadMoreAnswers does not include the question id
  if (answers.length > 2 && !props.loadMoreAnswers.includes(props.q.question_id)) {
    //render two answers with a load more answers button
    //load more answers will add the question id to loadMoreAnswers in state when clicked
    return (
      <div>
        A: {answers.slice(0, 2)}
        <button onClick={() => props.loadMore(props.q.question_id)}>Load More Answers</button>
      </div>
    )
  } else if (answers.length > 2 && props.loadMoreAnswers.includes(props.q.question_id)) {
    //load all answers with Collapse Answers Button
    return (
      <div>
        A: {answers}
        <button onClick={()=> {props.collapseAnswers(props.q.question_id)}}>Collapse Answers</button>
      </div>
    )
  } else {
    return (
    <div>
      A: {answers}
    </div>
    )
  }

}


export default AnswerList;