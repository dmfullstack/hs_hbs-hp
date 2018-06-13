const nid = require('nid')({length:8});

module.exports = function() {
	return nid();
}