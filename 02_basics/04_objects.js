// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname); // agar fullname exist hi na karta ho toh, then ? for more protection

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //refer object assign mdn.object.assign(target,source)so we always put a new empty object as the target to get other objects all in one else if we wrote obj1,2,3 then obj1 will be target so obj1 mai baaki 2 objects store honge

const obj3 = {...obj1, ...obj2}  //using spread operator
// console.log(obj3);


//array of objects:
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //output is an array of keys :['id', 'name', 'isLoggedIn']

// console.log(Object.values(tinderUser)); //output is an array of values :['123abc', 'Sammy', false]

// console.log(Object.entries(tinderUser)); //array ke andar array showing 1 key and its object in one array and next in other and whole in a single array

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if the object has this property or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

//console.log(course.courseInstructor); 


//Destructuring of objects
const {courseInstructor: instructor} = course  //const{kya values extract karni hai: new name(renamed)} = kaha se values extract karni hai

// console.log(courseInstructor);
console.log(instructor);

//practical use of destructuring In React:
//navbar is a prop , har baar props.company,etc nahi karte so we use destructuring i.e. {company}
// const navbar= ({company}) = > {
// }
// navbar(company = "hitesh")

//Apna kaam kisi aur ke sir par daalna is API
//API se jo data fetch hota hai it is in JSON format (pehle it used to be in XML structure)
//This is JSON(JSON object jaisa hi hai :) )
// object ka naam hota hai json ka nhi hota
// JSON mai key aur values dono are in strings
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

//checkout this url for example of JSON: https://api.github.com/users/VeerShah0083
//randomuser.me for random apis
//JSON formatter tool for Json formatting

//sometimes we also get APIs in format of arrays(objects nested in array)

[
    {},
    {},
    {}
]

