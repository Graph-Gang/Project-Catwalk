import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Main from './components/ProductDetail/main.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      product: []
    }
    this.fetchAll = this.fetchAll.bind(this);
  }

  fetchAll() {
    axios.get('/products')
      .then((results) => {
        console.log('Success getting all products from API', results.data);
        this.setState({
          product: results.data
        });
      })
      .catch((err) => {
        console.log('Error getting all products from API');
      })
  }

  componentDidMount() {
    this.fetchAll();
  }

  render() {
    return(
      <div>
        <Main products={this.state.product} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
