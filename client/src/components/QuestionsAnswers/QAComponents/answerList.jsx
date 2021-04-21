import React from 'react';
import Answer from './answer.jsx'

const AnswerList = (props) => {

  //create list of answers
  let answers = [];
  //sort answers by helpfulness
  let sorted = Object.entries(props.q.answers).sort((a, b) =>  b[1].helpfulness -a[1].helpfulness)

  //a[1] = props.q.answers[key]
  //a[0] = key
  sorted.forEach((a) => {
    answers.push(<Answer incAHelp={props.incAHelp} key={a[0]} a={a[1]} />)
  })

  // for (let key in props.q.answers) {
  //   console.log('here: ', key)
  //   answers.push(<Answer incAHelp={props.incAHelp} key={key} a={props.q.answers[key]} />)
  // }


  //render the first two answers
  return (
    <div>
     <div>A: {answers.slice(0, 2)} </div>
    </div>
  )
}


export default AnswerList;