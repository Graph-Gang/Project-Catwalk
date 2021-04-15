import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './components/ProductDetail/main.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      product: {},
      product_id: 17067
    }
    this.fetchAll = this.fetchAll.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
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

  fetchOne() {
    axios.get('/products/' +  this.state.product_id)
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

  componentDidMount() {
    this.fetchAll();
    this.fetchOne();
  }

  render() {
    return(
      <div>
        <Main products={this.state.products} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
