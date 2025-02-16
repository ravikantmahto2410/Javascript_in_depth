//How the data is kept in memory and how it is retrieved from memory , based on these the
//data is divided into two types: 1.) Primitive and 2.) Non- primitive

//1.)Prmitive Data Type
//   -> All primitive data type are call by value
//   -> these are 7 : String, Number, Boolean, null, Undefined, Symbol, BigInt, 

//1.)- primitive Type / Reference Type
//   -> Primitive are those Data Types ,in which in memory their refernce is allocated 
//   -> Examples - Arrays, Objects, Functions

//InterView Question.)Javascript is a statically types language or dynamically Typed language
//Ans: Javascript is a Dynamically Typed language where the interpreter assigns variables a type at runtime based on the variable's value at the time. 
const personName = "Bandariya";
const score = 100;
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

//How to declare Symbol
const id = Symbol('123')// here the return type that we get is data type that is also symbol
// const anotherId = Symbol('123') 
// the value of id and symbolId will not be the same , because symbol ka kaam hi hai ki agar uske ander value hi same kyon na daal do ,the result will be differnt
// console.log(id === anotherId);

//Example of usage of BigInt
const bigNumber = 32546655554778855n // as soon as we add n at the end the bigNumber variable becomes of BigInt type



//Reference (Non Primitive ) Examples
//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

//examples of objects
let myObj = {
    name:"Bandariya",
    age:22,
}

//Example of Function
const myfunction = function(){
    console.log("Hi Bandariya");
}

// How to identify the datatype of variable
//To do that we use  a function typeof
//example to use  function typeof
//example-01 
console.log(typeof bigNumber);
