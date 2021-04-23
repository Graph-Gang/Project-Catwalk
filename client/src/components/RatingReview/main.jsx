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
      ratings: {
        product_id: '17067',
        ratings: { '2': '1', '3': '5', '4': '9', '5': '1' },
        recommended: { false: '11', true: '5' },
        characteristics: {
          Fit: { id: 57222, value: '3.2500000000000000' },
          Length: { id: 57223, value: '4.0000000000000000' },
          Comfort: { id: 57224, value: '4.2000000000000000' },
          Quality: { id: 57225, value: '3.5000000000000000' }
        }
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.showAdd = this.showAdd.bind(this);
  }

  showAdd() {
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
        {
          this.state.ratings ?
          <Snapshot StarRating={StarRating} ratings={this.state.ratings}/> :
          null
        }
        {
          this.state.display ?
          <List StarRating={StarRating} reviews={this.state.display}/> :
          null
        }
        {
          this.state.button ?
          <button onClick={this.handleClick}>More Reviews</button> :
          this.renderButton()
        }
        <AddReview onClose={this.showAdd} show={this.state.show}/>
        <button onClick={this.showAdd}>Add Reviews</button>
      </div>
    )
  }

}

export default RatingReview;