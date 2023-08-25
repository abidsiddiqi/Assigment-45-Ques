/*
  32.Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.
• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

*/

/*Note: */

  /* Make a list of five or more usernames called current_users. */
  let  current_users:string[]=['abdullah','abid','admin','saad','hassaan'];

  /**Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list. */
  let new_users:string[]=['ali','shahid','abid'];
  
  // adding a new user


 AddNewUser(new_users,'abid');
 AddNewUser(new_users,'ali');
 AddNewUser(new_users,'abid02');
 AddNewUser(new_users,'abdullah');
 AddNewUser(new_users,'shahid');
 

  /**Loop through the new_users list to see if each new username has already been used.
   *  If it has, print a message that the person will need to enter a new username. 
   * If a username has not been used, print a message saying that the username is available. */
  function IsNameAvailable(userName:string[],newUser:string): boolean  // any is a generic type used when a variable's type is unknown or when the variable's type hasn't yet been defined.
{
  let nameAvailable :boolean=true;
  if (userName.length!=0)
  {
  userName.forEach(element=>{
      if(element===newUser)
      {
        console.log(`\n ${element} has already been used.`);
        nameAvailable= false; // Not avaialble 
        return nameAvailable;
      }
  
  });  // foreEach
  }
  else
  {
     return nameAvailable; // array is empty ,availble and can use this name
  }
  return nameAvailable;
  
} // IsNameAvailable


function AddNewUser(newUsers:string[],newUser:string)
{
  const nameAvailable:boolean = IsNameAvailable(newUsers,newUser);
  if (nameAvailable) //if userName is available.
  {
    
    newUsers.push(newUser); // new user added successfylly.
    console.log(`\n Welcome ${newUser}! , you account has been created successfully!`);
    
  }  

console.log(new_users); // [ 'ali', 'shahid', 'abid' ]
} //AddNewUser


/*
 * *********** output: *******************

 abid has already been used.
[ 'ali', 'shahid', 'abid' ]

 ali has already been used.
[ 'ali', 'shahid', 'abid' ]

 Welcome abid02! , you account has been created successfully!
[ 'ali', 'shahid', 'abid', 'abid02' ]

 Welcome abdullah! , you account has been created successfully!
[ 'ali', 'shahid', 'abid', 'abid02', 'abdullah' ]

 shahid has already been used.
[ 'ali', 'shahid', 'abid', 'abid02', 'abdullah' ]


 */