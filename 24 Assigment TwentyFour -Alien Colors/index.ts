/*
25. Alien Colors #1: Imagine an alien was just shot down in a game. 
  Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.
*/

// Alien Colors #1
let alien_color: string = "green";

// Version that passes the if test
if (alien_color === "green") {
  console.log("The player just earned 5 points.");
}

// Version that fails the if test (no output)
if (alien_color !== "green") {
  // No code to execute
}

//Alien Colors #2

// Version that runs the if block

 alien_color = "yellow";

if (alien_color === "green") {
  console.log("The player just earned 5 points for shooting the green alien.");
} else {
  console.log("The player just earned 10 points for shooting the non-green alien.");
}


// Write one version of this program that runs the if block and another that runs the else block.

 alien_color = "green";

// Version that runs the if block
if (alien_color === "green") {
  console.log("The player just earned 5 points for shooting the green alien.");
}

// Version that runs the else block
if (alien_color !== "green") {
  console.log("The player just earned 10 points for shooting the non-green alien.");
}




/*
 * *********** output: *******************
 
The player just earned 5 points.
The player just earned 10 points for shooting the non-green alien.
The player just earned 5 points for shooting the green alien.

 */