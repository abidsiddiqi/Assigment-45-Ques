// let Word:string="saad"
// let Chars: string[] =Word.split("");
// console.log(Chars);
// let char : string= Chars[0].toUpperCase();
// Chars.shift();
// Chars.unshift(char); 
// console.log(Chars);

let uname: string = "saad abid";
let Words:string[] = uname.split(" ");
for(const word of Words)
{
    console.log(word);
}
