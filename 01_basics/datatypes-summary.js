//  Primitive
//they are call by value so when copied reference of memory is not given rather the copy is passed and the changes are made in copies
//  7 types : String, Number, Boolean, null(means empty), undefined(variable declared memoryspace allocated but value not defined(given)), Symbol(used to make any value unique), BigInt

const score = 100 //return type number
const scoreValue = 100.3 //return type number

const isLoggedIn = false // return type boolean
const outsideTemp = null //return type object
let userEmail; // return type undefined

const id = Symbol('123') //return type symbol
const anotherId = Symbol('123') //return type symbol

console.log(id === anotherId); //toh symbol se unique id hai toh same nhi hai

const bigNumber = 3456543576654356754n  // last mai n for Bigint, return type bigint

//js is dynamically typed lang coz usko tpye of datatype nhi batana padta like int,bool,etc. agar karna padta toh statically typed ho jaati


// Reference (Non primitive)
//values for which the direct memory address value can be allocated(memory mai reference directly allocate kiya jaa sakta hai)
// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; //return type object
let myObj = {
    name: "hitesh",
    age: 22,
} //return type object


//return type function 
const myFunction = function(){
    console.log("Hello world");
}

// console.log(typeof myFunction);
// console.log(typeof anotherId);
// console.log(typeof score);
// console.log(typeof myObj);
// console.log(typeof heros);
// console.log(typeof userEmail);
// https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap(Non-primitive)
//jaha stack waha copy of original value, jab heap tab reference of original value(toh whatever you change original value mai bhi change hoga)

let myYoutubeName="theVSR"

let anothername="veershah"
anothername=myYoutubeName
anothername="VEERSHAH"
console.log(myYoutubeName);
console.log(anothername);

let userone={
    email:"theVSR@gmail.com",
    upi: "user@okhdfc"
}

let usertwo=userone

usertwo.email="theveershah@gmail.com"

console.log(userone.email);
console.log(usertwo.email);