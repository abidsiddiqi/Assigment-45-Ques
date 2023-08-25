/*
15. Guest List: If you could invite anyone, living or deceased, to dinner,
 who would you invite? Make a list that includes at least three people you’d 
 like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
*/ 

const Guests:string[] = ['Imran Khan', 'Muhammad Javed', 'Kifayat'];
const Host:string="Muhammad Abid Siddiqui"

// Printing the original guest list
console.log("Original guest list:");
Guests.forEach(Element=>{
    console.log(Element);
});

// Updating the guest list
Guests[0] = 'Shahzad Sheikh';
// Printing the updated guest list
console.log("\nUpdated guest list:");

// Sending out new invitations
Guests.forEach(element=>{
console.log(`Dear ${element},\nI would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!\nSincerely,\n${Host}\n`)
});
    

/**
 output:

original guest list:
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
 * 
 */