"use strict";
/*
17.Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
const Guests = ['Imran Khan', 'Muhammad Javed', 'Kifayat'];
const Host = "Muhammad Abid Siddiqui";
// Printing the original guest list
console.log("Original guest list:");
Guests.forEach(Element => {
    console.log(Element);
});
// Updating the guest list
Guests[0] = 'Shahzad Sheikh';
// Printing the updated guest list
console.log("\nUpdated guest list:");
// Sending out new invitations
Guests.forEach(element => {
    console.log(`Dear ${element},\nI would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!\nSincerely,\n${Host}\n`);
});
// Informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");
// Adding new guests to the list
Guests.unshift('Abdullah Abid'); // Add to the beginning
Guests.splice(2, 0, 'Hassaan'); // Add to the middle, start from index=2 , delete 0 item , add Hassaan.
Guests.push('Saad'); // Add to the end
// Sending out new invitations
console.log("\nNew guest list:");
Guests.forEach(element => {
    console.log(`Dear ${element},\nI would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!\nSincerely,\n${Host}\n`);
});
//Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`I am inviting only two people for dinner.`);
// console.log(Guests);  //[  'Abdullah Abid',   'Shahzad Sheikh',    'Hassaan',    'Muhammad Javed',    'Kifayat',    'Saad'  ]
Guests.forEach(Element => {
    if (Guests.length === 2) {
        return; //break;
    }
    else {
        const removedGuest = Guests.pop();
        console.log(`Sorry ${removedGuest}, we won't be able to invite you to dinner`);
    }
});
Guests.forEach(Element => {
    console.log(`\n  ${Element} You're still invited\n Sincerely,\n${Host}\n`);
});
/**
output:

Original guest list:
Imran Khan
Muhammad Javed
Kifayat

Updated guest list:
Dear Shahzad Sheikh,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

Dear Muhammad Javed,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

Dear Kifayat,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

Good news! We found a bigger dinner table.

New guest list:
Dear Abdullah Abid,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

Dear Shahzad Sheikh,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

Dear Hassaan,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

Dear Muhammad Javed,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

Dear Kifayat,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

Dear Saad,
I would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!
Sincerely,
Muhammad Abid Siddiqui

 *
 */ 
