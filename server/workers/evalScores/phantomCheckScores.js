/*module.exports = function(evalObj, done) {
	let phantomTests = { status: 'notfound', output: { stats: { tests: 0, passes: 0, failures: 0} } };
  console.log("phontom", evalObj.evalFindings.tests.phantomTests);
	if(evalObj.evalFindings && evalObj.evalFindings.tests && evalObj.evalFindings.tests.phantomTests) {
		phantomTests = evalObj.evalFindings.tests.phantomTests;
	}

	let uiTestSection = {};
	if(phantomTests.status == "Failed" && phantomTests.errors != "") {
		uiTestSection = {
			name: "phantomTests",
			status: phantomTests.status,
			total: 0,
			passes: 0,
			failed: 0,
			score: 0
		}
	} else  {
		uiTestSection = {
			name: "phantomTests",
			status: phantomTests.status,
			total: phantomTests.output.stats.tests,
			passes: phantomTests.output.stats.passes,
			failed: phantomTests.output.stats.failures,
			score: 0
		}
	}

	if(uiTestSection.total > 0)
		uiTestSection.score = Math.floor((uiTestSection.passes/uiTestSection.total) * 100);

	done(null, uiTestSection);
}
*/