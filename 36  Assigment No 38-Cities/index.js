"use strict";
/*
38. Cities: Write a function called describe_city() that accepts the name of a city and its country.
The function should print a simple sentence, such as Karachi is in Pakistan.
Give the parameter for the country a default value.
Call your function for three different cities, at least one of which is not in the default country.

*/
/**Note: nothing */
describe_city(); // no argument passed so default message will be print.
let cityName = 'Peshawar';
describe_city(cityName);
cityName = 'New york';
let countryName = 'USA.';
describe_city(cityName, countryName);
cityName = 'Toronto';
countryName = 'Canada.';
describe_city(cityName, countryName);
function describe_city(city = 'Karachi', country = 'Pakistan.') {
    console.log(`'${city}' is in  '${country}' `);
}
/********************** output: *********************

'Karachi' is in  'Pakistan'
'Peshawar' is in  'Pakistan'
'New york' is in  'USA'
'Toronto' is in  'Canada'

*****************************************************/
