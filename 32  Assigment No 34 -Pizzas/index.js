"use strict";
/*
 34.Pizzas: Think of at least three kinds of your favorite pizza.
 Store these pizza names in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
 The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!

*/
/**Note: nothing */
// Define the pizza array
const pizzas = ['Cheese', 'Meat', 'Chicken BBQ ', 'Chicken Fajita'];
// Loop through the array and print each pizza name and a sentence about it
pizzas.forEach(pizza => {
    console.log(`I like ${pizza} pizza.`);
});
// Print a sentence about how much you like pizza
console.log("\nI really love pizza!");
/*
 * *********** output: *******************
1st
2nd
3rd
4th
5th
6th
7th
8th
9th

 */ 
