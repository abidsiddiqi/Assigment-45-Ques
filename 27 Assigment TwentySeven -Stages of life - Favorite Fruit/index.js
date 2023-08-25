"use strict";
/*
  29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas!

*/
/*Note:*/
/* • Make a array of your three favorite fruits and call it favorite_fruits. */
const favorite_fruits = ['orange', 'mango', 'peach', 'plum'];
findFaveriteFruit(favorite_fruits, 'Apple');
findFaveriteFruit(favorite_fruits, 'Peach');
findFaveriteFruit(favorite_fruits, 'Water Millan');
findFaveriteFruit(favorite_fruits, 'mango');
findFaveriteFruit(favorite_fruits, 'Orange');
function findFaveriteFruit(favFruits, IsFavFruit) {
    if (favFruits.includes(IsFavFruit.toLowerCase())) {
        console.log(`You really like ${IsFavFruit}!`);
    }
    else {
        console.log(`You don't like ${IsFavFruit}!`);
    }
}
/*
 * *********** output: *******************
You really like Peach!
You don't like Water Millan!
You really like mango!
You really like Orange!
 */ 
