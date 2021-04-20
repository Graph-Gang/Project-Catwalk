const express = require('express');
const axios = require('axios');
const config = require('../config.js');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));

app.get('/products', function (req, res) {
  let url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products'
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  }

  axios.get(url, options)
    .then((results) => {
      res.status(200);
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err)
      res.status(404);
      res.send(err);
    })
})

app.get('/products/:product_id', function (req, res) {
  var id = req.params.product_id;
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  }

  axios.get(url, options)
    .then((results) => {
      res.status(200);
      res.send(results.data);
    })
    .catch((err) => {
      res.status(404);
      console.log(err);
      res.send(err);
    })
})

app.get('/products/:product_id/styles', function (req, res) {
  var id = req.params.product_id;
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  }

  axios.get(url, options)
    .then((results) => {
      res.status(200);
      res.send(results.data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    })
})


//handle get request for getting the questions for a single product using product id
app.get('/qa/questions/:product_id', (req, res) => {
  let productId = req.params.product_id;
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/`;
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    },
    params: {
      product_id: productId
    }
  }

  axios.get(url, options)
    .then((results) => {
      res.status(200);
      // console.log(results.data);
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.send(404);
    })
})

app.get('/reviews/', function (req, res) {
  let id = req.params.product_id;
  let url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/`
  let options = {
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    },
    params: {
      product_id: id
    }
  }

  axios.get(url, options)
    .then((results) => {
      console.log('reviews results --->', results);
      res.status(200);
      res.send(results.data);
    })
    .catch((err) => {
      // console.log('reviews err --->', err);
      res.status(404);
      res.send(err);
    })
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});