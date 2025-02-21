// there are two ways to declare objects 
//1.) Literals 
//2.) Constructor

//Singleton: it means koi bhi constructor se jab banate hai to ek singleton object banta hai 

// By Literals : Whenever we declare using literals ,in that case no singleton object is created
//By constructor : Agar constructor se Object banega to  singleton banega

// Declaring Object using  Literal :
  //here we can define key as well as value
const jsUser = {
    name: "Rohit", // when we give name like this then by default system process this like "name" // here name apne aap mein ek string ki tarah hai// value jo dnei ho hamare upar hai jo mari de sakte hai number, boolean,string, function , ek aur object , array
    age : 28,
    location: "Mumbai",
    email: "rohitcricket@team.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] //because we can give object as values
}

// How to access object
//Way number-01
console.log(jsUser.email); 

// way number -02
// console.log(jsUser["email"])



//Interview .) How to use key as symbol in object , in simple words ek symbol lo usko objects ke key mein add karo aur print karke dikha do

const mySym = Symbol("key1")
const jsUser1 = {

  name: "Virat", // when we give name like this then by default system process this like "name" // here name apne aap mein ek string ki tarah hai// value jo dnei ho hamare upar hai jo mari de sakte hai number, boolean,string, function , ek aur object , array
  age : 28,
  [mySym]:"myKey1", // aise ye key nhi hai now
  location: "Mumbai",
  email: "Indiancricket@team.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"] //because we can give object as values
}
// console.log(typeof [mySym])



//How to change the value 
// jsUser.email = "Jharkhandcricket@team.com"
// Object.freeze(jsUser) // to freeze the value //after value he change will not be propageted
// jsUser.email = "maharashtracricket@team.com"
// console.log(jsUser)



//How to add functions in objects
jsUser.greeting = function(){
  console.log("Hello js User");
}
console.log(jsUser.greeting);

//string interpolation
jsUser.greetingTwo = function(){
  console.log(`Hello JS User, ${this.name}`) // here we are taking this because we want to reference jsUser
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

// Note 





// //conctructor method for declaring object aur issi ke ander singleton banta hai
// Object.create