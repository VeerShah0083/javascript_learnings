const score = 400 // basic number
// console.log(score);

const balance = new Number(100) //we use Number object it has some methods in its prototype already
console.log(balance); //it gives output as [Number: 100]
console.log(typeof balance); // balance is an object as we already know that we made instance for object number 

// console.log(balance.toString().length); //converts number to string
// console.log(balance.toFixed(1)); //makes the any number with only 1 decimal place

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //makes it prescise by returning only the specfied number of digits

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //gives commas in between this number and ensures readability and en-IN so that it follows indian numbering system like 10,00,000 etc.

// +++++++++++++ Maths +++++++++++++++++++++++++++++
//THE GOATED LIBRARY OF JS
// console.log(Math); //returns Object [Math] {}  so basically it is an object
// console.log(Math.abs(-4)); // absolute value of any integer
// console.log(Math.round(4.6)); //round up the decimal number
// console.log(Math.ceil(4.2));  //gives ceiling value 
// console.log(Math.floor(4.9)); // gives floor value
// console.log(Math.min(4, 3, 6, 8));  // returns the minimum number
// console.log(Math.max(4, 3, 6, 8)); // returns the maximum number

console.log(Math.random()); //generates any random number ranging between 0 to 1
console.log((Math.random()*10) + 1); //as math.random always gives output in decimals from 0 to 1 so it multiplies by 10 to give b/w 0 to 9 but in some cases like 0.05 we still get 0.5 and also we want from 1 so we add 1 to make the numbers as integer

console.log(Math.floor(Math.random()*10) + 1); //gives a proper integer as an output from 1 to 9

const min = 10
const max = 20
//best formula for getting integer numbers in a range given
console.log(Math.floor(Math.random() * (max - min + 1)) + min)    //max-min+1 specifies the range and + min gives nos greater than min always