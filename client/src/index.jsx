import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail/main.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingReview from './components/RatingReview/main.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      product: {},
      product_id: 17067,
      product_styles: [],
      questions: '',
<<<<<<< HEAD
      markedHelpful: [],
      reviews: []
=======
      reviews: [],
      ratings: {}
>>>>>>> master
    }

    this.fetchAll = this.fetchAll.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
    this.fetchProductStyle = this.fetchProductStyle.bind(this);
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
<<<<<<< HEAD
    this.incrementQHelpfulness = this.incrementQHelpfulness.bind(this);
    this.incrementAHelpfulness = this.incrementAHelpfulness.bind(this);
=======
    this.fetchRatings = this.fetchRatings.bind(this);
>>>>>>> master
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
          //questions auto-sort from the db based on helpfulness
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

  //increment the helpfulness of a question
  incrementQHelpfulness(id) {
    if (this.state.markedHelpful.includes(id)){
      return;
    } else {
      axios.put(`qa/questions/${id}/helpful`)
        .then((result) => {
          this.setState({
            //update array for clicked helpfulness questions
            markedHelpful: [...this.state.markedHelpful, id]
          })
          return;
        })
        .then(() => {
          //get all questions for product to update helpfulness count withour reload
          this.fetchQuestions(this.state.product_id);
        })
        .catch((err) => {
          console.log('Not marked helpful: ', err)
        })
    }
  }

  //increment helpfulness of an answer
  incrementAHelpfulness(id) {
    if (this.state.markedHelpful.includes(id)){
      return;
    } else {
    axios({
      method: 'put',
      url: `/qa/answers/${id}/helpful`,
    })
    .then(result => {
      this.setState({
        markedHelpful: [...this.state.markedHelpful, id]
      })
      //update answerhelpfulness without reloading page
      this.fetchQuestions(this.state.product_id)
    })
  }
}

  fetchRatings(id) {
    axios.get('/reviews/meta/' + id)
      .then((results) => {
        console.log('Success getting all ratings from API');
        this.setState({
          ratings: results.data
        });
      })
      .catch((err) => {
        console.log('Error getting all ratings from API');
      })
  }

  componentDidMount() {
    this.fetchAll();
    this.fetchOne(this.state.product_id);
    this.fetchProductStyle(this.state.product_id);
    this.fetchQuestions(this.state.product_id);
    this.fetchReviews(this.state.product_id);
    this.fetchRatings(this.state.product_id);
  }

  render() {
    return(
      <div>
        <div>
          <ProductDetail product={this.state.product} product_styles={this.state.product_styles}/>
        </div>
        <hr></hr>
        <div>
          <QuestionsAnswers incAHelp={this.incrementAHelpfulness} incQHelp={this.incrementQHelpfulness} products={this.state.products} questions={this.state.questions}/>
        </div>
        <hr></hr>
        <div>
          <RatingReview reviews={this.state.reviews} ratings={this.state.ratings}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));