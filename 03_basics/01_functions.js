//syntax of the Function

// function sayMyName(){
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("R");
//     console.log("I");
//     console.log("E");
//     console.log("R");
// }
// sayMyName // this is reference of the function
// sayMyName()  // this is the execution of the function

//******************************************************************** */

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, null);
// addTwoNumbers(3,"a");
// addTwoNumbers(3,"4");
// addTwoNumbers(3,4);

// we can also store the function in a variable
// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// const result = addTwoNumbers(3,4);
// console.log("Result : ", result)


// function addTwoNumbers(number1, number2){
//     let result = number1 + number2;
//     return result;
// }

// const result = addTwoNumbers(3,4);
// console.log("Result :", result)


//one more interesting thing
// function addTwoNumbers(number1, number2){
//     return number1 + number2;
// }

// const result = addTwoNumbers(3,4);
// console.log("Result :", result);


// Some more to leearn

// function loginUserMessage(username){
//     return `${username} just loggedIn`
// }
// console.log(loginUserMessage("Nandini"));


//// what happens when  we pass empty string,  then also it's fine like this
// function loginUserMessage(username){
//     return `${username} just loggedIn`
// }
//console.log(loginUserMessage(""));


// // Interview Question .)when we called this method and did not passed any value
// function loginUserMessage(username){
//     return `${username} just loggedIn`
// }
// console.log(loginUserMessage()); // important for interview 

// to deal with this we do like this
// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please Enter a username");
//         return;
//     }
//     return `${username} just loggedIn`
// }
// console.log(loginUserMessage()); // important for interview 

//Another way of doing this is 
//sometimes in javascript it is assumed that the null and undefined is considered is false
// function loginUserMessage(username){
//     if(!username){
//         console.log("Please Enter a username");
//         return;
//     }
//     return `${username} just loggedIn`
// }
// console.log(loginUserMessage());

//If we dont want want to create these types of situation of not passing any value in function we can give default values in parameter like
function loginUserMessage(username = "Sam"){ // since we are not passinng any value in function call we are defining the default value here itself , if we will pass something in fucntion call then this defualt value will be overridden otherwise this default value will be considered
    if(!username){
        console.log("Please Enter a username");
        return;
    }
    return `${username} just loggedIn`
}
console.log(loginUserMessage());



