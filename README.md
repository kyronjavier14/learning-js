# Learning JavaScript (learning-js)

Hello — I’m Kyle. This repository is a personal learning log where I track progress as I study and practice JavaScript.

## Table of Contents
- [About this repo](#about-this-repo)
- [Resources](#resources)
- [Learning goals](#learning-goals)
- [Progress tracking](#progress-tracking)
- [Week-by-week plan](#week-by-week-plan)
- [Next steps](#next-steps)

## About this repo

This repo is a hands-on journal for learning JavaScript. I'll use it to:
- Record short daily notes and small exercises
- Save code snippets and solutions to challenges
- Track concepts I’ve learned and areas to revisit

## Resources

I’ll rely on a few high-quality resources and tutorials while learning:
1. [Roadmap.sh - JavaScript](https://roadmap.sh/javascript) — a clear learning roadmap.
2. [FreeCodeCamp - Full JavaScript Course for Beginners](https://www.freecodecamp.org/news/full-javascript-course-for-beginners/) — beginner-friendly course material.
3. [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — authoritative reference and examples.

## Learning goals

My approach is consistency over speed: learn something small every day and practice it with a short exercise. Goals include mastering core language features, asynchronous patterns, DOM manipulation, and modern tooling.

## Progress tracking

- Daily updates: short notes or a small code example in `dayX/` files.
- Challenges: short exercises that reinforce each topic.
- Milestones: weekly summaries describing what I learned and what to revisit.

## Week-by-week plan

The following plan is a lightweight, 4-week starter curriculum (28 short lessons). Each day has a small objective and a short challenge.

### Week 1 — JavaScript Basics
Goal: Basic syntax, variables, and simple data types.

#### Day 1 — Introduction to JavaScript
- Understand where JavaScript runs (browser vs server).
- Create a simple HTML file and include a script:

```html
<!-- index.html -->
<script>
  console.log('Hello, world!');
</script>
```

- Challenge: Write a script that prints your name and the current year to the console.

#### Day 2 — Variables & data types
- Learn `let`, `const`, and `var`.
- Explore: string, number, boolean, null, undefined, symbol, bigint.
- Challenge: Create variables of different types and log their values and `typeof`.

#### Day 3 — Arithmetic & strings
- Operators: `+`, `-`, `*`, `/`, `%` and string concatenation.
- String methods: `.toUpperCase()`, `.toLowerCase()`, `.length`.
- Challenge: Convert your name to uppercase and display its length.

#### Day 4 — Comparison & conditionals
- `==` vs `===`, `!=`, `>`, `<`, `>=`, `<=`.
- `if` / `else if` / `else`.
- Challenge: Check if a number is even or odd.

#### Day 5 — Loops
- `for`, `while`, `do...while`.
- Challenge: FizzBuzz (1–100).

### Week 2 — Functions & arrays
Goal: Functions, parameters, arrays, and iteration.

#### Day 6 — Functions
- Define functions with `function` and return values.
- Challenge: Function that returns the sum of two numbers.

#### Day 7 — Parameters & defaults
- Function parameters, default values.
- Challenge: Rectangle area function with defaults (width = 5, height = 10).

#### Day 8 — Arrays
- Create and modify arrays. Methods: `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.slice()`, `.splice()`.
- Challenge: Manage a favorites array (add/remove and log result).

#### Day 9 — Iterating arrays
- `for`, `forEach`, `map`.
- Challenge: Multiply numbers 1–10 by 2.

#### Day 10 — Advanced array methods
- `.filter()`, `.reduce()`, `.find()`, `.sort()`.
- Challenge: Filter numbers greater than 10.

### Week 3 — Objects, scope & closures
Goal: Objects, method syntax, scope rules, and closures.

#### Day 11 — Objects
- Create objects and access properties (dot vs bracket notation).
- Challenge: Create a `car` object and log its properties.

#### Day 12 — Object methods
- Add methods to objects.
- Challenge: Add a method that computes the car's age.

#### Day 13 — Scope & hoisting
- Global vs local scope. Hoisting differences between `var`, `let`, `const`.
- Challenge: Test variable access in different scopes.

#### Day 14 — Closures
- Functions that remember their enclosing scope.
- Challenge: Return a function that uses outer-scope values.

#### Day 15 — ES6 features
- Arrow functions, template literals, destructuring (intro).
- Challenge: Rewrite a function using arrow syntax and template literals.

### Week 4 — Asynchronous & advanced features
Goal: Callbacks, Promises, async/await, error handling, and classes.

#### Day 16 — Callbacks
- Learn basic callback patterns and timing with `setTimeout`.
- Challenge: Delay a log by 2 seconds.

#### Day 17 — Promises
- `.then()` / `.catch()` usage.
- Challenge: Promise that resolves after 3 seconds.

#### Day 18 — Async / Await
- Cleaner asynchronous control flow.
- Challenge: Convert previous promise example to `async`/`await`.

#### Day 19 — Error handling
- `try` / `catch`.
- Challenge: Handle division by zero safely.

#### Day 20 — Classes
- ES6 classes, constructors, and methods.
- Challenge: Create a `Person` class with an introduction method.

### Week 5+ — Next topics to explore
- DOM manipulation and events
- ES6 modules
- Fetch and working with APIs
- Local storage
- Advanced array methods (`flatMap`, `some`, `every`)
- Regular expressions
- Build tooling: Webpack, Babel
- Design patterns and architecture

## Next steps
- Keep daily notes in `day1/`, `day2/`, ... with short code examples.
- Add a small README badge or a `TODO.md` if this grows into multiple study tracks.

## License & notes
- This is a personal learning repository. Use the content for study and adapt it for your own learning path.
