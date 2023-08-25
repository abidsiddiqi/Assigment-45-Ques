"use strict";
/*
20. Think of something you could store in a array.
For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like.
Write a program that creates a list containing these items.
*/
const person = {
    firstName: "Abdullah",
    lastName: "Abid",
    age: 18,
    address: {
        House: 'H # 123',
        street: 'ST # 123',
        sector: 'N1',
        phase: 'phase 2',
        town: 'Hayatabad',
        province: 'KPK',
        zipcode: '25200',
        country: 'Pakistan'
    },
    email: 'to.abudllah@gmail.com'
};
console.log('Person');
console.log(person);
console.log(`First Name: ${person.firstName}`);
console.log(`Last Name: ${person.lastName}`);
console.log(`Age: ${person.age}`);
console.log(`Address: ${person.address.House}, ${person.address.street}, ${person.address.sector}, ${person.address.phase}, ${person.address.town}, ${person.address.province}, ${person.address.zipcode}, ${person.address.country}`);
console.log(`Email: ${person.email}`);
/**
output:

Pashto
English
Urdu
German
French

 *
 */ 
