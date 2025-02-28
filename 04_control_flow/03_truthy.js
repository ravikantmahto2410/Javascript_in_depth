// const userEmail = "cars.salon.ai"

// if(userEmail) { 
//     console.log("Got user Email")
// } else {
//     console.log("Don't have user Email")
// }
// in the above codes  the string provided above is assumed as truthy value


// What happens if we pass empty string 
// const userEmail = ""

// if(userEmail) { 
//     console.log("Got user Email")
// } else {
//     console.log("Don't have user Email")
// }

// what happens when userEmail have empty array
// const userEmail = []

// if(userEmail) { 
//     console.log("Got user Email")
// } else {
//     console.log("Don't have user Email")
// }




    //there is rule so that when to assume truthy value and when to use falsy Value

    //Which are assumed Falsy : false , 0, -0(Important for Interview), BigInt 0n, "", null, NaN(Not a Number)
    // rest are all truthy value  for example: "0" 'False'(Important for Interview), " ",[] , {}, function(){} (This is known as empty function)



    // How to check if array is in condition , whether it is truthy or falsy
    // const userEmail = []
    // if(userEmail.length === 0) {
    //     console.log("Array is Empty");
    // }


    //If Object aa jaaye and we have to check in condition
    // const emptyObj = {}
    
    // if(Object.keys(emptyObj).length === 0) {   // Note : Object.keys() this returns a array of keys   // Object.keys(emptyObj) ye poora ka poora generate karega ek array
    //     console.log("Object is Empty");
    // }







//Nullish Coalescing Operator (??) : null undefined

//scene -01
// let val1;
// val1 = 5 ?? 10

// console.log(val1);

//scene-02 
// let val1;
// // val1 = 5 ?? 10;
// val1 = null ?? 10
// console.log(val1);

//Now What Does this Null Coalescing operator does : This Null Coalescing operator basically kaam ye karta hai ki agar null value aayi hai to uska safty checkk kar de . Kyonki null ke wajah se ho sakta hai kuch program run na kare ya koi aur problem aa jaaye
// This Null Coalescing operator is only created to handle undefined and null values
// Some more example
// let val1;
// val1 = undefined ?? 15
// console.log(val1);



//some more example
// let val1;
// val1 = null ?? 10 ?? 20
// console.log(val1);







//One more small operator 
// Ternary Operatr and Null Coalescing operator both are different
 // ternary operator
 //syntax of Ternary Operato ->         condition ? true : false


 // one exampel of ternary operator
 const iceTeaPrice = 100
 iceTeaPrice >= 80 ? console.log("Greater Than 80") : console.log("Less than 80")
