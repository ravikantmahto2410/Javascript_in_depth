// Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log("DB Connected");
// }
// chai();

// How to write iife
// (function chai(){
//     console.log("DB Connected");
// })()    
//understanding syntax : The first ()parenthesis is for function definition and the second ()parenthesis is its execution 



//Interview Question : What is IIFE and Why it is used
//ANS: The function which gets executed immediately , sometimes what happens is there is polutin caused by global scope variables or decalartions to remove we use IIFE

//But writing like () () may cause problems
// writing in arrow also causes probelm
// (() => {
//     console.log(`DB CONNECTED TWO`)
// })()

//Writing without arrow also causes problem
// (function mecode(){
//     console.log(`DB CONNECTED TWO`)
// })()


// This error is coming because IIFE function easily invoke to ho gya hai but isko pata nhi hai ki context rokna kahan hai, so in this situation in javascript we have to end that line. her's a example
// (function mecode(){
//     console.log(`DB CONNECTED TWO`)
// })(); // here we are giving a ; to end this IIFE Function because as said above IIFE Function easily invoke to ho gya but isko pata nhi hai ki context rokna kahan hai, so in javascript we have to end that line that's why ; is put here

// (function brocode() {
//     console.log(`DB CONNECTED THREE`)
// })()
// // finally after putting the ; or ending the IIFE function its working fine




// Now one more thing lets take arrow function and see
// (function mecode(){
//     console.log(`DB CONNECTED TWO`)
// })(); // here we are giving a ; to end this IIFE Function because as said above IIFE Function easily invoke to ho gya but isko pata nhi hai ki context rokna kahan hai, so in javascript we have to end that line that's why ; is put here

// ( () => {
//     console.log(`DB CONNECTED THREE`)
// })()
// finally after putting the ; or ending the arrow function also works







//something More
// (function Renault(){
//     console.log(`KWID`);
// })();

// ( (carname) => {
//     console.log(`YOUR CAR NAME IS ${carname}`)
// })('Duster')



// Important for Interview
// There are also named IIFE and simple IIFE , Here are examples
//Example of Named IIFE
(function organ(){
    console.log(`HEART`)
})();

//Example of Unnamed IIFE
( (brand) => {
    console.log(`FAVOURITE MOBILE BRAND  ${brand}`)
})('Nothing')