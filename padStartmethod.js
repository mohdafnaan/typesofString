// padStarted / padEnd : it is used to add a symboil for given number (counting no of string elements)  of times in the starting or ending




let n1 = "hello"
console.log(n1.padStart(10,"*"));
console.log(n1.padEnd(15,"*"));


let str = "afnaan";
let a =str.padStart(10, "*");
let b= str.padEnd(10, "*");
let c = a.concat(b);
console.log(c.replace("afnaanafnaan","afnaan")); // *****afnaan*****