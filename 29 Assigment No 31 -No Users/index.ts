/*
  31.
  No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

/*Note: check index2.ts ,for Loop through the array, and print a greeting to each user: */

/*   Make a array of five or more usernames, including the name 'admin'.  */
  let users:string[]=['abdullah','abid','admin','saad','hassaan','ali'];
  //const users:string[]=[];


  /* to make sure the list of users is not empty.
  • If the list is empty, print the message We need to find some users!*/


  Greeting(users,'abid');
  Greeting(users,'javed');
  Greeting(users,'admin');
  Greeting(users,'hassaan');
  Greeting(users,'saad');
  Greeting(users,'ali');
  
  // Removing all usernames from the array
  users=[]; // we can also remove the user by pop() one by one through iteration.
  Greeting(users,'admin');
function IsArrayEmpty(userName:string[]): boolean
{
  if (userName.length==0)
  {
    console.log('\n We need to find some users! No User Registered:User List is empty')
    return true; // array is empty
  } 
   else
  {
    return false; // arrray is not empty
  }
}

function Greeting(userName:string[],user:string)
{
  if (!IsArrayEmpty(userName)) // if array is not empty
  {

  
        if (userName.includes(user.toLowerCase())) // login sucessfully
        {
            if (user=='admin')
            {
              console.log(`Hello admin, would you like to see a status report?`);
            }
            else
            {
              console.log(`Hello ${user}, thank you for logging in again.`);
            }
            
        }  //(User.includes(user.toLowerCase()))
        else
        {
          console.log('Invalid User Name!');
        }

  }  // IsArrayEmpty();

}  // end of function 


/*
 * *********** output: *******************
Hello abid, thank you for logging in again.
Invalid User Name!
Hello admin, would you like to see a status report?
Hello hassaan, thank you for logging in again.
Hello saad, thank you for logging in again.
Hello ali, thank you for logging in again.

We need to find some users! No User Registered:User List is empty
 */