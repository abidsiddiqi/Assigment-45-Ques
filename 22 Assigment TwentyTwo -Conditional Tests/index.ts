
/*
Conditional Tests: Write a series of conditional tests. Print a statement describing 
each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let age: number = 18;
let Name: string = "Ali";
let isStudent: boolean = true;
let favoriteColor: string = "blue";
let car: string = "honda";

console.log("Is age greater than or equal to 18? I predict True.");
console.log(age >= 18);

console.log("Is name equal to 'Ali'? I predict True.");
console.log(Name === "Ali");

console.log("Is isStudent equal to true? I predict True.");
console.log(isStudent === true);

console.log("Is favoriteColor equal to 'blue'? I predict True.");
console.log(favoriteColor === "blue");

console.log("Is car not equal to 'toyota'? I predict True.");
console.log(car !== "toyota");

console.log("Is age less than 18? I predict False.");
console.log(age < 18);

console.log("Is name not equal to 'John'? I predict False.");
console.log(Name !== "Ali");

console.log("Is isStudent equal to false? I predict False.");
console.log(isStudent !== true);

console.log("Is favoriteColor equal to 'red'? I predict False.");
console.log(favoriteColor === "red");

console.log("Is car equal to 'honda'? I predict False.");
console.log(car === "ford");
