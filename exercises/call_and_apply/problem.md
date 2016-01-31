## Good going!!

Simple currying is good. However delaying invocation for only second call will not gives advantage. Also what if all argument are already with us in that case delaying invocation for second or subsequent call will be overhead. we want to call our function as:

sum(3,4); // 7
sum (3)(4); // 7

To dive deep into this we first need to understand few function call such as:

* call
* apply

For this we have to create two method caller (for call) and applier (for apply).

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
var callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    //your code
  },
  applier: function (object, method, argumentsArr) {
    // your code
  }
};
module.exports = callAndApply;
