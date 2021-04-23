import React from 'react';


const AddAnswer = (props) => {

  let photo = [];
  if(props.photos) {
    props.photos.forEach((img, index) => {
      photo.push(<img key={index} src={img} width='150' height='100'/>)
    })
  }

  if (props.showAnswerModal){
    return (
      <div className='answerModal'>
        <div className='answerModalContent'>
          <div onClick={props.closeAnswerModal}>X</div>
        <h3>Submit your Answer</h3>
        <h4>{props.product.name} : {props.answerModalQ.question_body}</h4>
        <form>
          <div>
            <label>
              Your Answer*
              <textarea onChange={props.answerModalValues} required type='text' name='answerBody' maxLength='1000'/>
            </label>

          </div>
          <div>
            <label>
              What is your nickname?*
              <input onChange={props.answerModalValues} required type='text' placeholder='Example jack543!' name='answerName' ></input>
              <p>For privacy reasons, do not use your full name or email address</p>
            </label>

          </div>
          <div>
            <label>
              Your email*
               <input onChange={props.answerModalValues} required type='text' placeholder='Example jack@email.com' name='answerEmail' ></input>
               <p>For authentication reasons, you will not be emailed</p>
            </label>

          </div>
          <div>
            <label>
              Upload your photos
              <input onChange={props.uploadImg} type='file' accept='image/*' multiple={false} name='answerPhotos'></input>
              {photo}
              <button>Add Photo</button>
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