import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ProductDetail from './components/ProductDetail/main.jsx';
import QuestionsAnswers from './components/QuestionsAnswers/QuestionsAnswers.jsx';
import RatingReview from './components/RatingReview/main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      product: {},
      product_id: 17067,
      product_styles: [],
      questions: '',
      markedHelpful: [],
      reviews: [],
      ratings: {},
      reported:[],
      loadMoreAnswers: [],
      showAddAnswerForm: false,
      answerModalQ: '',
      photos: [],
      photoWarning: false,
      showAddQuestionForm: false,
    }

    this.fetchAll = this.fetchAll.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
    this.fetchProductStyle = this.fetchProductStyle.bind(this);
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.fetchReviews = this.fetchReviews.bind(this);
    this.postReview = this.postReview.bind(this);
    this.incrementQHelpfulness = this.incrementQHelpfulness.bind(this);
    this.incrementAHelpfulness = this.incrementAHelpfulness.bind(this);
    this.fetchRatings = this.fetchRatings.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.collapseAnswers = this.collapseAnswers.bind(this);
    this.toggleAnswerModal = this.toggleAnswerModal.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.answerModalValues = this.answerModalValues.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.closeAnswerModal = this.closeAnswerModal.bind(this);
    this.toggleQuestionForm = this.toggleQuestionForm.bind(this);
    this.closeQuestionModal = this.closeQuestionModal.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
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

  postReview(review) {
    axios.post('/reviews/', review)
    .then((results) => {
      console.log('Success posting review', results)
    })
    .catch((err) => {
      console.log('Error posting review', err)
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
      //update answer helpfulness without reloading page
      this.fetchQuestions(this.state.product_id)
    })
  }
}

//Report answer
reportAnswer(q, a) {
  if (this.state.reported.includes(a.id)) {
    return;
  } else {
    //update the answer has been reported in the db
    axios({
      method: 'put',
      url: `/qa/answers/${a.id}/report`
    })
    .then((result) => {
      //update state to capture which answers have been reported
      this.setState({
        reported: [...this.state.reported, a.id],
      })
      //not re-fetching all questions right away to show the report/reported change
      //reported answer will be removed once page reloads
      //this.fetchQuestions(this.state.product_id)
    })
  }
}

//add question_Id to loadMoreAnswers in state
loadMore(id) {
  this.setState({
    loadMoreAnswers: [...this.state.loadMoreAnswers, id]
  })
}

//collapse answers by removing question_id from loadMoreAnswers
collapseAnswers(id) {
  let answersIds = [...this.state.loadMoreAnswers];
  let index = answersIds.indexOf(id);
  if (index !== -1) {
    answersIds.splice(index, 1);
    this.setState({
      loadMoreAnswers: answersIds
    })
  }
}

//toggle showAnswerModal and set answerModalQ
toggleAnswerModal(q) {
  this.setState({
    showAddAnswerForm: !this.state.showAddAnswerForm,
    answerModalQ: q
  })
}

//only toggle showAnswerModal to close the modal
closeAnswerModal() {
  this.setState({
    showAddAnswerForm: !this.state.showAddAnswerForm,
    photos: [],
  })
}

//submit answer and toggle off answer modal
submitAnswer(id) {
  event.preventDefault();

  let validEmail = false;
  let validAnswer = false;
  let validName = false;



  //validate email
  if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.answerEmail)) {
    validEmail = true;
  }

  //check if answer body is blank
  if (/^(?!\s*$).+/.test(this.state.answerBody)) {
    validAnswer = true;
  }

  //check if name is blank
  if (/^(?!\s*$).+/.test(this.state.answerName)) {
    validName = true;
  }

  if (validEmail && validAnswer && validName) {
      axios({
        method: 'post',
        url: `/qa/questions/${id}/answers`,
        data: {
          body: this.state.answerBody,
          name: this.state.answerName,
          email: this.state.answerEmail,
          photos: this.state.photos
        }
      })
      .then((result)=> {
        this.setState({
          showAddAnswerForm: !this.state.showAddAnswerForm
        })
        this.fetchQuestions(this.state.product_id);
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    alert('You must complete all required fields indicated by the asterisk')
  }
}

//submit question
submitQuestion() {
  event.preventDefault();

  let validEmail = false;
  let validQuestion = false;
  let validName = false;

  //validate email
  if(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.state.questionEmail)) {
    validEmail = true;
  }

  //check if answer body is blank
  if (/^(?!\s*$).+/.test(this.state.questionBody)) {
    validQuestion = true;
  }

  //check if name is blank
  if (/^(?!\s*$).+/.test(this.state.questionName)) {
    validName = true;
  }

  if (validEmail && validQuestion && validName) {
      axios({
        method: 'post',
        url: `/qa/questions`,
        data: {
          body: this.state.questionBody,
          name: this.state.questionName,
          email: this.state.questionEmail,
          product_id: this.state.product_id
        }
      })
      .then((result)=> {
        this.setState({
          showAddQuestionForm: !this.state.showAddQuestionForm
        })
        this.fetchQuestions(this.state.product_id);
      })
      .catch(err => {
        console.log(err)
      })
  } else {
    alert('You must complete all required fields indicated by the asterisk')
  }
}

//create state values dynamically
answerModalValues(event) {
  event.preventDefault();
  let key = event.target.name;
  let value = event.target.value;


  this.setState({
    [key]: value
  })
}

//handle image uploads
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

//Toggle showAddQuestionForm
toggleQuestionForm() {
  this.setState({
    showAddQuestionForm: !this.state.showAddQuestionForm
  })
}

//close questionModal
closeQuestionModal() {
  this.setState({
    showAddQuestionForm: !this.state.showAddQuestionForm
  })
}

//search questions in state
search(event) {

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
        <div onClick={this.props.tracker_PD}>
          <ProductDetail product={this.state.product} product_styles={this.state.product_styles}/>
        </div>
        <hr></hr>
        <div onClick={this.props.tracker_QA}>
          <QuestionsAnswers searchVal={this.state.search} submitQuestion={this.submitQuestion} showAddQuestionForm={this.state.showAddQuestionForm} showQuestionModal={this.toggleQuestionForm} closeQuestionModal={this.closeQuestionModal} photoWarn={this.state.photoWarning} closeAnswerModal={this.closeAnswerModal} uploadImg={this.handleImage} photos={this.state.photos} answerModalValues={this.answerModalValues} submitAnswer={this.submitAnswer} answerModalQ={this.state.answerModalQ} toggleAnswerModal={this.toggleAnswerModal} showAnswerModal={this.state.showAddAnswerForm} collapseAnswers={this.collapseAnswers} loadMoreAnswers={this.state.loadMoreAnswers} loadMore={this.loadMore} reported={this.state.reported} reportA={this.reportAnswer} incAHelp={this.incrementAHelpfulness} incQHelp={this.incrementQHelpfulness} product={this.state.product} products={this.state.products} questions={this.state.questions}/>
        </div>
        <hr></hr>
        <div onClick={this.props.tracker_RR} id='Review_Section'>
          <RatingReview product_id={this.state.product_id} postReview={this.postReview} reviews={this.state.reviews} ratings={this.state.ratings}/>
        </div>
      </div>
    )
  }
}

class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      record: {}
    }
    this.handleClickPD = this.handleClickPD.bind(this);
    this.handleClickQA = this.handleClickQA.bind(this);
    this.handleClickRR = this.handleClickRR.bind(this);
  }

  handleClickPD(e) {
    // console.log(new Date(Date.now()));
    this.state.record[Date.now().toString()] = [e.target, 'Product_Detail']
    this.setState({
      record: this.state.record
    })
  }

  handleClickQA(e) {
    this.state.record[Date.now().toString()] = [e.target, 'Questions_Answers']
    this.setState({
      record: this.state.record
    })
  }

  handleClickRR(e) {
    this.state.record[Date.now().toString()] = [e.target, 'Ratings_Reviews']
    this.setState({
      record: this.state.record
    })
  }

  render() {
    return (
      this.props.render(this.handleClickPD, this.handleClickQA, this.handleClickRR)
    )
  }
}


ReactDOM.render(
  <ClickTracker render={(fn1, fn2, fn3) =>
    <App tracker_PD={fn1} tracker_QA={fn2} tracker_RR={fn3}/>
  }/>,
  document.getElementById('app')
);