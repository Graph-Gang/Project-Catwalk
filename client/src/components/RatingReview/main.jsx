import React from 'react';
import List from './components/reviews/reviewsList.jsx';
import StarRating from '../ProductDetail/components/ProductInfo/components/starRating.jsx';
import Snapshot from './components/ratings/snapshot.jsx';
import AddReview from './components/reviews/addReview.jsx';


class RatingReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      photos: [],
      photoWarning: false,
      display: null,
      button: null,
      show: false,
      bigPhoto: false,
      bigPhotoUrl: '',
      ratingValue: '',
      recomendValue: '',
      summaryValue: '',
      reviewValue: '',
      nicknameValue: '',
      emailValue: '',
      ratings: {
        product_id: '17067',
        ratings: { '2': '1', '3': '5', '4': '9', '5': '4' },
        recommended: { false: '13', true: '6' },
        characteristics: {
          Fit: { id: 57222, value: '3.1818181818181818' },
          Length: { id: 57223, value: '3.6250000000000000' },
          Comfort: { id: 57224, value: '4.2500000000000000' },
          Quality: { id: 57225, value: '3.7272727272727273' }
        }
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.showAdd = this.showAdd.bind(this);
    this.post = this.post.bind(this);
    this.showPhoto = this.showPhoto.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  handleImage(event) {
    if(this.state.photos.length < 5) {
        this.setState({
          photos: [...this.state.photos, URL.createObjectURL(event.target.files[0])]
        })
    } else {
      if (!this.state.photoWarning) {
        this.setState({
          photoWarning: true
        })
      }
    }
  }

  handleInputChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    })
  }

  showPhoto(e) {
    this.setState({
      bigPhoto: !this.state.bigPhoto,
      bigPhotoUrl: e.target.name
    })
  }

  showAdd() {
    this.setState({
      show: !this.state.show
    })
  }

  post() {
    event.preventDefault();

    let validEmail = false;
    let validReview = false;
    let validName = false;

    if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.emailValue)) {
      validEmail = true;
    }

    if (/^(?!\s*$).+/.test(this.state.reviewValue)) {
      validReview = true;
    }

    if (/^(?!\s*$).+/.test(this.state.nicknameValue)) {
      validName = true;
    }

    if (validEmail && validReview && validName) {
      this.props.postReview({
        product_id: this.props.product_id,
        rating: Number(this.state.ratingValue),
        summary: this.state.summaryValue,
        body: this.state.reviewValue,
        recommend: this.state.recomendValue === 'true' ? true : false,
        name: this.state.nicknameValue,
        email: this.state.emailValue,
        photos: this.state.photos,
        characteristics: {"57226": 4}
      })
      this.setState({
        show: !this.state.show
      })
    } else {
      alert('You must complete all required fields indicated by the asterisk')
    }
  }

  handleClick() {
    let reviews = this.props.reviews;
    let oldDisplay = this.state.display;
    let length = oldDisplay.length;
    let button = reviews.length === oldDisplay.length + 1 ? null : true
    this.setState({
      display: oldDisplay.concat([reviews[length]]),
      button: button
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.reviews !== prevProps.reviews) {
      this.setState({
        display: [this.props.reviews[0], this.props.reviews[1]],
        button: true,
        // ratings: this.props.ratings
      })
    }
    this.renderButton();
  }

  renderButton() {
    if (this.props.length > 2 && this.state.display.length !== this.props.length) {
      return <button onClick={this.handleClick}>More Reviews</button>;
    } else {
      return null;
    }
  }

  render() {
    return(
      <div>
        <h2>Ratings and Reviews</h2>
        <form>
          Sort reviews by
          <select>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option vaule="newest">Newest</option>
          </select>
        </form>
        <div className="ratingReviewGrid">
          {
            this.state.ratings ?
            <Snapshot StarRating={StarRating} ratings={this.state.ratings}/> :
            null
          }
          {
            this.state.display ?
            <List
            bigPhoto={this.state.bigPhoto}
            bigPhotoUrl={this.state.bigPhotoUrl}
            onClose={this.showPhoto}
            showPhoto={this.showPhoto}
            StarRating={StarRating}
            reviews={this.state.display}/> :
            null
          }
          {
            this.state.button ?
            <button onClick={this.handleClick}>More Reviews</button> :
            this.renderButton()
          }
          <AddReview
          onChange={this.handleInputChange}
          uploadImg={this.handleImage}
          photos={this.state.photos}
          photoWarn={this.state.photoWarn}
          onClose={this.showAdd}
          onSubmit={this.post}
          show={this.state.show}
          recomendValue={this.state.recomendValue}
          ratingValue={this.state.ratingValue}
          summaryValue={this.state.summaryValue}
          reviewValue={this.state.reviewValue}
          nicknameValue={this.state.nicknameValue}
          emailValue={this.state.emailValue}
          />
          <button onClick={this.showAdd}>Add Reviews</button>
        </div>
      </div>
    )
  }

}

export default RatingReview;