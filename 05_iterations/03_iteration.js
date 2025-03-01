//for of and for in loops are Array focused loops

//for of
    // const arr = [1, 2, 3, 4, 5]
    // for(const num of arr) {
    //     console.log(num);
    // }

    //we can also use this loop in strings
    // const greetings = "Hello World"
    // for(const greet of greetings) {
    //     console.log(`Each char is ${greet}`)
    // }

    
    //Maps in Javascript
    // const map = new Map() // Map apne aap mein ek Object hai
    // map.set('IN', "India")
    // map.set('USA', "United States of America")
    // map.set('Fr', "France")

    // console.log(map);
    //Note : Maps are known for Unique values, and the order in which we insert the element it is maintained

//How to use loop inmap

//for of loop
// const map = new Map() // Map apne aap mein ek Object hai
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// for(const key of map){
//     console.log(key);
// }
//If we want to destructure the array that means key aur value  ko alag alag  hold karna hai
// for(const [key, value] of map){ //after using these squres here we can hold key and pair seperately
//     console.log(key, ':-', value);
// }


    //can we apply this for of loop in objects, lets find out
    // const myObject = {
    //     'Game1' : 'NFS',
    //     'Game2' : 'Spiderman'
    // }
    // for(const [key, value] of myObject){
    //     console.log(key, ':-', value);
    // }
    //In this way the object is not iterateable

