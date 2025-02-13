/*let score = "33"

    console.log(typeof score);
    console.log(typeof(score));

    let valueInNumber = Number(score)  //Now it is guaranteed that the score is converted from string to Number
    console.log(typeof valueInNumber);
*/

// Note: Don't rely on Number data type

//Notes:
//1.) Number is converted srom string "33" , it gets converted successfully
//2.)"33abs"  when coverting from this to number it gives NaN
//3.) true is convrted -> 1 , false is converted -> 0;

/*
    let isLoggedIn = 1
    let booleanIsLoggedIn = Boolean(isLoggedIn);
    console.log(booleanIsLoggedIn);
*/
//Notes:
// 1 => true;
// 0 => false;
// "" => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(typeof stringNumber);
