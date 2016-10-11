# currying-workshopper

### Teaching currying features of Javascript.

#### No libraries required (i.e. no underscore), Pure JavaScript.

<a href="https://nodei.co/npm/currying-workshopper/"><img src="https://nodei.co/npm/currying-workshopper.png?downloads=true&downloadRank=true&stars=true">
  <br /><img src="https://nodei.co/npm-dl/currying-workshopper.png?months=12">
</a>

## Why Currying

The goal of this workshop is to learn concept and create a function to apply curry in JavaScript.

Currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument.
The number of arguments or operands that the function takes is also known as arity /ˈærᵻti/ of a function.

JavaScript has functional capabilities, but currying isn’t built in by default (at least not till the time of writing.. :)).

## Installation & Update

```
$ npm install -g currying-workshopper
```

Some npm installations require use of `sudo` in the above command. Recommend to instead [reinstall node/npm so you don't need sudo](https://gist.github.com/isaacs/579814).

## Usage Instructions

#### 1. Selecting a problem to work on

Once the workshop is installed, run `curry` to print a menu
where you can select a problem to work on.

```
$ curry
```

You are advised to complete them in order, as later problems will build on skills developed by solving previous problems.

#### 2. Writing your solution

Once you have selected a problem, the workshop will remember which problem you are working on.
Using your preferred editor, simply create a file to write your solution in.

#### 3. Testing your solution

Use the workshop's `run` command to point the workshop at your solution file. Your solution will loaded
and passed the problem input. This usually won't perform any validation, it will only show the program output.

```
$ curry run mysolution.js
```

#### 4. Verifying your solution

Your solution will be verified against the output of the 'official' solution.
If all of the output matches, then you have successfully solved the problem!

```
$ curry verify mysolution.js
```

## Stuck?

Feedback and criticism is welcome, please log your troubles in [issues](https://github.com/kishorsharma/currying-workshopper/issues).

Full curriculum reviews [like this one](https://github.com/kishorsharma/currying-workshopper/issues/1) are incredibly helpful. More feedback like this please!

We're looking for more practical problems, so if you come across a problem in your day-to-day work which was solved simply and elegantly with currying techniques, please help us create an exercise out of it.

## Thanks rvagg

This tutorial was built using rvagg's [workshopper](https://github.com/rvagg/workshopper) framework.

## License

MIT
