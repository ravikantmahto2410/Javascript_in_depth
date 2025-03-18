const name = "Bandariya"
const repoCount = 50

// console.log(name + repoCount + "value"); // these syntax of concatenation is not good very outdated

//here's the new modern way of concatination
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('TataHarrier'); // Another way of declaring string

// console.log(gameName[1]); //if we want any property we can see by using key value pair
// console.log(gameName.__proto__) // we can also access prototype
// to access these protopetype we dont have to use just above line syntax 

//here are some of example to use objects of gameName
// console.log(gameName.length);

//we can also access other method as well like this
//for example
// console.log(gameName.toUpperCase()); // but this is not changing the original string


//if we want to see that koi position mein kon sa character hai , then there is a method in string called charAt
// console.log(gameName.charAt(1));

//If we want to see what is the postion of any character , then we use indexOf method
// console.log(gameName.indexOf('t'));


//some more methods
const gameName2 = new String('lukka-chippi');

//wants to divide in substring
// const newString = gameName2.substring(0,4); // last value is not included
// console.log(newString);

//Splice Method
const slicedString = gameName2.slice(-13,4); // negative index gives reverse number
console.log(slicedString);

//trim method : removes starting and ending spaces
const newStringOne = "   chhavi   "
console.log(newStringOne)
console.log(newStringOne.trim());

//replace method
// const url = "https://google.com/facebook%20profile"
// console.log(url.replace('%20','-'))

//to convert string in array based on something
// const carName = new String('Tata-Harrier-Mahindra-Thar');
// console.log(carName.split('-'))
