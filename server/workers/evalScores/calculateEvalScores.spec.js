const calculateEvalScores = require('./calculateEvalScores');
const mockEvalObj = require('./getMockEvalObj');
const should = require('chai').should();

describe('Test calculating eval score', function() {
  it('Simple test ', function(done) {
    calculateEvalScores(mockEvalObj, (err, result) => {
      console.log("Calculating eval scores: ", JSON.stringify(result));
      result.should.not.be.equal(undefined);
      done();
    })
  })
})
