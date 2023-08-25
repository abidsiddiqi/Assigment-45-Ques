"use strict";
/*
43. Unchanged Magicians: Start with your work from Exercise 40.
Call the function make_great() with a copy of the array of magicians’ names.
Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to show that you have one array of the original names and one array
with the Great added to each magician’s name.

/**Note: nothing */
let magicianNames = ['Jhon', 'Alex', 'Elon'];
console.log(`\narray of the original Magician names\n`);
show_magicians(magicianNames);
let ModifymagicianNames = make_great(magicianNames); //new array returned and store it in a separate array. 
console.log(`\narray  with the Great added to each magician’s name.\n`);
show_magicians(ModifymagicianNames);
function make_great(magicians) {
    let ModifymagicianNames = [...magicians]; //copy of the array of magicians’ names.
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `Great ${magicians[i]}`;
    }
    return ModifymagicianNames; // return the new array 
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
/********************** output: *********************

array of the original Magician names

Jhon
Alex
Elon

array  with the Great added to each magician’s name.

Jhon
Alex
Elon

*****************************************************/
