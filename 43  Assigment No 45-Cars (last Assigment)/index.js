"use strict";
/*
44.Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name.
It should then accept an arbitrary number of keyword arguments.
Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
Print the Object that’s returned to make sure all the information was stored correctly.
/**Note: nothing */
/*The createCar function accepts manufacturer and model arguments of type string,
followed by a rest parameter ...options of type any[]. */
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
        options: {}
    };
    for (let i = 0; i < options.length; i += 2) {
        const key = options[i];
        const value = options[i + 1];
        car.options[key] = value;
    }
    return car;
}
const myCar = createCar('Toyota', 'Corolla', 'color', 'blue', 'sunroof', true);
console.log(myCar);
/********************** output: *********************

You ordered a sandwich with turkey, lettuce, tomato, mayo.
You ordered a sandwich with beef, cheese.
You ordered a sandwich with chicken, chicken spread.

*****************************************************/
