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
    let msg: string = `Hello ${userName}, would you like to learn some Python today?`;
    if (doc) {
      doc.innerHTML = msg;
    }
  }