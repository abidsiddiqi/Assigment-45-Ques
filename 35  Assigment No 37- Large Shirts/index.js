"use strict";
/*
36. Large Shirts: Modify the make_shirt() function so that shirts are large
by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default

*/
/**Note: nothing */
let shirtSize = 'Medium';
let msg = 'Hello world.';
make_shirt(); // no argument passed so default message will be print.
make_shirt(shirtSize, msg);
function make_shirt(tShirtSize = 'Large', msg = 'I love TypeScript.') {
    console.log(`Size of Tshirt is '${tShirtSize}' and print Message '${msg}' on it. `);
}
/********************** output: *********************

Size of Tshirt is 'Medium' and print Message 'Hello World!' on it.

*****************************************************/
