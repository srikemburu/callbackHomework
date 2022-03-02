
console.log("\n===Callback function example===\n")
function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function compute(a, b, op) {
    return op(a, b);
  }
  
  let result1 = compute(10, 5, add);
  let result2 = compute(10, 5, subtract);
  console.log(result1)
  console.log(result2)
 // console.log("-----------------------------")

console.log("\n===Using Callbacks with Array Iterator Methods===\n")
const flowers = ['rose', 'orchid', 'daisy'];

flowers.forEach(function(flower, idx) {
  console.log(`${idx + 1}) ${flower}`);
});
//-----------------------------

//Synchronous code
const colors = ['red', 'green', 'blue'];
console.log("\n===Synchronous Code Execution===\n")
console.log('BEFORE the forEach...');

colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
});

console.log('AFTER the forEach...');

//console.log("-----------------------------")

console.log("\n===Using Callbacks with Asynchronous Functions===\n")

console.log('Code before the asynchronous function call');

setTimeout(function() {
  console.log('setTimeout code - Asynchronous functions')
});

console.log('Code after the asynchronous function call');

//------------------------------------------------
console.log("\n===A Simulated Asynchronous Example===\n")

// Synchronous function
function getFriends() {
  return ['Fred', 'Barney'];
}

// Get the friends
let friends = getFriends();

// The friends array is ready to work with because getFriends
// is synchronous and returned the array of friends we wanted
friends.forEach(function(friend) {
  console.log(friend);
});

//----------------------------

console.log("\n===simulate a long-running asynchronous function===\n")
console.log("\n===Running the below code will generate an error because the friends variable will not be an array of data before we call forEach on it.===\n")

// asynchronous function
// function getFriendsAsync() {
//   // Using setTimeout to make getFriendsAsync
//   // behave like a long-running database operation
//   setTimeout(function() {
//     return ['Fred', 'Barney'];
//   }, 0);
// }

// // Will friends have an array after this line of code runs?
// let friends2 = getFriendsAsync();

// // The following will cause an error because
// // friends is not an array yet
// friends2.forEach(function(friend) {
//   console.log(friend);
// })

console.log("\n===Callbacks to the Rescue===\n")

// Refactor to accept a callback function
// to be called when the data is ready
function getFriendsAsync(cb) {
  setTimeout(function() {
    // pass the results to the provided callback
    cb(['Fred', 'Barney']);
  }, 0);
}

// Execute and provide it with an anonymous callback function
// to be called by the getFriendsAsync function
getFriendsAsync(function(friends) {
  friends.forEach(function(friend) {
    console.log(friend);
  });
});

console.log("\n===Intro to Arrow Functions===\n")

// regular function
let squares = [1, 2, 3].map(function (x) { return x * x });
console.log("Regular function: " + squares)
// arrow function
let squares2 = [1, 2, 3].map(x => x * x);
console.log("Arrow function: " + squares2)

const getGrade = score => {
  if (score === 100) return 'A+';
  score = Math.floor(score / 10);
  console.log("Score = " + score);
  return ['F', 'F', 'F', 'F', 'F', 'F', 'D', 'C', 'B', 'A'][score];
};

console.log("Grade = " + getGrade(99));

const logThis = () => { console.log(this) };
const logThis2 = () => console.log(this);

const add8 = (x, y) => { return x + y };

// Ideal single-statement arrow function
const add11 = (x, y) => x + y;
console.log("add11 = " + add11)

// Returns undefined (blocks are like reg functions)
const add12 = (x, y) => { x + y };
console.log("add12 = " + add12)

// Syntax error, must be an expression
//const add13 = (x, y) => return x + y;

console.log("\n===To implicitly return a JS object, wrap it in parentheses to avoid the curly braces of the object being interpreted as a statement block===\n")

let todos = ['Buy milk', 'Mow lawn'];

// Below line of code won't work - looks like a statement block
// let todoObjects = todos.map(todo => {todo: todo, done: false});

// Wrap the implicit returned object in parens
let todoObjects = todos.map(todo => ({todo: todo, done: false}));

console.log("\n===All arrow functions are expressions. There's no such thing as an arrow function definition/declaration===\n")

// Nope, syntax error (no declarations for arrow functions)
//add(x, y) => x + y;

// This is what you want - a function expression
const add21 = (x, y) => x + y;