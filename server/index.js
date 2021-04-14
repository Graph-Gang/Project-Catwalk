const express = require('express');
const axios = require('axios');
const config = require('../config.js');

// app.use(express.static(__dirname + '/../client/dist'));
let app = express();

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
      console.log('SUCCESS results --->', results);
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    })
})

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});