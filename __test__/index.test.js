import React from 'react';
import Renderer from 'react-test-renderer';

// const App = require('../client/src/index.jsx');
const axios = require('axios');

it('returns 200 status code', () => {
  axios.get('/products')
    .then((results) => {
      expect(results.status).toEqual(200);
    })
    .catch((error) => {
      console.log('Failed Test');
    })
  })

  // console.log('200');
  // const getRequest = await App.fetchAll();
  // expect(getRequest.status).toEqual('200');
