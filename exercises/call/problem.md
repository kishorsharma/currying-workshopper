## Good going!!

Wow!! you have just created a very basic curry function. Isn't it amazing how simple it is. However delaying invocation for only second call will not gives advantage.
To dive deep into this we first need to understand few function call such as:

* call
* apply

This exercise will focus on call.

## Task
Write function which will invoked a method passed as argument in reference of object argument pass.

Suppose we have a method:

var update = function(name, age, tShirtSize){
    this.name = name;
    this.age = age;
    this.tShirtSize = tShirtSize;
};

and a person object:

var person = {name: 'Kishor', 28, 'L' };

you need to provide implimentation of method:

var caller = function (person, update, 'Sharma', 29, 'XL') {
  // your code here
};

console.log(person) // => person.name = Sharma, person.age = 29 and person.tShirtSize = XL

----------------------------------------------------------------------
## HINTS

The call() method is inherited from Function.prototype. It calls a function with a given 'this' value and arguments provided individually.

To know more about concept used follow:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/call


When you are done, you must run:
```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
## Boilerplate
var caller = function (person, update, nameArg, ageArg, tShirtSizeArg) {
  // your code here
};
module.export = caller;
