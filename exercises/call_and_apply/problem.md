## Good going!!

Simple currying is good. However delaying invocation for only the second call is
not extremely advantageous. Also, if all the arguments are already provided,
then delaying invocation for second or subsequent calls will be unnecessary
overhead. We want to call our function as:

```js
sum(3,4); // 7
sum(3)(4); // 7
```

To dive deep into this we first need to understand the following functions:

* call
* apply

For this we have to create two methods, caller (for call) and applier (for
apply).

## Task

Write a function which will accept a method, an object, and additional
parameters. Then invoke the method on the object, passing the parameters.

Suppose we have a method:

```js
var update = function(name, age, tShirtSize) {
  this.name = name;
  this.age = age;
  this.tShirtSize = tShirtSize;
};
```

and a person object:

```js
var person = { name: 'Kishor', age: 28, tShirtSize: 'L' };
```

You need to provide the implementation for the method:

```js
var caller = function (person,
                       update,
                       name,         //'Sharma'
                       age,          // 29
                       tShirtSize) { // 'XL'
  // your code here
};
```

```sh
console.log(person) // => person.name = Sharma, person.age = 29 and person.tShirtSize = XL
```

----------------------------------------------------------------------
## HINTS

The call() method is inherited from Function.prototype. It calls a function with
a given 'this' value and arguments provided individually. The apply() method is
similar to call(), except the arguments are provided as an array.

To know more about call:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/call

To know more about apply:
https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply


When you are done, you must run:
```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the
lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
## Boilerplate

```js
var callAndApply = {
  caller: function (object, method, nameArg, ageArg, tShirtSizeArg) {
    //your code
  },
  applier: function (object, method, argumentsArr) {
    // your code
  }
};
module.exports = callAndApply;
```
