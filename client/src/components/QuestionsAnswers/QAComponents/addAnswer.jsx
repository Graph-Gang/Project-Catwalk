import React from 'react';


const AddAnswer = (props) => {

  //build photo array to preview images
  let photo = [];
  if(props.photos) {
    props.photos.forEach((img, index) => {
      photo.push(<img key={index} src={img} width='150' height='100'/>)
    })
  }

  //if there are 5 images, show warning
  let moreThanFiveWarning = null
  if(props.photoWarn) {
    moreThanFiveWarning = 'You may only upload five images'
  }

  if (props.showAnswerModal){
    return (
      <div className='answerModal'>
        <div className='answerModalContent'>
          <div className='rightX' onClick={props.closeAnswerModal}>X</div>
        <h3>Submit your Answer</h3>
        <h4>{props.product.name} : {props.answerModalQ.question_body}</h4>
        <form>
          <div className='modal-item'>
            <label>
              Your Answer*
              <textarea className='form-field textarea' placeholder='Enter your answer' onChange={props.answerModalValues} required type='text' name='answerBody' maxLength='1000'/>
            </label>

          </div>
          <div className='modal-item'>
            <label>
              What is your nickname?*
              <input className='form-field' onChange={props.answerModalValues} required type='text' placeholder='Example jack543!' name='answerName' ></input>
              <p className='help-text'>For privacy reasons, do not use your full name or email address</p>
            </label>

          </div>
          <div className='modal-item'>
            <label>
              Your email*
               <input className='form-field' onChange={props.answerModalValues} required type='text' placeholder='Example jack@email.com' name='answerEmail' ></input>
               <p className='help-text'>For authentication reasons, you will not be emailed</p>
            </label>

          </div>
          <div>
            <label className='modal-item'>
              Upload your photos
              </label>
              <input onChange={props.uploadImg} type='file' accept='image/*' multiple={false} name='answerPhotos'></input>
              <div>{photo} </div>
              <div>{moreThanFiveWarning}</div>
          </div>
          <button className='button1' onClick={()=> {props.submitAnswer(props.answerModalQ.question_id)}}>Submit</button>
        </form>
        </div>
      </div>
    )
  } else {
    return null
  }

}

export default AddAnswer;