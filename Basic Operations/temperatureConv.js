const kelvin = 0;
//The value saved to kelvin will stay constant.Keep chnging the value to see change in output.
var celsius = kelvin - 273;
//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
var fahrenheit = celsius * (9 / 5) + 32;
fahrenheit = Math.floor(fahrenheit);
// When you convert from Celsius to Fahrenheit, you often get a decimal number.Using .floor() method from the Math library to round down the Fahrenheit temperature.
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);
// To Newton scale
var newton = celsius * (33 / 100)
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton. `);