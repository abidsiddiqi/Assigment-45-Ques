/*
18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


*/ 

/*Think of at least five places in the world you’d like to visit.
  Store the locations in a array. Make sure the array is not in alphabetical order */
   const placeWishToVisit:string[]=['Madinah','Al Makkah','Istanbul','Berlin','Shaam'];

//• Print your array in its original order.
console.log("Original order:");
console.log(placeWishToVisit);

//• Print your array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical order:");
//const placeWishToVisitSorted =[...placeWishToVisit].sort();
console.log([...placeWishToVisit].sort());

//• Show that your array is still in its original order by printing it again.
console.log("\nStill in original order:");
console.log(placeWishToVisit);

//• Reverse the order of your list. Print the array to show that its order has changed.
placeWishToVisit.reverse();
console.log("\nReverse alphabetical order:");
console.log(placeWishToVisit);

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
placeWishToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placeWishToVisit);

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

/*The sort() method is used to sort an array in JavaScript. 
By default, it sorts the elements of the array in alphabetical order. However, you can also provide a custom sorting function to sort the array in a different order.
In this example, we're using the sort() method to sort the placesToVisit array in reverse alphabetical order. The sorting function we're providing takes two arguments, a and b, which represent two elements in the array that are being compared.
The localeCompare() method is used to compare two strings and returns a number that indicates their relative position in a sort order. By passing b and a as arguments to localeCompare(), we're comparing each element in the array to the next one, and sorting them in reverse alphabetical order.
So, when we call placesToVisit.sort((a, b) => b.localeCompare(a));, the sort() method sorts the placesToVisit array in reverse alphabetical order, with the element that comes last in alphabetical order appearing first in the sorted array.*/

placeWishToVisit.sort((a, b) => b.localeCompare(a));
console.log(`\n stored in reverse alphabetical order`)
console.log(placeWishToVisit);

/*we can sort the array in alphabetical order as
 placesToVisit.sort((a, b) => a.localeCompare(b));

 The localeCompare() method is used to compare two strings and
  returns a number that indicates their relative position in a sort order. 
  By passing a and b as arguments to localeCompare()
   we're comparing each element in the array to the next one, and sorting them accordingly.
*/
/**
output:

Original order:
[ 'Madinah', 'Al Makkah', 'Istanbul', 'Berlin', 'Shaam' ]

Alphabetical order:
[ 'Al Makkah', 'Berlin', 'Istanbul', 'Madinah', 'Shaam' ]

Still in original order:
[ 'Madinah', 'Al Makkah', 'Istanbul', 'Berlin', 'Shaam' ]

Reverse alphabetical order:
[ 'Shaam', 'Berlin', 'Istanbul', 'Al Makkah', 'Madinah' ]

Sorted in alphabetical order:
[ 'Al Makkah', 'Berlin', 'Istanbul', 'Madinah', 'Shaam' ]

stored in reverse alphabetical order
[ 'Shaam', 'Madinah', 'Istanbul', 'Berlin', 'Al Makkah' ]


 * 
 */