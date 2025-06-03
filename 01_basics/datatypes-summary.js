/*
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
        //In Dynamic Typing, type checking is performed at runtime. For example, Python is a dynamically typed language. It means that the type of a variable is allowed to change over its lifetime. Other dynamically typed languages are -Perl, Ruby, PHP, Javascript etc.
        //Static Typing is opposite to Dynamic Typing. In Static Typing, type checking is performed during compile time. It means that the type of a variable is known at compile time. For some languages, the programmer must specify what type each variable is (e.g C, C++, Java), other languages offer some form of type inference(e.g. Scala, Haskell).With    //Static Typing, variables generally are not allowed to change types.
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
*/


//+++++++++++++++++++++++++++++lect-10 is written here++++++++++++++++++++++++++++++++++++++++++++++++++++
//Note-01 :  In all primitive Data type everywhere stack memory is used
//Note-02 :  In Non - Primitive data type Heap Memory is used
//Note-03 : In stack memory , we get copy of variables what ever variables are declared
//Note-04 : Whenever anything is defined in heap memory , then from there we get reference,original value ka so whatever changes we do ,original value also gets changed


//example of stack memory allocation 
let myYoutubename = "techflowdotcom"

let anothername = myYoutubename
anothername = "dummynew"

console.log(myYoutubename);
console.log(anothername)


//example for heap memory
let userOne = {
    email:"user@google.com",
    upi:"userybl"
}
let userTwo = userOne

userTwo.email = "dummy@gmail.com"
console.log(userOne.email)
console.log(userTwo.email)