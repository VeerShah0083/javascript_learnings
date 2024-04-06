// singleton
// Object.create
//*Review once again deeper
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) // 2nd way to access keys in objects
// console.log(JsUser["full name"]) //agar koi string is key like in json toh this method is useful to access those keys
// console.log(JsUser[mySym]) //to access symbol in object as a key

// JsUser.email = "hitesh@chatgpt.com"
//  Object.freeze(JsUser) // any values in JsUser can't be changed further
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser); //email: 'hitesh@chatgpt.com'

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); //string interpolation used, also same object ko refer karna hai tab this use hota hai.
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());