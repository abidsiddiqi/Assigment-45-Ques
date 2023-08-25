"use strict";
/*
 35.Animals: Think of at least three different animals that have a common characteristic.
 Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
 • Modify your program to print a statement about each animal, such as A dog would make a great pet.
 • Add a line at the end of your program stating what these animals have in common.
 You could print a sentence such as Any of these animals would make a great pet!



*/
/**Note: nothing */
// Define the animal list
const animals = ['cat', 'dog', 'parrot'];
// Loop through the list and print each animal name and a statement about it
animals.forEach(animal => {
    console.log(`${animal}`);
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
});
// Print a statement about what these animals have in common
console.log("\nThese animals are commonly kept as pets.");
// Print a statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
/*
 * *********** output: *******************
cat
A cat would make a great pet.
dog
A dog would make a great pet.
parrot
A parrot would make a great pet.

These animals are commonly kept as pets.

Any of these animals would make a great pet!

 */ 
