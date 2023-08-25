/*
24.More Conditional Tests: You don’t have to limit the number of tests you create to 10.
 If you want to try more comparisons, write more tests.
  Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

let name1: string = "John";
let name2: string = "jane";
let age1: number = 20;
let age2: number = 30;
let myArray: number[] = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Is name1 equal to 'John'? I predict True.");
console.log(name1 === "John"); // ouput : true

console.log("Is name2 not equal to 'John'? I predict True.");
console.log(name2 !== "John");  // output : true

console.log("Is name1 not equal to 'john'? I predict True.");
console.log(name1 !== "john"); // output : true

console.log("Is name2 equal to 'jane'? I predict True.");
console.log(name2 === "jane"); // output : true

console.log("Is name1 equal to name2? I predict False.");
console.log(name1 === name2); // output : false

// Tests using the lower case function
console.log("Is name1 in lower case? I predict False.");
console.log(name1.toLowerCase() === name1); // output : false

console.log("Is name2 in lower case? I predict True.");
console.log(name2.toLowerCase() === name2); // output : true

// Numerical tests
console.log("Is age1 greater than age2? I predict False.");
console.log(age1 > age2);  //20 > 30 , output: false

console.log("Is age1 less than or equal to age2? I predict True.");
console.log(age1 <= age2); // 20 <=30  , output : true

console.log("Is age1 equal to 20? I predict True.");
console.log(age1 === 20); // 20 === 20 , output : true

console.log("Is age2 not equal to 30? I predict False.");
console.log(age2 !== 30); // 30 !==30 , output : false

// Tests using "and" and "or" operators
console.log("Is age1 greater than 18 and less than 25? I predict True.");
console.log(age1 > 18 && age1 < 25); // age1=20 , output :true

console.log("Is age2 less than or equal to 30 or greater than 40? I predict True.");
console.log(age2 <= 30 || age2 > 40); // age2=30 , output :true

// Test whether an item is in an array
console.log("Is the number 3 in the array? I predict True.");
console.log(myArray.includes(3)); // [1, 2, 3, 4, 5], output : true

// Test whether an item is not in an array
 console.log("Is the number 6 not in the array? I predict True.");
 console.log(!myArray.includes(6)); // [1, 2, 3, 4, 5], output : true

/**
 * *********** output: *******************
 * Is name1 equal to 'John'? I predict True.
true
Is name2 not equal to 'John'? I predict True.      
true
Is name1 not equal to 'john'? I predict True.      
true
Is name2 equal to 'jane'? I predict True.
true
Is name1 equal to name2? I predict False.
false
Is name1 in lower case? I predict False.
false
Is name2 in lower case? I predict True.
true
Is age1 greater than age2? I predict False.        
false
Is age1 less than or equal to age2? I predict True.
true
Is age1 equal to 20? I predict True.
true
Is age2 not equal to 30? I predict False.
false
Is age1 greater than 18 and less than 25? I predict True.
true
Is age2 less than or equal to 30 or greater than 40? I predict True.
true
Is the number 3 in the array? I predict True.
true
Is the number 6 not in the array? I predict True.
true
 * 
 * 
 */