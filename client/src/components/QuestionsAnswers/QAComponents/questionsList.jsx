import React from 'react';
import Question from './question.jsx'


const QuestionList = (props) => {


  //filter questions based on search
  let questions = [];

  if (props.questions.results !== undefined) {
    if (props.searchVal) {
      if (props.searchVal.length >= 3) {
        props.questions.results.forEach(q => {
          if (q.question_body.toLowerCase().split(' ').includes(props.searchVal.toLowerCase())) {
          //get index of matched search val to split question body to highlight matched search text
           let index = q.question_body.toLowerCase().split(' ').indexOf(props.searchVal.toLowerCase());
           let x = q.question_body.split(' ')
           let qStart = x.slice(0, index)
           let qEnd = x.slice(index + 1)
           let match = props.searchVal

           console.log(qStart)


          // let search = new RegExp(props.searchVal, 'gi')
          // let question = q.question_body;
          // question = question.replace(search, (match) => `<span>${match}</span>`)



            questions.push(<Question toggleAnswerModal={props.toggleAnswerModal} showAnswerModal={props.showAddAnswerForm} collapseAnswers={props.collapseAnswers} loadMoreAnswers={props.loadMoreAnswers} loadMore={props.loadMore} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} incQHelp={props.incQHelp} key={q.question_id} q={q} qStart={qStart} qEnd={qEnd} match={match}/> )
          }
        })
      } else {
        props.questions.results.forEach((q, index) => {
          questions.push(<Question toggleAnswerModal={props.toggleAnswerModal} showAnswerModal={props.showAddAnswerForm} collapseAnswers={props.collapseAnswers} loadMoreAnswers={props.loadMoreAnswers} loadMore={props.loadMore} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} incQHelp={props.incQHelp} key={q.question_id} q={q} /> )
        })
      }
    } else {
      props.questions.results.forEach((q, index) => {
        questions.push(<Question toggleAnswerModal={props.toggleAnswerModal} showAnswerModal={props.showAddAnswerForm} collapseAnswers={props.collapseAnswers} loadMoreAnswers={props.loadMoreAnswers} loadMore={props.loadMore} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} incQHelp={props.incQHelp} key={q.question_id} q={q} /> )
      })

    }
  }



  // generate a list of the questions
  // if(props.questions.results !== undefined) {
  //   props.questions.results.forEach((q, index) => {
  //     questions.push(<Question toggleAnswerModal={props.toggleAnswerModal} showAnswerModal={props.showAddAnswerForm} collapseAnswers={props.collapseAnswers} loadMoreAnswers={props.loadMoreAnswers} loadMore={props.loadMore} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} incQHelp={props.incQHelp} key={q.question_id} q={q} /> )
  //   })
  // }



  return (

    <div>
      {questions.slice(0, props.qCount)}
    </div>
  )
}

export default QuestionList;