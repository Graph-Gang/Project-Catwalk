import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail/main.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/main.jsx';
import RatingReview from './components/RatingReview/main.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      product: {},
      product_id: 17067,
      product_styles: [],
      questions: {},
      reviews: []
    }

    this.fetchAll = this.fetchAll.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
    this.fetchProductStyle = this.fetchProductStyle.bind(this);
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
  }

  fetchAll() {
    axios.get('/products')
      .then((results) => {
        console.log('Success getting all products from API');
        this.setState({
          products: results.data
        });
      })
      .catch((err) => {
        console.log('Error getting all products from API');
      })
  }

  fetchOne(id) {
    axios.get('/products/' + id)
      .then((results) => {
        console.log('Success getting one product from API');
        this.setState({
          product: results.data
        })
      })
      .catch((err) => {
        console.log('Error getting one product from API');
      })
  }

  fetchProductStyle(id) {
    axios.get(`/products/${id}/styles`)
      .then((results) => {
        console.log('Success getting one product style from API');
        this.setState({
          product_styles: results.data.results
        })
      })
      .catch((err) => {
        console.log('Error getting one product style from API');
      })
  }

  //get questions for a specific product
  fetchQuestions(id) {
    axios.get(`/qa/questions/${id}`)
      .then((results) => {
        this.setState({
          questions: results.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }



  fetchReviews(id) {
    axios.get('/reviews/' + id)
      .then((results) => {
        console.log('Success getting all reviews from API');
        this.setState({
          reviews: results.data.results
        });
      })
      .catch((err) => {
        console.log('Error getting all reviews from API');
      })
  }

  componentDidMount() {
    this.fetchAll();
    this.fetchOne(this.state.product_id);
    this.fetchProductStyle(this.state.product_id);
    this.fetchQuestions(this.state.product_id);
    this.fetchReviews(this.state.product_id);
  }

  render() {
    return(
      <div>
        <div>
          <ProductDetail product={this.state.product} product_styles={this.state.product_styles}/>
        </div>
        <hr></hr>
        <div>
          <QuestionsAnswers products={this.state.products}/>
        </div>
        <hr></hr>
        <div>
          <RatingReview reviews={this.state.reviews}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));