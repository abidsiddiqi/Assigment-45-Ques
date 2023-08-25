 /*
39. City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:
"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned. */


/**Note: nothing */
let countryName:string='Pakistan'
let cityName:string='Peshawar';
let cityCountryPair: string = city_country(cityName,countryName);
console.log(cityCountryPair);

cityName='New york'
countryName='USA.';
cityCountryPair=city_country(cityName,countryName);
console.log(cityCountryPair);

cityName='Toronto';
countryName='Canada.';
cityCountryPair=city_country(cityName,countryName);
console.log(cityCountryPair);


function city_country(city:string,country:string): string
{
    return `"${city}, ${country}"`;
}


/********************** output: *********************

"Peshawar, Pakistan"
"New york, USA."  
"Toronto, Canada."

*****************************************************/ 
