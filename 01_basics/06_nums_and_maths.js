/*
const score = 400 // here the javascript is converting automatically in number data type
console.log(score); // 

const balance = new Number(100); // by writing this we are explicitly declaring the number Type
console.log(balance)

console.log(balance.toString()) // the value that we will get  after doing console log will be of string data type
console.log(balance.toString().length) 

console.log(balance.toFixed(2)); // this property of number will be used many times especially while making ecommerce applications


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // while using this toPricison property you have to be little bit careful about the number of values before decimal and pricision value
                                        // toPrecision returns string Data type

const hundreds = 1000000
console.log(hundreds.toLocaleString()); // it separate the digits of hundreds with commas according to US currency system
console.log(numbers.toLocaleString('en-IN'));// this separates the digits in commas according to the Indian currency system
*/

//++++++++++++++++++++++++++++++++++++++Maths++++++++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4)); // abs is absolute value, it is used when we want to convert negative to postive
console.log(Math.round(4.3)); // this will round of the number passed into this function
console.log(Math.ceil(4.2));  // this will take upper value
console.log(Math.floor(4.2));// this will take the lower value
console.log(Math.min(4, 3,6,8));
console.log(Math.max(4,3,6,8))


console.log(Math.random()); // The value of Math.random() will always lie between 0 and 1

// To print value between some range
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);// when gives number between 1-9

//remember this formula to generate random numbers between two given numbers
const min = 10;
const max = 20;

console.log(Math.floor(Math.random()* (max - min + 1)) +  min)

