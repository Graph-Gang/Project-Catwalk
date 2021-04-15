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
      console.log('SUCCESS results --->', results.data);
      res.status(201);
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
      res.send(err);
    })
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});