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
      display: null,
      button: null,
      show: false,
      bigPhoto: false,
      bigPhotoUrl: '',
      ratingValue: '',
      recomendValue: '',
      summaryValue: 'Example: Best purchase ever!',
      reviewValue: 'Why did you like the product or not?',
      nicknameValue: 'Example: jackson11!',
      emailValue: 'Example: jackson11@email.com',
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
    this.props.postReview({
      rating: this.state.ratingValue,
      summary: this.state.summaryValue,
      body: this.state.reviewValue,
      recomend: this.state.recomendValue,
      name: this.state.nicknameValue,
      email: this.state.emailValue
    })
    this.setState({
      show: !this.state.show
    })
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