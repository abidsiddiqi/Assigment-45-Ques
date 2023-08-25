 /*
44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides, 
 and it should print a summary of the sandwich that is being ordered. Call the function three times, 
 using a different number of arguments each time.
 
 /**Note: nothing */

function orderSandwich(...items: string[]): void {
  console.log(`You ordered a sandwich with ${items.join(', ')}.`);
  }

orderSandwich('turkey', 'lettuce', 'tomato', 'mayo');
orderSandwich('beef', 'cheese');
orderSandwich('chicken', 'chicken spread');


/********************** output: *********************

You ordered a sandwich with turkey, lettuce, tomato, mayo.
You ordered a sandwich with beef, cheese.
You ordered a sandwich with chicken, chicken spread.

*****************************************************/ 
