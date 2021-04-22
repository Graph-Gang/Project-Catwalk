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
      <QuestionList incAHelp={props.incAHelp} incQHelp={props.incQHelp} questions={props.questions}/>
      <AddAnswer />
      <AddQuestion />
    </div>

  )
}

export default QuestionsAnswers;