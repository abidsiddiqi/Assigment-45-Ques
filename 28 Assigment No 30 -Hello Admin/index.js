"use strict";
/*
  30.
  Hello Admin: Make a array of five or more usernames, including the name 'admin'.
  Imagine you are writing code that will print a greeting to each user after they log in to a website.
  Loop through the array, and print a greeting to each user:

*/
/*Note: check index2.ts ,for Loop through the array, and print a greeting to each user: */
/*   Make a array of five or more usernames, including the name 'admin'.  */
const users = ['abdullah', 'abid', 'admin', 'saad', 'hassaan', 'ali'];
//  print a greeting to each user after they log in to a website. 
Greeting(users, 'abid');
Greeting(users, 'javed');
Greeting(users, 'admin');
Greeting(users, 'hassaan');
Greeting(users, 'saad');
Greeting(users, 'ali');
function Greeting(User, user) {
    if (User.includes(user.toLowerCase())) // login sucessfully
     {
        if (user == 'admin') {
            console.log(`Hello admin, would you like to see a status report?`);
        }
        else {
            console.log(`Hello ${user}, thank you for logging in again.`);
        }
    }
    else {
        console.log('Invalid User Name!');
    }
}
/*
 * *********** output: *******************
Invalid User Name!
Hello admin, would you like to see a status report?
Hello hassaan, thank you for logging in again.
Hello saad, thank you for logging in again.
Hello ali, thank you for logging in again.
 */ 
