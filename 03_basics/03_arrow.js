// const user = {
//     username: "nandini",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`Hey ${this.username} , welcome to website`); // when we are referring to the current context we use 'this' keyword . 'this' keyword makes current context
//     }


// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// //context means kiske baare mein baat ho rhi hai



// const user = {
//     username: "nandini",
//     price: 999,

//     welcomeMessage: function(){
//         console.log(`Hey ${this.username} , welcome to website`); // when we are referring to the current context we use 'this' keyword . 'this' keyword makes current context
//         console.log(this)
//     }

// }
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()




const user = {
    username: "nandini",
    price: 999,

    welcomeMessage: function(){
        console.log(`Hey ${this.username} , welcome to website`); // when we are referring to the current context we use 'this' keyword . 'this' keyword makes current context
        console.log(this)
    }

}
// console.log(this); // the output is getting empty {} braces  beacuse we are at node environment , and whenever we are at node environment 'this' keyword refers to a empty object, beacause at present there is no context in global


//Interview question; Browser ke ander jab bhi engine runu karta hai to sabse jayyada jo global object hai wo window object hai



// now we are going to start Arrow Function

// function car(){
//     console.log(this)
// }
// car();



// function car(){
//     let username = "Kolder"
//     console.log(this.username);
// }
// car();
//conclusion : 'this' keyword was working fine on only object but is not working inside the function






// Some more ways of declaring functions especially by using arrow function

// const customer = function(){
//     let username = "Anand"
//     console.log(this.username)
// }
// customer()


// Declaring the arrowfunction
// const customer = () => { 
//     let username = "Anand"
//     console.log(this.username);
// }
// customer()


// const customer = () => { 
//     let username = "Anand"
//     console.log(this);
// }

// customer()




// Arrow function hota kya hai
// basic syntax
//() => {}

// this arrow function can be hold in a name
// const addTwo = (num1, num2) => {  // here num 1 and num 2 are parameters
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));

//Basic Arrow function syntax
// const addTwo = (num1, num2) => {  // here num 1 and num 2 are parameters
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));



//Another way of using arrow function  , which is known as implicit return
// const addTwo = (num1, num2) => num1 + num2

// console.log(addTwo(3, 4))


//less confusing
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4))



//Important points to remember 
//Note-01 Curly parenthesis mein likha to 'return' keyword likhna  padega , for example
// const addTwo = (num1, num2) => {  // here num 1 and num 2 are parameters
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));


//Note-02 , if () parenthesis mein likha to 'return' keyword nhi likhna padega , example
// const addTwo = (num1, num2) => ( num1 + num2 )
// console.log(addTwo(3, 4))



//explicit return means when we use 'return' keyword




// benefits of using parenthesis 
// the benefits of using parenthesis comes into picture when we return the object

// scenario 1 : when we dont use parenthesis :-
// const addTwo = (num1, num2) => {username: "Doreamon"}
// console.log(addTwo(3, 4)); // this will give the output as undefined // because in this way we can't return an object

//scenario 2 : when we use parenthesis to return the object
const addTwo = (num1, num2) => ({username: "Kriti"})  // object ko return karneke liye () parenthesis mein wrap karna hi padega
console.log(addTwo(3,4)); // this will return the object  


// this arrow function also works in loops , her's a small example
// const myArray = [2, 5, 3, 7, 8]

// way -01 : 
// myArray.forEach(function () {} ) // this is also correct syntax

//way-02:
// myArray.forEach(() => {}) // this is also written

//way-03:
// myArray.forEach(() => ()) // this is also written









