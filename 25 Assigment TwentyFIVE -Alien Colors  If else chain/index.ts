/*
25.Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.

*/

// Alien Colors alien_color = 'green'

let alien_color: string = "green";

// Version that passes the if test
if (alien_color.toLocaleLowerCase() === "green") {
  //The player earned 5 points
  console.log("You just earned 5 points.");
}
else if(alien_color.toLocaleLowerCase()==="yellow") {
  //The player earned 10 points
  console.log(`Your earned 10 points`);  
}
else if(alien_color.toLocaleLowerCase()==="red") {
  //The player earned 15 points
  console.log(`You earned 15 points`);  
}
else{
  console.log(`Invalid alien color`);
}


// Alien Colors alien_color = 'yellow'

alien_color = "yellow";

// Version that passes the if test
if (alien_color.toLocaleLowerCase() === "green") {
  //The player earned 5 points
  console.log("You just earned 5 points.");
}
else if(alien_color.toLocaleLowerCase()==="yellow") {
  //The player earned 10 points
  console.log(`Your earned 10 points`);  
}
else if(alien_color.toLocaleLowerCase()==="red") {
  //The player earned 15 points
  console.log(`You earned 15 points`);  
}
else{
  console.log(`Invalid alien color`);
}


// Alien Colors alien_color = 'red'

alien_color= "red";

// Version that passes the if test
if (alien_color.toLocaleLowerCase() === "green") {
  //The player earned 5 points
  console.log("You just earned 5 points.");
}
else if(alien_color.toLocaleLowerCase()==="yellow") {
  //The player earned 10 points
  console.log(`Your earned 10 points`);  
}
else if(alien_color.toLocaleLowerCase()==="red") {
  //The player earned 15 points
  console.log(`You earned 15 points`);  
}
else{
  console.log(`Invalid alien color`);
}


// Alien Colors alien_color = 'red'

alien_color= "blue";

// Version that passes the if test
if (alien_color.toLocaleLowerCase() === "green") {
  //The player earned 5 points
  console.log("You just earned 5 points.");
}
else if(alien_color.toLocaleLowerCase()==="yellow") {
  //The player earned 10 points
  console.log(`Your earned 10 points`);  
}
else if(alien_color.toLocaleLowerCase()==="red") {
  //The player earned 15 points
  console.log(`You earned 15 points`);  
}
else{
  console.log(`Invalid alien color`);
}

/*
 * *********** output: *******************
You just earned 5 points.
Your earned 10 points
You earned 15 points 
Invalid alien color
 
 */