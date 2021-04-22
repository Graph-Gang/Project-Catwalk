import React from 'react';
import QuestionList from './QAComponents/questionsList.jsx';
import Search from './QAComponents/search.jsx';
import AddAnswer from './QAComponents/addAnswer.jsx';
import AddQuestion from './QAComponents/addQuestion.jsx';



const QuestionsAnswers = (props) => {


  return (
    <div>
      <h4>Questions & Answers </h4>
      <Search />
      <QuestionList toggleAnswerModal={props.toggleAnswerModal} collapseAnswers={props.collapseAnswers} loadMoreAnswers={props.loadMoreAnswers} loadMore={props.loadMore} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} incQHelp={props.incQHelp} questions={props.questions}/>
      <AddAnswer product={props.product} answerModalQ={props.answerModalQ} showAnswerModal={props.showAnswerModal} />
      <AddQuestion />
    </div>

  )
}

export default QuestionsAnswers;