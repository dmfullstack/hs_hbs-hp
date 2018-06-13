const expect = require('chai').expect;
const logger = require('../../../applogger');

describe('Test fixutre for repositories module', function() {

  it('Check repositories module is importable and exits ', function() {
    const module = require('./');
    expect(typeof module).is.equal('function');
    logger.trace('what is this ', module);
    expect(Object.keys(module).length).is.at.least(1);
    expect(Object.keys(module).length).is.at.least(1);
  });

  describe('GET My repositories API testing', function() {
    it('Test GET request to my repositories with valid username ', function(done) {
      const module = require('./repositories.controller');
       let username = "String";
      module.getMyRepositories(username, function(err, repositories) {
        expect(err).is.equal(null);
        expect(Array.isArray(repositories)).is.equal(true);
        expect(repositories.length).is.at.least(5);
        done();
      });
    });
  });
})
