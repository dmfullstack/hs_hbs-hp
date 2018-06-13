/*module.exports = function(evalObj, done) {
	let commanderTests = { status: 'notfound', output: { stats: { tests: 0, passes: 0, failures: 0} } };

	if(evalObj.evalFindings && evalObj.evalFindings.tests && evalObj.evalFindings.tests.commanderTests) {
		commanderTests = evalObj.evalFindings.tests.commanderTests;
	}

	let commanderTestSection = {};
	if(commanderTests.status == "Failed" && commanderTests.errors != "") {
		commanderTestSection = {
			name: "commanderTests",
			status: commanderTests.status,
			total: 0,
			passes: 0,
			failed: 0,
			score: 0
		}
	} else  {
		commanderTestSection = {
			name: "commanderTests",
			status: commanderTests.status,
			total: (!!commanderTests.output.stats && commanderTests.output.stats.tests) ? commanderTests.output.stats.tests:0,
			passes: (!!commanderTests.output.stats && commanderTests.output.stats.passes) ? commanderTests.output.stats.passes:0,
			failed: (!!commanderTests.output.stats && commanderTests.output.stats.failures) ? commanderTests.output.stats.failures:0,
			score: 0
		}
	}

	if(commanderTestSection.total > 0)
		commanderTestSection.score = Math.floor((commanderTestSection.passes/commanderTestSection.total) * 100);

	done(null, commanderTestSection);
}*/