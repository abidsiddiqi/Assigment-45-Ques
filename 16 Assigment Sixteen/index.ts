/*
16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/ 

const Guests:string[] = ['Imran Khan', 'Muhammad Javed', 'Kifayat'];
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