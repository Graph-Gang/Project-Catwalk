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
      <div className='answerListContainer'>
        <div className='item-b'><span className='question'>A:</span> </div> <div className='item-c'>{answers.slice(0, 2)}</div>
        <button className='item-c button-c' onClick={() => props.loadMore(props.q.question_id)}>Load More Answers</button>
      </div>
    )
  } else if (answers.length > 2 && props.loadMoreAnswers.includes(props.q.question_id)) {
    //load all answers with Collapse Answers Button
    return (
      <div className='answerListContainer'>
       <div className='item-b'><span className='question'>A:</span></div> <div className='item-c'>{answers}</div>
        <button className='item-c button-c' onClick={()=> {props.collapseAnswers(props.q.question_id)}}>Collapse Answers</button>
      </div>
    )
  } else {
    return (
    <div className='answerListContainer'>
      <div className='item-b'><span className='question'>A:</span></div> <div className='item-c'>{answers}</div>
    </div>
    )
  }

}


export default AnswerList;