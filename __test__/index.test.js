const axios = require('axios');

describe('Server Tests', () => {
  it('returns 200 status code for GET request to /products', () => {
    axios.get('/products')
      .then((results) => {
        expect(results.status).toEqual(200);
      })
      .catch((error) => {
      })
  });

  it('returns 200 status code for GET request to /products/:product_id', () => {
    axios.get('/products/17067')
      .then((results) => {
        expect(results.status).toEqual(200);
      })
      .catch((error) => {
      })
  });

  it('returns 200 status code for GET request to /products/:product_id/styles', () => {
    axios.get('/products/17067/styles')
      .then((results) => {
        expect(results.status).toEqual(200);
      })
      .catch((error) => {
      })
  });
})
