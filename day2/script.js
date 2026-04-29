// learning variables and data types

//* let - variable that change
let name = "Kyle";
console.log(name, typeof name);

//* const - value cannot be changed after initialization
const birthYear = 2003;
console.log(birthYear, typeof birthYear);

//! var - avoid unless maintaining old code.
var state = "South Australia";
console.log(state, typeof state);

// data types
let string1 = "hello"; // string
let number1 = 42; // number or integer
let boolean1 = true; // boolean
let nullValue = null; // null
let undefinedValue; // undefined
let symbol1 = Symbol("symbol"); // symbol
let bigint1 = 9007199254740991n; // Big Int

console.log(
  string1,
  number1,
  boolean1,
  nullValue,
  undefinedValue,
  symbol1,
  bigint1,
);
