"use strict";
/*
39. City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:
"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */
/**Note: nothing */
let countryName = 'Pakistan';
let cityName = 'Peshawar';
let cityCountryPair = city_country(cityName, countryName);
console.log(cityCountryPair);
cityName = 'New york';
countryName = 'USA.';
cityCountryPair = city_country(cityName, countryName);
console.log(cityCountryPair);
cityName = 'Toronto';
countryName = 'Canada.';
cityCountryPair = city_country(cityName, countryName);
console.log(cityCountryPair);
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
/********************** output: *********************

'Karachi' is in  'Pakistan.'
'Peshawar' is in  'Pakistan.'
'New york' is in  'USA.'
'Toronto' is in  'Canada.'

*****************************************************/
