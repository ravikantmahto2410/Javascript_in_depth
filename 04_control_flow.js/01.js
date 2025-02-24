//control flow

//If 

// if(condition){// for execution of code inside this Scope the condition has to be true // if the condition comes false then iss condition ke ander hum nhi jaayenge
    
// }

//example
// if(true){ /// if the condition is true then the codes inside this scope is executed .i.e the code between (10,14); will be executed



// }
// if(false){/// if the condition is false then the codes inside this scope will not be  executed .i.e the code between (15,20); will be not executed




// }



//how this true or false is evaluated
//for example
// const isUserloggedin = true;

// if(isUserloggedin){

// }

//Comparisons ooperator
// < , > , <= , >= ,==, != , !==
// '=== ' this also checks the type 

//example -01  for ==
// if(2 == '2'){
//     console.log("Executed");
// }


//example -02 for ===   (=== also checks the data type )
// if(2 === 2){
//     console.log("Executed")
// }




//some more examples
// const isUserloggedin = true;
// const temperature = 41
//example-a
// if(temperature < 50){
//     console.log(" less than 50 ");
// }
// console.log("temperature is greater than 50");

//example-b
// if(temperature === 40){
//     console.log("less than 50");
// }else{
//     console.log("temperature is greater than 50")
// }



// some more interesting thing
// const score = 200
// if(score > 100){
//     const power = "fly"
//     console.log(`user Power : ${power}`)
// }
   // till here it will run fine

   // now the problem starts
    // const score = 200
    // if(score > 100){
    //     const power = "fly"
    //     console.log(`user Power : ${power}`)
    // }
    // console.log(`user Power : ${power}`)




//Short Hand Notation
// const balance = 1000

// if (balance > 500) console.log("test") // this is implicit scope this executes in only one line

// if(balance > 500) console.log("test1"), console.log("test2"); // Note : iss line mein jo code likha hua hai  iss tarah se code nhi likhna hai 






//////////////Sometimes we have to check multiple conditions  //////////
// basics of multiple conditions
// const balance = 1000
// if (balance < 500) {
//     console.log("less than 500");
// } else if ( balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log(" less than 900");
// } else{
//     console.log( " less than 1200")
// }




//now some more in multiple conditions


    // const userLoggedIn = true;
    // const debitCard = true;
    // //example-01
    // // if(codition && debitCard) { // here both condition has to be true to execute the code inside this if block
    // //     console.log(" Allow to buy course")
    // // }
    // //example-02
    // if(codition && debitCard && 2 == 2) { // here both condition has to be true to execute the code inside this if block
    //     console.log(" Allow to buy course")
    // }


    const userLoggedIn = true;
    const debitCard = true;
    const loggedInFromGoogle = false;
    const loggedInFromEmail = true;
    if(userLoggedIn && debitCard && 2 == 3){
        console.log("Allow to buy Course");
    }
    if(loggedInFromGoogle || loggedInFromEmail) {
        console.log("User logged in");
    }


//there are some other format also for applying these . To learn more go to next file that is switch.js


    


