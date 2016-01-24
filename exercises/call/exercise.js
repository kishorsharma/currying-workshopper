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
    var update = function(name, age, tShirtSize){
        this.name = name;
        this.age = age;
        this.tShirtSize = tShirtSize;
    };
    var person = {name: "Brij", age: 28, tShirtSize: 'L'};
    var solutionResult = this.solutionModule(person, update, 'Kishor', 29, 'XL');
    var submissionResult = this.submissionModule(person, update, 'Kishor', 29, 'XL');
    if (person.name !== 'Kishor' || person.age !== 29 || person.tShirtSize !== 'XL') {
        exercise.emit('fail', 'Expected result: ' + solutionResult + ' \nActual result: '+ submissionResult);
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

module.exports = exercise
