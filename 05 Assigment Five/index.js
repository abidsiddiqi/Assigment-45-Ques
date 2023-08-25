"use strict";
/*
Stripping Names Store a person’s name, and include some whitespace characters at the beginning
and end of the name. Make sure you use each character combination, t and n, at least once.
Print the name once, so the whitespace around the name is displayed.
Then print the name after striping the white spaces.
 */
let personName = ` Abdullah\tAbid `;
let lenStr = personName.length;
let char = '-';
let strMsg = `After Adding Whitspaces:\n length of String "${personName}" is ${lenStr}`;
lenStr = strMsg.length;
console.log(char.repeat(lenStr));
console.log(strMsg);
personName = personName.trim();
lenStr = personName.length;
strMsg = `After Trimming:\n length of String "${personName}" is ${lenStr}`;
lenStr = strMsg.length;
console.log(char.repeat(lenStr));
console.log(strMsg);
