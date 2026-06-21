const name = "rupam-das";
const repo = 25;

console.log(`my name is ${name} and I have ${repo} repositories on github`);

// another way to declare a string

const gameName = new String("BGMI-pubg");

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());


// console.log(gameName.charAt(2));// character at index 2 // know the character at a particular position
// console.log(gameName.indexOf("M")); //position of M in the string // know the index of a particular character


const newString =  gameName.substring(0,6); // BGMI => BGMI // know the substring of a string
console.log(newString);

const newString2 = gameName.slice(-4,6); // BGMI => BGMI // know the substring of a string
console.log(newString2);