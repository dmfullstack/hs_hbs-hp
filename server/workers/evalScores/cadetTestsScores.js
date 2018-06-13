/*module.exports = function(evalObj, done) {
	let cadetTests = { status: 'notfound', output: { stats: { tests: 0, passes: 0, failures: 0} } };

	if(evalObj.evalFindings && evalObj.evalFindings.tests && evalObj.evalFindings.tests.cadetTests) {
		cadetTests = evalObj.evalFindings.tests.cadetTests;
	}

	let cadetTestSection = {};
	if(cadetTests.status == "Failed" && cadetTests.errors != "") {
		cadetTestSection = {
			name: "cadetTests",
			status: cadetTests.status,
			total: 0,
			passes: 0,
			failed: 0,
			score: 0
		}
	} else  {
		cadetTestSection = {
			name: "cadetTests",
			status: cadetTests.status,
			total: (!!cadetTests.output.stats && !!cadetTests.output.stats.tests) ? cadetTests.output.stats.tests:0,
			passes: (!!cadetTests.output.stats && !!cadetTests.output.stats.passes) ? cadetTests.output.stats.passes:0,
			failed: (!!cadetTests.output.stats && !!cadetTests.output.stats.failures) ? cadetTests.output.stats.failures:0,
			score: 0
		}
	}

	if(cadetTestSection.total > 0)
		cadetTestSection.score = Math.floor((cadetTestSection.passes/cadetTestSection.total) * 100);

	done(null, cadetTestSection);
}*/