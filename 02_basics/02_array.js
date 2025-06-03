const marvel_heros = ["Thor", "IronMan", "Spiderman"]
const dc_heros = ["Superman", "Flash", "Batman"]

// marvel_heros.push(dc_heros) // push existing array pe hi push karta hai 
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]); // this syntax is not good instead of this we can use concat

//using concat

// const allHeros = marvel_heros.concat(dc_heros); //concat return a new array
// console.log(allHeros)

//use of spread operater
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);


//interesting one
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);


// whenever we select data from webpage then they are in other foramts like objects, strings ,nodelist etc
// but we need array so that we can loop then we can use array like

// console.log(Array.isArray("Bandariya"))
// //to convert in array
// console.log(Array.from("Bandariya"))
// console.log(Array.from({name: "Hitman"})); //Interesting here it is giving empty array because ye isko directly convert nhi kar paa rha , humein yahan bolna padegaki ki mein keys ka array banaun ya sirf iske value 


// //Interesting examples
// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3)); // .of returns a new array from set of elements and that set of elements can be variable, arrays
