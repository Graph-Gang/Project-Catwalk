import React from 'react';


const AddAnswer = (props) => {

  if (props.showAnswerModal){
    return (
      <div>
        <h3>Submit your Answer</h3>
        <h4>{props.product.name} : {props.answerModalQ.question_body}</h4>
        <form>
          <div>
            <label>
              Your Answer
              <textarea maxLength='1000'/>
            </label>

          </div>
          <div>
            <label>
              What is your nickname?
              <input placeholder="nickname"></input>
            </label>

          </div>
          <div>
            <label>
              Your email
               <input placeholder="email"></input>
            </label>

          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  } else {
    return null
  }

}

export default AddAnswer;