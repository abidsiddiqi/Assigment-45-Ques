/*2.	Personal Message: Store a person’s name in a variable, and
 print a message to that person. Your message should be simple, such as,
  “Hello Eric, would you like to learn some Python today?”*/ 
  
  
//   We used the logical OR operator (||) to assign an empty string to userName if the user cancels the prompt dialog (which returns null).
  let userName: string = prompt("What's your name please?") || "";
  
   /* we declared doc as an optional HTMLElement or null type. 
   This means that it could be either an HTMLElement or null. */
  let  doc: HTMLElement | null = document.getElementById("demo");  

  if (userName === "") {
    if (doc) {   /* if doc is not null or undefined.*/
      doc.innerHTML = "User name is empty";
    }
  } else {
    let newLine = `<br>`   ;
    let msg: string = `Name in lowercase : ${userName.toLocaleLowerCase()} ${newLine} `;
        msg += `Name in uppercase : ${userName.toUpperCase()} ${newLine} `;
        //msg += `Name in titlecase : ${userName.()} ${newLine} `;
                
    
    if (doc) {
      doc.innerHTML = msg;
    }
  }


  function ToTitleCase(name: string)
  {
    var Name:String="";
    name = name.trim();
     let Words:string[] = name.split(" ");
    for(const word of Words)
    {
      console.log(word);
    }
    
  }
  function ToCharacters(Word : string):string[] 
    {
      let Chars: string[] =Word.split("");
      console.log(Chars);
      let char : string= Chars[0].toUpperCase();
      Chars.shift();
      Chars.unshift(char); 
      // console.log(Chars);
      return Chars;
    }