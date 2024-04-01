// Dates

let myDate = new Date()
// console.log(myDate.toString()); //gives output=> Mon Apr 01 2024 22:29:51 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Mon Apr 01 2024
// console.log(myDate.toLocaleString()); //1/4/2024, 10:29:51 pm locale readable format string
// console.log(typeof myDate); //object

let myCreatedDate = new Date(2023, 0, 23) //using object date and passing parameters 0 is 1st month here i.e. january
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) //5,3 is 5:03 m as time 
// let myCreatedDate = new Date("2023-01-14") // normal yyyy/mm/dd format
// let myCreatedDate = new Date("01-14-2023") // normal mm/dd/yyyy format
// console.log(myCreatedDate.toLocaleString()); // date i created is shownb in lacale format

let myTimeStamp = Date.now() //shows current time in ms (but from 1970 till now as per standards)

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //time  for createddate we declared above
// console.log(Math.floor(Date.now()/1000)); //gives us the integer value in seconds (converted from miliseconds)

let newDate = new Date() 
console.log(newDate); //2024-04-01T18:18:16.100Z    current date time but in nonreadable format(like wth is .100Z)
console.log(newDate.getMonth() + 1); //as month starts from 0 we add 1 to get exact month
console.log(newDate.getDay()); //gives the day

// `${newDate.getDay()} and the time `  //string interpolation use case

// newDate.toLocaleString('default', {
//     weekday: "long",
    
// })  //Basically toLocaleString helps get us the date in time in our desired format here long means MONDAY in weekday asn so on are many such methods

