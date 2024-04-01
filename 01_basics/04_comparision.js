// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

//avoid the below type of code give importance to clean code
console.log(null > 0); //null converted to zero and then compared
console.log(null == 0); //null converted to nan and then compared
console.log(null > 0); //null converted to zero and then compared

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//avoid above type of code while coding.
// === 

console.log("2" === 2);
//=== is strict check which not only checks values but also check data types
console.log("2"==2); // this gives answer true because it converts number to string i.e 2 is converted to string and then compared with string 2 so both are equal in this case