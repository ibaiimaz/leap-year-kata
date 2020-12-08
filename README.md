# Leap Year Kata

## INSTRUCTIONS

 Write a function that returns true or false depending on whether its input integer is a leap year or not.

### All the following rules must be satisfied:

A year is a leap year if:

- Divisible by 4

- Not divisible by 100

- Divisible by 100 but also by 400

### Examples:

> 2001 is a typical common year (not divisible by 4)  
1996 is a typical leap year (divisible by 4)  
1900 is an atypical common year (although divisible by 4, is divisible by 100)  
2000 is an atypical leap year (although divisible by 100, is also divisible by 400)

<br>
<br>

## Running the proyect

### Installation

Go to the root directory (where the `package.json` is located) and run:

```bash
npm install
```

### Running tests

Run the tests once:

```bash
npm test
```

Run the test and re-run them once a file changes:

```bash
npm run tdd
```

Run the test with code coverage:

```bash
npm run coverage
```

### What's included

* Mocha to run tests
* [Sinon JS](http://sinonjs.org/) for all stub, spy and mocking needs
* [Assertions using Chai]((http://chaijs.com/api/bdd)), extended with the
  [`sinon-chai` plugin](https://github.com/domenic/sinon-chai).
  * The Expect style is used by default,
  you can change to use `Should` instead, in `test/common.js`,