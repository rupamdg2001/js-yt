// Data Types in JavaScript

// 1. Primitive Data Types
// String , Number, Boolean, Null, Undefined, Symbol , BigInt


const id = Symbol('123');
const aid = Symbol('123');

// console.log(id === aid); // false

const bigNum = 235346456456532345n;
// console.log(typeof bigNum); // 235346456456532345n



// reference (non-primitive) data types
// Object, Array, Function


//arrays
const arr = ["ruby", "python", "java"];

// objects
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// functions
const myfun = function() {
    // console.log("Hello World");
};

// console.log(typeof arr); // object
// console.log(typeof person); // object
// console.log(typeof myfun); // function
// console.log(typeof id); // symbol




//---------------------------MEMORY---------------------------//

//STACK MEMORY (primitive data types are stored in stack memory)

// HEAP MEMORY (non-primitive data types are stored in heap memory)

let myvideo = "JSTutorial"; // stored in stack memory

let myvideo2 = myvideo; // stored in stack memory

myvideo2 = "PythonTutorial"; // stored in stack memory

console.log(myvideo); // JSTutorial
console.log(myvideo2); // JSTutorial

let user1 = {
    name: "John",
    age: "30"
};

let user2 = user1; // stored in heap memory

user2.name = "Peter"; // stored in heap memory

console.log(user1.name); // Peter
console.log(user2.name); // Peter
