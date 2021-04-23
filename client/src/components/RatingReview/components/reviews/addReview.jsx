import React from 'react';

const AddReview = (props) => {
  let onClose = (e) => {
    props.onClose && props.onClose();
  };

  return (
    <div>
      {
        props.show ?
        <>
          <form>
            <label>
              Overall rating
              <select>
                <option value="5">5 stars</option>
                <option value="4">4 stars</option>
                <option value="3">3 stars</option>
                <option value="2">2 stars</option>
                <option value="1">1 stars</option>
              </select>
            </label>
            <label>
              Do you recomend this product?
              <select multiple={true} value={['yes', 'no']}>Yes or no</select>
            </label>
            <label>
              Write your review
              About the product
              <textarea value={''}/>
            </label>
          </form>
          <div>
            <button onClick={onClose}>submit</button>
          </div>
        </>
        : null
      }
    </div>
  )
}

export default AddReview;