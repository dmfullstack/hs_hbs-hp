/*module.exports = function(evalObj, done) {
	let section = { status: 'notfound', output: []};

	if(evalObj.evalFindings && evalObj.evalFindings.lint && evalObj.evalFindings.lint.eslint) {
		section = evalObj.evalFindings.lint.eslint;
	}

	let sectionScore = {};
	if(section.status == "Failed" && section.errors != "") {
		sectionScore = {
			name: "eslint",
			status: section.status,
			total: 0,
			passes: 0,
			failed: 0,
			score: 0
		}
	} else {
		sectionScore = {
			name: "eslint",
			status: section.status,
			total: 133,
			passes: Math.abs(133 - section.output.length),
			failed: section.output.length,
			score: 0
		}
	}
	if(sectionScore.total > 0)
		sectionScore.score = Math.floor((sectionScore.passes/sectionScore.total) * 100);

	done(null, sectionScore);
}
*/