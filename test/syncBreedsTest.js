const assert = require('chai').assert;
const breedDetails = require('../syncBreeds');

describe('#breedDetails', () => {
  it('returns breed details from Bombay breed', () => {
    console.log(breedDetails('Bombay'));
  })
});