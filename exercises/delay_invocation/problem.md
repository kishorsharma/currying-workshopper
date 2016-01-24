
Write a unary function which takes single input and return another unary function. On calling second Function
it should result in addition of two inputs.

----------------------------------------------------------------------
## HINTS

So far so good!! You are doing great. Now time to explore some important concept essential for currying:
* Lexical Scope
* closure

The solution to this puzzle is creating a closure. A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created.

To know more about concept used follow:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

When you are done, you must run:
```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
