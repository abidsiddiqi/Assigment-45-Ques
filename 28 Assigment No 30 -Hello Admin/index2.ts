/*
  30.
  Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
  Imagine you are writing code that will print a greeting to each user after they log in to a website. 
  Loop through the array, and print a greeting to each user:

*/

/*Note:*/
/*   Make a array of five or more usernames, including the name 'admin'.  */
const _users:string[]=['abdullah','abid','admin','saad','hassaan','ali'];

//   Loop through the array, and print a greeting to each user:

_users.forEach(element=>{
    if (element=='admin')
    
    {
        console.log(`Hello admin, would you like to see a status report?.`);

    }
    else
    {
        console.log(`Hello ${element}, thank you for logging in again.`);
    }
  });


/************* output: *******************
 
Hello abdullah, thank you for logging in again.
Hello abid, thank you for logging in again.
Hello admin, would you like to see a status report?.
Hello saad, thank you for logging in again.
Hello hassaan, thank you for logging in again.
Hello ali, thank you for logging in again.

***********************************************/


// let add1=(n1,n2)=>{return  n1+n2;}
// let add2=(n1,n2)=>n2+n1;