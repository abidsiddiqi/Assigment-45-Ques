 /*
42. Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding 
the phrase the Great to each magician’s name. 
Call show_magicians() to see that the list has actually been modified.


/**Note: nothing */

let magicianNames : string[] =['Bangali Baba','Fradi Baba','Double Shah'] 

showMagicians(magicianNames);
magicianNames = make_great(magicianNames);
show_magicians(magicianNames);
function showMagicians ( magicians: string[]): void
{
  console.log('Magician Names before Modificaiton');
  magicians.forEach(magician=>{
      console.log(magician);
  });
}


 function make_great(magicians: string[]): string[]
  {

    for (let i=0;i<magicians.length;i++){
      
      magicians[i]=`Great ${magicians[i]}`;
    }
    return magicians;
 }

 function show_magicians ( magicians: string[]): void
{
  console.log('\nMagician Names After Modificaiton');
  magicians.forEach(magician=>{
      console.log(magician);
  });
}

/********************** output: *********************

Magician Names before Modificaiton
Bangali Baba
Fradi Baba
Double Shah

Magician Names After Modificaiton
Great Bangali Baba
Great Fradi Baba
Great Double Shah

*****************************************************/ 
