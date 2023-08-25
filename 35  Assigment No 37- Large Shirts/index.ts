 /*
 36. Large Shirts: Modify the make_shirt() function so that shirts are large 
 by default with a message that reads I love TypeScript. 
 Make a large shirt and a medium shirt with the default

*/
/**Note: nothing */
let shirtSize:string='Medium';
let msg:string='Hello world.';

make_shirt(); // no argument passed so default message will be print.
make_shirt(shirtSize,msg);


function make_shirt(tShirtSize:string='Large' , msg:String='I love TypeScript.') // default size and message if no argument passed.
{
    console.log(`Size of Tshirt is '${tShirtSize}' and print Message '${msg}' on it. `);
}


/********************** output: *********************

Size of Tshirt is 'Large' and print Message 'I love TypeScript.' on it. 
Size of Tshirt is 'Medium' and print Message 'Hello world.' on it. 

*****************************************************/ 
