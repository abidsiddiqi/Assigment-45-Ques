let str: string = "hello";

/*  we split the str string into an array of individual characters 
   using an empty string as the delimiter ("").
 The resulting array is assigned to a variable called chars, 
 which is declared as an array of strings (string[]).*/ 

let chars: string[] = str.split("");

console.log(chars); // Output: ["h", "e", "l", "l", "o"]

/* we split the sentence string into an array of words using a space character as the delimiter. */ 

let sentence: string = "This is a sample sentence";
let words: string[] = sentence.split(" ");
console.log(words); // Output: ["This", "is", "a", "sample", "sentence"]


let str2: string = "apple,banana,orange,grape";
/* split the str string into an array of substrings using a comma character as the delimiter. 
We also specify a maximum limit of 2 splits using the second argument of the split() method. 
This means that the method will split the string into at most 2 substrings.*/

let fruits: string[] = str2.split(",", 2); 
console.log(fruits); // Output: ["apple", "banana"]
