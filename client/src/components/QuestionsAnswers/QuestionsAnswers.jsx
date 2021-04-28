import React from 'react';
import QuestionList from './QAComponents/questionsList.jsx';
import Search from './QAComponents/search.jsx';
import AddAnswer from './QAComponents/addAnswer.jsx';
import AddQuestion from './QAComponents/addQuestion.jsx';



const QuestionsAnswers = (props) => {


  return (
    <div className='container'>
      <div className='item-a'>
      <h4 className='title'>Questions & Answers </h4>
      <Search answerModalValues={props.answerModalValues}/>
      <QuestionList moreQ={props.moreQ} qCount={props.qCount} searchVal={props.searchVal} toggleAnswerModal={props.toggleAnswerModal} collapseAnswers={props.collapseAnswers} loadMoreAnswers={props.loadMoreAnswers} loadMore={props.loadMore} reported={props.reported} reportA={props.reportA} incAHelp={props.incAHelp} incQHelp={props.incQHelp} questions={props.questions}/>
      <AddAnswer photoWarn={props.photoWarn} closeAnswerModal={props.closeAnswerModal} uploadImg={props.uploadImg} photos={props.photos} answerModalValues={props.answerModalValues} submitAnswer={props.submitAnswer} product={props.product} answerModalQ={props.answerModalQ} showAnswerModal={props.showAnswerModal} />
      <AddQuestion answerModalValues={props.answerModalValues} submitQuestion={props.submitQuestion} product={props.product} closeQuestionModal={props.closeQuestionModal} showAddQuestionForm={props.showAddQuestionForm} />
      <button className='button-b' onClick={props.moreQ}>More Questions</button>
      <button className='button-b' onClick={props.showQuestionModal}>Add a Question +</button>
      </div>
    </div>

  )
}

export default QuestionsAnswers;