// utilities.js
const welcomeMessage = (firstName, lastName) => {
    console.log(`Welcome ${firstName} ${lastName} to G@I College`);
  };
  
  const convertMeasurement = (value, unit) => {
    if (unit === "Celsius") {
      return (value * 9) / 5 + 32; // Celsius to Fahrenheit
    } else if (unit === "Fahrenheit") {
      return ((value - 32) * 5) / 9; // Fahrenheit to Celsius
    } else if (unit === "minutes") {
      return value / 60; // Minutes to Hours
    } else if (unit === "hours") {
      return value * 60; // Hours to Minutes
    }
  };
  
  const mathOperation = (...values) => {
    return values.reduce((acc, curr) => acc + curr, 0); // Sum of all values
  };
  
  const customFunction = (value) => {
    return value * value; // Square of the value
  };
  
  const reverseString = (str) => {
    return str.split("").reverse().join("");
  };
  
  const isPrime = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
  
    if (num % 2 === 0 || num % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };
  
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  module.exports = { welcomeMessage, convertMeasurement, mathOperation, customFunction, reverseString, isPrime, getRandomNumber };
  