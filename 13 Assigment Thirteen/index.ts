/*
Guest List: If you could invite anyone, living or deceased, to dinner, 
who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.
*/ 

const guests: string[] = ['Imran Khan', 'Muhammad Javed', 'Kifayat'];
const Name:string="Muhammad Abid Siddiqui"
// Inviting each guest to dinner
for (const guest of guests) {
    console.log(`Dear ${guest},\nI would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!\nSincerely,\n${Name}\n`);

}
/**
 * output:
 * Dear Imran Khan,
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