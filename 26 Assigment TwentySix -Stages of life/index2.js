"use strict";
/*
  28.StAges of Life: Write an if-else chain that determines a person’s stAge of life. Set a value for the variable Age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.

*/
let Age = 2;
if (Age >= 2 && Age < 4) {
    //   if at least 2 years old but less than 4, print a messAge that the person is a toddler.
    console.log('This person is a toddler');
}
Age = 4;
if (Age >= 4 && Age < 13) {
    //If the person is at least 4 years old but less than 13, print a messAge that the person is a kid.
    console.log('This person is a kid');
}
Age = 19;
if (Age >= 13 && Age < 20) {
    //• If the person is at least 13 years old but less than 20, print a messAge that the person is a teenAger.
    console.log('This person is a teenAger');
}
Age = 64;
if (Age >= 20 && Age < 65) {
    //•If the person is at least 20 years old but less than 65, print a messAge that the person is an adult.
    console.log('This person is a adult');
}
Age = 66;
if (Age >= 65) {
    //If the person is Age 65 or older, print a messAge that the person is an elder.
    console.log('This person is an elder');
}
/*
 * *********** output: *******************
This person is a toddler
This person is a kid
This person is a teenAger
This person is a adult
This person is an elder
 */ 
