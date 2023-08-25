 /*
41. Magicians: Make a array of magician’s names. 
Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.

/**Note: nothing */

const magicianNames : string[] =['Bangali Baba','Fradi Baba','Double Shah'] 

showMagicians(magicianNames);

function showMagicians ( magicians: string[]): void
{
  magicians.forEach(magician=>{
      console.log(magician);
  });
}

/********************** output: *********************

Bangali Baba
Fradi Baba
Double Shah

*****************************************************/ 
