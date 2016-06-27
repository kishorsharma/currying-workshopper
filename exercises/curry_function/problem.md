## Recap
Great, If you reached so far you have learned following:

* What are Clousure? What are their advantages and how to use them?
* Function call and apply.
* And also made a basic curry function to add.

What next?

##Task

Now using knowledge we got we will create a function which will take another function as argument (any function which we want to be curried) and convert it into a curried function.
For example:
Let suppose we have a function:

`function abc (a,b,c){
}
`

I need to write a function let say `curryFunc` with which when we call:

```
var curriedAbc = curryFunc(abc);
currienAbc(a)(b)(c); // Now we can call original function like this...
currienAbc(a,b)(c); //or this
currienAbc(a)b,c); //or this
currienAbc(a,b,c); //or this
```

----------------------------------------------------------------------
## HINTS

Implementation is taken from Article written by Alex Cruikshank:
http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/

I will request to visit the article after giving some effort to figure out a solution or at least spend a decent time for solution.

I want to thank Mr. Alex for such a good article.

When you are done, you must run:
```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
