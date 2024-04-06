//Array class and its methods
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros); //pushes array ke andar array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); // to get the wanted element in array ke andar array mai

// const allHeros = marvel_heros.concat(dc_heros); //concatenates 2 arrays; only 2**
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] // glass ko chhod diya to tutke pieces mai spread ho gya that is spread operator sab kuch alag ho jaega and than it is added as a single array mai hi **can join(concatenate) more than 2 arrays**

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); //makes array ke andar ke arrays to be in just 1 single array



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // **interesting**

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

//making array of given parameters