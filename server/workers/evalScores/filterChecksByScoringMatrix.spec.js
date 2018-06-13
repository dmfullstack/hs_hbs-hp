const filterChecksByScoringMatrix = require('./filterChecksByScoringMatrix');
const mockEvalObj = require('./getMockEvalObj');
const should = require('chai').should();

function getChecks() {
  return [{
    name: 'cadetTests',
    checks: {
      failed: 1,
      passes: 12,
      total: 18,
      name: '/stackroute/javascript/mocha'
    }
  }, {
    name: 'commanderTests',
    checks: {
      failed: 1,
      passes: 12,
      total: 18,
      name: '/stackroute/javascript/mocha'
    }
  }, {
    name: 'eslint',
    checks: {
      failed: 18,
      passes: 115,
      total: 133,
      name: '/stackroute/javascript/eslint'
    }
  }, {
    name: 'htmlhint',
    checks: {
      failed: 6,
      passes: 22,
      total: 28,
      name: '/stackroute/javascript/htmlhint'
    }
  }, {
    name: 'smells',
    checks: {
      failed: 18,
      passes: 115,
      total: 133,
      name: '/stackroute/javascript/eslint'
    }
  }]
}

describe('Test filtering of checks ', function() {
  it('Filter for a subset where primary set has more than required ', function(done) {
    let checks = getChecks();
    filterChecksByScoringMatrix(mockEvalObj, checks, (err, result) => {
      if(err) done(err);
      console.log("Result for filtered sections ", result);

      result.length.should.not.be.equal(checks.length);
      done();
    });
  })
})
