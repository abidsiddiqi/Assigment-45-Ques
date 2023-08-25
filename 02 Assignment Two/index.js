"use strict";
/*2.	Personal Message: Store a person’s name in a variable, and
 print a message to that person. Your message should be simple, such as,
  “Hello Eric, would you like to learn some Python today?”*/
let userName = "Hassaan abid";
if (userName === "") {
    console.log("User name is empty");
}
else {
    userName = ToTitleCase(userName);
    console.log(`Name in upperCase : ${userName.toUpperCase()}`);
    console.log(`Name in lowerCase : ${userName.toLowerCase()}`);
    console.log(`Name in TitleCase : ${userName}`);
}
function ToTitleCase(name) {
    let Name = "";
    name = name.trim();
    const Words = name.split(" "); // ["hassaan","abid"]
    for (const word of Words) {
        const strWord = ToCharacters(word);
        Name += strWord + " ";
    }
    return Name;
}
function ToCharacters(Word) {
    let Chars = Word.split(""); // [h,a,s,s,a,n]
    let char = Chars[0].toUpperCase();
    Chars.shift(); // [a,s,s,a,n]
    Chars.unshift(char); // [H,a,s,s,a,n]
    const strChar = Chars.join(""); // convert string array into string.joint all character with no space
    return strChar;
    // return Chars.toString();
}
