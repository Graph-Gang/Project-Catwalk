import React from 'react';

const AddReview = (props) => {
  // let onClose = (e) => {
  //   props.onClose && props.onClose();
  // };
  let photo = [];

  if(props.photos) {
    props.photos.forEach((img, index) => {
      photo.push(<img key={index} src={img} width='150' height='100'/>)
    })
  }

  let moreThanFiveWarning = null
  if(props.photoWarn) {
    moreThanFiveWarning = 'You may only upload five images'
  }

  return (
    <div>
      {
        props.show ?
        <div className="addReviewModal">
          <form className="addReviewModalContent">
            <label>
              Overall rating*
              <select name="ratingValue" value={props.ratingValue} onChange={props.onChange}>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 stars</option>
              </select>
            </label>
            <br></br>
            <label>
              Do you recomend this product?*
              <select name="recomendValue" value={props.recomendValue} onChange={props.onChange}>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </label>
            <br></br>
            <label>
              Review Summary
              <textarea name="summaryValue" placeholder="Example: Best purchase ever!" value={props.summaryValue} onChange={props.onChange} maxLength="60"/>
            </label>
            <br></br>
            <label>
              Write your review*
              About the product
              <textarea placeholder="Why did you like the product or not?" name="reviewValue" value={props.reviewValue} onChange={props.onChange} required minLength="50" maxLength="1000"/>
            </label>
            <br></br>
            <label>
              What is your nickname*
              <textarea placeholder="Example: jackson11!" name="nicknameValue" value={props.nicknameValue} onChange={props.onChange} required placeholder="jackson11"></textarea>
            </label>
            <br></br>
            <label>
              What is your email*
              <textarea placeholder="Example: jackson11@email.com" name="emailValue" value={props.emailValue} onChange={props.onChange} required placeholder="jackson11@email.com"></textarea>
            </label>
            <br></br>
            <label>
              Upload your photos
              <input onChange={props.uploadImg} type='file' accept='image/*' multiple={false} name='reviewPhotos'></input>
              <div>{photo} </div>
              <div>{moreThanFiveWarning}</div>
            </label>
            <br></br>
            <button onClick={props.onSubmit} type="button" value="Submit">Submit</button>
            <button onClick={props.onClose}>Close</button>
          </form>
          {/* <div className="addReviewModalContent">
            <button onClick={onClose}>submit</button>
          </div> */}
        </div>
        : null
      }
    </div>
  )
}

export default AddReview;