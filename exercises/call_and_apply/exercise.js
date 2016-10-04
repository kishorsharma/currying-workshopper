var exercise      = require('workshopper-exercise')()
  , filecheck     = require('workshopper-exercise/filecheck')
  , execute       = require('workshopper-exercise/execute')
  , comparestdout = require('workshopper-exercise/comparestdout')
  , path          = require('path')
  , fs = require('fs')
  , util = require('util')


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
    var update = function(name, age, tShirtSize){
        this.name = name;
        this.age = age;
        this.tShirtSize = tShirtSize;
    };

    var personForSolutionCall = {name: "Brij", age: 28, tShirtSize: 'L'};
    var personForSubmissionCall = {name: "Brij", age: 28, tShirtSize: 'L'};
    
    // invoke `update` and mutate the test subjects
    this.solutionModule.caller(personForSolutionCall, update, 'Kishor', 29, 'XL');
    this.submissionModule.caller(personForSubmissionCall, update, 'Kishor', 29, 'XL');

    if (personForSubmissionCall.name !== personForSolutionCall.name || personForSubmissionCall.age !== personForSolutionCall.age || personForSubmissionCall.tShirtSize !== personForSolutionCall.tShirtSize) {
        exercise.emit('fail', 'Call method result in error. \nExpected result: ' + showObjectInLog(personForSolutionCall) + ' \nActual result: '+ showObjectInLog(personForSubmissionCall));
        pass = false;
    }

    var personForSolutionApply = {name: "Kishor", age: 24, tShirtSize: 'S'};
    var personForSubmissionApply = {name: "Kishor", age: 24, tShirtSize: 'S'};
    
    // invoke `update` and mutate the test subjects
    this.solutionModule.applier(personForSolutionApply, update, ['Brij', 26, 'M']);
    this.submissionModule.applier(personForSubmissionApply, update, ['Brij', 26, 'M']);

    if (personForSubmissionApply.name !== personForSolutionApply.name || personForSubmissionApply.age !== personForSolutionApply.age || personForSubmissionApply.tShirtSize !== personForSolutionApply.tShirtSize) {
        exercise.emit('fail', 'Apply method result in error. \nExpected result: ' + showObjectInLog(personForSolutionApply) + ' \nActual result: '+ showObjectInLog(personForSubmissionApply));
        pass = false;
    }
    process.nextTick(function () {
        callback(null, pass)
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

// Print out an object's key value pairs when that object is used in `console.log`.
// Normally, would output: `[object Object]`.
function showObjectInLog(obj) {
    return util.inspect(obj);
}

module.exports = exercise
