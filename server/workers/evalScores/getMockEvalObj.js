/*module.exports = {
  "statusUpdateOn": "2017-06-28T04:03:33.012Z",
  "evalParams": {
    "workflow": "SROevaluation",
    "scores": {
      "cadetTests": 20,
      "commanderTests": 20,
      "htmlhint": 20,
      "eslint": 20,
      "smells": 20
    }
  },
  "jobId": "oixbdso3",
  "repoReftype": "branch",
  "repoRef": "master",
  "repoUrl": "ssh://git@gitlab-dev.stackroute.in:2222/AH-test/ChicagoCrime-datamunging-wk4.git",
  "submissionId": "ax10uscj",
  "username": "rajiff",
  "evalFindings": {
    "tests": {
      "cadetTests": {
        "summary": {
          "checks": {
            "failed": 1,
            "passes": 12,
            "total": 18,
            "name": "/stackroute/javascript/mocha"
          }
        },
        "errors": "",
        "output": {
          "passes": [{
            "currentRetry": 0,
            "duration": 3,
            "fullTitle": "Test Application as Blackbox - Assault Scenario JSON has expected Number of Objects",
            "title": "JSON has expected Number of Objects"
          }, {
            "currentRetry": 0,
            "duration": 15,
            "fullTitle": "Test Application as Blackbox - Assault Scenario Test JSON is as expected",
            "title": "Test JSON is as expected"
          }, {
            "currentRetry": 0,
            "duration": 7,
            "fullTitle": "Test the createInterface method of readline should be called only once",
            "title": "should be called only once"
          }, {
            "currentRetry": 0,
            "duration": 29,
            "fullTitle": "Test the on() method of readline interface for line event should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Test the on() method of readline interface for close event should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 3,
            "fullTitle": "Test for use of Array.map() and Array.push() function Array.map() should be used atleast once",
            "title": "Array.map() should be used atleast once"
          }, {
            "currentRetry": 0,
            "duration": 5,
            "fullTitle": "Test for use of Array.map() and Array.push() function Array.push() should be used atleast once",
            "title": "Array.push() should be used atleast once"
          }, {
            "currentRetry": 0,
            "duration": 4,
            "fullTitle": "Testing for existence of Synchronous file read methods should not be called readFileSync",
            "title": "should not be called readFileSync"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Testing for existence of Synchronous writeFileSync methods should not be called writeFileSync",
            "title": "should not be called writeFileSync"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Testing for existence of Asynchronous writeFile methods should be called writeFile",
            "title": "should be called writeFile"
          }, {
            "currentRetry": 0,
            "duration": 0,
            "fullTitle": "Test Application as Blackbox - Theft Scenario JSON has expected Number of Objects",
            "title": "JSON has expected Number of Objects"
          }, {
            "currentRetry": 0,
            "duration": 111,
            "fullTitle": "Test Application as Blackbox - Theft Scenario Test JSON is as expected",
            "title": "Test JSON is as expected"
          }],
          "failures": [{
            "err": {
              "message": "Timeout of 2000ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.",
              "stack": "Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.\n    at test/asttest.js:16:11\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3838:9\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:421:16\n    at iteratorCallback (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:998:13)\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:906:16\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3835:13\n    at /workspaces/oixbdso3/tools/src/processFile.js:21:3\n    at module.exports (/workspaces/oixbdso3/tools/processors/tryCatchBlock/tryCatchBlock.js:9:2)\n    at process (/workspaces/oixbdso3/tools/src/processFile.js:20:2)\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3830:24\n    at eachOfArrayLike (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:1003:9)\n    at eachOf (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:1051:5)\n    at _parallel (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3829:5)\n    at Object.parallelLimit [as parallel] (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3912:5)\n    at /workspaces/oixbdso3/tools/src/processFile.js:15:9\n    at tryToString (fs.js:425:3)\n    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:412:12)"
            },
            "currentRetry": 0,
            "duration": 2929,
            "fullTitle": "Check the AST for this file should be called only once",
            "title": "should be called only once"
          }],
          "pending": [{
            "currentRetry": 0,
            "fullTitle": "Unit tests have been created check for existence of test files",
            "title": "check for existence of test files"
          }, {
            "currentRetry": 0,
            "fullTitle": "Testing for whether close() method called on fs should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of JSON.parse() and JSON.stringify() functions JSON.parse() should be used atleast once",
            "title": "JSON.parse() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of JSON.parse() and JSON.stringify() functions JSON.stringify() should be used atleast once",
            "title": "JSON.stringify() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods should be called",
            "title": "should be called"
          }],
          "tests": [{
            "currentRetry": 0,
            "duration": 3,
            "fullTitle": "Test Application as Blackbox - Assault Scenario JSON has expected Number of Objects",
            "title": "JSON has expected Number of Objects"
          }, {
            "currentRetry": 0,
            "duration": 15,
            "fullTitle": "Test Application as Blackbox - Assault Scenario Test JSON is as expected",
            "title": "Test JSON is as expected"
          }, {
            "err": {
              "message": "Timeout of 2000ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.",
              "stack": "Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.\n    at test/asttest.js:16:11\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3838:9\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:421:16\n    at iteratorCallback (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:998:13)\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:906:16\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3835:13\n    at /workspaces/oixbdso3/tools/src/processFile.js:21:3\n    at module.exports (/workspaces/oixbdso3/tools/processors/tryCatchBlock/tryCatchBlock.js:9:2)\n    at process (/workspaces/oixbdso3/tools/src/processFile.js:20:2)\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3830:24\n    at eachOfArrayLike (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:1003:9)\n    at eachOf (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:1051:5)\n    at _parallel (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3829:5)\n    at Object.parallelLimit [as parallel] (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3912:5)\n    at /workspaces/oixbdso3/tools/src/processFile.js:15:9\n    at tryToString (fs.js:425:3)\n    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:412:12)"
            },
            "currentRetry": 0,
            "duration": 2929,
            "fullTitle": "Check the AST for this file should be called only once",
            "title": "should be called only once"
          }, {
            "currentRetry": 0,
            "duration": 7,
            "fullTitle": "Test the createInterface method of readline should be called only once",
            "title": "should be called only once"
          }, {
            "currentRetry": 0,
            "duration": 29,
            "fullTitle": "Test the on() method of readline interface for line event should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Test the on() method of readline interface for close event should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 3,
            "fullTitle": "Test for use of Array.map() and Array.push() function Array.map() should be used atleast once",
            "title": "Array.map() should be used atleast once"
          }, {
            "currentRetry": 0,
            "duration": 5,
            "fullTitle": "Test for use of Array.map() and Array.push() function Array.push() should be used atleast once",
            "title": "Array.push() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Unit tests have been created check for existence of test files",
            "title": "check for existence of test files"
          }, {
            "currentRetry": 0,
            "duration": 4,
            "fullTitle": "Testing for existence of Synchronous file read methods should not be called readFileSync",
            "title": "should not be called readFileSync"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Testing for existence of Synchronous writeFileSync methods should not be called writeFileSync",
            "title": "should not be called writeFileSync"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Testing for existence of Asynchronous writeFile methods should be called writeFile",
            "title": "should be called writeFile"
          }, {
            "currentRetry": 0,
            "fullTitle": "Testing for whether close() method called on fs should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of JSON.parse() and JSON.stringify() functions JSON.parse() should be used atleast once",
            "title": "JSON.parse() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of JSON.parse() and JSON.stringify() functions JSON.stringify() should be used atleast once",
            "title": "JSON.stringify() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 0,
            "fullTitle": "Test Application as Blackbox - Theft Scenario JSON has expected Number of Objects",
            "title": "JSON has expected Number of Objects"
          }, {
            "currentRetry": 0,
            "duration": 111,
            "fullTitle": "Test Application as Blackbox - Theft Scenario Test JSON is as expected",
            "title": "Test JSON is as expected"
          }],
          "stats": {
            "duration": 6822,
            "end": "2017-06-28T04:03:31.158Z",
            "start": "2017-06-28T04:03:24.336Z",
            "failures": 1,
            "pending": 5,
            "passes": 12,
            "tests": 18,
            "suites": 14
          }
        },
        "status": "Failed"
      },
      "commanderTests": {
        "summary": {
          "checks": {
            "failed": 1,
            "passes": 12,
            "total": 18,
            "name": "/stackroute/javascript/mocha"
          }
        },
        "errors": "",
        "output": {
          "passes": [{
            "currentRetry": 0,
            "duration": 6,
            "fullTitle": "Test Application as Blackbox - Assault Scenario JSON has expected Number of Objects",
            "title": "JSON has expected Number of Objects"
          }, {
            "currentRetry": 0,
            "duration": 107,
            "fullTitle": "Test Application as Blackbox - Assault Scenario Test JSON is as expected",
            "title": "Test JSON is as expected"
          }, {
            "currentRetry": 0,
            "duration": 6,
            "fullTitle": "Test the createInterface method of readline should be called only once",
            "title": "should be called only once"
          }, {
            "currentRetry": 0,
            "duration": 3,
            "fullTitle": "Test the on() method of readline interface for line event should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Test the on() method of readline interface for close event should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Test for use of Array.map() and Array.push() function Array.map() should be used atleast once",
            "title": "Array.map() should be used atleast once"
          }, {
            "currentRetry": 0,
            "duration": 1,
            "fullTitle": "Test for use of Array.map() and Array.push() function Array.push() should be used atleast once",
            "title": "Array.push() should be used atleast once"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Testing for existence of Synchronous file read methods should not be called readFileSync",
            "title": "should not be called readFileSync"
          }, {
            "currentRetry": 0,
            "duration": 1,
            "fullTitle": "Testing for existence of Synchronous writeFileSync methods should not be called writeFileSync",
            "title": "should not be called writeFileSync"
          }, {
            "currentRetry": 0,
            "duration": 3,
            "fullTitle": "Testing for existence of Asynchronous writeFile methods should be called writeFile",
            "title": "should be called writeFile"
          }, {
            "currentRetry": 0,
            "duration": 1,
            "fullTitle": "Test Application as Blackbox - Theft Scenario JSON has expected Number of Objects",
            "title": "JSON has expected Number of Objects"
          }, {
            "currentRetry": 0,
            "duration": 118,
            "fullTitle": "Test Application as Blackbox - Theft Scenario Test JSON is as expected",
            "title": "Test JSON is as expected"
          }],
          "failures": [{
            "err": {
              "message": "Timeout of 2000ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.",
              "stack": "Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.\n    at test/asttest.js:16:11\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3838:9\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:421:16\n    at iteratorCallback (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:998:13)\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:906:16\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3835:13\n    at /workspaces/oixbdso3/tools/src/processFile.js:21:3\n    at module.exports (/workspaces/oixbdso3/tools/processors/tryCatchBlock/tryCatchBlock.js:9:2)\n    at process (/workspaces/oixbdso3/tools/src/processFile.js:20:2)\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3830:24\n    at eachOfArrayLike (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:1003:9)\n    at eachOf (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:1051:5)\n    at _parallel (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3829:5)\n    at Object.parallelLimit [as parallel] (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3912:5)\n    at /workspaces/oixbdso3/tools/src/processFile.js:15:9\n    at tryToString (fs.js:425:3)\n    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:412:12)"
            },
            "currentRetry": 0,
            "duration": 2542,
            "fullTitle": "Check the AST for this file should be called only once",
            "title": "should be called only once"
          }],
          "pending": [{
            "currentRetry": 0,
            "fullTitle": "Unit tests have been created check for existence of test files",
            "title": "check for existence of test files"
          }, {
            "currentRetry": 0,
            "fullTitle": "Testing for whether close() method called on fs should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of JSON.parse() and JSON.stringify() functions JSON.parse() should be used atleast once",
            "title": "JSON.parse() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of JSON.parse() and JSON.stringify() functions JSON.stringify() should be used atleast once",
            "title": "JSON.stringify() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods should be called",
            "title": "should be called"
          }],
          "tests": [{
            "currentRetry": 0,
            "duration": 6,
            "fullTitle": "Test Application as Blackbox - Assault Scenario JSON has expected Number of Objects",
            "title": "JSON has expected Number of Objects"
          }, {
            "currentRetry": 0,
            "duration": 107,
            "fullTitle": "Test Application as Blackbox - Assault Scenario Test JSON is as expected",
            "title": "Test JSON is as expected"
          }, {
            "err": {
              "message": "Timeout of 2000ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.",
              "stack": "Error: Timeout of 2000ms exceeded. For async tests and hooks, ensure \"done()\" is called; if returning a Promise, ensure it resolves.\n    at test/asttest.js:16:11\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3838:9\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:421:16\n    at iteratorCallback (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:998:13)\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:906:16\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3835:13\n    at /workspaces/oixbdso3/tools/src/processFile.js:21:3\n    at module.exports (/workspaces/oixbdso3/tools/processors/tryCatchBlock/tryCatchBlock.js:9:2)\n    at process (/workspaces/oixbdso3/tools/src/processFile.js:20:2)\n    at /workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3830:24\n    at eachOfArrayLike (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:1003:9)\n    at eachOf (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:1051:5)\n    at _parallel (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3829:5)\n    at Object.parallelLimit [as parallel] (/workspaces/oixbdso3/tools/node_modules/async/dist/async.js:3912:5)\n    at /workspaces/oixbdso3/tools/src/processFile.js:15:9\n    at tryToString (fs.js:425:3)\n    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:412:12)"
            },
            "currentRetry": 0,
            "duration": 2542,
            "fullTitle": "Check the AST for this file should be called only once",
            "title": "should be called only once"
          }, {
            "currentRetry": 0,
            "duration": 6,
            "fullTitle": "Test the createInterface method of readline should be called only once",
            "title": "should be called only once"
          }, {
            "currentRetry": 0,
            "duration": 3,
            "fullTitle": "Test the on() method of readline interface for line event should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Test the on() method of readline interface for close event should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Test for use of Array.map() and Array.push() function Array.map() should be used atleast once",
            "title": "Array.map() should be used atleast once"
          }, {
            "currentRetry": 0,
            "duration": 1,
            "fullTitle": "Test for use of Array.map() and Array.push() function Array.push() should be used atleast once",
            "title": "Array.push() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Unit tests have been created check for existence of test files",
            "title": "check for existence of test files"
          }, {
            "currentRetry": 0,
            "duration": 2,
            "fullTitle": "Testing for existence of Synchronous file read methods should not be called readFileSync",
            "title": "should not be called readFileSync"
          }, {
            "currentRetry": 0,
            "duration": 1,
            "fullTitle": "Testing for existence of Synchronous writeFileSync methods should not be called writeFileSync",
            "title": "should not be called writeFileSync"
          }, {
            "currentRetry": 0,
            "duration": 3,
            "fullTitle": "Testing for existence of Asynchronous writeFile methods should be called writeFile",
            "title": "should be called writeFile"
          }, {
            "currentRetry": 0,
            "fullTitle": "Testing for whether close() method called on fs should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of JSON.parse() and JSON.stringify() functions JSON.parse() should be used atleast once",
            "title": "JSON.parse() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of JSON.parse() and JSON.stringify() functions JSON.stringify() should be used atleast once",
            "title": "JSON.stringify() should be used atleast once"
          }, {
            "currentRetry": 0,
            "fullTitle": "Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods should be called",
            "title": "should be called"
          }, {
            "currentRetry": 0,
            "duration": 1,
            "fullTitle": "Test Application as Blackbox - Theft Scenario JSON has expected Number of Objects",
            "title": "JSON has expected Number of Objects"
          }, {
            "currentRetry": 0,
            "duration": 118,
            "fullTitle": "Test Application as Blackbox - Theft Scenario Test JSON is as expected",
            "title": "Test JSON is as expected"
          }],
          "stats": {
            "duration": 4498,
            "end": "2017-06-28T04:03:23.334Z",
            "start": "2017-06-28T04:03:18.836Z",
            "failures": 1,
            "pending": 5,
            "passes": 12,
            "tests": 18,
            "suites": 14
          }
        },
        "status": "Failed"
      },
      "phantomTests": {
        "summary": "",
        "errors": "",
        "output": {
          "passes": [{
            "currentRetry": 0,
            "duration": 1,
            "fullTitle": "Check whether SVG has been created for the Bar Graph DOM should have the SVG",
            "title": "DOM should have the SVG"
          }, {
            "currentRetry": 0,
            "duration": 0,
            "fullTitle": "Check whether SVG has been created for the Bar Graph svg have rectangles for the bar graph ",
            "title": "svg have rectangles for the bar graph "
          }, {
            "currentRetry": 0,
            "duration": 0,
            "fullTitle": "Check whether SVG has been created for the Line Graph DOM should have the SVG",
            "title": "DOM should have the SVG"
          }, {
            "currentRetry": 0,
            "duration": 0,
            "fullTitle": "Check whether SVG has been created for the Line Graph the SVG have the lines for line graph ",
            "title": "the SVG have the lines for line graph "
          }],
          "failures": [],
          "pending": [],
          "tests": [{
            "currentRetry": 0,
            "duration": 1,
            "fullTitle": "Check whether SVG has been created for the Bar Graph DOM should have the SVG",
            "title": "DOM should have the SVG"
          }, {
            "currentRetry": 0,
            "duration": 0,
            "fullTitle": "Check whether SVG has been created for the Bar Graph svg have rectangles for the bar graph ",
            "title": "svg have rectangles for the bar graph "
          }, {
            "currentRetry": 0,
            "duration": 0,
            "fullTitle": "Check whether SVG has been created for the Line Graph DOM should have the SVG",
            "title": "DOM should have the SVG"
          }, {
            "currentRetry": 0,
            "duration": 0,
            "fullTitle": "Check whether SVG has been created for the Line Graph the SVG have the lines for line graph ",
            "title": "the SVG have the lines for line graph "
          }],
          "stats": {
            "duration": 12,
            "end": "2017-06-28T04:03:21.177Z",
            "start": "2017-06-28T04:03:21.165Z",
            "failures": 0,
            "pending": 0,
            "passes": 4,
            "tests": 4,
            "suites": 2
          }
        },
        "status": "Completed"
      }
    },
    "run": {
      "summary": "",
      "errors": "",
      "output": "yarn start v0.24.5$ node index.js Done in 133.88s.",
      "status": "Completed"
    },
    "buildAstTest": {
      "summary": "",
      "errors": "",
      "output": "building project in /workspaces/oixbdso3/toolsyarn install v0.24.5[1/4] Resolving packages...[2/4] Fetching packages...[3/4] Linking dependencies...[4/4] Building fresh packages...Done in 6.64s.",
      "status": "Completed"
    },
    "lint": {
      "eslint": {
        "summary": {
          "checks": {
            "failed": 18,
            "passes": 115,
            "total": 133,
            "name": "/stackroute/javascript/eslint"
          }
        },
        "errors": "",
        "output": [{
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/UI-Commander/d3BarTest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/UI-Commander/d3LineTest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/UI-Test/d3BarTest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/UI-Test/d3LineTest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/assault.spec.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/asttest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/dataMunging.spec.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/jsonDiff.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/theft.spec.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/totalObjectKeys.js"
        }, {
          "source": "var margin = {\n    top: 20,\n    right: 50,\n    bottom: 30,\n    left: 50\n  },\n  width = 900 - margin.left - margin.right,\n  height = 500 - margin.top - margin.bottom;\n\nvar x = d3.scale.ordinal()\n  .rangeRoundBands([0, width], .35);\n\nvar y = d3.scale.linear()\n  .range([height, 0]);\n\nvar color = d3.scale.category10();\n\nvar xAxis = d3.svg.axis()\n  .scale(x)\n  .orient(\"bottom\");\n\nvar yAxis = d3.svg.axis()\n  .scale(y)\n  .orient(\"left\")\n  .tickFormat(d3.format(\".2s\"))\n  .ticks(6);\n\nvar line = d3.svg.line()\n  .interpolate(\"basis\")\n  .x(function(d) {\n    return x(d.year);\n  })\n  .y(function(d) {\n    return y(d.count);\n  });\n\nvar svg = d3.select(\"body\").append(\"svg\")\n  .attr(\"width\", width + margin.left + margin.right)\n  .attr(\"height\", height + margin.top + margin.bottom)\n  .append(\"g\")\n  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");\n\nvar names = [\"Arrested\", \"Not Arrested\"];\n\nd3.json(\"../test/json/assault.json\", function(error, data) {\n  color.domain(d3.keys(data[0]).filter(function(key) {\n    return key !== \"year\";\n  }));\n\n  var counter = color.domain().map(function(d) {\n    return {\n      name: d,\n      values: data.map(function(b) {\n        return {\n          year: b.year,\n          count: +b[d]\n        };\n      })\n    };\n  });\n\n\n  x.domain(data.map(function(d) {\n\n    return parseInt(d.year);\n  }));\n\n\n\n  y.domain([\n    d3.min(counter, function(c) {\n      return d3.min(c.values, function(v) {\n        return v.count;\n      });\n    }),\n    d3.max(counter, function(c) {\n      return d3.max(c.values, function(v) {\n        return v.count;\n      });\n    })\n  ]);\n\n  svg.append(\"g\")\n    .attr(\"class\", \"axis\")\n    .attr(\"transform\", \"translate(0,\" + height + \")\")\n    .call(xAxis)\n    .append(\"text\")\n    .attr(\"x\", 800)\n    .attr(\"dy\", \"0.35em\")\n    .attr(\"text-anchor\", \"start\")\n    .attr(\"fill\", \"#000\")\n    .text(\"Year\");\n\n\n  svg.append(\"g\")\n    .attr(\"class\", \"y axis\")\n    .call(yAxis)\n    .append(\"text\")\n    .attr(\"transform\", \"rotate(-90)\")\n    .attr(\"y\", 7)\n    .attr(\"dy\", \"0.35em\")\n    .attr(\"text-anchor\", \"end\")\n    .attr(\"fill\", \"#000\")\n    .text(\"Arrest Count\");\n\n\n  var arrest = svg.selectAll(\".arrest\")\n    .data(counter)\n    .enter().append(\"g\")\n    .attr(\"class\", \"arrest\")\n    .on(\"mouseover\", function(d) {\n      console.log(counter);\n\n      return counter;\n    });\n\n  var path = svg.selectAll(\".arrest\").append(\"path\")\n    .attr(\"class\", \"line\")\n    .attr(\"d\", function(d) {\n      return line(d.values);\n    })\n    .style(\"stroke\", function(d) {\n      if (d.name == \"arrested\") {\n        return \"#1f77b4\";\n      } else {\n        return \"#ff7f0e\";\n      }\n    });\n\n\n});\n",
          "warningCount": 65,
          "errorCount": 37,
          "messages": [{
            "source": "var margin = {",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 1,
            "message": "Split 'var' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                0,
                3
              ]
            },
            "source": "var margin = {",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 1,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                167,
                170
              ]
            },
            "source": "var x = d3.scale.ordinal()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 10,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var x = d3.scale.ordinal()",
            "nodeType": "Identifier",
            "column": 9,
            "line": 10,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "0",
              "range": [
                225,
                225
              ]
            },
            "source": "  .rangeRoundBands([0, width], .35);",
            "nodeType": "Literal",
            "column": 32,
            "line": 11,
            "message": "A leading decimal point can be confused with a dot.",
            "severity": 2,
            "ruleId": "no-floating-decimal"
          }, {
            "fix": {
              "text": "let",
              "range": [
                232,
                235
              ]
            },
            "source": "var y = d3.scale.linear()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 13,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var y = d3.scale.linear()",
            "nodeType": "Identifier",
            "column": 9,
            "line": 13,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                282,
                285
              ]
            },
            "source": "var color = d3.scale.category10();",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 16,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var color = d3.scale.category10();",
            "nodeType": "Identifier",
            "column": 13,
            "line": 16,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                318,
                321
              ]
            },
            "source": "var xAxis = d3.svg.axis()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 18,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var xAxis = d3.svg.axis()",
            "nodeType": "Identifier",
            "column": 13,
            "line": 18,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'bottom'",
              "range": [
                366,
                374
              ]
            },
            "source": "  .orient(\"bottom\");",
            "nodeType": "Literal",
            "column": 11,
            "line": 20,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                378,
                381
              ]
            },
            "source": "var yAxis = d3.svg.axis()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 22,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var yAxis = d3.svg.axis()",
            "nodeType": "Identifier",
            "column": 13,
            "line": 22,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'left'",
              "range": [
                426,
                432
              ]
            },
            "source": "  .orient(\"left\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 24,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "  .tickFormat(d3.format(\".2s\"))",
            "nodeType": "Identifier",
            "column": 15,
            "line": 25,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'.2s'",
              "range": [
                458,
                463
              ]
            },
            "source": "  .tickFormat(d3.format(\".2s\"))",
            "nodeType": "Literal",
            "column": 25,
            "line": 25,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                480,
                483
              ]
            },
            "source": "var line = d3.svg.line()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 28,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var line = d3.svg.line()",
            "nodeType": "Identifier",
            "column": 12,
            "line": 28,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'basis'",
              "range": [
                520,
                527
              ]
            },
            "source": "  .interpolate(\"basis\")",
            "nodeType": "Literal",
            "column": 16,
            "line": 29,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                624,
                627
              ]
            },
            "source": "var svg = d3.select(\"body\").append(\"svg\")",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 37,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var svg = d3.select(\"body\").append(\"svg\")",
            "nodeType": "Identifier",
            "column": 11,
            "line": 37,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'body'",
              "range": [
                644,
                650
              ]
            },
            "source": "var svg = d3.select(\"body\").append(\"svg\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 37,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'svg'",
              "range": [
                659,
                664
              ]
            },
            "source": "var svg = d3.select(\"body\").append(\"svg\")",
            "nodeType": "Literal",
            "column": 36,
            "line": 37,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'width'",
              "range": [
                674,
                681
              ]
            },
            "source": "  .attr(\"width\", width + margin.left + margin.right)",
            "nodeType": "Literal",
            "column": 9,
            "line": 38,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'height'",
              "range": [
                727,
                735
              ]
            },
            "source": "  .attr(\"height\", height + margin.top + margin.bottom)",
            "nodeType": "Literal",
            "column": 9,
            "line": 39,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                784,
                787
              ]
            },
            "source": "  .append(\"g\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 40,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                797,
                808
              ]
            },
            "source": "  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 9,
            "line": 41,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate('",
              "range": [
                810,
                822
              ]
            },
            "source": "  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 22,
            "line": 41,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "','",
              "range": [
                839,
                842
              ]
            },
            "source": "  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 51,
            "line": 41,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                858,
                861
              ]
            },
            "source": "  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 70,
            "line": 41,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                865,
                868
              ]
            },
            "source": "var names = [\"Arrested\", \"Not Arrested\"];",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 43,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var names = [\"Arrested\", \"Not Arrested\"];",
            "nodeType": "Identifier",
            "column": 5,
            "line": 43,
            "message": "'names' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'Arrested'",
              "range": [
                878,
                888
              ]
            },
            "source": "var names = [\"Arrested\", \"Not Arrested\"];",
            "nodeType": "Literal",
            "column": 14,
            "line": 43,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Not Arrested'",
              "range": [
                890,
                904
              ]
            },
            "source": "var names = [\"Arrested\", \"Not Arrested\"];",
            "nodeType": "Literal",
            "column": 26,
            "line": 43,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "d3.json(\"../test/json/assault.json\", function(error, data) {",
            "nodeType": "Identifier",
            "column": 1,
            "line": 45,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'../test/json/assault.json'",
              "range": [
                916,
                943
              ]
            },
            "source": "d3.json(\"../test/json/assault.json\", function(error, data) {",
            "nodeType": "Literal",
            "column": 9,
            "line": 45,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "  color.domain(d3.keys(data[0]).filter(function(key) {",
            "nodeType": "Identifier",
            "column": 16,
            "line": 46,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'year'",
              "range": [
                1043,
                1049
              ]
            },
            "source": "    return key !== \"year\";",
            "nodeType": "Literal",
            "column": 20,
            "line": 47,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1061,
                1064
              ]
            },
            "source": "  var counter = color.domain().map(function(d) {",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 50,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "  var counter = color.domain().map(function(d) {",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 50,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                1305,
                1307
              ]
            },
            "source": "  x.domain(data.map(function(d) {",
            "nodeType": "BlockStatement",
            "column": 33,
            "line": 63,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "source": "    return parseInt(d.year);",
            "nodeType": "CallExpression",
            "column": 12,
            "line": 65,
            "message": "Missing radix parameter.",
            "severity": 2,
            "ruleId": "radix"
          }, {
            "fix": {
              "text": "",
              "range": [
                1343,
                1344
              ]
            },
            "endColumn": 1,
            "endLine": 70,
            "source": "",
            "nodeType": "Program",
            "column": 1,
            "line": 67,
            "message": "More than 2 blank lines not allowed.",
            "severity": 1,
            "ruleId": "no-multiple-empty-lines"
          }, {
            "source": "    d3.min(counter, function(c) {",
            "nodeType": "Identifier",
            "column": 5,
            "line": 71,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "source": "      return d3.min(c.values, function(v) {",
            "nodeType": "Identifier",
            "column": 14,
            "line": 72,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "source": "    d3.max(counter, function(c) {",
            "nodeType": "Identifier",
            "column": 5,
            "line": 76,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "source": "      return d3.max(c.values, function(v) {",
            "nodeType": "Identifier",
            "column": 14,
            "line": 77,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                1618,
                1621
              ]
            },
            "source": "  svg.append(\"g\")",
            "nodeType": "Literal",
            "column": 14,
            "line": 83,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                1633,
                1640
              ]
            },
            "source": "    .attr(\"class\", \"axis\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 84,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'axis'",
              "range": [
                1642,
                1648
              ]
            },
            "source": "    .attr(\"class\", \"axis\")",
            "nodeType": "Literal",
            "column": 20,
            "line": 84,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                1660,
                1671
              ]
            },
            "source": "    .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 85,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate(0,'",
              "range": [
                1673,
                1687
              ]
            },
            "source": "    .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 85,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                1699,
                1702
              ]
            },
            "source": "    .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 50,
            "line": 85,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                1733,
                1739
              ]
            },
            "source": "    .append(\"text\")",
            "nodeType": "Literal",
            "column": 13,
            "line": 87,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                1751,
                1754
              ]
            },
            "source": "    .attr(\"x\", 800)",
            "nodeType": "Literal",
            "column": 11,
            "line": 88,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                1771,
                1775
              ]
            },
            "source": "    .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 89,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'0.35em'",
              "range": [
                1777,
                1785
              ]
            },
            "source": "    .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 17,
            "line": 89,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                1797,
                1810
              ]
            },
            "source": "    .attr(\"text-anchor\", \"start\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 90,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'start'",
              "range": [
                1812,
                1819
              ]
            },
            "source": "    .attr(\"text-anchor\", \"start\")",
            "nodeType": "Literal",
            "column": 26,
            "line": 90,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                1831,
                1837
              ]
            },
            "source": "    .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#000'",
              "range": [
                1839,
                1845
              ]
            },
            "source": "    .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 19,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Year'",
              "range": [
                1857,
                1863
              ]
            },
            "source": "    .text(\"Year\");",
            "nodeType": "Literal",
            "column": 11,
            "line": 92,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                1881,
                1884
              ]
            },
            "source": "  svg.append(\"g\")",
            "nodeType": "Literal",
            "column": 14,
            "line": 95,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                1896,
                1903
              ]
            },
            "source": "    .attr(\"class\", \"y axis\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 96,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y axis'",
              "range": [
                1905,
                1913
              ]
            },
            "source": "    .attr(\"class\", \"y axis\")",
            "nodeType": "Literal",
            "column": 20,
            "line": 96,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                1944,
                1950
              ]
            },
            "source": "    .append(\"text\")",
            "nodeType": "Literal",
            "column": 13,
            "line": 98,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                1962,
                1973
              ]
            },
            "source": "    .attr(\"transform\", \"rotate(-90)\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 99,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rotate(-90)'",
              "range": [
                1975,
                1988
              ]
            },
            "source": "    .attr(\"transform\", \"rotate(-90)\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 99,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y'",
              "range": [
                2000,
                2003
              ]
            },
            "source": "    .attr(\"y\", 7)",
            "nodeType": "Literal",
            "column": 11,
            "line": 100,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                2018,
                2022
              ]
            },
            "source": "    .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 101,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'0.35em'",
              "range": [
                2024,
                2032
              ]
            },
            "source": "    .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 17,
            "line": 101,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                2044,
                2057
              ]
            },
            "source": "    .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 102,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'end'",
              "range": [
                2059,
                2064
              ]
            },
            "source": "    .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 26,
            "line": 102,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                2076,
                2082
              ]
            },
            "source": "    .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 103,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#000'",
              "range": [
                2084,
                2090
              ]
            },
            "source": "    .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 19,
            "line": 103,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Arrest Count'",
              "range": [
                2102,
                2116
              ]
            },
            "source": "    .text(\"Arrest Count\");",
            "nodeType": "Literal",
            "column": 11,
            "line": 104,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2123,
                2126
              ]
            },
            "source": "  var arrest = svg.selectAll(\".arrest\")",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 107,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "  var arrest = svg.selectAll(\".arrest\")",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 107,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "source": "  var arrest = svg.selectAll(\".arrest\")",
            "nodeType": "Identifier",
            "column": 7,
            "line": 107,
            "message": "'arrest' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'.arrest'",
              "range": [
                2150,
                2159
              ]
            },
            "source": "  var arrest = svg.selectAll(\".arrest\")",
            "nodeType": "Literal",
            "column": 30,
            "line": 107,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                2200,
                2203
              ]
            },
            "source": "    .enter().append(\"g\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 109,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                2215,
                2222
              ]
            },
            "source": "    .attr(\"class\", \"arrest\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 110,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'arrest'",
              "range": [
                2224,
                2232
              ]
            },
            "source": "    .attr(\"class\", \"arrest\")",
            "nodeType": "Literal",
            "column": 20,
            "line": 110,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'mouseover'",
              "range": [
                2242,
                2253
              ]
            },
            "source": "    .on(\"mouseover\", function(d) {",
            "nodeType": "Literal",
            "column": 9,
            "line": 111,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "    .on(\"mouseover\", function(d) {",
            "nodeType": "Identifier",
            "column": 31,
            "line": 111,
            "message": "'d' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "endColumn": 18,
            "endLine": 112,
            "source": "      console.log(counter);",
            "nodeType": "MemberExpression",
            "column": 7,
            "line": 112,
            "message": "Unexpected console statement.",
            "severity": 1,
            "ruleId": "no-console"
          }, {
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 117,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2331,
                2334
              ]
            },
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 117,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "Identifier",
            "column": 7,
            "line": 117,
            "message": "'path' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'.arrest'",
              "range": [
                2356,
                2365
              ]
            },
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "Literal",
            "column": 28,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'path'",
              "range": [
                2374,
                2380
              ]
            },
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "Literal",
            "column": 46,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                2392,
                2399
              ]
            },
            "source": "    .attr(\"class\", \"line\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 118,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'line'",
              "range": [
                2401,
                2407
              ]
            },
            "source": "    .attr(\"class\", \"line\")",
            "nodeType": "Literal",
            "column": 20,
            "line": 118,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'d'",
              "range": [
                2419,
                2422
              ]
            },
            "source": "    .attr(\"d\", function(d) {",
            "nodeType": "Literal",
            "column": 11,
            "line": 119,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'stroke'",
              "range": [
                2485,
                2493
              ]
            },
            "source": "    .style(\"stroke\", function(d) {",
            "nodeType": "Literal",
            "column": 12,
            "line": 122,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "      if (d.name == \"arrested\") {",
            "nodeType": "BinaryExpression",
            "column": 18,
            "line": 123,
            "message": "Expected '===' and instead saw '=='.",
            "severity": 2,
            "ruleId": "eqeqeq"
          }, {
            "fix": {
              "text": "'arrested'",
              "range": [
                2529,
                2539
              ]
            },
            "source": "      if (d.name == \"arrested\") {",
            "nodeType": "Literal",
            "column": 21,
            "line": 123,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#1f77b4'",
              "range": [
                2558,
                2567
              ]
            },
            "source": "        return \"#1f77b4\";",
            "nodeType": "Literal",
            "column": 16,
            "line": 124,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "function(d) {\n      if (d.name == \"arrested\") {\n        return \"#1f77b4\";\n      } \n        return \"#ff7f0e\";\n      \n    }",
              "range": [
                2495,
                2623
              ]
            },
            "source": "      } else {",
            "nodeType": "BlockStatement",
            "column": 14,
            "line": 125,
            "message": "Unnecessary 'else' after 'return'.",
            "severity": 2,
            "ruleId": "no-else-return"
          }, {
            "fix": {
              "text": "'#ff7f0e'",
              "range": [
                2599,
                2608
              ]
            },
            "source": "        return \"#ff7f0e\";",
            "nodeType": "Literal",
            "column": 16,
            "line": 126,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                2625,
                2628
              ]
            },
            "source": "});",
            "nodeType": "BlockStatement",
            "column": 1,
            "line": 131,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }],
          "filePath": "/workspaces/oixbdso3/submission/js/assaultchart.js"
        }, {
          "source": "//var d3 = require('d3');\nvar margin = { top: 20, right: 50, bottom: 30, left: 50 },\n    width = 900 - margin.left - margin.right,\n    height = 500 - margin.top - margin.bottom;\n\nvar x = d3.scale.ordinal()\n    .rangeRoundBands([0, width], .35);\n\nvar y = d3.scale.linear()\n    .rangeRound([height, 0]);\n\nvar color = d3.scale.category20();\n\nvar xAxis = d3.svg.axis()\n    .scale(x)\n    .orient(\"bottom\");\n\nvar yAxis = d3.svg.axis()\n    .scale(y)\n    .orient(\"left\")\n    .ticks(5)\n    .tickFormat(d3.format(\".2s\"));\n\nvar svg = d3.select(\"#bar\").append(\"svg\")\n    .attr(\"width\", width + margin.left + margin.right)\n    .attr(\"height\", height + margin.top + margin.bottom)\n    .append(\"g\")\n    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");\nvar xData = [\"over500\", \"under500\"];\n\nd3.json(\"../output/theft.json\", function(err, data) {\n    var dataIntermediate = xData.map(function(c) {\n        return data.map(function(d) {\n            return { x: d.year, y: d[c] };\n        });\n    });\n\n    var dataStackLayout = d3.layout.stack()(dataIntermediate);\n\n    x.domain(dataStackLayout[0].map(function(d) {\n        return d.x;\n    }));\n\n    y.domain([0,\n            d3.max(dataStackLayout[dataStackLayout.length - 1],\n                function(d) {\n                    return d.y0 + d.y;\n                })\n        ])\n        .nice();\n\n    var layer = svg.selectAll(\"g.cost\")\n        .data(dataStackLayout)\n        .enter().append(\"g\")\n        .attr(\"class\", \"cost\")\n        .style(\"fill\", function(d, i) {\n            return color(i);\n        });\n\n    layer.selectAll(\"rect\")\n        .data(function(d) {\n            return d;\n        })\n        .enter().append(\"rect\")\n        .attr(\"x\", function(d) {\n            return x(d.x);\n        })\n        .attr(\"y\", function(d) {\n            return y(d.y + d.y0);\n        })\n        .attr(\"height\", function(d) {\n            return y(d.y0) - y(d.y + d.y0);\n        })\n        .attr(\"width\", x.rangeBand());\n\n    svg.append(\"g\")\n        .attr(\"class\", \"axis\")\n        .attr(\"transform\", \"translate(0,\" + height + \")\")\n        .call(xAxis)\n        .append(\"text\")\n        .attr(\"x\", 800)\n        .attr(\"dy\", \"0.35em\")\n        .attr(\"text-anchor\", \"start\")\n        .attr(\"fill\", \"#000\")\n        .text(\"Year\");\n\n    svg.append(\"g\")\n        .attr(\"class\", \"y axis\")\n        .call(yAxis)\n        .append(\"text\")\n        .attr(\"transform\", \"rotate(-90)\")\n        .attr(\"y\", 7)\n        .attr(\"dy\", \"0.35em\")\n        .attr(\"text-anchor\", \"end\")\n        .attr(\"fill\", \"#000\")\n        .text(\"Theft Count\");\n\n    var legend = svg.selectAll(\".legend\")\n        .data(color.domain().slice().reverse())\n        .enter().append(\"g\")\n        .attr(\"class\", \"legend\")\n        .attr(\"transform\", function(d, i) {\n            return \"translate(0,\" + i * 20 + \")\";\n        })\n        .style(\"font\", \"10px sans-serif\");\n\n    legend.append(\"rect\")\n        .attr(\"x\", width - 18)\n        .attr(\"width\", 18)\n        .attr(\"height\", 18)\n        .attr(\"fill\", color);\n\n    legend.append(\"text\")\n        .attr(\"x\", width - 24)\n        .attr(\"y\", 9)\n        .attr(\"dy\", \".35em\")\n        .attr(\"text-anchor\", \"end\")\n        .text(function(d) {\n            return xData[d];\n        });\n});\n",
          "warningCount": 78,
          "errorCount": 25,
          "messages": [{
            "fix": {
              "text": " ",
              "range": [
                2,
                2
              ]
            },
            "source": "//var d3 = require('d3');",
            "nodeType": "Line",
            "column": 1,
            "line": 1,
            "message": "Expected space or tab after '//' in comment.",
            "severity": 1,
            "ruleId": "spaced-comment"
          }, {
            "source": "var margin = { top: 20, right: 50, bottom: 30, left: 50 },",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 2,
            "message": "Split 'var' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                26,
                29
              ]
            },
            "source": "var margin = { top: 20, right: 50, bottom: 30, left: 50 },",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 2,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                179,
                182
              ]
            },
            "source": "var x = d3.scale.ordinal()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 6,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var x = d3.scale.ordinal()",
            "nodeType": "Identifier",
            "column": 9,
            "line": 6,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "0",
              "range": [
                239,
                239
              ]
            },
            "source": "    .rangeRoundBands([0, width], .35);",
            "nodeType": "Literal",
            "column": 34,
            "line": 7,
            "message": "A leading decimal point can be confused with a dot.",
            "severity": 2,
            "ruleId": "no-floating-decimal"
          }, {
            "fix": {
              "text": "let",
              "range": [
                246,
                249
              ]
            },
            "source": "var y = d3.scale.linear()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 9,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var y = d3.scale.linear()",
            "nodeType": "Identifier",
            "column": 9,
            "line": 9,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                303,
                306
              ]
            },
            "source": "var color = d3.scale.category20();",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 12,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var color = d3.scale.category20();",
            "nodeType": "Identifier",
            "column": 13,
            "line": 12,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                339,
                342
              ]
            },
            "source": "var xAxis = d3.svg.axis()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 14,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var xAxis = d3.svg.axis()",
            "nodeType": "Identifier",
            "column": 13,
            "line": 14,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'bottom'",
              "range": [
                391,
                399
              ]
            },
            "source": "    .orient(\"bottom\");",
            "nodeType": "Literal",
            "column": 13,
            "line": 16,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                403,
                406
              ]
            },
            "source": "var yAxis = d3.svg.axis()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 18,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var yAxis = d3.svg.axis()",
            "nodeType": "Identifier",
            "column": 13,
            "line": 18,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'left'",
              "range": [
                455,
                461
              ]
            },
            "source": "    .orient(\"left\")",
            "nodeType": "Literal",
            "column": 13,
            "line": 20,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "    .tickFormat(d3.format(\".2s\"));",
            "nodeType": "Identifier",
            "column": 17,
            "line": 22,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'.2s'",
              "range": [
                503,
                508
              ]
            },
            "source": "    .tickFormat(d3.format(\".2s\"));",
            "nodeType": "Literal",
            "column": 27,
            "line": 22,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                513,
                516
              ]
            },
            "source": "var svg = d3.select(\"#bar\").append(\"svg\")",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 24,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var svg = d3.select(\"#bar\").append(\"svg\")",
            "nodeType": "Identifier",
            "column": 11,
            "line": 24,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'#bar'",
              "range": [
                533,
                539
              ]
            },
            "source": "var svg = d3.select(\"#bar\").append(\"svg\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 24,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'svg'",
              "range": [
                548,
                553
              ]
            },
            "source": "var svg = d3.select(\"#bar\").append(\"svg\")",
            "nodeType": "Literal",
            "column": 36,
            "line": 24,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'width'",
              "range": [
                565,
                572
              ]
            },
            "source": "    .attr(\"width\", width + margin.left + margin.right)",
            "nodeType": "Literal",
            "column": 11,
            "line": 25,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'height'",
              "range": [
                620,
                628
              ]
            },
            "source": "    .attr(\"height\", height + margin.top + margin.bottom)",
            "nodeType": "Literal",
            "column": 11,
            "line": 26,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                679,
                682
              ]
            },
            "source": "    .append(\"g\")",
            "nodeType": "Literal",
            "column": 13,
            "line": 27,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                694,
                705
              ]
            },
            "source": "    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 11,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate('",
              "range": [
                707,
                719
              ]
            },
            "source": "    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 24,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "','",
              "range": [
                736,
                739
              ]
            },
            "source": "    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                755,
                758
              ]
            },
            "source": "    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 72,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                761,
                764
              ]
            },
            "source": "var xData = [\"over500\", \"under500\"];",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 29,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'over500'",
              "range": [
                774,
                783
              ]
            },
            "source": "var xData = [\"over500\", \"under500\"];",
            "nodeType": "Literal",
            "column": 14,
            "line": 29,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'under500'",
              "range": [
                785,
                795
              ]
            },
            "source": "var xData = [\"over500\", \"under500\"];",
            "nodeType": "Literal",
            "column": 25,
            "line": 29,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "d3.json(\"../output/theft.json\", function(err, data) {",
            "nodeType": "Identifier",
            "column": 1,
            "line": 31,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'../output/theft.json'",
              "range": [
                807,
                829
              ]
            },
            "source": "d3.json(\"../output/theft.json\", function(err, data) {",
            "nodeType": "Literal",
            "column": 9,
            "line": 31,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                857,
                860
              ]
            },
            "source": "    var dataIntermediate = xData.map(function(c) {",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 32,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1010,
                1013
              ]
            },
            "source": "    var dataStackLayout = d3.layout.stack()(dataIntermediate);",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 38,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "    var dataStackLayout = d3.layout.stack()(dataIntermediate);",
            "nodeType": "Identifier",
            "column": 27,
            "line": 38,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "source": "            d3.max(dataStackLayout[dataStackLayout.length - 1],",
            "nodeType": "Identifier",
            "column": 13,
            "line": 45,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1352,
                1355
              ]
            },
            "source": "    var layer = svg.selectAll(\"g.cost\")",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 52,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "    var layer = svg.selectAll(\"g.cost\")",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 52,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "'g.cost'",
              "range": [
                1378,
                1386
              ]
            },
            "source": "    var layer = svg.selectAll(\"g.cost\")",
            "nodeType": "Literal",
            "column": 31,
            "line": 52,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                1443,
                1446
              ]
            },
            "source": "        .enter().append(\"g\")",
            "nodeType": "Literal",
            "column": 25,
            "line": 54,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                1462,
                1469
              ]
            },
            "source": "        .attr(\"class\", \"cost\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 55,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'cost'",
              "range": [
                1471,
                1477
              ]
            },
            "source": "        .attr(\"class\", \"cost\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 55,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                1494,
                1500
              ]
            },
            "source": "        .style(\"fill\", function(d, i) {",
            "nodeType": "Literal",
            "column": 16,
            "line": 56,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rect'",
              "range": [
                1581,
                1587
              ]
            },
            "source": "    layer.selectAll(\"rect\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 60,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rect'",
              "range": [
                1674,
                1680
              ]
            },
            "source": "        .enter().append(\"rect\")",
            "nodeType": "Literal",
            "column": 25,
            "line": 64,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                1696,
                1699
              ]
            },
            "source": "        .attr(\"x\", function(d) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 65,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y'",
              "range": [
                1767,
                1770
              ]
            },
            "source": "        .attr(\"y\", function(d) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 68,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'height'",
              "range": [
                1845,
                1853
              ]
            },
            "source": "        .attr(\"height\", function(d) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 71,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'width'",
              "range": [
                1938,
                1945
              ]
            },
            "source": "        .attr(\"width\", x.rangeBand());",
            "nodeType": "Literal",
            "column": 15,
            "line": 74,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                1979,
                1982
              ]
            },
            "source": "    svg.append(\"g\")",
            "nodeType": "Literal",
            "column": 16,
            "line": 76,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                1998,
                2005
              ]
            },
            "source": "        .attr(\"class\", \"axis\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 77,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'axis'",
              "range": [
                2007,
                2013
              ]
            },
            "source": "        .attr(\"class\", \"axis\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 77,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                2029,
                2040
              ]
            },
            "source": "        .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 78,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate(0,'",
              "range": [
                2042,
                2056
              ]
            },
            "source": "        .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 28,
            "line": 78,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                2068,
                2071
              ]
            },
            "source": "        .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 54,
            "line": 78,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                2110,
                2116
              ]
            },
            "source": "        .append(\"text\")",
            "nodeType": "Literal",
            "column": 17,
            "line": 80,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                2132,
                2135
              ]
            },
            "source": "        .attr(\"x\", 800)",
            "nodeType": "Literal",
            "column": 15,
            "line": 81,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                2156,
                2160
              ]
            },
            "source": "        .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 82,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'0.35em'",
              "range": [
                2162,
                2170
              ]
            },
            "source": "        .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 82,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                2186,
                2199
              ]
            },
            "source": "        .attr(\"text-anchor\", \"start\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 83,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'start'",
              "range": [
                2201,
                2208
              ]
            },
            "source": "        .attr(\"text-anchor\", \"start\")",
            "nodeType": "Literal",
            "column": 30,
            "line": 83,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                2224,
                2230
              ]
            },
            "source": "        .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 84,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#000'",
              "range": [
                2232,
                2238
              ]
            },
            "source": "        .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 23,
            "line": 84,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Year'",
              "range": [
                2254,
                2260
              ]
            },
            "source": "        .text(\"Year\");",
            "nodeType": "Literal",
            "column": 15,
            "line": 85,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                2279,
                2282
              ]
            },
            "source": "    svg.append(\"g\")",
            "nodeType": "Literal",
            "column": 16,
            "line": 87,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                2298,
                2305
              ]
            },
            "source": "        .attr(\"class\", \"y axis\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 88,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y axis'",
              "range": [
                2307,
                2315
              ]
            },
            "source": "        .attr(\"class\", \"y axis\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 88,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                2354,
                2360
              ]
            },
            "source": "        .append(\"text\")",
            "nodeType": "Literal",
            "column": 17,
            "line": 90,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                2376,
                2387
              ]
            },
            "source": "        .attr(\"transform\", \"rotate(-90)\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rotate(-90)'",
              "range": [
                2389,
                2402
              ]
            },
            "source": "        .attr(\"transform\", \"rotate(-90)\")",
            "nodeType": "Literal",
            "column": 28,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y'",
              "range": [
                2418,
                2421
              ]
            },
            "source": "        .attr(\"y\", 7)",
            "nodeType": "Literal",
            "column": 15,
            "line": 92,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                2440,
                2444
              ]
            },
            "source": "        .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 93,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'0.35em'",
              "range": [
                2446,
                2454
              ]
            },
            "source": "        .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 93,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                2470,
                2483
              ]
            },
            "source": "        .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 94,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'end'",
              "range": [
                2485,
                2490
              ]
            },
            "source": "        .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 30,
            "line": 94,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                2506,
                2512
              ]
            },
            "source": "        .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 95,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#000'",
              "range": [
                2514,
                2520
              ]
            },
            "source": "        .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 23,
            "line": 95,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Theft Count'",
              "range": [
                2536,
                2549
              ]
            },
            "source": "        .text(\"Theft Count\");",
            "nodeType": "Literal",
            "column": 15,
            "line": 96,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2557,
                2560
              ]
            },
            "source": "    var legend = svg.selectAll(\".legend\")",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 98,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "    var legend = svg.selectAll(\".legend\")",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 98,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "'.legend'",
              "range": [
                2584,
                2593
              ]
            },
            "source": "    var legend = svg.selectAll(\".legend\")",
            "nodeType": "Literal",
            "column": 32,
            "line": 98,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                2667,
                2670
              ]
            },
            "source": "        .enter().append(\"g\")",
            "nodeType": "Literal",
            "column": 25,
            "line": 100,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                2686,
                2693
              ]
            },
            "source": "        .attr(\"class\", \"legend\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 101,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'legend'",
              "range": [
                2695,
                2703
              ]
            },
            "source": "        .attr(\"class\", \"legend\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 101,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                2719,
                2730
              ]
            },
            "source": "        .attr(\"transform\", function(d, i) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 102,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate(0,'",
              "range": [
                2768,
                2782
              ]
            },
            "source": "            return \"translate(0,\" + i * 20 + \")\";",
            "nodeType": "Literal",
            "column": 20,
            "line": 103,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                2794,
                2797
              ]
            },
            "source": "            return \"translate(0,\" + i * 20 + \")\";",
            "nodeType": "Literal",
            "column": 46,
            "line": 103,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'font'",
              "range": [
                2825,
                2831
              ]
            },
            "source": "        .style(\"font\", \"10px sans-serif\");",
            "nodeType": "Literal",
            "column": 16,
            "line": 105,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'10px sans-serif'",
              "range": [
                2833,
                2850
              ]
            },
            "source": "        .style(\"font\", \"10px sans-serif\");",
            "nodeType": "Literal",
            "column": 24,
            "line": 105,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rect'",
              "range": [
                2872,
                2878
              ]
            },
            "source": "    legend.append(\"rect\")",
            "nodeType": "Literal",
            "column": 19,
            "line": 107,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                2894,
                2897
              ]
            },
            "source": "        .attr(\"x\", width - 18)",
            "nodeType": "Literal",
            "column": 15,
            "line": 108,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'width'",
              "range": [
                2925,
                2932
              ]
            },
            "source": "        .attr(\"width\", 18)",
            "nodeType": "Literal",
            "column": 15,
            "line": 109,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'height'",
              "range": [
                2952,
                2960
              ]
            },
            "source": "        .attr(\"height\", 18)",
            "nodeType": "Literal",
            "column": 15,
            "line": 110,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                2980,
                2986
              ]
            },
            "source": "        .attr(\"fill\", color);",
            "nodeType": "Literal",
            "column": 15,
            "line": 111,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                3015,
                3021
              ]
            },
            "source": "    legend.append(\"text\")",
            "nodeType": "Literal",
            "column": 19,
            "line": 113,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                3037,
                3040
              ]
            },
            "source": "        .attr(\"x\", width - 24)",
            "nodeType": "Literal",
            "column": 15,
            "line": 114,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y'",
              "range": [
                3068,
                3071
              ]
            },
            "source": "        .attr(\"y\", 9)",
            "nodeType": "Literal",
            "column": 15,
            "line": 115,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                3090,
                3094
              ]
            },
            "source": "        .attr(\"dy\", \".35em\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 116,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'.35em'",
              "range": [
                3096,
                3103
              ]
            },
            "source": "        .attr(\"dy\", \".35em\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 116,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                3119,
                3132
              ]
            },
            "source": "        .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'end'",
              "range": [
                3134,
                3139
              ]
            },
            "source": "        .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 30,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }],
          "filePath": "/workspaces/oixbdso3/submission/js/theftbargraph.js"
        }, {
          "source": "const chai = require('chai');\nconst expect = chai.expect;\n\nconst jsonDiff = require('./jsonDiff');\nconst totalObjectKeys = require('./totalObjectKeys');\n\nconst expectedJSON = require('./json/assault.json');\nconst actualJSON = require('../output/assault.json');\n\ndescribe('Test Application as Blackbox - Assault Scenario', function(){\n\n  it('JSON has expected Number of Objects', function(done){\n    for(let i=0; i < expectedJSON.length; i++){\n      let objMatrix = totalObjectKeys.traverse(actualJSON[i]);\n      expect(objMatrix.totalNoObjects).to.not.equal(0);\n      expect(objMatrix.totalNoKeys).to.not.equal(0);\n    }\n    done();\n  });\n\n  it('Test JSON is as expected', function(done){\n    for(let i=0; i < expectedJSON.length; i++){\n      let compareResult = jsonDiff.compareJSONObjects(expectedJSON, actualJSON);\n      expect(compareResult.diffs).equal(0);\n    }\n    done();\n  });\n});\n",
          "warningCount": 8,
          "errorCount": 2,
          "messages": [{
            "fix": {
              "text": "\n",
              "range": [
                333,
                335
              ]
            },
            "source": "describe('Test Application as Blackbox - Assault Scenario', function(){",
            "nodeType": "BlockStatement",
            "column": 71,
            "line": 10,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                332,
                332
              ]
            },
            "source": "describe('Test Application as Blackbox - Assault Scenario', function(){",
            "nodeType": "BlockStatement",
            "column": 71,
            "line": 10,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                393,
                393
              ]
            },
            "source": "  it('JSON has expected Number of Objects', function(done){",
            "nodeType": "BlockStatement",
            "column": 59,
            "line": 12,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " = ",
              "range": [
                408,
                409
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "VariableDeclarator",
            "column": 14,
            "line": 13,
            "message": "Infix operators must be spaced.",
            "severity": 1,
            "ruleId": "space-infix-ops"
          }, {
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "UpdateExpression",
            "column": 43,
            "line": 13,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": " ",
              "range": [
                441,
                441
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "BlockStatement",
            "column": 47,
            "line": 13,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                687,
                687
              ]
            },
            "source": "  it('Test JSON is as expected', function(done){",
            "nodeType": "BlockStatement",
            "column": 48,
            "line": 21,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " = ",
              "range": [
                702,
                703
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "VariableDeclarator",
            "column": 14,
            "line": 22,
            "message": "Infix operators must be spaced.",
            "severity": 1,
            "ruleId": "space-infix-ops"
          }, {
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "UpdateExpression",
            "column": 43,
            "line": 22,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": " ",
              "range": [
                735,
                735
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "BlockStatement",
            "column": 47,
            "line": 22,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/assault.spec.js"
        }, {
          "source": "const path = require('path');\nconst should = require(\"chai\").should(),\nexpect = require(\"chai\").expect,\nastprocessor = require(\"../../tools/src/processFile\"),\napp = require(\"../index\");\n\n//console.log(\"Filename :\" + __filename);\n\ndescribe(\"Check the AST for this file\", function(err){\n\t\tit(\"should be called only once\", function(done) {\n        astprocessor((__dirname + '/../' + 'index.js'), function(err, data) {\n          // data.forEach(function(d){\n          //   //console.log(d.name,d.result);\n          // });\n\t\t\t\t\t// console.log(data);\n          done();\n        });\n    });\n  });\n",
          "warningCount": 10,
          "errorCount": 7,
          "messages": [{
            "source": "const path = require('path');",
            "nodeType": "Identifier",
            "column": 7,
            "line": 1,
            "message": "'path' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 2,
            "message": "Split 'const' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "Identifier",
            "column": 7,
            "line": 2,
            "message": "'should' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'chai'",
              "range": [
                53,
                59
              ]
            },
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "Literal",
            "column": 24,
            "line": 2,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "expect = require(\"chai\").expect,",
            "nodeType": "Identifier",
            "column": 1,
            "line": 3,
            "message": "'expect' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'chai'",
              "range": [
                88,
                94
              ]
            },
            "source": "expect = require(\"chai\").expect,",
            "nodeType": "Literal",
            "column": 18,
            "line": 3,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'../../tools/src/processFile'",
              "range": [
                127,
                156
              ]
            },
            "source": "astprocessor = require(\"../../tools/src/processFile\"),",
            "nodeType": "Literal",
            "column": 24,
            "line": 4,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "app = require(\"../index\");",
            "nodeType": "Identifier",
            "column": 1,
            "line": 5,
            "message": "'app' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'../index'",
              "range": [
                173,
                183
              ]
            },
            "source": "app = require(\"../index\");",
            "nodeType": "Literal",
            "column": 15,
            "line": 5,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": " ",
              "range": [
                189,
                189
              ]
            },
            "source": "//console.log(\"Filename :\" + __filename);",
            "nodeType": "Line",
            "column": 1,
            "line": 7,
            "message": "Expected space or tab after '//' in comment.",
            "severity": 1,
            "ruleId": "spaced-comment"
          }, {
            "fix": {
              "text": "'Check the AST for this file'",
              "range": [
                239,
                268
              ]
            },
            "source": "describe(\"Check the AST for this file\", function(err){",
            "nodeType": "Literal",
            "column": 10,
            "line": 9,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Check the AST for this file\", function(err){",
            "nodeType": "Identifier",
            "column": 50,
            "line": 9,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": " ",
              "range": [
                283,
                283
              ]
            },
            "source": "describe(\"Check the AST for this file\", function(err){",
            "nodeType": "BlockStatement",
            "column": 54,
            "line": 9,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": "'should be called only once'",
              "range": [
                290,
                318
              ]
            },
            "source": "\t\tit(\"should be called only once\", function(done) {",
            "nodeType": "Literal",
            "column": 6,
            "line": 10,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "__dirname + '/../' + 'index.js'",
              "range": [
                358,
                391
              ]
            },
            "source": "        astprocessor((__dirname + '/../' + 'index.js'), function(err, data) {",
            "nodeType": "BinaryExpression",
            "column": 22,
            "line": 11,
            "message": "Gratuitous parentheses around expression.",
            "severity": 1,
            "ruleId": "no-extra-parens"
          }, {
            "source": "        astprocessor((__dirname + '/../' + 'index.js'), function(err, data) {",
            "nodeType": "Identifier",
            "column": 66,
            "line": 11,
            "message": "'err' is already declared in the upper scope.",
            "severity": 2,
            "ruleId": "no-shadow"
          }, {
            "source": "        astprocessor((__dirname + '/../' + 'index.js'), function(err, data) {",
            "nodeType": "Identifier",
            "column": 71,
            "line": 11,
            "message": "'data' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/asttest.js"
        }, {
          "source": "const should = require(\"chai\").should(),\r\n    expect = require(\"chai\").expect,\r\n    sinon = require('sinon'),\r\n    readline = require(\"readline\"),\r\n    fs = require(\"fs\"),\r\n    pkginfo = require(\"pkginfo\")(module),\r\n    convert = require(\"../index\");\r\n\r\ndescribe(\"Test the createInterface method of readline\", function(err) {\r\n    it(\"should be called only once\", function() {\r\n        var spyCreateInterface = sinon.spy(readline, 'createInterface');\r\n        convert();\r\n        readline.createInterface.restore();\r\n        sinon.assert.calledOnce(spyCreateInterface);\r\n    });\r\n});\r\ndescribe(\"Test the on() method of readline interface for line event\", function(err) {\r\n    it(\"should be called\", function() {\r\n        var stub = sinon.stub(readline.Interface.prototype, 'on');\r\n        convert();\r\n        sinon.assert.called(stub);\r\n        readline.Interface.prototype.on.restore();\r\n        sinon.assert.calledWith(stub, \"line\");\r\n\r\n    });\r\n});\r\ndescribe(\"Test the on() method of readline interface for close event\", function(err) {\r\n    it(\"should be called\", function() {\r\n        var stub = sinon.stub(readline.Interface.prototype, 'on');\r\n        convert();\r\n        readline.Interface.prototype.on.restore();\r\n        sinon.assert.calledWith(stub, \"close\");\r\n    });\r\n});\r\n\r\ndescribe(\"Test for use of Array.map() and Array.push() function\", function(err) {\r\n    it(\"Array.map() should be used atleast once\", function() {\r\n        var mapSpy = sinon.spy(Array.prototype, 'map');\r\n        convert();\r\n        sinon.assert.called(mapSpy);\r\n    });\r\n    it(\"Array.push() should be used atleast once\", function() {\r\n        var pushSpy = sinon.spy(Array.prototype, 'push');\r\n        convert();\r\n        sinon.assert.called(pushSpy);\r\n    });\r\n});\r\n\r\ndescribe.skip(\"Unit tests have been created\", function(err) {\r\n    it(\"check for existence of test files\", function(done) {\r\n        fs.stat(__dirname + '/' + module.exports.unittests, function(err, stat) {\r\n            expect(err).to.equal(null);\r\n            expect(err).to.not.equal('ENOENT');\r\n            done();\r\n        });\r\n    });\r\n});\r\n\r\ndescribe(\"Testing for existence of Synchronous file read methods\", function(err) {\r\n    let sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should not be called readFileSync\", function() {\r\n        var stub = this.sandbox.stub(require('fs'), \"readFileSync\");\r\n        convert();\r\n        sinon.assert.callCount(stub, 0);\r\n    });\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\n\r\ndescribe(\"Testing for existence of Synchronous writeFileSync methods\", function(err) {\r\n    let sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should not be called writeFileSync\", function() {\r\n        var stub = this.sandbox.stub(require('fs'), \"writeFileSync\");\r\n        convert();\r\n        sinon.assert.callCount(stub, 0);\r\n    });\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\n\r\ndescribe(\"Testing for existence of Asynchronous writeFile methods\", function(err) {\r\n    let sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should be called writeFile\", function(done) {\r\n        var stub = this.sandbox.stub(require('fs'), \"writeFile\");\r\n        convert();\r\n        setTimeout(function() {\r\n            sinon.assert.called(stub);\r\n        }, 10000);\r\n\r\n        done();\r\n    });\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\n\r\ndescribe.skip(\"Testing for whether close() method called on fs\", function(err) {\r\n    let sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should be called\", function() {\r\n        var stub = this.sandbox.stub(require('fs'), \"close\");\r\n        convert();\r\n        sinon.assert.called(stub);\r\n    });\r\n\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\ndescribe.skip(\"Test for use of JSON.parse() and JSON.stringify() functions\", function(err) {\r\n    it(\"JSON.parse() should be used atleast once\", function() {\r\n        var parseSpy = sinon.spy(JSON, 'parse');\r\n        convert();\r\n        sinon.assert.called(parseSpy);\r\n    });\r\n    it(\"JSON.stringify() should be used atleast once\", function() {\r\n        var stringifySpy = sinon.spy(JSON, 'stringify');\r\n        convert();\r\n        sinon.assert.called(stringifySpy);\r\n    });\r\n});\r\n\r\ndescribe.skip(\"Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods\", function(err) {\r\n\t\tlet sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should be called\", function() {\r\n        var stub = this.sandbox.stub(RegExp, \"test\");\r\n        convert();\r\n        sinon.assert.called(stub);\r\n    });\r\n\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\n",
          "warningCount": 44,
          "errorCount": 33,
          "messages": [{
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 1,
            "message": "Split 'const' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "Identifier",
            "column": 7,
            "line": 1,
            "message": "'should' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'chai'",
              "range": [
                23,
                29
              ]
            },
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "Literal",
            "column": 24,
            "line": 1,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'chai'",
              "range": [
                63,
                69
              ]
            },
            "source": "    expect = require(\"chai\").expect,",
            "nodeType": "Literal",
            "column": 22,
            "line": 2,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'readline'",
              "range": [
                134,
                144
              ]
            },
            "source": "    readline = require(\"readline\"),",
            "nodeType": "Literal",
            "column": 24,
            "line": 4,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fs'",
              "range": [
                165,
                169
              ]
            },
            "source": "    fs = require(\"fs\"),",
            "nodeType": "Literal",
            "column": 18,
            "line": 5,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "    pkginfo = require(\"pkginfo\")(module),",
            "nodeType": "Identifier",
            "column": 5,
            "line": 6,
            "message": "'pkginfo' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'pkginfo'",
              "range": [
                195,
                204
              ]
            },
            "source": "    pkginfo = require(\"pkginfo\")(module),",
            "nodeType": "Literal",
            "column": 23,
            "line": 6,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'../index'",
              "range": [
                238,
                248
              ]
            },
            "source": "    convert = require(\"../index\");",
            "nodeType": "Literal",
            "column": 23,
            "line": 7,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Test the createInterface method of readline'",
              "range": [
                263,
                308
              ]
            },
            "source": "describe(\"Test the createInterface method of readline\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 9,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Test the createInterface method of readline\", function(err) {",
            "nodeType": "Identifier",
            "column": 66,
            "line": 9,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'should be called only once'",
              "range": [
                334,
                362
              ]
            },
            "source": "    it(\"should be called only once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 10,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                386,
                389
              ]
            },
            "source": "        var spyCreateInterface = sinon.spy(readline, 'createInterface');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 11,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'Test the on() method of readline interface for line event'",
              "range": [
                594,
                653
              ]
            },
            "source": "describe(\"Test the on() method of readline interface for line event\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 17,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Test the on() method of readline interface for line event\", function(err) {",
            "nodeType": "Identifier",
            "column": 80,
            "line": 17,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'should be called'",
              "range": [
                679,
                697
              ]
            },
            "source": "    it(\"should be called\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 18,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                721,
                724
              ]
            },
            "source": "        var stub = sinon.stub(readline.Interface.prototype, 'on');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 19,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'line'",
              "range": [
                927,
                933
              ]
            },
            "source": "        sinon.assert.calledWith(stub, \"line\");",
            "nodeType": "Literal",
            "column": 39,
            "line": 23,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                935,
                939
              ]
            },
            "source": "    });",
            "nodeType": "BlockStatement",
            "column": 5,
            "line": 25,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": "'Test the on() method of readline interface for close event'",
              "range": [
                962,
                1022
              ]
            },
            "source": "describe(\"Test the on() method of readline interface for close event\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 27,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Test the on() method of readline interface for close event\", function(err) {",
            "nodeType": "Identifier",
            "column": 81,
            "line": 27,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'should be called'",
              "range": [
                1048,
                1066
              ]
            },
            "source": "    it(\"should be called\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1090,
                1093
              ]
            },
            "source": "        var stub = sinon.stub(readline.Interface.prototype, 'on');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 29,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'close'",
              "range": [
                1260,
                1267
              ]
            },
            "source": "        sinon.assert.calledWith(stub, \"close\");",
            "nodeType": "Literal",
            "column": 39,
            "line": 32,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Test for use of Array.map() and Array.push() function'",
              "range": [
                1296,
                1351
              ]
            },
            "source": "describe(\"Test for use of Array.map() and Array.push() function\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 36,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Test for use of Array.map() and Array.push() function\", function(err) {",
            "nodeType": "Identifier",
            "column": 76,
            "line": 36,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'Array.map() should be used atleast once'",
              "range": [
                1377,
                1418
              ]
            },
            "source": "    it(\"Array.map() should be used atleast once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 37,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1442,
                1445
              ]
            },
            "source": "        var mapSpy = sinon.spy(Array.prototype, 'map');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 38,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'Array.push() should be used atleast once'",
              "range": [
                1565,
                1607
              ]
            },
            "source": "    it(\"Array.push() should be used atleast once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 42,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1631,
                1634
              ]
            },
            "source": "        var pushSpy = sinon.spy(Array.prototype, 'push');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 43,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'Unit tests have been created'",
              "range": [
                1771,
                1801
              ]
            },
            "source": "describe.skip(\"Unit tests have been created\", function(err) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 49,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe.skip(\"Unit tests have been created\", function(err) {",
            "nodeType": "Identifier",
            "column": 56,
            "line": 49,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'check for existence of test files'",
              "range": [
                1827,
                1862
              ]
            },
            "source": "    it(\"check for existence of test files\", function(done) {",
            "nodeType": "Literal",
            "column": 8,
            "line": 50,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "        fs.stat(__dirname + '/' + module.exports.unittests, function(err, stat) {",
            "nodeType": "Identifier",
            "column": 70,
            "line": 51,
            "message": "'err' is already declared in the upper scope.",
            "severity": 2,
            "ruleId": "no-shadow"
          }, {
            "source": "        fs.stat(__dirname + '/' + module.exports.unittests, function(err, stat) {",
            "nodeType": "Identifier",
            "column": 75,
            "line": 51,
            "message": "'stat' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'Testing for existence of Synchronous file read methods'",
              "range": [
                2114,
                2170
              ]
            },
            "source": "describe(\"Testing for existence of Synchronous file read methods\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 59,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Testing for existence of Synchronous file read methods\", function(err) {",
            "nodeType": "Identifier",
            "column": 77,
            "line": 59,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "    let sandbox = '';",
            "nodeType": "Identifier",
            "column": 9,
            "line": 60,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                2295,
                2295
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 63,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should not be called readFileSync'",
              "range": [
                2306,
                2341
              ]
            },
            "source": "    it(\"should not be called readFileSync\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 65,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2365,
                2368
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"readFileSync\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 66,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'readFileSync'",
              "range": [
                2409,
                2423
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"readFileSync\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 66,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Testing for existence of Synchronous writeFileSync methods'",
              "range": [
                2584,
                2644
              ]
            },
            "source": "describe(\"Testing for existence of Synchronous writeFileSync methods\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 75,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Testing for existence of Synchronous writeFileSync methods\", function(err) {",
            "nodeType": "Identifier",
            "column": 81,
            "line": 75,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "    let sandbox = '';",
            "nodeType": "Identifier",
            "column": 9,
            "line": 76,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                2769,
                2769
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 79,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should not be called writeFileSync'",
              "range": [
                2780,
                2816
              ]
            },
            "source": "    it(\"should not be called writeFileSync\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 81,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2840,
                2843
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"writeFileSync\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 82,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'writeFileSync'",
              "range": [
                2884,
                2899
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"writeFileSync\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 82,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Testing for existence of Asynchronous writeFile methods'",
              "range": [
                3060,
                3117
              ]
            },
            "source": "describe(\"Testing for existence of Asynchronous writeFile methods\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Testing for existence of Asynchronous writeFile methods\", function(err) {",
            "nodeType": "Identifier",
            "column": 78,
            "line": 91,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "    let sandbox = '';",
            "nodeType": "Identifier",
            "column": 9,
            "line": 92,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                3242,
                3242
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 95,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should be called writeFile'",
              "range": [
                3253,
                3281
              ]
            },
            "source": "    it(\"should be called writeFile\", function(done) {",
            "nodeType": "Literal",
            "column": 8,
            "line": 97,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                3309,
                3312
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"writeFile\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 98,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'writeFile'",
              "range": [
                3353,
                3364
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"writeFile\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 98,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Testing for whether close() method called on fs'",
              "range": [
                3600,
                3649
              ]
            },
            "source": "describe.skip(\"Testing for whether close() method called on fs\", function(err) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 111,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe.skip(\"Testing for whether close() method called on fs\", function(err) {",
            "nodeType": "Identifier",
            "column": 75,
            "line": 111,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "    let sandbox = '';",
            "nodeType": "Identifier",
            "column": 9,
            "line": 112,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                3774,
                3774
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 115,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should be called'",
              "range": [
                3785,
                3803
              ]
            },
            "source": "    it(\"should be called\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                3827,
                3830
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"close\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 118,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'close'",
              "range": [
                3871,
                3878
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"close\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 118,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Test for use of JSON.parse() and JSON.stringify() functions'",
              "range": [
                4038,
                4099
              ]
            },
            "source": "describe.skip(\"Test for use of JSON.parse() and JSON.stringify() functions\", function(err) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 127,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe.skip(\"Test for use of JSON.parse() and JSON.stringify() functions\", function(err) {",
            "nodeType": "Identifier",
            "column": 87,
            "line": 127,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'JSON.parse() should be used atleast once'",
              "range": [
                4125,
                4167
              ]
            },
            "source": "    it(\"JSON.parse() should be used atleast once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 128,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                4191,
                4194
              ]
            },
            "source": "        var parseSpy = sinon.spy(JSON, 'parse');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 129,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'JSON.stringify() should be used atleast once'",
              "range": [
                4309,
                4355
              ]
            },
            "source": "    it(\"JSON.stringify() should be used atleast once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 133,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                4379,
                4382
              ]
            },
            "source": "        var stringifySpy = sinon.spy(JSON, 'stringify');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 134,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "describe.skip(\"Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods\", function(err) {",
            "nodeType": "Program",
            "column": 1,
            "line": 140,
            "message": "Line 140 exceeds the maximum line length of 100.",
            "severity": 2,
            "ruleId": "max-len"
          }, {
            "fix": {
              "text": "'Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods'",
              "range": [
                4523,
                4603
              ]
            },
            "source": "describe.skip(\"Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods\", function(err) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 140,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe.skip(\"Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods\", function(err) {",
            "nodeType": "Identifier",
            "column": 106,
            "line": 140,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "\t\tlet sandbox = '';",
            "nodeType": "Identifier",
            "column": 7,
            "line": 141,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                4726,
                4726
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 144,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should be called'",
              "range": [
                4737,
                4755
              ]
            },
            "source": "    it(\"should be called\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 146,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                4779,
                4782
              ]
            },
            "source": "        var stub = this.sandbox.stub(RegExp, \"test\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 147,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'test'",
              "range": [
                4816,
                4822
              ]
            },
            "source": "        var stub = this.sandbox.stub(RegExp, \"test\");",
            "nodeType": "Literal",
            "column": 46,
            "line": 147,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/dataMunging.spec.js"
        }, {
          "source": "// Compare objects in JSON\nmodule.exports = (function() {\n  return {\n\n    compareJSONObjects: function(expectedJSON, actualJSON) {\n      if (!expectedJSON || !actualJSON) {\n        return {};\n      }\n\n      function objValues(obj) {\n        let keys = Object.keys(obj);\n        let values = [];\n        keys.forEach(function(keyName) {\n          let val = obj[keyName];\n          values.push(val);\n        });\n        return values;\n      }\n\n      function toObjValueHash(obj) {\n        // return Object.values(obj).sort().join(';');\n        return objValues(obj).sort().join(';');\n      }\n\n      function toDataMap(data) {\n        return data.map(toObjValueHash);\n      }\n\n      let expectedDataSet = new Set(toDataMap(expectedJSON));\n      let actualJSONObjs = actualJSON;\n      let diffs = [];\n      let matched = [];\n      actualJSONObjs.forEach(function(obj) {\n        let actual = toObjValueHash(obj);\n        if (expectedDataSet.has(actual)) {\n          matched.push(obj);\n        } else {\n          diffs.push(obj);\n        }\n      });\n      if (diffs.length > 0) {\n        // console.log(\"Differs by \", diffs.length);\n        // console.log(\"Differences: \", diffs);\n        return {\n          diffs: diffs.length,\n          diffObjs: diffs\n        };\n      } else {\n        // console.log(\"Data is Same\");\n        return {\n          diffs: diffs.length,\n          diffObjs: []\n        };\n      }\n    },\n    compareJSONStrings: function(expectedJSONStr, actualJSONStr) {\n      if (!expectedJSONStr || !actualJSONStr) {\n        return;\n      }\n      compareJSONObjects(JSON.parse(expectedJSONStr), JSON.parse(\n        actualJSONStr));\n      return;\n    }\n  };\n}());\n",
          "warningCount": 0,
          "errorCount": 2,
          "messages": [{
            "fix": {
              "text": "function(expectedJSON, actualJSON) {\n      if (!expectedJSON || !actualJSON) {\n        return {};\n      }\n\n      function objValues(obj) {\n        let keys = Object.keys(obj);\n        let values = [];\n        keys.forEach(function(keyName) {\n          let val = obj[keyName];\n          values.push(val);\n        });\n        return values;\n      }\n\n      function toObjValueHash(obj) {\n        // return Object.values(obj).sort().join(';');\n        return objValues(obj).sort().join(';');\n      }\n\n      function toDataMap(data) {\n        return data.map(toObjValueHash);\n      }\n\n      let expectedDataSet = new Set(toDataMap(expectedJSON));\n      let actualJSONObjs = actualJSON;\n      let diffs = [];\n      let matched = [];\n      actualJSONObjs.forEach(function(obj) {\n        let actual = toObjValueHash(obj);\n        if (expectedDataSet.has(actual)) {\n          matched.push(obj);\n        } else {\n          diffs.push(obj);\n        }\n      });\n      if (diffs.length > 0) {\n        // console.log(\"Differs by \", diffs.length);\n        // console.log(\"Differences: \", diffs);\n        return {\n          diffs: diffs.length,\n          diffObjs: diffs\n        };\n      } \n        // console.log(\"Data is Same\");\n        return {\n          diffs: diffs.length,\n          diffObjs: []\n        };\n      \n    }",
              "range": [
                94,
                1410
              ]
            },
            "source": "      } else {",
            "nodeType": "BlockStatement",
            "column": 14,
            "line": 48,
            "message": "Unnecessary 'else' after 'return'.",
            "severity": 2,
            "ruleId": "no-else-return"
          }, {
            "source": "      compareJSONObjects(JSON.parse(expectedJSONStr), JSON.parse(",
            "nodeType": "Identifier",
            "column": 7,
            "line": 60,
            "message": "'compareJSONObjects' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/jsonDiff.js"
        }, {
          "source": "const chai = require('chai');\nconst expect = chai.expect;\n\nconst jsonDiff = require('./jsonDiff');\nconst totalObjectKeys = require('./totalObjectKeys');\n\nconst expectedJSON = require('./json/theft.json');\nconst actualJSON = require('../output/theft.json');\n\ndescribe('Test Application as Blackbox - Theft Scenario', function(){\n\n  it('JSON has expected Number of Objects', function(done){\n    for(let i=0; i < expectedJSON.length; i++){\n      let objMatrix = totalObjectKeys.traverse(actualJSON[i]);\n      expect(objMatrix.totalNoObjects).to.not.equal(0);\n      expect(objMatrix.totalNoKeys).to.not.equal(0);\n    }\n    done();\n  });\n\n  it('Test JSON is as expected', function(done){\n    for(let i=0; i < expectedJSON.length; i++){\n      let compareResult = jsonDiff.compareJSONObjects(expectedJSON, actualJSON);\n      expect(compareResult.diffs).equal(0);\n    }\n    done();\n  });\n});\n",
          "warningCount": 8,
          "errorCount": 2,
          "messages": [{
            "fix": {
              "text": "\n",
              "range": [
                327,
                329
              ]
            },
            "source": "describe('Test Application as Blackbox - Theft Scenario', function(){",
            "nodeType": "BlockStatement",
            "column": 69,
            "line": 10,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                326,
                326
              ]
            },
            "source": "describe('Test Application as Blackbox - Theft Scenario', function(){",
            "nodeType": "BlockStatement",
            "column": 69,
            "line": 10,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                387,
                387
              ]
            },
            "source": "  it('JSON has expected Number of Objects', function(done){",
            "nodeType": "BlockStatement",
            "column": 59,
            "line": 12,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " = ",
              "range": [
                402,
                403
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "VariableDeclarator",
            "column": 14,
            "line": 13,
            "message": "Infix operators must be spaced.",
            "severity": 1,
            "ruleId": "space-infix-ops"
          }, {
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "UpdateExpression",
            "column": 43,
            "line": 13,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": " ",
              "range": [
                435,
                435
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "BlockStatement",
            "column": 47,
            "line": 13,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                681,
                681
              ]
            },
            "source": "  it('Test JSON is as expected', function(done){",
            "nodeType": "BlockStatement",
            "column": 48,
            "line": 21,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " = ",
              "range": [
                696,
                697
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "VariableDeclarator",
            "column": 14,
            "line": 22,
            "message": "Infix operators must be spaced.",
            "severity": 1,
            "ruleId": "space-infix-ops"
          }, {
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "UpdateExpression",
            "column": 43,
            "line": 22,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": " ",
              "range": [
                729,
                729
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "BlockStatement",
            "column": 47,
            "line": 22,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/theft.spec.js"
        }, {
          "source": "module.exports = (function () {\n    var totalNoObjects = 0, totalNoKeys = 0;\n  return {\n    traverse : traverse\n  }\n  // Traverse expected json\n  function traverse(obj) {\n        if (obj instanceof Array) {\n        totalNoObjects++;\n            obj.forEach(function (value, index) {\n            if (typeof value == \"object\" && value) {\n                traverse(value);\n            } else {\n\n              totalNoKeys++;\n            }\n\n          })\n\n      } else {\n          totalNoObjects++;\n          for (var prop in obj) {\n              if (typeof obj[prop] == \"object\" && obj[prop]) {\n                  traverse(obj[prop]);\n              } else {\n                totalNoKeys++;\n\n              }\n          }\n      }\n      return {\n        totalNoObjects : totalNoObjects,\n        totalNoKeys    : totalNoKeys\n      }\n  }\n})();\n",
          "warningCount": 13,
          "errorCount": 12,
          "messages": [{
            "fix": {
              "text": "())",
              "range": [
                825,
                828
              ]
            },
            "source": "module.exports = (function () {",
            "nodeType": "CallExpression",
            "column": 18,
            "line": 1,
            "message": "Move the invocation into the parens that contain the function.",
            "severity": 2,
            "ruleId": "wrap-iife"
          }, {
            "fix": {
              "text": "let",
              "range": [
                36,
                39
              ]
            },
            "source": "    var totalNoObjects = 0, totalNoKeys = 0;",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 2,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "    var totalNoObjects = 0, totalNoKeys = 0;",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 2,
            "message": "Split 'var' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "fix": {
              "text": "",
              "range": [
                100,
                101
              ]
            },
            "source": "    traverse : traverse",
            "nodeType": "Identifier",
            "column": 5,
            "line": 4,
            "message": "Extra space after key 'traverse'.",
            "severity": 1,
            "ruleId": "key-spacing"
          }, {
            "source": "    traverse : traverse",
            "nodeType": "Identifier",
            "column": 16,
            "line": 4,
            "message": "'traverse' was used before it was defined.",
            "severity": 2,
            "ruleId": "no-use-before-define"
          }, {
            "fix": {
              "text": ";",
              "range": [
                115,
                115
              ]
            },
            "source": "  }",
            "nodeType": "ReturnStatement",
            "column": 4,
            "line": 5,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "source": "        totalNoObjects++;",
            "nodeType": "UpdateExpression",
            "column": 9,
            "line": 9,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "source": "            obj.forEach(function (value, index) {",
            "nodeType": "Identifier",
            "column": 42,
            "line": 10,
            "message": "'index' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "===",
              "range": [
                312,
                314
              ]
            },
            "source": "            if (typeof value == \"object\" && value) {",
            "nodeType": "BinaryExpression",
            "column": 30,
            "line": 11,
            "message": "Expected '===' and instead saw '=='.",
            "severity": 2,
            "ruleId": "eqeqeq"
          }, {
            "fix": {
              "text": "'object'",
              "range": [
                315,
                323
              ]
            },
            "source": "            if (typeof value == \"object\" && value) {",
            "nodeType": "Literal",
            "column": 33,
            "line": 11,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                389,
                391
              ]
            },
            "source": "            } else {",
            "nodeType": "BlockStatement",
            "column": 20,
            "line": 13,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "source": "              totalNoKeys++;",
            "nodeType": "UpdateExpression",
            "column": 15,
            "line": 15,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                433,
                435
              ]
            },
            "source": "          })",
            "nodeType": "BlockStatement",
            "column": 11,
            "line": 18,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": ";",
              "range": [
                447,
                447
              ]
            },
            "source": "          })",
            "nodeType": "ExpressionStatement",
            "column": 13,
            "line": 18,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                447,
                449
              ]
            },
            "source": "      } else {",
            "nodeType": "BlockStatement",
            "column": 7,
            "line": 20,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "source": "          totalNoObjects++;",
            "nodeType": "UpdateExpression",
            "column": 11,
            "line": 21,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": "let",
              "range": [
                507,
                510
              ]
            },
            "source": "          for (var prop in obj) {",
            "nodeType": "VariableDeclaration",
            "column": 16,
            "line": 22,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "          for (var prop in obj) {",
            "nodeType": "VariableDeclaration",
            "column": 16,
            "line": 22,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "===",
              "range": [
                561,
                563
              ]
            },
            "source": "              if (typeof obj[prop] == \"object\" && obj[prop]) {",
            "nodeType": "BinaryExpression",
            "column": 36,
            "line": 23,
            "message": "Expected '===' and instead saw '=='.",
            "severity": 2,
            "ruleId": "eqeqeq"
          }, {
            "fix": {
              "text": "'object'",
              "range": [
                564,
                572
              ]
            },
            "source": "              if (typeof obj[prop] == \"object\" && obj[prop]) {",
            "nodeType": "Literal",
            "column": 39,
            "line": 23,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "                totalNoKeys++;",
            "nodeType": "UpdateExpression",
            "column": 17,
            "line": 26,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                681,
                683
              ]
            },
            "source": "              }",
            "nodeType": "BlockStatement",
            "column": 15,
            "line": 28,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": "",
              "range": [
                756,
                757
              ]
            },
            "source": "        totalNoObjects : totalNoObjects,",
            "nodeType": "Identifier",
            "column": 9,
            "line": 32,
            "message": "Extra space after key 'totalNoObjects'.",
            "severity": 1,
            "ruleId": "key-spacing"
          }, {
            "fix": {
              "text": "",
              "range": [
                794,
                798
              ]
            },
            "source": "        totalNoKeys    : totalNoKeys",
            "nodeType": "Identifier",
            "column": 9,
            "line": 33,
            "message": "Extra space after key 'totalNoKeys'.",
            "severity": 1,
            "ruleId": "key-spacing"
          }, {
            "fix": {
              "text": ";",
              "range": [
                819,
                819
              ]
            },
            "source": "      }",
            "nodeType": "ReturnStatement",
            "column": 8,
            "line": 34,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/totalObjectKeys.js"
        }],
        "status": "Failed"
      },
      "htmlhint": {
        "summary": {
          "checks": {
            "failed": 6,
            "passes": 22,
            "total": 28,
            "name": "/stackroute/javascript/htmlhint"
          }
        },
        "errors": "",
        "output": [{
          "time": 356,
          "messages": [{
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/title-require",
              "description": "<title> must be present in <head> tag.",
              "id": "title-require"
            },
            "col": 12,
            "line": 6,
            "evidence": "    <title></title>",
            "raw": "</title>",
            "message": "<title></title> must not be empty.",
            "type": "error"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 5,
            "line": 7,
            "evidence": "    <script src=\"http://d3js.org/d3.v3.js\"></script>",
            "raw": "<script src=\"http://d3js.org/d3.v3.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 5,
            "line": 8,
            "evidence": "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/mocha/3.4.1/mocha.js\"></script>",
            "raw": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/mocha/3.4.1/mocha.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 5,
            "line": 9,
            "evidence": "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js\"></script>",
            "raw": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 5,
            "line": 10,
            "evidence": "    <script>",
            "raw": "<script>",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 5,
            "line": 11,
            "evidence": "    .focus circle {",
            "raw": "    .focus circle {",
            "message": "Expected an identifier and instead saw '.'.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 5,
            "line": 11,
            "evidence": "    .focus circle {",
            "raw": "    .focus circle {",
            "message": "Expected an assignment or function call and instead saw an expression.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 6,
            "line": 11,
            "evidence": "    .focus circle {",
            "raw": "    .focus circle {",
            "message": "Missing semicolon.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 6,
            "line": 11,
            "evidence": "    .focus circle {",
            "raw": "    .focus circle {",
            "message": "Expected an assignment or function call and instead saw an expression.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 11,
            "line": 11,
            "evidence": "    .focus circle {",
            "raw": "    .focus circle {",
            "message": "Missing semicolon.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 12,
            "line": 11,
            "evidence": "    .focus circle {",
            "raw": "    .focus circle {",
            "message": "Expected an assignment or function call and instead saw an expression.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 18,
            "line": 11,
            "evidence": "    .focus circle {",
            "raw": "    .focus circle {",
            "message": "Missing semicolon.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 9,
            "line": 12,
            "evidence": "  fill: none;",
            "raw": "  fill: none;",
            "message": "Label 'fill' on none statement.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 9,
            "line": 12,
            "evidence": "  fill: none;",
            "raw": "  fill: none;",
            "message": "Expected an assignment or function call and instead saw an expression.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 11,
            "line": 13,
            "evidence": "  stroke: steelblue;",
            "raw": "  stroke: steelblue;",
            "message": "Label 'stroke' on steelblue statement.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 11,
            "line": 13,
            "evidence": "  stroke: steelblue;",
            "raw": "  stroke: steelblue;",
            "message": "Expected an assignment or function call and instead saw an expression.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 1,
            "line": 17,
            "evidence": "    }",
            "raw": "        initMochaPhantomJS()",
            "message": "Missing semicolon.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/tag-self-close",
              "description": "Empty tags must be self closed.",
              "id": "tag-self-close"
            },
            "col": 1,
            "line": 23,
            "evidence": "<meta charset=\"utf-8\">",
            "raw": "<meta charset=\"utf-8\">",
            "message": "The empty tag : [ meta ] must be self closed.",
            "type": "warning"
          }],
          "file": "UI-Test/bar_graph.html"
        }, {
          "time": 75,
          "messages": [{
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/title-require",
              "description": "<title> must be present in <head> tag.",
              "id": "title-require"
            },
            "col": 10,
            "line": 5,
            "evidence": "  <title></title>",
            "raw": "</title>",
            "message": "<title></title> must not be empty.",
            "type": "error"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 3,
            "line": 6,
            "evidence": "  <script src=\"http://d3js.org/d3.v3.js\"></script>",
            "raw": "<script src=\"http://d3js.org/d3.v3.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 3,
            "line": 7,
            "evidence": "  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/mocha/3.4.1/mocha.js\"></script>",
            "raw": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/mocha/3.4.1/mocha.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 3,
            "line": 8,
            "evidence": "  <script src=\"https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js\"></script>",
            "raw": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 3,
            "line": 9,
            "evidence": "  <script>",
            "raw": "<script>",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 1,
            "line": 12,
            "evidence": "    }",
            "raw": "      initMochaPhantomJS()",
            "message": "Missing semicolon.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/tag-self-close",
              "description": "Empty tags must be self closed.",
              "id": "tag-self-close"
            },
            "col": 1,
            "line": 18,
            "evidence": "<meta charset=\"utf-8\">",
            "raw": "<meta charset=\"utf-8\">",
            "message": "The empty tag : [ meta ] must be self closed.",
            "type": "warning"
          }],
          "file": "UI-Test/index.html"
        }, {
          "time": 5,
          "messages": [{
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/title-require",
              "description": "<title> must be present in <head> tag.",
              "id": "title-require"
            },
            "col": 12,
            "line": 5,
            "evidence": "    <title></title>",
            "raw": "</title>",
            "message": "<title></title> must not be empty.",
            "type": "error"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 5,
            "line": 6,
            "evidence": "    <script src=\"http://d3js.org/d3.v3.js\"></script>",
            "raw": "<script src=\"http://d3js.org/d3.v3.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 5,
            "line": 7,
            "evidence": "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/mocha/3.4.1/mocha.js\"></script>",
            "raw": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/mocha/3.4.1/mocha.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 5,
            "line": 8,
            "evidence": "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js\"></script>",
            "raw": "<script src=\"https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 5,
            "line": 9,
            "evidence": "    <script>",
            "raw": "<script>",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/jshint",
              "description": "Scan script with jshint.",
              "id": "jshint"
            },
            "col": 1,
            "line": 12,
            "evidence": "    }",
            "raw": "        initMochaPhantomJS()",
            "message": "Missing semicolon.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/tag-self-close",
              "description": "Empty tags must be self closed.",
              "id": "tag-self-close"
            },
            "col": 1,
            "line": 18,
            "evidence": "<meta charset=\"utf-8\">",
            "raw": "<meta charset=\"utf-8\">",
            "message": "The empty tag : [ meta ] must be self closed.",
            "type": "warning"
          }],
          "file": "UI-Test/line_graph.html"
        }, {
          "time": 1,
          "messages": [{
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 3,
            "line": 5,
            "evidence": "  <script src=\"http://d3js.org/d3.v3.js\"></script>",
            "raw": "<script src=\"http://d3js.org/d3.v3.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/title-require",
              "description": "<title> must be present in <head> tag.",
              "id": "title-require"
            },
            "col": 1,
            "line": 6,
            "evidence": "</head>",
            "raw": "</head>",
            "message": "<title> must be present in <head> tag.",
            "type": "error"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/tag-self-close",
              "description": "Empty tags must be self closed.",
              "id": "tag-self-close"
            },
            "col": 1,
            "line": 7,
            "evidence": "<meta charset=\"utf-8\">",
            "raw": "<meta charset=\"utf-8\">",
            "message": "The empty tag : [ meta ] must be self closed.",
            "type": "warning"
          }],
          "file": "html/assaultchart.html"
        }, {
          "time": 0,
          "messages": [{
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/href-abs-or-rel",
              "description": "An href attribute must be either absolute or relative.",
              "id": "href-abs-or-rel"
            },
            "col": 5,
            "line": 10,
            "evidence": "  <a href=\"assaultchart.html\">Assault Chart</a>",
            "raw": " href=\"assaultchart.html\"",
            "message": "The value of the href attribute [ assaultchart.html ] must be absolute.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/href-abs-or-rel",
              "description": "An href attribute must be either absolute or relative.",
              "id": "href-abs-or-rel"
            },
            "col": 5,
            "line": 11,
            "evidence": "  <a href=\"theftbargraph.html\">Theft Bar Chart</a>",
            "raw": " href=\"theftbargraph.html\"",
            "message": "The value of the href attribute [ theftbargraph.html ] must be absolute.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/tag-pair",
              "description": "Tag must be paired.",
              "id": "tag-pair"
            },
            "col": 1,
            "line": 13,
            "evidence": "",
            "raw": "",
            "message": "Tag must be paired, missing: [ </html> ], open tag match failed [ <html> ] on line 2.",
            "type": "error"
          }],
          "file": "html/index.html"
        }, {
          "time": 1,
          "messages": [{
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/title-require",
              "description": "<title> must be present in <head> tag.",
              "id": "title-require"
            },
            "col": 10,
            "line": 5,
            "evidence": "  <title></title>",
            "raw": "</title>",
            "message": "<title></title> must not be empty.",
            "type": "error"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/head-script-disabled",
              "description": "The <script> tag cannot be used in a <head> tag.",
              "id": "head-script-disabled"
            },
            "col": 3,
            "line": 6,
            "evidence": "  <script src=\"//d3js.org/d3.v3.min.js\"></script>",
            "raw": "<script src=\"//d3js.org/d3.v3.min.js\">",
            "message": "The <script> tag cannot be used in a <head> tag.",
            "type": "warning"
          }, {
            "rule": {
              "link": "https://github.com/yaniswang/HTMLHint/wiki/tag-self-close",
              "description": "Empty tags must be self closed.",
              "id": "tag-self-close"
            },
            "col": 1,
            "line": 8,
            "evidence": "<meta charset=\"utf-8\">",
            "raw": "<meta charset=\"utf-8\">",
            "message": "The empty tag : [ meta ] must be self closed.",
            "type": "warning"
          }],
          "file": "html/theftbargraph.html"
        }],
        "status": "Failed"
      },
      "smells": {
        "summary": {
          "checks": {
            "failed": 18,
            "passes": 115,
            "total": 133,
            "name": "/stackroute/javascript/eslint"
          }
        },
        "errors": "",
        "output": [{
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/UI-Commander/d3BarTest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/UI-Commander/d3LineTest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/UI-Test/d3BarTest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/UI-Test/d3LineTest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/assault.spec.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/asttest.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/dataMunging.spec.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/jsonDiff.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/theft.spec.js"
        }, {
          "warningCount": 1,
          "errorCount": 0,
          "messages": [{
            "message": "File ignored because of a matching ignore pattern. Use \"--no-ignore\" to override.",
            "severity": 1,
            "fatal": false
          }],
          "filePath": "/workspaces/oixbdso3/submission/commander/totalObjectKeys.js"
        }, {
          "source": "var margin = {\n    top: 20,\n    right: 50,\n    bottom: 30,\n    left: 50\n  },\n  width = 900 - margin.left - margin.right,\n  height = 500 - margin.top - margin.bottom;\n\nvar x = d3.scale.ordinal()\n  .rangeRoundBands([0, width], .35);\n\nvar y = d3.scale.linear()\n  .range([height, 0]);\n\nvar color = d3.scale.category10();\n\nvar xAxis = d3.svg.axis()\n  .scale(x)\n  .orient(\"bottom\");\n\nvar yAxis = d3.svg.axis()\n  .scale(y)\n  .orient(\"left\")\n  .tickFormat(d3.format(\".2s\"))\n  .ticks(6);\n\nvar line = d3.svg.line()\n  .interpolate(\"basis\")\n  .x(function(d) {\n    return x(d.year);\n  })\n  .y(function(d) {\n    return y(d.count);\n  });\n\nvar svg = d3.select(\"body\").append(\"svg\")\n  .attr(\"width\", width + margin.left + margin.right)\n  .attr(\"height\", height + margin.top + margin.bottom)\n  .append(\"g\")\n  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");\n\nvar names = [\"Arrested\", \"Not Arrested\"];\n\nd3.json(\"../test/json/assault.json\", function(error, data) {\n  color.domain(d3.keys(data[0]).filter(function(key) {\n    return key !== \"year\";\n  }));\n\n  var counter = color.domain().map(function(d) {\n    return {\n      name: d,\n      values: data.map(function(b) {\n        return {\n          year: b.year,\n          count: +b[d]\n        };\n      })\n    };\n  });\n\n\n  x.domain(data.map(function(d) {\n\n    return parseInt(d.year);\n  }));\n\n\n\n  y.domain([\n    d3.min(counter, function(c) {\n      return d3.min(c.values, function(v) {\n        return v.count;\n      });\n    }),\n    d3.max(counter, function(c) {\n      return d3.max(c.values, function(v) {\n        return v.count;\n      });\n    })\n  ]);\n\n  svg.append(\"g\")\n    .attr(\"class\", \"axis\")\n    .attr(\"transform\", \"translate(0,\" + height + \")\")\n    .call(xAxis)\n    .append(\"text\")\n    .attr(\"x\", 800)\n    .attr(\"dy\", \"0.35em\")\n    .attr(\"text-anchor\", \"start\")\n    .attr(\"fill\", \"#000\")\n    .text(\"Year\");\n\n\n  svg.append(\"g\")\n    .attr(\"class\", \"y axis\")\n    .call(yAxis)\n    .append(\"text\")\n    .attr(\"transform\", \"rotate(-90)\")\n    .attr(\"y\", 7)\n    .attr(\"dy\", \"0.35em\")\n    .attr(\"text-anchor\", \"end\")\n    .attr(\"fill\", \"#000\")\n    .text(\"Arrest Count\");\n\n\n  var arrest = svg.selectAll(\".arrest\")\n    .data(counter)\n    .enter().append(\"g\")\n    .attr(\"class\", \"arrest\")\n    .on(\"mouseover\", function(d) {\n      console.log(counter);\n\n      return counter;\n    });\n\n  var path = svg.selectAll(\".arrest\").append(\"path\")\n    .attr(\"class\", \"line\")\n    .attr(\"d\", function(d) {\n      return line(d.values);\n    })\n    .style(\"stroke\", function(d) {\n      if (d.name == \"arrested\") {\n        return \"#1f77b4\";\n      } else {\n        return \"#ff7f0e\";\n      }\n    });\n\n\n});\n",
          "warningCount": 65,
          "errorCount": 37,
          "messages": [{
            "source": "var margin = {",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 1,
            "message": "Split 'var' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                0,
                3
              ]
            },
            "source": "var margin = {",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 1,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                167,
                170
              ]
            },
            "source": "var x = d3.scale.ordinal()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 10,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var x = d3.scale.ordinal()",
            "nodeType": "Identifier",
            "column": 9,
            "line": 10,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "0",
              "range": [
                225,
                225
              ]
            },
            "source": "  .rangeRoundBands([0, width], .35);",
            "nodeType": "Literal",
            "column": 32,
            "line": 11,
            "message": "A leading decimal point can be confused with a dot.",
            "severity": 2,
            "ruleId": "no-floating-decimal"
          }, {
            "fix": {
              "text": "let",
              "range": [
                232,
                235
              ]
            },
            "source": "var y = d3.scale.linear()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 13,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var y = d3.scale.linear()",
            "nodeType": "Identifier",
            "column": 9,
            "line": 13,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                282,
                285
              ]
            },
            "source": "var color = d3.scale.category10();",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 16,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var color = d3.scale.category10();",
            "nodeType": "Identifier",
            "column": 13,
            "line": 16,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                318,
                321
              ]
            },
            "source": "var xAxis = d3.svg.axis()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 18,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var xAxis = d3.svg.axis()",
            "nodeType": "Identifier",
            "column": 13,
            "line": 18,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'bottom'",
              "range": [
                366,
                374
              ]
            },
            "source": "  .orient(\"bottom\");",
            "nodeType": "Literal",
            "column": 11,
            "line": 20,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                378,
                381
              ]
            },
            "source": "var yAxis = d3.svg.axis()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 22,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var yAxis = d3.svg.axis()",
            "nodeType": "Identifier",
            "column": 13,
            "line": 22,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'left'",
              "range": [
                426,
                432
              ]
            },
            "source": "  .orient(\"left\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 24,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "  .tickFormat(d3.format(\".2s\"))",
            "nodeType": "Identifier",
            "column": 15,
            "line": 25,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'.2s'",
              "range": [
                458,
                463
              ]
            },
            "source": "  .tickFormat(d3.format(\".2s\"))",
            "nodeType": "Literal",
            "column": 25,
            "line": 25,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                480,
                483
              ]
            },
            "source": "var line = d3.svg.line()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 28,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var line = d3.svg.line()",
            "nodeType": "Identifier",
            "column": 12,
            "line": 28,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'basis'",
              "range": [
                520,
                527
              ]
            },
            "source": "  .interpolate(\"basis\")",
            "nodeType": "Literal",
            "column": 16,
            "line": 29,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                624,
                627
              ]
            },
            "source": "var svg = d3.select(\"body\").append(\"svg\")",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 37,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var svg = d3.select(\"body\").append(\"svg\")",
            "nodeType": "Identifier",
            "column": 11,
            "line": 37,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'body'",
              "range": [
                644,
                650
              ]
            },
            "source": "var svg = d3.select(\"body\").append(\"svg\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 37,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'svg'",
              "range": [
                659,
                664
              ]
            },
            "source": "var svg = d3.select(\"body\").append(\"svg\")",
            "nodeType": "Literal",
            "column": 36,
            "line": 37,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'width'",
              "range": [
                674,
                681
              ]
            },
            "source": "  .attr(\"width\", width + margin.left + margin.right)",
            "nodeType": "Literal",
            "column": 9,
            "line": 38,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'height'",
              "range": [
                727,
                735
              ]
            },
            "source": "  .attr(\"height\", height + margin.top + margin.bottom)",
            "nodeType": "Literal",
            "column": 9,
            "line": 39,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                784,
                787
              ]
            },
            "source": "  .append(\"g\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 40,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                797,
                808
              ]
            },
            "source": "  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 9,
            "line": 41,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate('",
              "range": [
                810,
                822
              ]
            },
            "source": "  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 22,
            "line": 41,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "','",
              "range": [
                839,
                842
              ]
            },
            "source": "  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 51,
            "line": 41,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                858,
                861
              ]
            },
            "source": "  .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 70,
            "line": 41,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                865,
                868
              ]
            },
            "source": "var names = [\"Arrested\", \"Not Arrested\"];",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 43,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var names = [\"Arrested\", \"Not Arrested\"];",
            "nodeType": "Identifier",
            "column": 5,
            "line": 43,
            "message": "'names' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'Arrested'",
              "range": [
                878,
                888
              ]
            },
            "source": "var names = [\"Arrested\", \"Not Arrested\"];",
            "nodeType": "Literal",
            "column": 14,
            "line": 43,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Not Arrested'",
              "range": [
                890,
                904
              ]
            },
            "source": "var names = [\"Arrested\", \"Not Arrested\"];",
            "nodeType": "Literal",
            "column": 26,
            "line": 43,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "d3.json(\"../test/json/assault.json\", function(error, data) {",
            "nodeType": "Identifier",
            "column": 1,
            "line": 45,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'../test/json/assault.json'",
              "range": [
                916,
                943
              ]
            },
            "source": "d3.json(\"../test/json/assault.json\", function(error, data) {",
            "nodeType": "Literal",
            "column": 9,
            "line": 45,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "  color.domain(d3.keys(data[0]).filter(function(key) {",
            "nodeType": "Identifier",
            "column": 16,
            "line": 46,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'year'",
              "range": [
                1043,
                1049
              ]
            },
            "source": "    return key !== \"year\";",
            "nodeType": "Literal",
            "column": 20,
            "line": 47,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1061,
                1064
              ]
            },
            "source": "  var counter = color.domain().map(function(d) {",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 50,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "  var counter = color.domain().map(function(d) {",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 50,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                1305,
                1307
              ]
            },
            "source": "  x.domain(data.map(function(d) {",
            "nodeType": "BlockStatement",
            "column": 33,
            "line": 63,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "source": "    return parseInt(d.year);",
            "nodeType": "CallExpression",
            "column": 12,
            "line": 65,
            "message": "Missing radix parameter.",
            "severity": 2,
            "ruleId": "radix"
          }, {
            "fix": {
              "text": "",
              "range": [
                1343,
                1344
              ]
            },
            "endColumn": 1,
            "endLine": 70,
            "source": "",
            "nodeType": "Program",
            "column": 1,
            "line": 67,
            "message": "More than 2 blank lines not allowed.",
            "severity": 1,
            "ruleId": "no-multiple-empty-lines"
          }, {
            "source": "    d3.min(counter, function(c) {",
            "nodeType": "Identifier",
            "column": 5,
            "line": 71,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "source": "      return d3.min(c.values, function(v) {",
            "nodeType": "Identifier",
            "column": 14,
            "line": 72,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "source": "    d3.max(counter, function(c) {",
            "nodeType": "Identifier",
            "column": 5,
            "line": 76,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "source": "      return d3.max(c.values, function(v) {",
            "nodeType": "Identifier",
            "column": 14,
            "line": 77,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                1618,
                1621
              ]
            },
            "source": "  svg.append(\"g\")",
            "nodeType": "Literal",
            "column": 14,
            "line": 83,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                1633,
                1640
              ]
            },
            "source": "    .attr(\"class\", \"axis\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 84,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'axis'",
              "range": [
                1642,
                1648
              ]
            },
            "source": "    .attr(\"class\", \"axis\")",
            "nodeType": "Literal",
            "column": 20,
            "line": 84,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                1660,
                1671
              ]
            },
            "source": "    .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 85,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate(0,'",
              "range": [
                1673,
                1687
              ]
            },
            "source": "    .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 85,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                1699,
                1702
              ]
            },
            "source": "    .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 50,
            "line": 85,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                1733,
                1739
              ]
            },
            "source": "    .append(\"text\")",
            "nodeType": "Literal",
            "column": 13,
            "line": 87,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                1751,
                1754
              ]
            },
            "source": "    .attr(\"x\", 800)",
            "nodeType": "Literal",
            "column": 11,
            "line": 88,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                1771,
                1775
              ]
            },
            "source": "    .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 89,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'0.35em'",
              "range": [
                1777,
                1785
              ]
            },
            "source": "    .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 17,
            "line": 89,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                1797,
                1810
              ]
            },
            "source": "    .attr(\"text-anchor\", \"start\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 90,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'start'",
              "range": [
                1812,
                1819
              ]
            },
            "source": "    .attr(\"text-anchor\", \"start\")",
            "nodeType": "Literal",
            "column": 26,
            "line": 90,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                1831,
                1837
              ]
            },
            "source": "    .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#000'",
              "range": [
                1839,
                1845
              ]
            },
            "source": "    .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 19,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Year'",
              "range": [
                1857,
                1863
              ]
            },
            "source": "    .text(\"Year\");",
            "nodeType": "Literal",
            "column": 11,
            "line": 92,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                1881,
                1884
              ]
            },
            "source": "  svg.append(\"g\")",
            "nodeType": "Literal",
            "column": 14,
            "line": 95,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                1896,
                1903
              ]
            },
            "source": "    .attr(\"class\", \"y axis\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 96,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y axis'",
              "range": [
                1905,
                1913
              ]
            },
            "source": "    .attr(\"class\", \"y axis\")",
            "nodeType": "Literal",
            "column": 20,
            "line": 96,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                1944,
                1950
              ]
            },
            "source": "    .append(\"text\")",
            "nodeType": "Literal",
            "column": 13,
            "line": 98,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                1962,
                1973
              ]
            },
            "source": "    .attr(\"transform\", \"rotate(-90)\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 99,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rotate(-90)'",
              "range": [
                1975,
                1988
              ]
            },
            "source": "    .attr(\"transform\", \"rotate(-90)\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 99,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y'",
              "range": [
                2000,
                2003
              ]
            },
            "source": "    .attr(\"y\", 7)",
            "nodeType": "Literal",
            "column": 11,
            "line": 100,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                2018,
                2022
              ]
            },
            "source": "    .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 101,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'0.35em'",
              "range": [
                2024,
                2032
              ]
            },
            "source": "    .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 17,
            "line": 101,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                2044,
                2057
              ]
            },
            "source": "    .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 102,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'end'",
              "range": [
                2059,
                2064
              ]
            },
            "source": "    .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 26,
            "line": 102,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                2076,
                2082
              ]
            },
            "source": "    .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 103,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#000'",
              "range": [
                2084,
                2090
              ]
            },
            "source": "    .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 19,
            "line": 103,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Arrest Count'",
              "range": [
                2102,
                2116
              ]
            },
            "source": "    .text(\"Arrest Count\");",
            "nodeType": "Literal",
            "column": 11,
            "line": 104,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2123,
                2126
              ]
            },
            "source": "  var arrest = svg.selectAll(\".arrest\")",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 107,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "  var arrest = svg.selectAll(\".arrest\")",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 107,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "source": "  var arrest = svg.selectAll(\".arrest\")",
            "nodeType": "Identifier",
            "column": 7,
            "line": 107,
            "message": "'arrest' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'.arrest'",
              "range": [
                2150,
                2159
              ]
            },
            "source": "  var arrest = svg.selectAll(\".arrest\")",
            "nodeType": "Literal",
            "column": 30,
            "line": 107,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                2200,
                2203
              ]
            },
            "source": "    .enter().append(\"g\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 109,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                2215,
                2222
              ]
            },
            "source": "    .attr(\"class\", \"arrest\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 110,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'arrest'",
              "range": [
                2224,
                2232
              ]
            },
            "source": "    .attr(\"class\", \"arrest\")",
            "nodeType": "Literal",
            "column": 20,
            "line": 110,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'mouseover'",
              "range": [
                2242,
                2253
              ]
            },
            "source": "    .on(\"mouseover\", function(d) {",
            "nodeType": "Literal",
            "column": 9,
            "line": 111,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "    .on(\"mouseover\", function(d) {",
            "nodeType": "Identifier",
            "column": 31,
            "line": 111,
            "message": "'d' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "endColumn": 18,
            "endLine": 112,
            "source": "      console.log(counter);",
            "nodeType": "MemberExpression",
            "column": 7,
            "line": 112,
            "message": "Unexpected console statement.",
            "severity": 1,
            "ruleId": "no-console"
          }, {
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 117,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2331,
                2334
              ]
            },
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "VariableDeclaration",
            "column": 3,
            "line": 117,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "Identifier",
            "column": 7,
            "line": 117,
            "message": "'path' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'.arrest'",
              "range": [
                2356,
                2365
              ]
            },
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "Literal",
            "column": 28,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'path'",
              "range": [
                2374,
                2380
              ]
            },
            "source": "  var path = svg.selectAll(\".arrest\").append(\"path\")",
            "nodeType": "Literal",
            "column": 46,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                2392,
                2399
              ]
            },
            "source": "    .attr(\"class\", \"line\")",
            "nodeType": "Literal",
            "column": 11,
            "line": 118,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'line'",
              "range": [
                2401,
                2407
              ]
            },
            "source": "    .attr(\"class\", \"line\")",
            "nodeType": "Literal",
            "column": 20,
            "line": 118,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'d'",
              "range": [
                2419,
                2422
              ]
            },
            "source": "    .attr(\"d\", function(d) {",
            "nodeType": "Literal",
            "column": 11,
            "line": 119,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'stroke'",
              "range": [
                2485,
                2493
              ]
            },
            "source": "    .style(\"stroke\", function(d) {",
            "nodeType": "Literal",
            "column": 12,
            "line": 122,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "      if (d.name == \"arrested\") {",
            "nodeType": "BinaryExpression",
            "column": 18,
            "line": 123,
            "message": "Expected '===' and instead saw '=='.",
            "severity": 2,
            "ruleId": "eqeqeq"
          }, {
            "fix": {
              "text": "'arrested'",
              "range": [
                2529,
                2539
              ]
            },
            "source": "      if (d.name == \"arrested\") {",
            "nodeType": "Literal",
            "column": 21,
            "line": 123,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#1f77b4'",
              "range": [
                2558,
                2567
              ]
            },
            "source": "        return \"#1f77b4\";",
            "nodeType": "Literal",
            "column": 16,
            "line": 124,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "function(d) {\n      if (d.name == \"arrested\") {\n        return \"#1f77b4\";\n      } \n        return \"#ff7f0e\";\n      \n    }",
              "range": [
                2495,
                2623
              ]
            },
            "source": "      } else {",
            "nodeType": "BlockStatement",
            "column": 14,
            "line": 125,
            "message": "Unnecessary 'else' after 'return'.",
            "severity": 2,
            "ruleId": "no-else-return"
          }, {
            "fix": {
              "text": "'#ff7f0e'",
              "range": [
                2599,
                2608
              ]
            },
            "source": "        return \"#ff7f0e\";",
            "nodeType": "Literal",
            "column": 16,
            "line": 126,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                2625,
                2628
              ]
            },
            "source": "});",
            "nodeType": "BlockStatement",
            "column": 1,
            "line": 131,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }],
          "filePath": "/workspaces/oixbdso3/submission/js/assaultchart.js"
        }, {
          "source": "//var d3 = require('d3');\nvar margin = { top: 20, right: 50, bottom: 30, left: 50 },\n    width = 900 - margin.left - margin.right,\n    height = 500 - margin.top - margin.bottom;\n\nvar x = d3.scale.ordinal()\n    .rangeRoundBands([0, width], .35);\n\nvar y = d3.scale.linear()\n    .rangeRound([height, 0]);\n\nvar color = d3.scale.category20();\n\nvar xAxis = d3.svg.axis()\n    .scale(x)\n    .orient(\"bottom\");\n\nvar yAxis = d3.svg.axis()\n    .scale(y)\n    .orient(\"left\")\n    .ticks(5)\n    .tickFormat(d3.format(\".2s\"));\n\nvar svg = d3.select(\"#bar\").append(\"svg\")\n    .attr(\"width\", width + margin.left + margin.right)\n    .attr(\"height\", height + margin.top + margin.bottom)\n    .append(\"g\")\n    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");\nvar xData = [\"over500\", \"under500\"];\n\nd3.json(\"../output/theft.json\", function(err, data) {\n    var dataIntermediate = xData.map(function(c) {\n        return data.map(function(d) {\n            return { x: d.year, y: d[c] };\n        });\n    });\n\n    var dataStackLayout = d3.layout.stack()(dataIntermediate);\n\n    x.domain(dataStackLayout[0].map(function(d) {\n        return d.x;\n    }));\n\n    y.domain([0,\n            d3.max(dataStackLayout[dataStackLayout.length - 1],\n                function(d) {\n                    return d.y0 + d.y;\n                })\n        ])\n        .nice();\n\n    var layer = svg.selectAll(\"g.cost\")\n        .data(dataStackLayout)\n        .enter().append(\"g\")\n        .attr(\"class\", \"cost\")\n        .style(\"fill\", function(d, i) {\n            return color(i);\n        });\n\n    layer.selectAll(\"rect\")\n        .data(function(d) {\n            return d;\n        })\n        .enter().append(\"rect\")\n        .attr(\"x\", function(d) {\n            return x(d.x);\n        })\n        .attr(\"y\", function(d) {\n            return y(d.y + d.y0);\n        })\n        .attr(\"height\", function(d) {\n            return y(d.y0) - y(d.y + d.y0);\n        })\n        .attr(\"width\", x.rangeBand());\n\n    svg.append(\"g\")\n        .attr(\"class\", \"axis\")\n        .attr(\"transform\", \"translate(0,\" + height + \")\")\n        .call(xAxis)\n        .append(\"text\")\n        .attr(\"x\", 800)\n        .attr(\"dy\", \"0.35em\")\n        .attr(\"text-anchor\", \"start\")\n        .attr(\"fill\", \"#000\")\n        .text(\"Year\");\n\n    svg.append(\"g\")\n        .attr(\"class\", \"y axis\")\n        .call(yAxis)\n        .append(\"text\")\n        .attr(\"transform\", \"rotate(-90)\")\n        .attr(\"y\", 7)\n        .attr(\"dy\", \"0.35em\")\n        .attr(\"text-anchor\", \"end\")\n        .attr(\"fill\", \"#000\")\n        .text(\"Theft Count\");\n\n    var legend = svg.selectAll(\".legend\")\n        .data(color.domain().slice().reverse())\n        .enter().append(\"g\")\n        .attr(\"class\", \"legend\")\n        .attr(\"transform\", function(d, i) {\n            return \"translate(0,\" + i * 20 + \")\";\n        })\n        .style(\"font\", \"10px sans-serif\");\n\n    legend.append(\"rect\")\n        .attr(\"x\", width - 18)\n        .attr(\"width\", 18)\n        .attr(\"height\", 18)\n        .attr(\"fill\", color);\n\n    legend.append(\"text\")\n        .attr(\"x\", width - 24)\n        .attr(\"y\", 9)\n        .attr(\"dy\", \".35em\")\n        .attr(\"text-anchor\", \"end\")\n        .text(function(d) {\n            return xData[d];\n        });\n});\n",
          "warningCount": 78,
          "errorCount": 25,
          "messages": [{
            "fix": {
              "text": " ",
              "range": [
                2,
                2
              ]
            },
            "source": "//var d3 = require('d3');",
            "nodeType": "Line",
            "column": 1,
            "line": 1,
            "message": "Expected space or tab after '//' in comment.",
            "severity": 1,
            "ruleId": "spaced-comment"
          }, {
            "source": "var margin = { top: 20, right: 50, bottom: 30, left: 50 },",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 2,
            "message": "Split 'var' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                26,
                29
              ]
            },
            "source": "var margin = { top: 20, right: 50, bottom: 30, left: 50 },",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 2,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                179,
                182
              ]
            },
            "source": "var x = d3.scale.ordinal()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 6,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var x = d3.scale.ordinal()",
            "nodeType": "Identifier",
            "column": 9,
            "line": 6,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "0",
              "range": [
                239,
                239
              ]
            },
            "source": "    .rangeRoundBands([0, width], .35);",
            "nodeType": "Literal",
            "column": 34,
            "line": 7,
            "message": "A leading decimal point can be confused with a dot.",
            "severity": 2,
            "ruleId": "no-floating-decimal"
          }, {
            "fix": {
              "text": "let",
              "range": [
                246,
                249
              ]
            },
            "source": "var y = d3.scale.linear()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 9,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var y = d3.scale.linear()",
            "nodeType": "Identifier",
            "column": 9,
            "line": 9,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                303,
                306
              ]
            },
            "source": "var color = d3.scale.category20();",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 12,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var color = d3.scale.category20();",
            "nodeType": "Identifier",
            "column": 13,
            "line": 12,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                339,
                342
              ]
            },
            "source": "var xAxis = d3.svg.axis()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 14,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var xAxis = d3.svg.axis()",
            "nodeType": "Identifier",
            "column": 13,
            "line": 14,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'bottom'",
              "range": [
                391,
                399
              ]
            },
            "source": "    .orient(\"bottom\");",
            "nodeType": "Literal",
            "column": 13,
            "line": 16,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                403,
                406
              ]
            },
            "source": "var yAxis = d3.svg.axis()",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 18,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var yAxis = d3.svg.axis()",
            "nodeType": "Identifier",
            "column": 13,
            "line": 18,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'left'",
              "range": [
                455,
                461
              ]
            },
            "source": "    .orient(\"left\")",
            "nodeType": "Literal",
            "column": 13,
            "line": 20,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "    .tickFormat(d3.format(\".2s\"));",
            "nodeType": "Identifier",
            "column": 17,
            "line": 22,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'.2s'",
              "range": [
                503,
                508
              ]
            },
            "source": "    .tickFormat(d3.format(\".2s\"));",
            "nodeType": "Literal",
            "column": 27,
            "line": 22,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                513,
                516
              ]
            },
            "source": "var svg = d3.select(\"#bar\").append(\"svg\")",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 24,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "var svg = d3.select(\"#bar\").append(\"svg\")",
            "nodeType": "Identifier",
            "column": 11,
            "line": 24,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'#bar'",
              "range": [
                533,
                539
              ]
            },
            "source": "var svg = d3.select(\"#bar\").append(\"svg\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 24,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'svg'",
              "range": [
                548,
                553
              ]
            },
            "source": "var svg = d3.select(\"#bar\").append(\"svg\")",
            "nodeType": "Literal",
            "column": 36,
            "line": 24,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'width'",
              "range": [
                565,
                572
              ]
            },
            "source": "    .attr(\"width\", width + margin.left + margin.right)",
            "nodeType": "Literal",
            "column": 11,
            "line": 25,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'height'",
              "range": [
                620,
                628
              ]
            },
            "source": "    .attr(\"height\", height + margin.top + margin.bottom)",
            "nodeType": "Literal",
            "column": 11,
            "line": 26,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                679,
                682
              ]
            },
            "source": "    .append(\"g\")",
            "nodeType": "Literal",
            "column": 13,
            "line": 27,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                694,
                705
              ]
            },
            "source": "    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 11,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate('",
              "range": [
                707,
                719
              ]
            },
            "source": "    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 24,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "','",
              "range": [
                736,
                739
              ]
            },
            "source": "    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                755,
                758
              ]
            },
            "source": "    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");",
            "nodeType": "Literal",
            "column": 72,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                761,
                764
              ]
            },
            "source": "var xData = [\"over500\", \"under500\"];",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 29,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'over500'",
              "range": [
                774,
                783
              ]
            },
            "source": "var xData = [\"over500\", \"under500\"];",
            "nodeType": "Literal",
            "column": 14,
            "line": 29,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'under500'",
              "range": [
                785,
                795
              ]
            },
            "source": "var xData = [\"over500\", \"under500\"];",
            "nodeType": "Literal",
            "column": 25,
            "line": 29,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "d3.json(\"../output/theft.json\", function(err, data) {",
            "nodeType": "Identifier",
            "column": 1,
            "line": 31,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "'../output/theft.json'",
              "range": [
                807,
                829
              ]
            },
            "source": "d3.json(\"../output/theft.json\", function(err, data) {",
            "nodeType": "Literal",
            "column": 9,
            "line": 31,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                857,
                860
              ]
            },
            "source": "    var dataIntermediate = xData.map(function(c) {",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 32,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1010,
                1013
              ]
            },
            "source": "    var dataStackLayout = d3.layout.stack()(dataIntermediate);",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 38,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "    var dataStackLayout = d3.layout.stack()(dataIntermediate);",
            "nodeType": "Identifier",
            "column": 27,
            "line": 38,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "source": "            d3.max(dataStackLayout[dataStackLayout.length - 1],",
            "nodeType": "Identifier",
            "column": 13,
            "line": 45,
            "message": "'d3' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1352,
                1355
              ]
            },
            "source": "    var layer = svg.selectAll(\"g.cost\")",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 52,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "    var layer = svg.selectAll(\"g.cost\")",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 52,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "'g.cost'",
              "range": [
                1378,
                1386
              ]
            },
            "source": "    var layer = svg.selectAll(\"g.cost\")",
            "nodeType": "Literal",
            "column": 31,
            "line": 52,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                1443,
                1446
              ]
            },
            "source": "        .enter().append(\"g\")",
            "nodeType": "Literal",
            "column": 25,
            "line": 54,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                1462,
                1469
              ]
            },
            "source": "        .attr(\"class\", \"cost\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 55,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'cost'",
              "range": [
                1471,
                1477
              ]
            },
            "source": "        .attr(\"class\", \"cost\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 55,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                1494,
                1500
              ]
            },
            "source": "        .style(\"fill\", function(d, i) {",
            "nodeType": "Literal",
            "column": 16,
            "line": 56,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rect'",
              "range": [
                1581,
                1587
              ]
            },
            "source": "    layer.selectAll(\"rect\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 60,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rect'",
              "range": [
                1674,
                1680
              ]
            },
            "source": "        .enter().append(\"rect\")",
            "nodeType": "Literal",
            "column": 25,
            "line": 64,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                1696,
                1699
              ]
            },
            "source": "        .attr(\"x\", function(d) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 65,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y'",
              "range": [
                1767,
                1770
              ]
            },
            "source": "        .attr(\"y\", function(d) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 68,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'height'",
              "range": [
                1845,
                1853
              ]
            },
            "source": "        .attr(\"height\", function(d) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 71,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'width'",
              "range": [
                1938,
                1945
              ]
            },
            "source": "        .attr(\"width\", x.rangeBand());",
            "nodeType": "Literal",
            "column": 15,
            "line": 74,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                1979,
                1982
              ]
            },
            "source": "    svg.append(\"g\")",
            "nodeType": "Literal",
            "column": 16,
            "line": 76,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                1998,
                2005
              ]
            },
            "source": "        .attr(\"class\", \"axis\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 77,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'axis'",
              "range": [
                2007,
                2013
              ]
            },
            "source": "        .attr(\"class\", \"axis\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 77,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                2029,
                2040
              ]
            },
            "source": "        .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 78,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate(0,'",
              "range": [
                2042,
                2056
              ]
            },
            "source": "        .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 28,
            "line": 78,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                2068,
                2071
              ]
            },
            "source": "        .attr(\"transform\", \"translate(0,\" + height + \")\")",
            "nodeType": "Literal",
            "column": 54,
            "line": 78,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                2110,
                2116
              ]
            },
            "source": "        .append(\"text\")",
            "nodeType": "Literal",
            "column": 17,
            "line": 80,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                2132,
                2135
              ]
            },
            "source": "        .attr(\"x\", 800)",
            "nodeType": "Literal",
            "column": 15,
            "line": 81,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                2156,
                2160
              ]
            },
            "source": "        .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 82,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'0.35em'",
              "range": [
                2162,
                2170
              ]
            },
            "source": "        .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 82,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                2186,
                2199
              ]
            },
            "source": "        .attr(\"text-anchor\", \"start\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 83,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'start'",
              "range": [
                2201,
                2208
              ]
            },
            "source": "        .attr(\"text-anchor\", \"start\")",
            "nodeType": "Literal",
            "column": 30,
            "line": 83,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                2224,
                2230
              ]
            },
            "source": "        .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 84,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#000'",
              "range": [
                2232,
                2238
              ]
            },
            "source": "        .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 23,
            "line": 84,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Year'",
              "range": [
                2254,
                2260
              ]
            },
            "source": "        .text(\"Year\");",
            "nodeType": "Literal",
            "column": 15,
            "line": 85,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                2279,
                2282
              ]
            },
            "source": "    svg.append(\"g\")",
            "nodeType": "Literal",
            "column": 16,
            "line": 87,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                2298,
                2305
              ]
            },
            "source": "        .attr(\"class\", \"y axis\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 88,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y axis'",
              "range": [
                2307,
                2315
              ]
            },
            "source": "        .attr(\"class\", \"y axis\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 88,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                2354,
                2360
              ]
            },
            "source": "        .append(\"text\")",
            "nodeType": "Literal",
            "column": 17,
            "line": 90,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                2376,
                2387
              ]
            },
            "source": "        .attr(\"transform\", \"rotate(-90)\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rotate(-90)'",
              "range": [
                2389,
                2402
              ]
            },
            "source": "        .attr(\"transform\", \"rotate(-90)\")",
            "nodeType": "Literal",
            "column": 28,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y'",
              "range": [
                2418,
                2421
              ]
            },
            "source": "        .attr(\"y\", 7)",
            "nodeType": "Literal",
            "column": 15,
            "line": 92,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                2440,
                2444
              ]
            },
            "source": "        .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 93,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'0.35em'",
              "range": [
                2446,
                2454
              ]
            },
            "source": "        .attr(\"dy\", \"0.35em\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 93,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                2470,
                2483
              ]
            },
            "source": "        .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 94,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'end'",
              "range": [
                2485,
                2490
              ]
            },
            "source": "        .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 30,
            "line": 94,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                2506,
                2512
              ]
            },
            "source": "        .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 95,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'#000'",
              "range": [
                2514,
                2520
              ]
            },
            "source": "        .attr(\"fill\", \"#000\")",
            "nodeType": "Literal",
            "column": 23,
            "line": 95,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Theft Count'",
              "range": [
                2536,
                2549
              ]
            },
            "source": "        .text(\"Theft Count\");",
            "nodeType": "Literal",
            "column": 15,
            "line": 96,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2557,
                2560
              ]
            },
            "source": "    var legend = svg.selectAll(\".legend\")",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 98,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "    var legend = svg.selectAll(\".legend\")",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 98,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "'.legend'",
              "range": [
                2584,
                2593
              ]
            },
            "source": "    var legend = svg.selectAll(\".legend\")",
            "nodeType": "Literal",
            "column": 32,
            "line": 98,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'g'",
              "range": [
                2667,
                2670
              ]
            },
            "source": "        .enter().append(\"g\")",
            "nodeType": "Literal",
            "column": 25,
            "line": 100,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'class'",
              "range": [
                2686,
                2693
              ]
            },
            "source": "        .attr(\"class\", \"legend\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 101,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'legend'",
              "range": [
                2695,
                2703
              ]
            },
            "source": "        .attr(\"class\", \"legend\")",
            "nodeType": "Literal",
            "column": 24,
            "line": 101,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'transform'",
              "range": [
                2719,
                2730
              ]
            },
            "source": "        .attr(\"transform\", function(d, i) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 102,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'translate(0,'",
              "range": [
                2768,
                2782
              ]
            },
            "source": "            return \"translate(0,\" + i * 20 + \")\";",
            "nodeType": "Literal",
            "column": 20,
            "line": 103,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "')'",
              "range": [
                2794,
                2797
              ]
            },
            "source": "            return \"translate(0,\" + i * 20 + \")\";",
            "nodeType": "Literal",
            "column": 46,
            "line": 103,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'font'",
              "range": [
                2825,
                2831
              ]
            },
            "source": "        .style(\"font\", \"10px sans-serif\");",
            "nodeType": "Literal",
            "column": 16,
            "line": 105,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'10px sans-serif'",
              "range": [
                2833,
                2850
              ]
            },
            "source": "        .style(\"font\", \"10px sans-serif\");",
            "nodeType": "Literal",
            "column": 24,
            "line": 105,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'rect'",
              "range": [
                2872,
                2878
              ]
            },
            "source": "    legend.append(\"rect\")",
            "nodeType": "Literal",
            "column": 19,
            "line": 107,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                2894,
                2897
              ]
            },
            "source": "        .attr(\"x\", width - 18)",
            "nodeType": "Literal",
            "column": 15,
            "line": 108,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'width'",
              "range": [
                2925,
                2932
              ]
            },
            "source": "        .attr(\"width\", 18)",
            "nodeType": "Literal",
            "column": 15,
            "line": 109,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'height'",
              "range": [
                2952,
                2960
              ]
            },
            "source": "        .attr(\"height\", 18)",
            "nodeType": "Literal",
            "column": 15,
            "line": 110,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fill'",
              "range": [
                2980,
                2986
              ]
            },
            "source": "        .attr(\"fill\", color);",
            "nodeType": "Literal",
            "column": 15,
            "line": 111,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text'",
              "range": [
                3015,
                3021
              ]
            },
            "source": "    legend.append(\"text\")",
            "nodeType": "Literal",
            "column": 19,
            "line": 113,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'x'",
              "range": [
                3037,
                3040
              ]
            },
            "source": "        .attr(\"x\", width - 24)",
            "nodeType": "Literal",
            "column": 15,
            "line": 114,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'y'",
              "range": [
                3068,
                3071
              ]
            },
            "source": "        .attr(\"y\", 9)",
            "nodeType": "Literal",
            "column": 15,
            "line": 115,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'dy'",
              "range": [
                3090,
                3094
              ]
            },
            "source": "        .attr(\"dy\", \".35em\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 116,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'.35em'",
              "range": [
                3096,
                3103
              ]
            },
            "source": "        .attr(\"dy\", \".35em\")",
            "nodeType": "Literal",
            "column": 21,
            "line": 116,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'text-anchor'",
              "range": [
                3119,
                3132
              ]
            },
            "source": "        .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 15,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'end'",
              "range": [
                3134,
                3139
              ]
            },
            "source": "        .attr(\"text-anchor\", \"end\")",
            "nodeType": "Literal",
            "column": 30,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }],
          "filePath": "/workspaces/oixbdso3/submission/js/theftbargraph.js"
        }, {
          "source": "const chai = require('chai');\nconst expect = chai.expect;\n\nconst jsonDiff = require('./jsonDiff');\nconst totalObjectKeys = require('./totalObjectKeys');\n\nconst expectedJSON = require('./json/assault.json');\nconst actualJSON = require('../output/assault.json');\n\ndescribe('Test Application as Blackbox - Assault Scenario', function(){\n\n  it('JSON has expected Number of Objects', function(done){\n    for(let i=0; i < expectedJSON.length; i++){\n      let objMatrix = totalObjectKeys.traverse(actualJSON[i]);\n      expect(objMatrix.totalNoObjects).to.not.equal(0);\n      expect(objMatrix.totalNoKeys).to.not.equal(0);\n    }\n    done();\n  });\n\n  it('Test JSON is as expected', function(done){\n    for(let i=0; i < expectedJSON.length; i++){\n      let compareResult = jsonDiff.compareJSONObjects(expectedJSON, actualJSON);\n      expect(compareResult.diffs).equal(0);\n    }\n    done();\n  });\n});\n",
          "warningCount": 8,
          "errorCount": 2,
          "messages": [{
            "fix": {
              "text": "\n",
              "range": [
                333,
                335
              ]
            },
            "source": "describe('Test Application as Blackbox - Assault Scenario', function(){",
            "nodeType": "BlockStatement",
            "column": 71,
            "line": 10,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                332,
                332
              ]
            },
            "source": "describe('Test Application as Blackbox - Assault Scenario', function(){",
            "nodeType": "BlockStatement",
            "column": 71,
            "line": 10,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                393,
                393
              ]
            },
            "source": "  it('JSON has expected Number of Objects', function(done){",
            "nodeType": "BlockStatement",
            "column": 59,
            "line": 12,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " = ",
              "range": [
                408,
                409
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "VariableDeclarator",
            "column": 14,
            "line": 13,
            "message": "Infix operators must be spaced.",
            "severity": 1,
            "ruleId": "space-infix-ops"
          }, {
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "UpdateExpression",
            "column": 43,
            "line": 13,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": " ",
              "range": [
                441,
                441
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "BlockStatement",
            "column": 47,
            "line": 13,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                687,
                687
              ]
            },
            "source": "  it('Test JSON is as expected', function(done){",
            "nodeType": "BlockStatement",
            "column": 48,
            "line": 21,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " = ",
              "range": [
                702,
                703
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "VariableDeclarator",
            "column": 14,
            "line": 22,
            "message": "Infix operators must be spaced.",
            "severity": 1,
            "ruleId": "space-infix-ops"
          }, {
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "UpdateExpression",
            "column": 43,
            "line": 22,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": " ",
              "range": [
                735,
                735
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "BlockStatement",
            "column": 47,
            "line": 22,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/assault.spec.js"
        }, {
          "source": "const path = require('path');\nconst should = require(\"chai\").should(),\nexpect = require(\"chai\").expect,\nastprocessor = require(\"../../tools/src/processFile\"),\napp = require(\"../index\");\n\n//console.log(\"Filename :\" + __filename);\n\ndescribe(\"Check the AST for this file\", function(err){\n\t\tit(\"should be called only once\", function(done) {\n        astprocessor((__dirname + '/../' + 'index.js'), function(err, data) {\n          // data.forEach(function(d){\n          //   //console.log(d.name,d.result);\n          // });\n\t\t\t\t\t// console.log(data);\n          done();\n        });\n    });\n  });\n",
          "warningCount": 10,
          "errorCount": 7,
          "messages": [{
            "source": "const path = require('path');",
            "nodeType": "Identifier",
            "column": 7,
            "line": 1,
            "message": "'path' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 2,
            "message": "Split 'const' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "Identifier",
            "column": 7,
            "line": 2,
            "message": "'should' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'chai'",
              "range": [
                53,
                59
              ]
            },
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "Literal",
            "column": 24,
            "line": 2,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "expect = require(\"chai\").expect,",
            "nodeType": "Identifier",
            "column": 1,
            "line": 3,
            "message": "'expect' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'chai'",
              "range": [
                88,
                94
              ]
            },
            "source": "expect = require(\"chai\").expect,",
            "nodeType": "Literal",
            "column": 18,
            "line": 3,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'../../tools/src/processFile'",
              "range": [
                127,
                156
              ]
            },
            "source": "astprocessor = require(\"../../tools/src/processFile\"),",
            "nodeType": "Literal",
            "column": 24,
            "line": 4,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "app = require(\"../index\");",
            "nodeType": "Identifier",
            "column": 1,
            "line": 5,
            "message": "'app' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'../index'",
              "range": [
                173,
                183
              ]
            },
            "source": "app = require(\"../index\");",
            "nodeType": "Literal",
            "column": 15,
            "line": 5,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": " ",
              "range": [
                189,
                189
              ]
            },
            "source": "//console.log(\"Filename :\" + __filename);",
            "nodeType": "Line",
            "column": 1,
            "line": 7,
            "message": "Expected space or tab after '//' in comment.",
            "severity": 1,
            "ruleId": "spaced-comment"
          }, {
            "fix": {
              "text": "'Check the AST for this file'",
              "range": [
                239,
                268
              ]
            },
            "source": "describe(\"Check the AST for this file\", function(err){",
            "nodeType": "Literal",
            "column": 10,
            "line": 9,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Check the AST for this file\", function(err){",
            "nodeType": "Identifier",
            "column": 50,
            "line": 9,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": " ",
              "range": [
                283,
                283
              ]
            },
            "source": "describe(\"Check the AST for this file\", function(err){",
            "nodeType": "BlockStatement",
            "column": 54,
            "line": 9,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": "'should be called only once'",
              "range": [
                290,
                318
              ]
            },
            "source": "\t\tit(\"should be called only once\", function(done) {",
            "nodeType": "Literal",
            "column": 6,
            "line": 10,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "__dirname + '/../' + 'index.js'",
              "range": [
                358,
                391
              ]
            },
            "source": "        astprocessor((__dirname + '/../' + 'index.js'), function(err, data) {",
            "nodeType": "BinaryExpression",
            "column": 22,
            "line": 11,
            "message": "Gratuitous parentheses around expression.",
            "severity": 1,
            "ruleId": "no-extra-parens"
          }, {
            "source": "        astprocessor((__dirname + '/../' + 'index.js'), function(err, data) {",
            "nodeType": "Identifier",
            "column": 66,
            "line": 11,
            "message": "'err' is already declared in the upper scope.",
            "severity": 2,
            "ruleId": "no-shadow"
          }, {
            "source": "        astprocessor((__dirname + '/../' + 'index.js'), function(err, data) {",
            "nodeType": "Identifier",
            "column": 71,
            "line": 11,
            "message": "'data' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/asttest.js"
        }, {
          "source": "const should = require(\"chai\").should(),\r\n    expect = require(\"chai\").expect,\r\n    sinon = require('sinon'),\r\n    readline = require(\"readline\"),\r\n    fs = require(\"fs\"),\r\n    pkginfo = require(\"pkginfo\")(module),\r\n    convert = require(\"../index\");\r\n\r\ndescribe(\"Test the createInterface method of readline\", function(err) {\r\n    it(\"should be called only once\", function() {\r\n        var spyCreateInterface = sinon.spy(readline, 'createInterface');\r\n        convert();\r\n        readline.createInterface.restore();\r\n        sinon.assert.calledOnce(spyCreateInterface);\r\n    });\r\n});\r\ndescribe(\"Test the on() method of readline interface for line event\", function(err) {\r\n    it(\"should be called\", function() {\r\n        var stub = sinon.stub(readline.Interface.prototype, 'on');\r\n        convert();\r\n        sinon.assert.called(stub);\r\n        readline.Interface.prototype.on.restore();\r\n        sinon.assert.calledWith(stub, \"line\");\r\n\r\n    });\r\n});\r\ndescribe(\"Test the on() method of readline interface for close event\", function(err) {\r\n    it(\"should be called\", function() {\r\n        var stub = sinon.stub(readline.Interface.prototype, 'on');\r\n        convert();\r\n        readline.Interface.prototype.on.restore();\r\n        sinon.assert.calledWith(stub, \"close\");\r\n    });\r\n});\r\n\r\ndescribe(\"Test for use of Array.map() and Array.push() function\", function(err) {\r\n    it(\"Array.map() should be used atleast once\", function() {\r\n        var mapSpy = sinon.spy(Array.prototype, 'map');\r\n        convert();\r\n        sinon.assert.called(mapSpy);\r\n    });\r\n    it(\"Array.push() should be used atleast once\", function() {\r\n        var pushSpy = sinon.spy(Array.prototype, 'push');\r\n        convert();\r\n        sinon.assert.called(pushSpy);\r\n    });\r\n});\r\n\r\ndescribe.skip(\"Unit tests have been created\", function(err) {\r\n    it(\"check for existence of test files\", function(done) {\r\n        fs.stat(__dirname + '/' + module.exports.unittests, function(err, stat) {\r\n            expect(err).to.equal(null);\r\n            expect(err).to.not.equal('ENOENT');\r\n            done();\r\n        });\r\n    });\r\n});\r\n\r\ndescribe(\"Testing for existence of Synchronous file read methods\", function(err) {\r\n    let sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should not be called readFileSync\", function() {\r\n        var stub = this.sandbox.stub(require('fs'), \"readFileSync\");\r\n        convert();\r\n        sinon.assert.callCount(stub, 0);\r\n    });\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\n\r\ndescribe(\"Testing for existence of Synchronous writeFileSync methods\", function(err) {\r\n    let sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should not be called writeFileSync\", function() {\r\n        var stub = this.sandbox.stub(require('fs'), \"writeFileSync\");\r\n        convert();\r\n        sinon.assert.callCount(stub, 0);\r\n    });\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\n\r\ndescribe(\"Testing for existence of Asynchronous writeFile methods\", function(err) {\r\n    let sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should be called writeFile\", function(done) {\r\n        var stub = this.sandbox.stub(require('fs'), \"writeFile\");\r\n        convert();\r\n        setTimeout(function() {\r\n            sinon.assert.called(stub);\r\n        }, 10000);\r\n\r\n        done();\r\n    });\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\n\r\ndescribe.skip(\"Testing for whether close() method called on fs\", function(err) {\r\n    let sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should be called\", function() {\r\n        var stub = this.sandbox.stub(require('fs'), \"close\");\r\n        convert();\r\n        sinon.assert.called(stub);\r\n    });\r\n\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\ndescribe.skip(\"Test for use of JSON.parse() and JSON.stringify() functions\", function(err) {\r\n    it(\"JSON.parse() should be used atleast once\", function() {\r\n        var parseSpy = sinon.spy(JSON, 'parse');\r\n        convert();\r\n        sinon.assert.called(parseSpy);\r\n    });\r\n    it(\"JSON.stringify() should be used atleast once\", function() {\r\n        var stringifySpy = sinon.spy(JSON, 'stringify');\r\n        convert();\r\n        sinon.assert.called(stringifySpy);\r\n    });\r\n});\r\n\r\ndescribe.skip(\"Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods\", function(err) {\r\n\t\tlet sandbox = '';\r\n    beforeEach(function() {\r\n        this.sandbox = sinon.sandbox.create();\r\n    })\r\n\r\n    it(\"should be called\", function() {\r\n        var stub = this.sandbox.stub(RegExp, \"test\");\r\n        convert();\r\n        sinon.assert.called(stub);\r\n    });\r\n\r\n    afterEach(function() {\r\n        this.sandbox.restore();\r\n    });\r\n});\r\n",
          "warningCount": 44,
          "errorCount": 33,
          "messages": [{
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "VariableDeclaration",
            "column": 1,
            "line": 1,
            "message": "Split 'const' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "Identifier",
            "column": 7,
            "line": 1,
            "message": "'should' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'chai'",
              "range": [
                23,
                29
              ]
            },
            "source": "const should = require(\"chai\").should(),",
            "nodeType": "Literal",
            "column": 24,
            "line": 1,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'chai'",
              "range": [
                63,
                69
              ]
            },
            "source": "    expect = require(\"chai\").expect,",
            "nodeType": "Literal",
            "column": 22,
            "line": 2,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'readline'",
              "range": [
                134,
                144
              ]
            },
            "source": "    readline = require(\"readline\"),",
            "nodeType": "Literal",
            "column": 24,
            "line": 4,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'fs'",
              "range": [
                165,
                169
              ]
            },
            "source": "    fs = require(\"fs\"),",
            "nodeType": "Literal",
            "column": 18,
            "line": 5,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "    pkginfo = require(\"pkginfo\")(module),",
            "nodeType": "Identifier",
            "column": 5,
            "line": 6,
            "message": "'pkginfo' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'pkginfo'",
              "range": [
                195,
                204
              ]
            },
            "source": "    pkginfo = require(\"pkginfo\")(module),",
            "nodeType": "Literal",
            "column": 23,
            "line": 6,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'../index'",
              "range": [
                238,
                248
              ]
            },
            "source": "    convert = require(\"../index\");",
            "nodeType": "Literal",
            "column": 23,
            "line": 7,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Test the createInterface method of readline'",
              "range": [
                263,
                308
              ]
            },
            "source": "describe(\"Test the createInterface method of readline\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 9,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Test the createInterface method of readline\", function(err) {",
            "nodeType": "Identifier",
            "column": 66,
            "line": 9,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'should be called only once'",
              "range": [
                334,
                362
              ]
            },
            "source": "    it(\"should be called only once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 10,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                386,
                389
              ]
            },
            "source": "        var spyCreateInterface = sinon.spy(readline, 'createInterface');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 11,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'Test the on() method of readline interface for line event'",
              "range": [
                594,
                653
              ]
            },
            "source": "describe(\"Test the on() method of readline interface for line event\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 17,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Test the on() method of readline interface for line event\", function(err) {",
            "nodeType": "Identifier",
            "column": 80,
            "line": 17,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'should be called'",
              "range": [
                679,
                697
              ]
            },
            "source": "    it(\"should be called\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 18,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                721,
                724
              ]
            },
            "source": "        var stub = sinon.stub(readline.Interface.prototype, 'on');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 19,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'line'",
              "range": [
                927,
                933
              ]
            },
            "source": "        sinon.assert.calledWith(stub, \"line\");",
            "nodeType": "Literal",
            "column": 39,
            "line": 23,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                935,
                939
              ]
            },
            "source": "    });",
            "nodeType": "BlockStatement",
            "column": 5,
            "line": 25,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": "'Test the on() method of readline interface for close event'",
              "range": [
                962,
                1022
              ]
            },
            "source": "describe(\"Test the on() method of readline interface for close event\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 27,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Test the on() method of readline interface for close event\", function(err) {",
            "nodeType": "Identifier",
            "column": 81,
            "line": 27,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'should be called'",
              "range": [
                1048,
                1066
              ]
            },
            "source": "    it(\"should be called\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 28,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1090,
                1093
              ]
            },
            "source": "        var stub = sinon.stub(readline.Interface.prototype, 'on');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 29,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'close'",
              "range": [
                1260,
                1267
              ]
            },
            "source": "        sinon.assert.calledWith(stub, \"close\");",
            "nodeType": "Literal",
            "column": 39,
            "line": 32,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Test for use of Array.map() and Array.push() function'",
              "range": [
                1296,
                1351
              ]
            },
            "source": "describe(\"Test for use of Array.map() and Array.push() function\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 36,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Test for use of Array.map() and Array.push() function\", function(err) {",
            "nodeType": "Identifier",
            "column": 76,
            "line": 36,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'Array.map() should be used atleast once'",
              "range": [
                1377,
                1418
              ]
            },
            "source": "    it(\"Array.map() should be used atleast once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 37,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1442,
                1445
              ]
            },
            "source": "        var mapSpy = sinon.spy(Array.prototype, 'map');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 38,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'Array.push() should be used atleast once'",
              "range": [
                1565,
                1607
              ]
            },
            "source": "    it(\"Array.push() should be used atleast once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 42,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                1631,
                1634
              ]
            },
            "source": "        var pushSpy = sinon.spy(Array.prototype, 'push');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 43,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'Unit tests have been created'",
              "range": [
                1771,
                1801
              ]
            },
            "source": "describe.skip(\"Unit tests have been created\", function(err) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 49,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe.skip(\"Unit tests have been created\", function(err) {",
            "nodeType": "Identifier",
            "column": 56,
            "line": 49,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'check for existence of test files'",
              "range": [
                1827,
                1862
              ]
            },
            "source": "    it(\"check for existence of test files\", function(done) {",
            "nodeType": "Literal",
            "column": 8,
            "line": 50,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "        fs.stat(__dirname + '/' + module.exports.unittests, function(err, stat) {",
            "nodeType": "Identifier",
            "column": 70,
            "line": 51,
            "message": "'err' is already declared in the upper scope.",
            "severity": 2,
            "ruleId": "no-shadow"
          }, {
            "source": "        fs.stat(__dirname + '/' + module.exports.unittests, function(err, stat) {",
            "nodeType": "Identifier",
            "column": 75,
            "line": 51,
            "message": "'stat' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'Testing for existence of Synchronous file read methods'",
              "range": [
                2114,
                2170
              ]
            },
            "source": "describe(\"Testing for existence of Synchronous file read methods\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 59,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Testing for existence of Synchronous file read methods\", function(err) {",
            "nodeType": "Identifier",
            "column": 77,
            "line": 59,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "    let sandbox = '';",
            "nodeType": "Identifier",
            "column": 9,
            "line": 60,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                2295,
                2295
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 63,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should not be called readFileSync'",
              "range": [
                2306,
                2341
              ]
            },
            "source": "    it(\"should not be called readFileSync\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 65,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2365,
                2368
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"readFileSync\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 66,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'readFileSync'",
              "range": [
                2409,
                2423
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"readFileSync\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 66,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Testing for existence of Synchronous writeFileSync methods'",
              "range": [
                2584,
                2644
              ]
            },
            "source": "describe(\"Testing for existence of Synchronous writeFileSync methods\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 75,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Testing for existence of Synchronous writeFileSync methods\", function(err) {",
            "nodeType": "Identifier",
            "column": 81,
            "line": 75,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "    let sandbox = '';",
            "nodeType": "Identifier",
            "column": 9,
            "line": 76,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                2769,
                2769
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 79,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should not be called writeFileSync'",
              "range": [
                2780,
                2816
              ]
            },
            "source": "    it(\"should not be called writeFileSync\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 81,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                2840,
                2843
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"writeFileSync\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 82,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'writeFileSync'",
              "range": [
                2884,
                2899
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"writeFileSync\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 82,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Testing for existence of Asynchronous writeFile methods'",
              "range": [
                3060,
                3117
              ]
            },
            "source": "describe(\"Testing for existence of Asynchronous writeFile methods\", function(err) {",
            "nodeType": "Literal",
            "column": 10,
            "line": 91,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe(\"Testing for existence of Asynchronous writeFile methods\", function(err) {",
            "nodeType": "Identifier",
            "column": 78,
            "line": 91,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "    let sandbox = '';",
            "nodeType": "Identifier",
            "column": 9,
            "line": 92,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                3242,
                3242
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 95,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should be called writeFile'",
              "range": [
                3253,
                3281
              ]
            },
            "source": "    it(\"should be called writeFile\", function(done) {",
            "nodeType": "Literal",
            "column": 8,
            "line": 97,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                3309,
                3312
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"writeFile\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 98,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'writeFile'",
              "range": [
                3353,
                3364
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"writeFile\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 98,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Testing for whether close() method called on fs'",
              "range": [
                3600,
                3649
              ]
            },
            "source": "describe.skip(\"Testing for whether close() method called on fs\", function(err) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 111,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe.skip(\"Testing for whether close() method called on fs\", function(err) {",
            "nodeType": "Identifier",
            "column": 75,
            "line": 111,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "    let sandbox = '';",
            "nodeType": "Identifier",
            "column": 9,
            "line": 112,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                3774,
                3774
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 115,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should be called'",
              "range": [
                3785,
                3803
              ]
            },
            "source": "    it(\"should be called\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 117,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                3827,
                3830
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"close\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 118,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'close'",
              "range": [
                3871,
                3878
              ]
            },
            "source": "        var stub = this.sandbox.stub(require('fs'), \"close\");",
            "nodeType": "Literal",
            "column": 53,
            "line": 118,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "'Test for use of JSON.parse() and JSON.stringify() functions'",
              "range": [
                4038,
                4099
              ]
            },
            "source": "describe.skip(\"Test for use of JSON.parse() and JSON.stringify() functions\", function(err) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 127,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe.skip(\"Test for use of JSON.parse() and JSON.stringify() functions\", function(err) {",
            "nodeType": "Identifier",
            "column": 87,
            "line": 127,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "'JSON.parse() should be used atleast once'",
              "range": [
                4125,
                4167
              ]
            },
            "source": "    it(\"JSON.parse() should be used atleast once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 128,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                4191,
                4194
              ]
            },
            "source": "        var parseSpy = sinon.spy(JSON, 'parse');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 129,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'JSON.stringify() should be used atleast once'",
              "range": [
                4309,
                4355
              ]
            },
            "source": "    it(\"JSON.stringify() should be used atleast once\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 133,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                4379,
                4382
              ]
            },
            "source": "        var stringifySpy = sinon.spy(JSON, 'stringify');",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 134,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "describe.skip(\"Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods\", function(err) {",
            "nodeType": "Program",
            "column": 1,
            "line": 140,
            "message": "Line 140 exceeds the maximum line length of 100.",
            "severity": 2,
            "ruleId": "max-len"
          }, {
            "fix": {
              "text": "'Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods'",
              "range": [
                4523,
                4603
              ]
            },
            "source": "describe.skip(\"Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods\", function(err) {",
            "nodeType": "Literal",
            "column": 15,
            "line": 140,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "describe.skip(\"Test for use of Regular Expressions and RegExp.test() or RegExp.exec() methods\", function(err) {",
            "nodeType": "Identifier",
            "column": 106,
            "line": 140,
            "message": "'err' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "source": "\t\tlet sandbox = '';",
            "nodeType": "Identifier",
            "column": 7,
            "line": 141,
            "message": "'sandbox' is assigned a value but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": ";",
              "range": [
                4726,
                4726
              ]
            },
            "source": "    })",
            "nodeType": "ExpressionStatement",
            "column": 7,
            "line": 144,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "'should be called'",
              "range": [
                4737,
                4755
              ]
            },
            "source": "    it(\"should be called\", function() {",
            "nodeType": "Literal",
            "column": 8,
            "line": 146,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "let",
              "range": [
                4779,
                4782
              ]
            },
            "source": "        var stub = this.sandbox.stub(RegExp, \"test\");",
            "nodeType": "VariableDeclaration",
            "column": 9,
            "line": 147,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "fix": {
              "text": "'test'",
              "range": [
                4816,
                4822
              ]
            },
            "source": "        var stub = this.sandbox.stub(RegExp, \"test\");",
            "nodeType": "Literal",
            "column": 46,
            "line": 147,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/dataMunging.spec.js"
        }, {
          "source": "// Compare objects in JSON\nmodule.exports = (function() {\n  return {\n\n    compareJSONObjects: function(expectedJSON, actualJSON) {\n      if (!expectedJSON || !actualJSON) {\n        return {};\n      }\n\n      function objValues(obj) {\n        let keys = Object.keys(obj);\n        let values = [];\n        keys.forEach(function(keyName) {\n          let val = obj[keyName];\n          values.push(val);\n        });\n        return values;\n      }\n\n      function toObjValueHash(obj) {\n        // return Object.values(obj).sort().join(';');\n        return objValues(obj).sort().join(';');\n      }\n\n      function toDataMap(data) {\n        return data.map(toObjValueHash);\n      }\n\n      let expectedDataSet = new Set(toDataMap(expectedJSON));\n      let actualJSONObjs = actualJSON;\n      let diffs = [];\n      let matched = [];\n      actualJSONObjs.forEach(function(obj) {\n        let actual = toObjValueHash(obj);\n        if (expectedDataSet.has(actual)) {\n          matched.push(obj);\n        } else {\n          diffs.push(obj);\n        }\n      });\n      if (diffs.length > 0) {\n        // console.log(\"Differs by \", diffs.length);\n        // console.log(\"Differences: \", diffs);\n        return {\n          diffs: diffs.length,\n          diffObjs: diffs\n        };\n      } else {\n        // console.log(\"Data is Same\");\n        return {\n          diffs: diffs.length,\n          diffObjs: []\n        };\n      }\n    },\n    compareJSONStrings: function(expectedJSONStr, actualJSONStr) {\n      if (!expectedJSONStr || !actualJSONStr) {\n        return;\n      }\n      compareJSONObjects(JSON.parse(expectedJSONStr), JSON.parse(\n        actualJSONStr));\n      return;\n    }\n  };\n}());\n",
          "warningCount": 0,
          "errorCount": 2,
          "messages": [{
            "fix": {
              "text": "function(expectedJSON, actualJSON) {\n      if (!expectedJSON || !actualJSON) {\n        return {};\n      }\n\n      function objValues(obj) {\n        let keys = Object.keys(obj);\n        let values = [];\n        keys.forEach(function(keyName) {\n          let val = obj[keyName];\n          values.push(val);\n        });\n        return values;\n      }\n\n      function toObjValueHash(obj) {\n        // return Object.values(obj).sort().join(';');\n        return objValues(obj).sort().join(';');\n      }\n\n      function toDataMap(data) {\n        return data.map(toObjValueHash);\n      }\n\n      let expectedDataSet = new Set(toDataMap(expectedJSON));\n      let actualJSONObjs = actualJSON;\n      let diffs = [];\n      let matched = [];\n      actualJSONObjs.forEach(function(obj) {\n        let actual = toObjValueHash(obj);\n        if (expectedDataSet.has(actual)) {\n          matched.push(obj);\n        } else {\n          diffs.push(obj);\n        }\n      });\n      if (diffs.length > 0) {\n        // console.log(\"Differs by \", diffs.length);\n        // console.log(\"Differences: \", diffs);\n        return {\n          diffs: diffs.length,\n          diffObjs: diffs\n        };\n      } \n        // console.log(\"Data is Same\");\n        return {\n          diffs: diffs.length,\n          diffObjs: []\n        };\n      \n    }",
              "range": [
                94,
                1410
              ]
            },
            "source": "      } else {",
            "nodeType": "BlockStatement",
            "column": 14,
            "line": 48,
            "message": "Unnecessary 'else' after 'return'.",
            "severity": 2,
            "ruleId": "no-else-return"
          }, {
            "source": "      compareJSONObjects(JSON.parse(expectedJSONStr), JSON.parse(",
            "nodeType": "Identifier",
            "column": 7,
            "line": 60,
            "message": "'compareJSONObjects' is not defined.",
            "severity": 2,
            "ruleId": "no-undef"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/jsonDiff.js"
        }, {
          "source": "const chai = require('chai');\nconst expect = chai.expect;\n\nconst jsonDiff = require('./jsonDiff');\nconst totalObjectKeys = require('./totalObjectKeys');\n\nconst expectedJSON = require('./json/theft.json');\nconst actualJSON = require('../output/theft.json');\n\ndescribe('Test Application as Blackbox - Theft Scenario', function(){\n\n  it('JSON has expected Number of Objects', function(done){\n    for(let i=0; i < expectedJSON.length; i++){\n      let objMatrix = totalObjectKeys.traverse(actualJSON[i]);\n      expect(objMatrix.totalNoObjects).to.not.equal(0);\n      expect(objMatrix.totalNoKeys).to.not.equal(0);\n    }\n    done();\n  });\n\n  it('Test JSON is as expected', function(done){\n    for(let i=0; i < expectedJSON.length; i++){\n      let compareResult = jsonDiff.compareJSONObjects(expectedJSON, actualJSON);\n      expect(compareResult.diffs).equal(0);\n    }\n    done();\n  });\n});\n",
          "warningCount": 8,
          "errorCount": 2,
          "messages": [{
            "fix": {
              "text": "\n",
              "range": [
                327,
                329
              ]
            },
            "source": "describe('Test Application as Blackbox - Theft Scenario', function(){",
            "nodeType": "BlockStatement",
            "column": 69,
            "line": 10,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                326,
                326
              ]
            },
            "source": "describe('Test Application as Blackbox - Theft Scenario', function(){",
            "nodeType": "BlockStatement",
            "column": 69,
            "line": 10,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                387,
                387
              ]
            },
            "source": "  it('JSON has expected Number of Objects', function(done){",
            "nodeType": "BlockStatement",
            "column": 59,
            "line": 12,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " = ",
              "range": [
                402,
                403
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "VariableDeclarator",
            "column": 14,
            "line": 13,
            "message": "Infix operators must be spaced.",
            "severity": 1,
            "ruleId": "space-infix-ops"
          }, {
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "UpdateExpression",
            "column": 43,
            "line": 13,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": " ",
              "range": [
                435,
                435
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "BlockStatement",
            "column": 47,
            "line": 13,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " ",
              "range": [
                681,
                681
              ]
            },
            "source": "  it('Test JSON is as expected', function(done){",
            "nodeType": "BlockStatement",
            "column": 48,
            "line": 21,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }, {
            "fix": {
              "text": " = ",
              "range": [
                696,
                697
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "VariableDeclarator",
            "column": 14,
            "line": 22,
            "message": "Infix operators must be spaced.",
            "severity": 1,
            "ruleId": "space-infix-ops"
          }, {
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "UpdateExpression",
            "column": 43,
            "line": 22,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": " ",
              "range": [
                729,
                729
              ]
            },
            "source": "    for(let i=0; i < expectedJSON.length; i++){",
            "nodeType": "BlockStatement",
            "column": 47,
            "line": 22,
            "message": "Missing space before opening brace.",
            "severity": 1,
            "ruleId": "space-before-blocks"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/theft.spec.js"
        }, {
          "source": "module.exports = (function () {\n    var totalNoObjects = 0, totalNoKeys = 0;\n  return {\n    traverse : traverse\n  }\n  // Traverse expected json\n  function traverse(obj) {\n        if (obj instanceof Array) {\n        totalNoObjects++;\n            obj.forEach(function (value, index) {\n            if (typeof value == \"object\" && value) {\n                traverse(value);\n            } else {\n\n              totalNoKeys++;\n            }\n\n          })\n\n      } else {\n          totalNoObjects++;\n          for (var prop in obj) {\n              if (typeof obj[prop] == \"object\" && obj[prop]) {\n                  traverse(obj[prop]);\n              } else {\n                totalNoKeys++;\n\n              }\n          }\n      }\n      return {\n        totalNoObjects : totalNoObjects,\n        totalNoKeys    : totalNoKeys\n      }\n  }\n})();\n",
          "warningCount": 13,
          "errorCount": 12,
          "messages": [{
            "fix": {
              "text": "())",
              "range": [
                825,
                828
              ]
            },
            "source": "module.exports = (function () {",
            "nodeType": "CallExpression",
            "column": 18,
            "line": 1,
            "message": "Move the invocation into the parens that contain the function.",
            "severity": 2,
            "ruleId": "wrap-iife"
          }, {
            "fix": {
              "text": "let",
              "range": [
                36,
                39
              ]
            },
            "source": "    var totalNoObjects = 0, totalNoKeys = 0;",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 2,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "    var totalNoObjects = 0, totalNoKeys = 0;",
            "nodeType": "VariableDeclaration",
            "column": 5,
            "line": 2,
            "message": "Split 'var' declarations into multiple statements.",
            "severity": 1,
            "ruleId": "one-var"
          }, {
            "fix": {
              "text": "",
              "range": [
                100,
                101
              ]
            },
            "source": "    traverse : traverse",
            "nodeType": "Identifier",
            "column": 5,
            "line": 4,
            "message": "Extra space after key 'traverse'.",
            "severity": 1,
            "ruleId": "key-spacing"
          }, {
            "source": "    traverse : traverse",
            "nodeType": "Identifier",
            "column": 16,
            "line": 4,
            "message": "'traverse' was used before it was defined.",
            "severity": 2,
            "ruleId": "no-use-before-define"
          }, {
            "fix": {
              "text": ";",
              "range": [
                115,
                115
              ]
            },
            "source": "  }",
            "nodeType": "ReturnStatement",
            "column": 4,
            "line": 5,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "source": "        totalNoObjects++;",
            "nodeType": "UpdateExpression",
            "column": 9,
            "line": 9,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "source": "            obj.forEach(function (value, index) {",
            "nodeType": "Identifier",
            "column": 42,
            "line": 10,
            "message": "'index' is defined but never used.",
            "severity": 2,
            "ruleId": "no-unused-vars"
          }, {
            "fix": {
              "text": "===",
              "range": [
                312,
                314
              ]
            },
            "source": "            if (typeof value == \"object\" && value) {",
            "nodeType": "BinaryExpression",
            "column": 30,
            "line": 11,
            "message": "Expected '===' and instead saw '=='.",
            "severity": 2,
            "ruleId": "eqeqeq"
          }, {
            "fix": {
              "text": "'object'",
              "range": [
                315,
                323
              ]
            },
            "source": "            if (typeof value == \"object\" && value) {",
            "nodeType": "Literal",
            "column": 33,
            "line": 11,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                389,
                391
              ]
            },
            "source": "            } else {",
            "nodeType": "BlockStatement",
            "column": 20,
            "line": 13,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "source": "              totalNoKeys++;",
            "nodeType": "UpdateExpression",
            "column": 15,
            "line": 15,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                433,
                435
              ]
            },
            "source": "          })",
            "nodeType": "BlockStatement",
            "column": 11,
            "line": 18,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": ";",
              "range": [
                447,
                447
              ]
            },
            "source": "          })",
            "nodeType": "ExpressionStatement",
            "column": 13,
            "line": 18,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                447,
                449
              ]
            },
            "source": "      } else {",
            "nodeType": "BlockStatement",
            "column": 7,
            "line": 20,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "source": "          totalNoObjects++;",
            "nodeType": "UpdateExpression",
            "column": 11,
            "line": 21,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": "let",
              "range": [
                507,
                510
              ]
            },
            "source": "          for (var prop in obj) {",
            "nodeType": "VariableDeclaration",
            "column": 16,
            "line": 22,
            "message": "Unexpected var, use let or const instead.",
            "severity": 2,
            "ruleId": "no-var"
          }, {
            "source": "          for (var prop in obj) {",
            "nodeType": "VariableDeclaration",
            "column": 16,
            "line": 22,
            "message": "All 'var' declarations must be at the top of the function scope.",
            "severity": 2,
            "ruleId": "vars-on-top"
          }, {
            "fix": {
              "text": "===",
              "range": [
                561,
                563
              ]
            },
            "source": "              if (typeof obj[prop] == \"object\" && obj[prop]) {",
            "nodeType": "BinaryExpression",
            "column": 36,
            "line": 23,
            "message": "Expected '===' and instead saw '=='.",
            "severity": 2,
            "ruleId": "eqeqeq"
          }, {
            "fix": {
              "text": "'object'",
              "range": [
                564,
                572
              ]
            },
            "source": "              if (typeof obj[prop] == \"object\" && obj[prop]) {",
            "nodeType": "Literal",
            "column": 39,
            "line": 23,
            "message": "Strings must use singlequote.",
            "severity": 1,
            "ruleId": "quotes"
          }, {
            "source": "                totalNoKeys++;",
            "nodeType": "UpdateExpression",
            "column": 17,
            "line": 26,
            "message": "Unary operator '++' used.",
            "severity": 2,
            "ruleId": "no-plusplus"
          }, {
            "fix": {
              "text": "\n",
              "range": [
                681,
                683
              ]
            },
            "source": "              }",
            "nodeType": "BlockStatement",
            "column": 15,
            "line": 28,
            "message": "Block must not be padded by blank lines.",
            "severity": 1,
            "ruleId": "padded-blocks"
          }, {
            "fix": {
              "text": "",
              "range": [
                756,
                757
              ]
            },
            "source": "        totalNoObjects : totalNoObjects,",
            "nodeType": "Identifier",
            "column": 9,
            "line": 32,
            "message": "Extra space after key 'totalNoObjects'.",
            "severity": 1,
            "ruleId": "key-spacing"
          }, {
            "fix": {
              "text": "",
              "range": [
                794,
                798
              ]
            },
            "source": "        totalNoKeys    : totalNoKeys",
            "nodeType": "Identifier",
            "column": 9,
            "line": 33,
            "message": "Extra space after key 'totalNoKeys'.",
            "severity": 1,
            "ruleId": "key-spacing"
          }, {
            "fix": {
              "text": ";",
              "range": [
                819,
                819
              ]
            },
            "source": "      }",
            "nodeType": "ReturnStatement",
            "column": 8,
            "line": 34,
            "message": "Missing semicolon.",
            "severity": 1,
            "ruleId": "semi"
          }],
          "filePath": "/workspaces/oixbdso3/submission/test/totalObjectKeys.js"
        }],
        "status": "Failed"
      }
    },
    "build": {
      "summary": "",
      "errors": "",
      "output": "building project in /workspaces/oixbdso3/submissionyarn install v0.24.5info No lockfile found.[1/4] Resolving packages...[2/4] Fetching packages...[3/4] Linking dependencies...[4/4] Building fresh packages...success Saved lockfile.Done in 7.87s.",
      "status": "Completed"
    }
  },
  "evalScores": {
    "sections": [{
      "name": "cadetTests",
      "status": "Failed",
      "total": 18,
      "passes": 12,
      "failed": 1,
      "score": 66
    }, {
      "name": "commanderTests",
      "status": "Failed",
      "total": 18,
      "passes": 12,
      "failed": 1,
      "score": 66
    }, {
      "name": "eslint",
      "status": "Failed",
      "total": 133,
      "passes": 115,
      "failed": 18,
      "score": 86
    }, {
      "name": "htmlhint",
      "status": "Failed",
      "total": 28,
      "passes": 22,
      "failed": 6,
      "score": 78
    }, {
      "name": "smells",
      "status": "Failed",
      "total": 133,
      "passes": 115,
      "failed": 18,
      "score": 86
    }, {
      "name": "phantomTests",
      "status": "Completed",
      "total": 4,
      "passes": 4,
      "failed": 0,
      "score": 100
    }],
    "finalScore": 80
  },
  "payload": {
    "solutionRepoUrl": "ssh://git@gitlab-dev.stackroute.in:2222/assignments/ChicagoCrime-datamunging-wk4.git"
  },
  "status": "EvalCompleted",
  "submittedOn": "2017-06-28T04:00:33.306Z"
}
*/