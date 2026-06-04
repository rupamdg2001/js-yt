"use strict"; //treate all js code as modern js code

// alert("hello world") // we can not use alert in node js environment, it is only for browser environment
console.log("3+3");
console.log("rupam");
// code readability should be high

let name = "rupam";
let age = 22;
let isapproved = true;
let firstname = undefined;
let selectedcolor = null;

// number => 2 to power 53
//bigint => 2 to power 1024
//string => ""
//boolean => true or false
//null => standalone value
//undefined => standalone value
//symbol => unique value(mainly use in react js)

//object => key value pair

console.log(typeof null);
console.log(typeof undefined);// null and undefined are two different data types in js, but typeof null returns object, it is a bug in js, but it is not fixed because it is a legacy code, if we fix it then it will break the existing code which is using typeof null as object, so it is not fixed and it will remain as it is.

console.log(typeof name);
console.log(typeof age);
console.log(typeof isapproved);
console.log(typeof firstname);
console.log(typeof selectedcolor);


