## Recap

Great, if you've made it this far you have learned following:

* Closures, their advantages and how to use them.
* Function call and apply.
* How to make a basic curry function that adds.

What's next?

## Task

Now, using this knowledge, we will create a function that will take another
function as argument (any function that we want to be curried) and convert it
into a curried function.

For example, suppose we have a function:

```js
function abc(a,b,c) {
}
```

You need to write a function that curries that function, so it can be used as
follows:

```js
var curriedAbc = curryFunc(abc);
curriedAbc(a)(b)(c); // Now we can call original function like this...
curriedAbc(a,b)(c); //or this
curriedAbc(a)(b,c); //or this
curriedAbc(a,b,c); //or this
```

----------------------------------------------------------------------
## HINTS

Implementation is taken from an article written by Alex Cruikshank:
http://blog.carbonfive.com/2015/01/14/gettin-freaky-functional-wcurried-javascript/

I suggest you wait to read the article until you put some significant effort
into figuring out a solution.

Special thanks to Mr. Cruikshank for such a good article.

When you are done, you must run:
```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the
lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
