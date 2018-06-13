const accumulateChecks = require('./accumulateChecks');
const mockEvalObj = require('./getMockEvalObj');
const should = require('chai').should();

describe('Test AccumulateChecks ', function() {
  it('Simple test for accumulating checks from positive evaluation ', function(done) {
    accumulateChecks(mockEvalObj, (err, result) => {
      if (err) {
        done(err)
      }

      console.log("Result of accumulate checks ", result);

      result.length.should.be.at.equal(5);
      done();
    })
  })

  it('Empty evalObj passed for accumulating checks ', function(done) {
    accumulateChecks({}, (err, result) => {
      if (err) {
        done(err)
      }

      result.length.should.be.at.equal(0);
      done();
    })
  })
})
