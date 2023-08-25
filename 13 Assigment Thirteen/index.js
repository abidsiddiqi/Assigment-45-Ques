"use strict";
const guests = ['Imran Khan', 'Muhammad Javed', 'Kifayat'];
const Name = "Muhammad Abid Siddiqui";
// Inviting each guest to dinner
for (const guest of guests) {
    console.log(`Dear ${guest},\nI would like to invite you to dinner at my place on Saturday, August 21st. I hope you can make it!\nSincerely,\n${Name}\n`);
}
