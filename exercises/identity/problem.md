## Task

Write a function that takes an argument and returns that argument.

----------------------------------------------------------------------
## HINTS

To make a Node.js program, create a new file with a `.js` extension and start
writing JavaScript! Execute your program by running it with the `node` command.

For example:

```sh
$ node program.js
```

Writing functions that are available to the outside world is different in Node.
You need to export your function as follows:

```js
var identity = function (args) {
  //your code
};
module.exports = identity;
```

Node modules are beyond the scope of this exercise. However, if you are
interested, there is great blog post on exporting Node modules:
http://www.sitepoint.com/understanding-module-exports-exports-node-js

When you are done, you must run:

```sh
$ {appname} verify program.js
```

to proceed. Your program will be tested, a report will be generated, and the
lesson will be marked 'completed' if you are successful.

----------------------------------------------------------------------
