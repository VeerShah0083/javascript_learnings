// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //adds 9 in the start of the array
// myArr.shift()// removes the 1st position of array i.e. removes 9 in this case

//console.log(myArr.includes(9)); //does it include or not(true or false)
// console.log(myArr.indexOf(3)); //gives index value of the given element and if not present returns -1

//const newArr = myArr.join()

// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log( newArr); //0,1,2,3,4,5
// console.log(typeof newArr); // type is string 


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);//[ 1, 2 ] as 1 se <3 tak jaega

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3); //[ 1, 2, 3 ] includes 3 as well different from splice, *last range not included
console.log(myn2);
console.log("C ", myArr); // C  [ 0, 4, 5 ] this is the MAIN DIFFERENCE between Slice and SPlICe, *last range included


//splice changes the array
//shallow copy= stack, deep copy= reference