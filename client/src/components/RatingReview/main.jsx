import React from 'react';
import List from './components/reviews/reviewsList.jsx';
import StarRating from '../ProductDetail/components/ProductInfo/components/starRating.jsx';


class RatingReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: this.props.reviews,
      display: null,
      button: null
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderButton = this.renderButton.bind(this);
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
        button: true
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
      </div>
    )
  }

}

export default RatingReview;