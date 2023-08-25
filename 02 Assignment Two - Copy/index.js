"use strict";
/*2.	Personal Message: Store a person’s name in a variable, and
 print a message to that person. Your message should be simple, such as,
  “Hello Eric, would you like to learn some Python today?”*/
//   We used the logical OR operator (||) to assign an empty string to userName if the user cancels the prompt dialog (which returns null).
let userName = prompt("What's your name please?") || "";
/* we declared doc as an optional HTMLElement or null type.
This means that it could be either an HTMLElement or null. */
let doc = document.getElementById("demo");
if (userName === "") {
    if (doc) { /* if doc is not null or undefined.*/
        doc.innerHTML = "User name is empty";
    }
}
else {
    let newLine = `<br>`;
    let msg = `Name in lowercase : ${userName.toLocaleLowerCase()} ${newLine} `;
    msg += `Name in uppercase : ${userName.toUpperCase()} ${newLine} `;
    //msg += `Name in titlecase : ${userName.()} ${newLine} `;
    if (doc) {
        doc.innerHTML = msg;
    }
}
function ToTitleCase(name) {
    var Name = "";
    name = name.trim();
    let Words = name.split(" ");
    for (const word of Words) {
        console.log(word);
    }
}
function ToCharacters(Word) {
    let Chars = Word.split("");
    console.log(Chars);
    let char = Chars[0].toUpperCase();
    Chars.shift();
    Chars.unshift(char);
    // console.log(Chars);
    return Chars;
}
