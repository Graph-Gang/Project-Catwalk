import React from 'react';

const AddReview = (props) => {
  let onClose = (e) => {
    props.onClose && props.onClose();
  };

  return (
    <div>
      {
        props.show ?
        <div className="addReviewModal">
          <form className="addReviewModalContent">
            <label>
              Overall rating
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
              Do you recomend this product?
              <select name="recomendValue" value={props.recomendValue} onChange={props.onChange}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </label>
            <br></br>
            <label>
              Review Summary
              <textarea name="summaryValue" value={props.summaryValue} onChange={props.onChange} maxLength="60"/>
            </label>
            <br></br>
            <label>
              Write your review
              About the product
              <textarea name="reviewValue" value={props.reviewValue} onChange={props.onChange} minLength="50" maxLength="1000"/>
            </label>
            <br></br>
            <label>
              What is your nickname
              <textarea name="nicknameValue" value={props.nicknameValue} onChange={props.onChange}></textarea>
            </label>
            <br></br>
            <label>
              What is your email
              <textarea name="emailValue" value={props.emailValue} onChange={props.onChange}></textarea>
            </label>
            <br></br>
            <input onClick={onClose} type="submit" value="Submit"/>
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