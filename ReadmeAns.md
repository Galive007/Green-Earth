1) What is the difference between var, let, and const?
    
1. var

Scope = Function-scoped
(It ignores block {} like if, for, while)

Hoisting = Moves to top but initialized as undefined

Redeclaration = Allowed  

2. let

Scope = Block-scoped {}

Hoisting = Hoisted but in Temporal Dead Zone (TDZ) until declared

Redeclaration =  Not allowed in same scope

Reassignment =  Allowed

3. const

Scope = Block-scoped {} (same as let)

Hoisting = Also in TDZ until declared

Redeclaration =  Not allowed in same scope

Reassignment =  Not allowed (value fixed)
2) What is the difference between map(), forEach(), and filter()? 

1. forEach()

Used for looping through an array (side effects).

Returns: Nothing (undefined)

Mainly used when you just want to do something with each element.

const nums = [1, 2, 3, 4];

nums.forEach(num => {
  console.log(num * 2); // Just prints
});

console.log(nums); // [1, 2, 3, 4] (unchanged)

2. map()

Creates a new array by transforming each element.

Returns: New array (same length)

Does not change the original array.

const nums = [1, 2, 3, 4];

const doubled = nums.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]
console.log(nums);    // [1, 2, 3, 4]


3. filter()
Creates a new array with elements that pass a condition.

Returns: New array

Used for selecting items.

const nums = [1, 2, 3, 4, 5];

const evens = nums.filter(num => num % 2 === 0);

console.log(evens); // [2, 4]
console.log(nums);  // [1, 2, 3, 4, 5]


3) What are arrow functions in ES6?

    const square = x => x * x;

4) How does destructuring assignment work in ES6?

1. Array Destructuring
const [first, , third] = [1, 2, 3];
console.log(first, third); 

2. Object Destructuring
const person = { name: "Alice", age: 25, country: "BD" };

const { name: fullName, age: years } = person;
console.log(fullName, years);

5) Explain template literals in ES6. How are they different from string concatenation?

Template literals are a feature in JavaScript that allows for the creation of strings with embedded expressions and multi-line capabilities. They are enclosed by backticks (``) instead of single or double quotes. 