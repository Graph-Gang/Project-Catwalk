import React from 'react';


const AddAnswer = (props) => {

  if (props.showAnswerModal){
    return (
      <div className='answerModal'>
        <div className='answerModalContent'>
        <h3>Submit your Answer</h3>
        <h4>{props.product.name} : {props.answerModalQ.question_body}</h4>
        <form>
          <div>
            <label>
              Your Answer
              <textarea onChange={props.answerModalValues} name='answerBody' maxLength='1000'/>
            </label>

          </div>
          <div>
            <label>
              What is your nickname?
              <input onChange={props.answerModalValues} name='answerName' placeholder="nickname"></input>
            </label>

          </div>
          <div>
            <label>
              Your email
               <input onChange={props.answerModalValues} name='answerEmail' placeholder="email"></input>
            </label>

          </div>
          <button onClick={()=> {props.submitAnswer(props.answerModalQ.question_id)}}>Submit</button>
        </form>
        </div>
      </div>
    )
  } else {
    return null
  }

}

export default AddAnswer;