 /*
44.Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
Print the Object that’s returned to make sure all the information was stored correctly.
 /**Note: nothing */

 //we define an interface Car to describe the shape of the car object.
 interface Car {
  manufacturer: string;
  model: string;
  options: Record<string, any>;
}


/*The createCar function accepts manufacturer and model arguments of type string, 
followed by a rest parameter ...options of type any[]. */

function createCar(manufacturer: string, model: string, ...options: any[]): Car {
  // The function creates a new object of type Car with properties for manufacturer, model, and an empty options object
  const car: Car = {
    manufacturer,
    model,
    options: {} //  empty options object
  };

  /**It then loops over every other element in the options array (starting at index 0),
   *  using the current element as the key and the next element as the value. 
   * It adds each key-value pair to the options object of the car. */
  
  for (let i = 0; i < options.length; i += 2) {
    const key = options[i];
    const value = options[i + 1];
    car.options[key] = value;
  }

  return car;
}

const myCar: Car = createCar('Toyota', 'Corolla', 'color', 'blue', 'sunroof', true);
console.log(myCar);



/********************** output: *********************

You ordered a sandwich with turkey, lettuce, tomato, mayo.
You ordered a sandwich with beef, cheese.
You ordered a sandwich with chicken, chicken spread.

*****************************************************/ 
