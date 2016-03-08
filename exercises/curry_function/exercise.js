var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , path          = require('path')
  , fs = require('fs')


// checks that the submission file actually exists
exercise = filecheck(exercise)

// add setup.
exercise.addSetup(function (mode, callback) {

    this.solutionModule = require(getSolutionPath() + 'solution.js');
    this.submissionModule = require([process.cwd(), this.args[0]].join('/'));
    process.nextTick(callback);
});

// add a processor.
exercise.addProcessor(function (mode, callback) {
    var pass = true;
    var inputArr = [];
    for (var i =0; i < 5; i++ ) {
       inputArr.push(Math.floor(1 +  Math.random() * 100));
    }
    var addFunction = function (a,b,c,d) {
      return a+b+c+d;
    };
    var solutionResult = this.solutionModule(addFunction)(inputArr[0],inputArr[1])(inputArr[2])(inputArr[3]);
    var submissionResult = this.submissionModule(addFunction)(inputArr[0])(inputArr[1])(inputArr[2],inputArr[3]);
    if (solutionResult !== submissionResult) {
        exercise.emit('fail', 'Expected result: ' + solutionResult + ' \nActual result: '+ submissionResult);
        pass = false;
    }
    process.nextTick(function () {
        callback(null, pass);
    });
});

// Print out the suggested solution when the student passes. This is copied from
// workshopper-exercise/execute because the rest of execute is not relevant to
// the way this is tested.
exercise.getSolutionFiles = function (callback) {
    var solutionDir = getSolutionPath();

    fs.readdir(solutionDir, function (err, list) {
        if (err) {
            return callback(err);
        }

        list = list
            .filter(function (f) { return (/\.js$/).test(f) })
            .map(function (f) { return path.join(solutionDir, f)});

        callback(null, list);
    });
};

function getSolutionPath() {
    return path.join(exercise.dir, './solution/');
}

module.exports = exercise
