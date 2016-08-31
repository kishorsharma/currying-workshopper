## Task

Write a unary function that takes single input and returns another unary
function. On calling the second function, it should return the sum of the two
inputs.

----------------------------------------------------------------------
## HINTS

So far so good!! You are doing great. Now it is time to explore some important
concepts essential for currying:

* Lexical Scope
* Closures

The solution to this puzzle is creating a closure. A closure is a special kind
of object that combines two things: a function, and the environment in which
that function was created. The environment consists of any local variables that
were in scope at the time that the closure was created.

To learn more about these concepts, read:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

When you are done, you must run:
```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the
lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
