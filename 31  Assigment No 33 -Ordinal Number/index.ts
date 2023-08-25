/*
 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.
• Loop through the array.
• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

*/

/**Note: for 2nd version of that program , check index2.ts */

//• Store the numbers 1 through 9 in a array.
const numbers:number[]=[1,2,3,4,5,6,7,8,9];
let strNumber:string="";


/* Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line. */

numbers.forEach(element=>{
  //console.log(element);
  if(element==1)
  {
    strNumber = `${element}st`;
    
  }
  else if(element==2)
  {
    strNumber = `${element}nd`;
    
  }
  else if(element==3)
  {
    strNumber = `${element}rd`;
    
  }
  else
  {
    strNumber = `${element}th`;
  }
  console.log(strNumber);

});



/*
 * *********** output: *******************
1st
2nd
3rd
4th
5th
6th
7th
8th
9th

 */