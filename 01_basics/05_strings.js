const name = "veer"
const repoCount = 15

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName = new String('veer-shah-com')
//js gives us string object which we can use
//String is an object which has key value pairs and has prototype and also shows length
// console.log(gameName[0]); //gives output h as we acces key value pair
// console.log(gameName.__proto__); //gives an object which is shown empty in terminal but has methods in web console

// console.log(gameName.length); // gives 8 as output
// console.log(gameName.toUpperCase()); // output the string in capital letters
console.log(gameName.charAt(2)); //shows the character present at 2nd position
console.log(gameName.indexOf('t')); //shows the position where the given character is present

const newString = gameName.substring(0, 4)  //can't pass negative values
console.log(newString);

const anotherString = gameName.slice(-7, 4) //can pass negative values as well so that it starts counting from backwards.
console.log(anotherString);

const newStringOne = "   veer    "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes start and end spaces.Also has trimStart() and trimEnd() to get string with whitespaces trimmed from any one desired end. WORKS for whitespaces and line terminators("\n" newlines basically)

const url = "https://veer.com/veer%20shah"

console.log(url.replace('%20', '-')) //what to find and then to replace here it finds %20 and replaces it with - to make it proper url

console.log(url.includes('sundar')) //checks if this string is present in the url or not

console.log(gameName.split('-')); // converts to array based on the character passed(separator), here it splits word hitesh-hc-com based on '-' so => ['hitesh', 'hc', 'com'] 